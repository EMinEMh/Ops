from django.contrib import auth
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.views import View


class Index(LoginRequiredMixin, View):
    login_url = '/login/'

    def get(self, request, *args, **kwargs):
        return render(request, 'base2.html', context={'user': request.user})


def login(request):
    if request.method == 'GET':
        if request.session.get('username') is not None:
            return HttpResponseRedirect("/", {"user": request.user})
        else:
            return render(request, 'login2.html')

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = auth.authenticate(username=username,password=password)

        if user and user.is_active:
            auth.login(request, user)
            request.session['username'] = username
            print('ok')
            print(request.user)
            return HttpResponseRedirect("/", {"user": request.user})
        else:
            return render(request, 'login.html', {"login_error_info": "用户名或者密码错误", "username": username}, )
            # return render(request, 'login2.html')


def logout(request):
    auth.logout(request)
    return HttpResponseRedirect('/login')