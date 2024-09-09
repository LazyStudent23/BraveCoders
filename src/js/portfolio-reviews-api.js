<<<<<<< HEAD
import axios from 'axios';

export const getReviews = async () => {
  return await axios.get('https://portfolio-js.b.goit.study/api/reviews');
=======
export const fetchReviews = async () => {
  const BaseUrl = 'https://portfolio-js.b.goit.study/api/reviews';

  return await fetch(`${BaseUrl}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
>>>>>>> 606914f (rebase from main 2)
};
