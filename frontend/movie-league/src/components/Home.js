import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/movies/')
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
            });
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to Movie Fantasy League</h1>
            <p style={styles.description}>Create your own league, pick movies, and compete with friends!</p>
            <div style={styles.features}>
                <div style={styles.feature}>
                    <h2>Create Leagues</h2>
                    <p>Start your own movie league and invite friends to join.</p>
                </div>
                <div style={styles.feature}>
                    <h2>Pick Movies</h2>
                    <p>Choose from upcoming releases to build your movie portfolio.</p>
                </div>
                <div style={styles.feature}>
                    <h2>Compete</h2>
                    <p>Earn points based on box office performance and critic ratings.</p>
                </div>
            </div>
            <Link to="/league" style={styles.button}>View Sample League</Link>
            <div style={styles.movieContainer}>
                {movies.map(movie => (
                    <MovieCard key={movie.MovieId} movie={movie} />
                ))}
            </div>
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
        fontSize: '2.5rem',
        color: '#2c3e50',
    },
    description: {
        fontSize: '1.2rem',
        color: '#34495e',
        marginBottom: '2rem',
    },
    features: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '2rem',
    },
    feature: {
        flex: '1',
        padding: '1rem',
        backgroundColor: '#ecf0f1',
        borderRadius: '8px',
        margin: '0 1rem',
    },
    button: {
        display: 'inline-block',
        padding: '0.8rem 1.5rem',
        backgroundColor: '#3498db',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
    },
    movieContainer: {
        display: 'flex',
        overflowX: 'auto',
        padding: '1rem 0',
        justifyContent: 'center',
    },
};

export default Home;