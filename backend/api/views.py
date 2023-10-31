from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Category, Product
from .serializers import *

# Create your views here.


class CategoriesAPIView(ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class ProductAPIView(ListAPIView):
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        queryset = Product.objects.all()
        category = self.request.query_params.get('category')
        if category is not None:
            queryset = queryset.filter(category=category)
        return queryset

@api_view()
def company_profile(request):
    profile = CompanyProfile.get_solo()
    
    return Response({
        'profile': ProfileSerializer(profile).data
    })
