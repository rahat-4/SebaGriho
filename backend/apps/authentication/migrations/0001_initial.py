# Generated by Django 5.1.2 on 2024-11-05 11:00

import apps.authentication.utils
import autoslug.fields
import django.utils.timezone
import phonenumber_field.modelfields
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('uid', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('slug', autoslug.fields.AutoSlugField(editable=False, populate_from=apps.authentication.utils.get_user_slug, unique=True)),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='email address')),
                ('phone', phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, region=None)),
                ('secondary_phone', phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, region=None)),
                ('secondary_email', models.EmailField(blank=True, max_length=254)),
                ('first_name', models.CharField(blank=True, max_length=255, null=True)),
                ('last_name', models.CharField(blank=True, max_length=255, null=True)),
                ('nid', models.CharField(blank=True, max_length=20)),
                ('avatar', models.ImageField(blank=True, upload_to=apps.authentication.utils.get_user_media_path_prefix, verbose_name='Avatar')),
                ('gender', models.CharField(blank=True, choices=[('FEMALE', 'Female'), ('MALE', 'Male'), ('OTHER', 'Other')], default='MALE', max_length=20)),
                ('blood_group', models.CharField(blank=True, choices=[('A+', 'A Positive'), ('A-', 'A Negative'), ('B+', 'B Positive'), ('B-', 'B Negative'), ('AB+', 'Ab Positive'), ('AB-', 'Ab Negative'), ('O+', 'O Positive'), ('O-', 'O Negative')], max_length=5)),
                ('date_of_birth', models.DateField(blank=True, null=True)),
                ('height', models.FloatField(blank=True, null=True)),
                ('weight', models.IntegerField(blank=True, null=True)),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now)),
                ('last_login', models.DateTimeField(blank=True, null=True)),
                ('status', models.CharField(choices=[('DRAFT', 'Draft'), ('ACTIVE', 'Active'), ('PAUSED', 'Paused'), ('REMOVED', 'Removed')], default='ACTIVE', max_length=10)),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
