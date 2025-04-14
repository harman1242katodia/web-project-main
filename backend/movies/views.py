from django.http import HttpResponse

def home(request):
    print(request)  # Just print the request object to avoid the warning
    return HttpResponse("Welcome to MovieFlix!")
