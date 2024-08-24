# Movie Fantasy League

Welcome to the Movie Fantasy League project! This application allows users to create movie leagues, pick movies, and compete based on box office performance. The project consists of a Django backend and a React frontend.

## Project Structure

- **Backend**: Django REST API
- **Frontend**: React.js application

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for the frontend)
- [Python](https://www.python.org/) (for the backend)
- [pip](https://pip.pypa.io/en/stable/) (Python package installer)
- [pipenv](https://pipenv.pypa.io/en/latest/) (optional, for managing Python dependencies)

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/randyd55/movie-league.git
   cd movie-league/backend/django/movieleague

2. **Install Dependencies, populate database and run**
    ```bash
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py populate_db
   python manage.py runserver


### Frontend Setup

1. **Install Dependencies and run**
  ```bash
   cd frontend/movie-league
   npm install
   npm start
```
2. **Navigate to http://localhost:3000 in your web browser**
