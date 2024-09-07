export const fetchReviews = async () => {
  const BaseUrl = 'https://portfolio-js.b.goit.study/api/reviews';

  return await fetch(`${BaseUrl}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
