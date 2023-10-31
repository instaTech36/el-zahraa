from django.contrib import admin
from .models import Category, Product, ProductImage, ApplicationImage, CompanyProfile, CompanyImage, TeamMember
from modeltranslation.admin import TranslationAdmin


class ContentAdmin(TranslationAdmin):
    list_display = ['name', 'modified',]
    readonly_fields = ['created', 'modified']


class CategoryAdmin(ContentAdmin):
    pass

class ProductImageInline(admin.StackedInline):
    model = ProductImage
    extra = 3

class ApplicationImageInline(admin.StackedInline):
    model = ApplicationImage
    extra = 3

class ProductAdmin(ContentAdmin):
    inlines = [ProductImageInline, ApplicationImageInline]

class CompanyImageInline(admin.StackedInline):
    model = CompanyImage
    extra = 2

class TeamMemberInline(admin.StackedInline):
    fields = ('name_en', 'name_ar', 'title_en', 'title_ar', 'image')
    model = TeamMember
    extra = 1

class CompanyProfileAdmin(TranslationAdmin):
    list_display = ['title']
    inlines = [CompanyImageInline, TeamMemberInline]


admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(CompanyProfile, CompanyProfileAdmin)