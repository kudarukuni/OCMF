import axios from 'axios';

export const getLatestMovies = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response: { genres: [{ id: number; name: string }] } =
        await axios.get(
          `https://api.themoviedb.org/3/movie/latest?api_key=707bd4b8b3d2d5833e324e5e0ef49eb2&language=en-US`
        );
      console.log('response - ', response);
      resolve(response);
    } catch (error: any) {
      reject(error);
    }
  });
};
