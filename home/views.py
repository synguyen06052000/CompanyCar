from django.shortcuts import render,redirect
from django.http import HttpResponse
from home.forms import LoginForm
# Create your views here.

def view(request):
    return render(request,"pages/home.html")
def login(request):
    if request.method == "POST":  
        form = LoginForm(request.POST)
        if form.is_valid():  
            try:  
                form.save()  
                return redirect('/manager') 
            except:  
                pass  
    else:  
        return render(request,"pages/login.html")
def manager(request):
    return render(request,"pages/manager.html")
        

    
