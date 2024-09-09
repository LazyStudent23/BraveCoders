<<<<<<< HEAD
import { getReviews } from './portfolio-reviews-api.js';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Navigation } from 'swiper/modules';

const reviewCardList = document.querySelector('.review-card-list');

const createReviewTemplate = reviewInfo => {
  return `<li class="swiper-slide review-section-card">
=======
import { fetchReviews } from './portfolio-reviews-api.js';

const reviewCardCover = document.querySelector('.review-card-cover');

const createReviewTemplate = reviewInfo => {
  return `<div class="review-section-card">
>>>>>>> 606914f (rebase from main 2)
      <img
        src="${reviewInfo.avatar_url}"
        class="review-card-avatar"
        alt="reviewer-avatar"
        width="48px"
        height="48px"
      />
      <p class="reviewer-name">${reviewInfo.author}</p>
      <p class="review-content">${reviewInfo.review}</p>
<<<<<<< HEAD
    </li>`;
};

const renderReviewTemplate = async () => {
  try {
    const response = await getReviews();
    const reviewsTemplate = response.data
=======
    </div>`;
};

const renderReviewTemplate = () => {
  fetchReviews().then(data => {
    const reviewTemplate = data
>>>>>>> 606914f (rebase from main 2)
      .map(reviewItem => {
        return createReviewTemplate(reviewItem);
      })
      .join('');
<<<<<<< HEAD

    reviewCardList.insertAdjacentHTML('afterbegin', reviewsTemplate);
    swiper.update();
  } catch (error) {
    // iziToast.error({
    //   title: 'Error',
    //   message:
    //     'Sorry,there are no images matching your search query. Please try again!',
    //   position: 'topRight',
    // });
  }
};

renderReviewTemplate();

const swiper = new Swiper('.review-swiper', {
  speed: 400,
  spaceBetween: 200,
  modules: [Navigation, Keyboard],
  // slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
=======
    reviewCardCover.insertAdjacentHTML('beforeend', reviewTemplate);
  });
};

renderReviewTemplate();
>>>>>>> 606914f (rebase from main 2)
