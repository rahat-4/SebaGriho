from django.db import models
from django.utils.text import slugify
from apps.authentication.models import User
from common.models import BaseModelWithUid
from .choices import (
    AffiliationStatus,
    DepartmentType,
    DoctorStatus,
    ScheduleStatus,
    ShiftStatus,
    DayStatus,
)


class LanguageSpoken(BaseModelWithUid):
    language = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.language


class Department(BaseModelWithUid):
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True, null=True)
    parent = models.ForeignKey(
        "self",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="sub_departments",
    )
    department_type = models.CharField(
        max_length=20, choices=DepartmentType.choices, default=DepartmentType.MEDICAL
    )

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} (UID: {self.uid})"


class Specialty(BaseModelWithUid):
    name = models.CharField(max_length=255)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"{self.name} (UID: {self.uid})"
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["name", "department"], name="unique_specialty_per_department"
            )
        ]



class Achievement(BaseModelWithUid):
    name = models.CharField(max_length=255)
    source = models.CharField(max_length=600)
    year = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} ({self.year})"


class Degree(BaseModelWithUid):
    name = models.CharField(max_length=300)
    institute = models.CharField(max_length=300, blank=True)
    result = models.CharField(max_length=255, blank=True)
    passing_year = models.PositiveIntegerField(null=True, blank=True)
    country = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.name} from {self.institute} ({self.passing_year})"


class Affiliation(BaseModelWithUid):
    title = models.CharField(max_length=250)
    hospital_name = models.CharField(max_length=250)
    status = models.CharField(
        max_length=20,
        choices=AffiliationStatus.choices,
        db_index=True,
        default=AffiliationStatus.CURRENT,
    )

    def __str__(self):
        return f"{self.title} at {self.hospital_name} ({self.get_status_display()})"


class Doctor(BaseModelWithUid):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="doctor_profile")
    registration_number = models.CharField(max_length=255, unique=True)
    experience = models.PositiveIntegerField()
    about = models.TextField(blank=True)
    appointment_fee = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    follow_up_fee = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    consultation_fee = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    check_up_fee = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    degrees = models.ManyToManyField(Degree, related_name="doctor_degrees")
    departments = models.ManyToManyField(Department, related_name="doctor_departments")
    specialties = models.ManyToManyField(Specialty, related_name="doctor_specialties")
    achievements = models.ManyToManyField(
        Achievement, blank=True, related_name="docto_achievements"
    )
    affiliations = models.ManyToManyField(
        Affiliation, related_name="doctor_affiliations"
    )
    languages_spoken = models.ManyToManyField(
        LanguageSpoken, related_name="doctor_languages_spoken"
    )
    status = models.CharField(
        max_length=20,
        choices=DoctorStatus.choices,
        db_index=True,
        default=DoctorStatus.ACTIVE,
    )

    def __str__(self):
        return f"Dr. {self.user.get_full_name()} (UID: {self.uid})"


class Schedule(BaseModelWithUid):
    doctor = models.ForeignKey(
        Doctor, on_delete=models.CASCADE, related_name="schedules"
    )
    day = models.CharField(max_length=20, choices=DayStatus.choices)
    shift = models.CharField(max_length=20, choices=ShiftStatus.choices)
    start_time = models.TimeField()
    end_time = models.TimeField()
    status = models.CharField(
        max_length=20, choices=ScheduleStatus.choices, default=ScheduleStatus.ACTIVE
    )

    def __str__(self):
        return f"Dr. {self.doctor.user.get_full_name()} - {self.get_day_display()} {self.get_shift_display()}"

    class Meta:
        unique_together = ("doctor", "day", "shift")
