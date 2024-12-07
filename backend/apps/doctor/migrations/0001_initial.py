# Generated by Django 5.1.2 on 2024-11-13 13:40

import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Achievement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=255)),
                ('source', models.CharField(max_length=600)),
                ('year', models.PositiveIntegerField(blank=True, null=True)),
            ],
            options={
                'ordering': ['-created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Affiliation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=250)),
                ('hospital_name', models.CharField(max_length=250)),
                ('status', models.CharField(choices=[('CURRENT', 'Current'), ('PAST', 'Past')], db_index=True, default='CURRENT', max_length=20)),
            ],
            options={
                'ordering': ['-created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Degree',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=300)),
                ('institute', models.CharField(blank=True, max_length=300)),
                ('result', models.CharField(blank=True, max_length=255)),
                ('passing_year', models.PositiveIntegerField(blank=True, null=True)),
                ('country', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'ordering': ['-created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='LanguageSpoken',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('language', models.CharField(max_length=50, unique=True)),
            ],
            options={
                'ordering': ['-created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, unique=True)),
                ('name', models.CharField(max_length=255, unique=True)),
                ('slug', models.SlugField(blank=True, max_length=255, unique=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='sub_departments', to='doctor.department')),
            ],
            options={
                'ordering': ['-created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('registration_number', models.CharField(max_length=255, unique=True)),
                ('about', models.TextField(blank=True)),
                ('experience', models.PositiveIntegerField()),
                ('appointment_fee', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('consultation_fee', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('follow_up_fee', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('check_up_fee', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('status', models.CharField(choices=[('INVITED', 'Invited'), ('PENDING', 'Pending'), ('ACTIVE', 'Active'), ('REJECTED', 'Rejected'), ('REMOVED', 'Removed')], db_index=True, default='ACTIVE', max_length=20)),
                ('achievements', models.ManyToManyField(blank=True, related_name='doctors', to='doctor.achievement')),
                ('affiliations', models.ManyToManyField(blank=True, related_name='doctors', to='doctor.affiliation')),
                ('degrees', models.ManyToManyField(blank=True, related_name='doctors', to='doctor.degree')),
                ('departments', models.ManyToManyField(blank=True, related_name='doctors', to='doctor.department')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='doctor', to=settings.AUTH_USER_MODEL)),
                ('languages_spoken', models.ManyToManyField(blank=True, related_name='doctors', to='doctor.languagespoken')),
            ],
            options={
                'ordering': ['-created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='DoctorContact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('contact_type', models.CharField(max_length=50)),
                ('contact_value', models.CharField(max_length=255)),
                ('doctor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contacts', to='doctor.doctor')),
            ],
            options={
                'ordering': ['-created_at'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Specialty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=255)),
                ('department', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='doctor.department')),
            ],
            options={
                'ordering': ['-created_at'],
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='doctor',
            name='specialties',
            field=models.ManyToManyField(blank=True, related_name='doctors', to='doctor.specialty'),
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('day', models.CharField(choices=[('PENDING', 'Pending'), ('SATURDAY', 'Saturday'), ('SUNDAY', 'Sunday'), ('MONDAY', 'Monday'), ('TUESDAY', 'Tuesday'), ('WEDNESDAY', 'Wednesday'), ('THURSDAY', 'Thursday'), ('FRIDAY', 'Friday')], max_length=20)),
                ('shift', models.CharField(choices=[('PENDING', 'Pending'), ('MORNING', 'Morning'), ('EVENING', 'Evening')], max_length=20)),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('status', models.CharField(choices=[('ACTIVE', 'Active'), ('REMOVED', 'Removed')], default='ACTIVE', max_length=20)),
                ('doctor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='schedules', to='doctor.doctor')),
            ],
            options={
                'unique_together': {('doctor', 'day', 'shift')},
            },
        ),
    ]
