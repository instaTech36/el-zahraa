from rest_framework import serializers
from .models import Category, Product, ProductImage, ApplicationImage, CompanyProfile, CompanyImage, TeamMember


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name_en', 'name_ar', 'description_en',
                  'description_ar', 'use_en', 'use_ar', 'image1', 'image2',)
        # ('name', 'description', 'use', 'image1', 'image2',)


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ('image',)


class ApplicationImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationImage
        fields = ('image',)


class ProductSerializer(serializers.ModelSerializer):
    prod_images = ProductImageSerializer(many=True)
    app_images = ApplicationImageSerializer(many=True)
    category_name = serializers.CharField(source='category.name')

    class Meta:
        model = Product
        fields = ('id', 'name_en', 'name_ar', 'category_name', 'description_en', 'description_ar', 'features_en', 'features_ar',
                  'applications_en', 'applications_ar', 'prod_images', 'app_images')


class CompanyImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyImage
        fields = ('image',)


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = ('name_en', 'name_ar', 'title_en', 'title_ar', 'image',)


class ProfileSerializer(serializers.ModelSerializer):
    images = CompanyImageSerializer(many=True)
    team = MemberSerializer(many=True)

    class Meta:
        model = CompanyProfile
        fields = ('title_en', 'title_ar', 'profile_en', 'profile_ar',
                  'description_about_en', 'description_about_ar', 'images', 
                  'team', "facebook", "gmail", "whatsapp", "chat_me", "linkedin", "pdf")
