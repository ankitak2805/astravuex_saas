from django.shortcuts import render
from .models import BlogPost

def blog_list(request):
    posts = BlogPost.objects.filter(published=True)
    return render(request, 'blog/blog_list.html', {'posts': posts})

def blog_detail(request, slug):
    post = BlogPost.objects.get(slug=slug, published=True)
    return render(request, 'blog/blog_detail.html', {'post': post})
