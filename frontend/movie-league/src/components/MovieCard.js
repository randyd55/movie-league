import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MovieCard = ({ movie }) => {
    return (
        <Card sx={{ width: 240, mb: 2 }}>
            <CardMedia
                component="img"
                height="356"
                image={movie.PosterUrl || 'https://via.placeholder.com/240x356.png?text=No+Poster'}
                alt={movie.Title}
                sx={{ objectFit: 'cover' }} // Ensures the image covers the entire area without distortion
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {movie.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Director: {movie.Director}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Box Office Earnings: ${parseFloat(movie.BoxOfficeEarnings).toLocaleString()}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MovieCard;