from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Movie, User, League
from .serializers import MovieSerializer, UserSerializer, LeagueSerializer

class MovieList(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

@api_view(['GET'])
def get_players_by_league(request, league_id):
    try:
        league = League.objects.get(LeagueID=league_id)
        players = league.users.all()
        serializer = UserSerializer(players, many=True)
        return Response(serializer.data)
    except League.DoesNotExist:
        return Response({"error": "League not found"}, status=404)

@api_view(['GET'])
def get_league_by_id(request, league_id):
    try:
        league = League.objects.get(LeagueID=league_id)
        serializer = LeagueSerializer(league)
        return Response(serializer.data)
    except League.DoesNotExist:
        return Response({"error": "League not found"}, status=404)

@api_view(['POST'])
def add_league(request):
    serializer = LeagueSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def add_players_to_league(request, league_id):
    try:
        league = League.objects.get(LeagueID=league_id)
        user_ids = request.data.get('user_ids', [])
        users = User.objects.filter(UserId__in=user_ids)
        league.users.add(*users)
        return Response({"message": "Players added successfully"}, status=200)
    except League.DoesNotExist:
        return Response({"error": "League not found"}, status=404)