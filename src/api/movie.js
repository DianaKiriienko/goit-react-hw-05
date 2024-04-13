import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDI1MDQ1NmQ5OWYzZjBjNmRiZDU0MTI3YzdhNDY5OCIsInN1YiI6IjY2MWEzNzQzNWZmMzRlMDE3YzU5NDU4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iQKZqEhDKzZq3ZjW1XUrJrauWqxsmMsymT8XOaN7tfA'; 

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day',
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(
            'https://api.themoviedb.org/3/search/movie',
            {
                params: {
                    query: query
                },
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
};


export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null; 
    }
};

export const fetchMovieCast = async (movieId) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits`,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data.cast;
    } catch (error) {
        console.error('Error fetching movie credits:', error);
        return [];
    }
};




export const fetchMovieReviews = async (movieId) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3//movie/${movieId}/reviews`,
            {
        
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data.results;
    } catch (error) {
          console.error('Error fetching movie reviews:', error);
        return [];
    }
};