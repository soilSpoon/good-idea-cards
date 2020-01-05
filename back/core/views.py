from django.shortcuts import render
from .models import Post, Draft
from .serializer import postSerializer, draftSerializer
from rest_framework import viewsets, filters
import random

# Create your views here.


def isValidQueryParams(param):
    return param != '' and param is not None


def filter(request):
    qs = Post.objects.all()
    searchQuery = request.GET.get('search')

    if isValidQueryParams(searchQuery):
        qs = qs.filter(Q(author__icontains=searchQuery) | Q(
            content__icontains=searchQuery)).distinct()

    return qs


def pickRandom():
    return random.randrange(1, Post.objects.all().count() + 1)


class postsViewset(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = postSerializer

    def get_queryset(self):
        return Post.objects.all().filter(id=pickRandom())


class draftsViewset(viewsets.ModelViewSet):
    queryset = Draft.objects.all()
    serializer_class = draftSerializer


class searchViewset(viewsets.ModelViewSet):
    serializer_class = postSerializer

    def get_queryset():
        qs = filter(self.request)
        return qs
