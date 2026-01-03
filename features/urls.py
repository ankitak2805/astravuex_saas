from django.urls import path
from . import views

app_name = 'features'

urlpatterns = [
    path('', views.features_list, name='list'),
    path('asset-inspections/', views.asset_inspections, name='asset_inspections'),
    path('project-tracking/', views.project_tracking, name='project_tracking'),
    path('risk-management/', views.risk_management, name='risk_management'),
    path('routing/', views.routing, name='routing'),
]
