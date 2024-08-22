from django.db import models

class Movie(models.Model):
    MovieId = models.AutoField(primary_key=True)
    Title = models.CharField(max_length=200)
    Director = models.CharField(max_length=100)
    BoxOfficeEarnings = models.DecimalField(max_digits=12, decimal_places=2)

class User(models.Model):
    UserId = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    email = models.EmailField()
    leagues = models.ManyToManyField('League', related_name='users')

class League(models.Model):
    LeagueID = models.AutoField(primary_key=True)
    LeagueName = models.CharField(max_length=100)
    movies = models.ManyToManyField(Movie, through='UserMovieMap')

class UserMovieMap(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    league = models.ForeignKey(League, on_delete=models.CASCADE)