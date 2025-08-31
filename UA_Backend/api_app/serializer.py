from rest_framework import serializers
from .models import Enquire_Form 

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquire_Form
        fields = '__all__'

    def validate_name(self, value):
        if not value.strip():
            raise serializers.ValidationError("Name cannot be empty or whitespace.")
        return value
    
    def validate_phone_number(self, value):
        if not value.isnumeric(): # Assuming phone_number is a string field
            raise serializers.ValidationError("Phone number must contain only digits.")
        
        if Enquire_Form.objects.filter(phone_number = value).exists():
            raise serializers.ValidationError("Phone number already exists.")
        
        if len(value) != 10:
            raise serializers.ValidationError("Phone number must be exactly 10 digits.")
        return value
    
    def validate_email(self,value):

        if '@' not in value:
            raise serializers.ValidationError("Email must contain '@' symbol.")
        
        if Enquire_Form.objects.filter(email = value).exists():
            raise serializers.ValidationError("Email Already Exixts.")
        return value
    
    def validate_course(self, value):
        allowed_courses = ["Python", "Java", "Web Development", "Data Science", "AI / ML", "UI/UX",
            "Data Analytics","Frameworks", "Cloud Computing", "SAP Technologies","DevOps","CCNA",
            "Software Testing","Spoken English" ]
        if value not in allowed_courses:
            raise serializers.ValidationError(f"Course must be one of {allowed_courses}.")
        return value
    
    def validate_mode(self, value):
        value = value.lower()
        allowed_modes = ['online', 'offline']
        if value not in allowed_modes:
            raise serializers.ValidationError(f"Mode must be one of {allowed_modes}.")
        return value