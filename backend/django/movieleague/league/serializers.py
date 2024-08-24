from rest_framework import serializers
from .models import Movie, User, League, UserMovieMap


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ['MovieId', 'Title', 'Director', 'BoxOfficeEarnings', 'PosterUrl']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['UserId', 'username', 'email']


class UserMovieMapSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    movie = MovieSerializer()
    class Meta:
        model = UserMovieMap
        fields = ['user', 'movie']

class LeagueSerializer(serializers.ModelSerializer):
    users = UserSerializer(many=True)
    movies = MovieSerializer(many=True)
    user_movie_maps = UserMovieMapSerializer(many=True, source='usermoviemap_set')
    class Meta:
        model = League
        fields = ['LeagueID', 'LeagueName', 'users', 'movies', 'user_movie_maps']