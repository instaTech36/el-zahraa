from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoriesAPIView.as_view(), name='categories'),
    path('products/', views.ProductAPIView.as_view(), name='products'),
    path('', views.company_profile, name='profile')
]
