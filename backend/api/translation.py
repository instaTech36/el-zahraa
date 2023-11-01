from modeltranslation.translator import translator, TranslationOptions
from .models import Category, Product, CompanyProfile, TeamMember


class CategoryTranslation(TranslationOptions):
    fields = ('name', 'description', 'use',)

class ProductTranslation(TranslationOptions):
    fields = ('name', 'description', 'features', 'applications', 'description_full')

class ProfileTranslation(TranslationOptions):
    fields = ('title', 'profile', 'description_about')

class MemberTranslation(TranslationOptions):
    fields = ('name', 'title' )

translator.register(Category, CategoryTranslation)
translator.register(Product, ProductTranslation)
translator.register(CompanyProfile, ProfileTranslation)
translator.register(TeamMember, MemberTranslation)
