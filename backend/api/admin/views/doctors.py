from rest_framework.generics import ListCreateAPIView
from apps.doctor.models import Doctor
from ..serializers.doctors import AdminDoctorListSerializer


class AdminDoctorList(ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = AdminDoctorListSerializer
