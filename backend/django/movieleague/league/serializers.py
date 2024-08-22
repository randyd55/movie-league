from rest_framework import serializers
from .models import Movie, User, League

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ['MovieId', 'Title', 'Director', 'BoxOfficeEarnings']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['UserId', 'username', 'email']

class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ['LeagueID', 'LeagueName']