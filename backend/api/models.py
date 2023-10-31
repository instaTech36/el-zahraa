from django.db import models
from solo.models import SingletonModel

# Create your models here.


class ContentFields(models.Model):
    name = models.CharField(max_length=255, unique=True, verbose_name='الاسم')
    description = models.TextField(verbose_name='الشرح')
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Category(ContentFields):
    use = models.TextField(blank=True, verbose_name='الاستخدام')
    image1 = models.ImageField(upload_to='categories/%Y-%m-%d')
    image2 = models.ImageField(upload_to='categories/%Y-%m-%d')

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Product(ContentFields):
    category = models.ForeignKey(
        Category, related_name='products', on_delete=models.CASCADE)
    features = models.TextField(blank=True, verbose_name='المزايا')
    applications = models.TextField(blank=True, verbose_name='التطبيقات')

    def __str__(self):
        return self.name


def product_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return "product_{0}/{1}".format(instance.product.name, filename)


class ProductImageField(models.Model):
    upload_to_var = product_directory_path
    image = models.ImageField(upload_to=upload_to_var)

    class Meta:
        abstract = True


class ProductImage(ProductImageField):
    product = models.ForeignKey(
        Product, related_name='prod_images', on_delete=models.CASCADE)

    def __str__(self):
        return f'Product image of: {self.product.name}'


class ApplicationImage(ProductImageField):
    product = models.ForeignKey(
        Product, related_name='app_images', on_delete=models.CASCADE)

    def __str__(self):
        return f'Application image of: {self.product.name}'

class CompanyProfile(SingletonModel):
    title = models.CharField(max_length=50, verbose_name='اسم الشركة')
    profile = models.TextField(verbose_name='عن الشركة')
    description_about = models.TextField(verbose_name='المزيد عن الشركة (يعرض في صفحة المزيد)', blank=True)

    def __str__(self):
        return f'بروفايل الشركة'

class CompanyImage(models.Model):
    company = models.ForeignKey(CompanyProfile, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='company-profile', verbose_name='صورة')

class TeamMember(models.Model):
    company = models.ForeignKey(CompanyProfile, related_name='team', on_delete=models.CASCADE)
    name = models.CharField(max_length=50, unique=True, verbose_name='اسم الشخص')
    title = models.CharField(max_length=50, verbose_name='الوظيفة')
    image = models.ImageField(upload_to='team', verbose_name='الصورة')