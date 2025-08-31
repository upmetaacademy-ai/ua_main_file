from django.urls import path, include
from . import views

urlpatterns = [
    path('contact/',views.enquiry_details,name='contact')
]