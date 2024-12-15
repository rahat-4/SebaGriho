from django.contrib.auth import get_user_model
from django.db import transaction
from rest_framework import serializers

from apps.doctor.models import (
    Achievement,
    Affiliation,
    Degree,
    Department,
    Doctor,
    Specialty,
    LanguageSpoken,
)

from common.serializers import (
    AchievementSlimSerializer,
    AffiliationSlimSerializer,
    DoctorSlimSerializer,
    DegreeSlimSerializer,
    DepartmentSlimSerializer,
    SpecialtySlimSerializer,
    LanguageSpokenSlimSerializer,
    UserSlimSerializer,
)

User = get_user_model()


class AdminDoctorListSerializer(serializers.ModelSerializer):
    user = UserSlimSerializer()
    degrees = DegreeSlimSerializer(many=True)
    specialties = SpecialtySlimSerializer(many=True)
    departments = DepartmentSlimSerializer(many=True)
    achievements = AchievementSlimSerializer(many=True)
    affiliations = AffiliationSlimSerializer(many=True)
    languages_spoken = LanguageSpokenSlimSerializer(many=True)

    class Meta:
        model = Doctor
        fields = [
            "user",
            "registration_number",
            "experience",
            "about",
            "appointment_fee",
            "consultation_fee",
            "follow_up_fee",
            "check_up_fee",
            "degrees",
            "specialties",
            "departments",
            "achievements",
            "affiliations",
            "languages_spoken",
            "status",
        ]

    def create(self, validated_data):
        # Use atomic transaction to ensure data integrity
        with transaction.atomic():
            # Extract nested data
            degrees_data = validated_data.pop("degrees")
            departments_data = validated_data.pop("departments")
            achievements_data = validated_data.pop("achievements", [])
            specialties_data = validated_data.pop("specialties")
            affiliations_data = validated_data.pop("affiliations")
            languages_spoken_data = validated_data.pop("languages_spoken")

            # Handle user creation
            user_data = validated_data.pop("user")
            user_data.pop("confirm_password")
            user = User.objects.create(**user_data)

            # Create Doctor instance
            doctor_instance = Doctor.objects.create(user=user, **validated_data)

            # Bulk create many-to-many relations
            departments = [Department.objects.get(data) for data in departments_data]
            specialty_instances = [Specialty.objects.get(data) for data in specialties_data]
            languages_spoken = [LanguageSpoken.objects.get(data) for data in languages_spoken_data]
            
            degrees = [Degree.objects.get_or_create(**data)[0] for data in degrees_data]
            achievements = [Achievement.objects.get_or_create(**data)[0] for data in achievements_data]
            affiliations = [Affiliation.objects.get_or_create(**data)[0] for data in affiliations_data]

            # Add many-to-many relations
            doctor_instance.degrees.add(*degrees)
            doctor_instance.departments.add(*departments)
            doctor_instance.specialties.add(*specialty_instances)
            doctor_instance.achievements.add(*achievements)
            doctor_instance.affiliations.add(*affiliations)
            doctor_instance.languages_spoken.add(*languages_spoken)

            return doctor_instance