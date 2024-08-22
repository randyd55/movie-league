from django.urls import path
from . import views

urlpatterns = [
    path('movies/', views.MovieList.as_view(), name='movie-list'),
    path('leagues/<int:league_id>/players/', views.get_players_by_league, name='players-by-league'),
    path('leagues/add/', views.add_league, name='add-league'),
    path('leagues/<int:league_id>/add-players/', views.add_players_to_league, name='add-players-to-league'),
]