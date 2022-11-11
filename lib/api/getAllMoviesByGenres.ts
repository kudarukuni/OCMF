import axios from 'axios';
 
const data = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

const getMovieGenres = async () => {
  // https://api.themoviedb.org/3/genre/movie/list?api_key=707bd4b8b3d2d5833e324e5e0ef49eb2&language=en-US
  try {
    const response: { genres: [{ id: number; name: string }] } =
      await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
      );
    return response.genres;
  } catch (error: any) {
    alert(error.message);
  }
};

const getListByGenres = async (genreId: number) => {
  try {
  } catch (error: any) {
    alert(error.message);
  }
};
