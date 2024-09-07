import { fetchReviews } from './portfolio-reviews-api.js';

const reviewCardCover = document.querySelector('.review-card-cover');

const createReviewTemplate = reviewInfo => {
  return `<div class="review-section-card">
      <img
        src="${reviewInfo.avatar_url}"
        class="review-card-avatar"
        alt="reviewer-avatar"
        width="48px"
        height="48px"
      />
      <p class="reviewer-name">${reviewInfo.author}</p>
      <p class="review-content">${reviewInfo.review}</p>
    </div>`;
};

const renderReviewTemplate = () => {
  fetchReviews().then(data => {
    const reviewTemplate = data
      .map(reviewItem => {
        return createReviewTemplate(reviewItem);
      })
      .join('');
    reviewCardCover.insertAdjacentHTML('beforeend', reviewTemplate);
  });
  console.log('hello');
};

renderReviewTemplate();
