from pyexpat import model
from django.db import models  
class Employee(models.Model):  
    eid = models.CharField(max_length=20)  
    ename = models.CharField(max_length=100)  
    eemail = models.EmailField()  
    econtact = models.CharField(max_length=15) 
    epassword = models.CharField(max_length=20,default="null") 
    class Meta:  
        db_table = "employee"  