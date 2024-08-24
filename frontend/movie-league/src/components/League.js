import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'; // Import the MovieCard component

function League() {
    const [league, setLeague] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/leagues/1')
            .then(response => {
                setLeague(response.data);
            })
            .catch(error => {
                console.error('Error fetching league data:', error);
            });
    }, []);

    if (!league) return <div>Loading...</div>;

    // Group movies by user
    const userMoviesMap = league.user_movie_maps.reduce((acc, um) => {
        if (!acc[um.user.UserId]) {
            acc[um.user.UserId] = { user: um.user, movies: [] };
        }
        acc[um.user.UserId].movies.push(um.movie);
        return acc;
    }, {});

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{league.LeagueName}</h1>
            <h2 style={styles.subtitle}>Players and Their Movies:</h2>
            {Object.values(userMoviesMap).map(({ user, movies }) => (
                <div key={user.UserId} style={styles.userSection}>
                    <h3 style={styles.username}>{user.username}</h3>
                    <div style={styles.movieContainer}>
                        {movies.map(movie => (
                            <MovieCard key={movie.MovieId} movie={movie} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
    },
    title: {
        fontSize: '2rem',
        color: '#2c3e50',
        marginBottom: '1rem',
    },
    subtitle: {
        fontSize: '1.5rem',
        color: '#34495e',
        marginBottom: '1rem',
    },
    userSection: {
        marginBottom: '2rem',
        textAlign: 'left',
        padding: '1rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    },
    username: {
        fontSize: '1.5rem',
        color: '#2c3e50',
        marginBottom: '1rem',
    },
    movieContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
};

export default League;
