import { getReviews } from './portfolio-reviews-api.js';

import iziToast from 'izitoast';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const reviewCardList = document.querySelector('.review-card-list');
const swipeButtonsArr = document.querySelectorAll('.review-slide-btn');
console.log(swipeButtonsArr);

const createErrorTemplateListEl = () => {
  return `<li class="swiper-slide review-section-card">
      <p class="not-found-content"> Not Found :(</p>
    </li>`;
};

const createReviewTemplate = reviewInfo => {
  return `<li class="swiper-slide review-section-card">
      <img
        src="${reviewInfo.avatar_url}"
        class="review-card-avatar"
        alt="reviewer-avatar"
        width="48px"
        height="48px"
      />
      <p class="reviewer-name">${reviewInfo.author}</p>
      <p class="review-content">${reviewInfo.review}</p>
    </li>`;
};

const renderReviewTemplate = async () => {
  try {
    const response = await getReviews();
    const reviewsTemplate = response.data
      .map(reviewItem => {
        return createReviewTemplate(reviewItem);
      })
      .join('');

    reviewCardList.insertAdjacentHTML('afterbegin', reviewsTemplate);
    const swiper = new Swiper('.review-swiper', {
      speed: 400,
      slidesPerView: 1,
      spaceBetween: 16,
      modules: [Navigation, Keyboard, Mousewheel],
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
      on: { keyPress: onMyKeyPress },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      keyboard: { enabled: true, onlyInViewport: true },
      mousewheel: {
        enabled: true,
      },
    });
    swiper.update();
  } catch (error) {
    swipeButtonsArr.forEach(element => {
      element.classList.add('visually-hidden');
    });
    iziToast.error({
      title: 'Info',
      message:
        'There was an error loading reviews. Please check your internet connection or try refreshing the page.',
      position: 'topRight',
    });

    const errorTemplate = createErrorTemplateListEl();
    reviewCardList.insertAdjacentHTML('afterbegin', errorTemplate);
  }
};

renderReviewTemplate();

function onMyKeyPress(swiper, keyCode) {
  switch (keyCode) {
    case 9: //Tab
      swiper.slideNext();
      break;
    case 8: //Backspace
      swiper.slidePrev();
      break;
  }
}
