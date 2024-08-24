from django.core.management.base import BaseCommand
from django.db import transaction
from league.models import League, User, Movie, UserMovieMap

class Command(BaseCommand):
    help = 'Populates the database with sample data'

    @transaction.atomic
    def handle(self, *args, **kwargs):
        League.objects.all().delete()
        User.objects.all().delete()
        Movie.objects.all().delete()
        UserMovieMap.objects.all().delete()

        league, created = League.objects.get_or_create(LeagueID=1, LeagueName="Sample Fantasy League")
        if created:
            self.stdout.write(self.style.SUCCESS(f'Created league: {"Sample Fantasy League"}'))
        else:
            self.stdout.write(f'League already exists: {"Sample Fantasy League"}')

        # Create or get users
        users_data = [
            {"username": "film_luvr222", "email": "player1@example.com"},
            {"username": "bigbuck$33", "email": "player2@example.com"},
            {"username": "garfield_fan99", "email": "player3@example.com"},
        ]

        users = []
        for user_data in users_data:
            user, created = User.objects.get_or_create(
                username=user_data['username'],
                defaults={'email': user_data['email']}
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created user: {user.username}'))
            else:
                self.stdout.write(f'User already exists: {user.username}')
            users.append(user)

        league.users.set(users)
        league.save()
        self.stdout.write(f'Added users to league: {league.LeagueName}')

        movies_data = [
            {"Title": "Twisters", "Director": "Lee Isaac Chung", "BoxOfficeEarnings": 241699420, "PosterUrl": "https://upload.wikimedia.org/wikipedia/en/2/24/Twisters_Official_US_Theatrical_Poster.jpg"},
            {"Title": "Furiosa: A Mad Max Saga", "Director": "George Miller", "BoxOfficeEarnings": 67475791, "PosterUrl": "https://upload.wikimedia.org/wikipedia/en/3/34/Furiosa_A_Mad_Max_Saga.jpg" },
            {"Title": "The Garfield Movie", "Director": "Mark Dindal", "BoxOfficeEarnings": 91906310, "PosterUrl": "https://upload.wikimedia.org/wikipedia/en/9/91/The_Garfield_Movie_2024_poster.jpg"},
        ]
        movies = []
        for movie_data in movies_data:
            movie, created = Movie.objects.get_or_create(
                Title=movie_data['Title'],
                defaults={
                    'Director': movie_data['Director'],
                    'BoxOfficeEarnings': movie_data['BoxOfficeEarnings'],
                    'PosterUrl': movie_data['PosterUrl']
                }
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created movie: {movie.Title}'))
            else:
                self.stdout.write(f'Movie already exists: {movie.Title}')
            movies.append(movie)

        count = 0
        for user in users:
            UserMovieMap.objects.get_or_create(
                user=user,
                movie=movies[count],
                league=league
            )
            self.stdout.write(f'Mapped movie "{movies[count].Title}" to user "{user.username}" in league "{league.LeagueName}"')
            count += 1
        self.stdout.write(self.style.SUCCESS('Database population completed'))
