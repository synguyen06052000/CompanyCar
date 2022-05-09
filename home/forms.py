from django import forms  
from employee.models import Employee  
class LoginForm(forms.ModelForm):  
    class Meta:  
        model = Employee  
        fields = "__all__"  
    