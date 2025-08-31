from django.db import models
from django.utils import timezone

# Create your models here.

class Enquire_Form(models.Model):
    name = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=12)
    email = models.CharField(max_length=20)
    course = models.CharField(max_length=20)
    mode = models.CharField(max_length=7)
    time_stamp = models.DateTimeField(default=timezone.now)

    class Meta:
        db_table = 'ua_enquiry_table'

    def __str__(self):
        return self.name