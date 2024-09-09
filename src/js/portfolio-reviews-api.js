import axios from 'axios';

export const getReviews = async () => {
  return await axios.get('https://portfolio-js.b.goit.study/api/reviews');
};
