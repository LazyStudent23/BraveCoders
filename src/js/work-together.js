import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const footerFormEl = document.querySelector('.js-footer-form');
const emailFieldEl = document.querySelector('.js-email-field');
const commentFieldEl = document.querySelector('.js-comment-field');
const successEmailEl = document.querySelector('.js-success-email');
const invalidEmailEl = document.querySelector('.js-invalid-email');

axios.defaults.baseURL = "https://portfolio-js.b.goit.study/api";

let emailValue;
let commentValue;

const showModalWindow = () => {
    let onBackdropClick;
    const instance = basicLightbox.create(`
    <div class="form-modal">
      <button class="modal-close-btn js-modal-close-btn" type="button">
        <svg width="22" height="22">
          <use href="/BraveCoders/assets/icons-BSjufwsV.svg#icon-icon-cross"></use>
        </svg>
      </button>
      <h3 class="modal-heading">Thank you for your interest in cooperation!</h3>
      <p class="modal-text">
        The manager will contact you shortly to discuss further details and
        opportunities for cooperation. Please stay in touch.
      </p>
    </div>
  `, {
    onShow: (instance) => {
      const modalElement = instance.element();

      onBackdropClick = event => {
        if (event.target === modalElement) {
            instance.close();
            document.removeEventListener('keydown', onKeyDown);
            modalElement.removeEventListener('click', onBackdropClick);
        }
      };

      modalElement.addEventListener('click', onBackdropClick);
    },
    onClose: (instance) => {
      const modalElement = instance.element();
      modalElement.removeEventListener('click', onBackdropClick); 
    }
  });

    instance.show();

    const domElem = instance.element();

    const onCloseBtnClick = event => {
        instance.close();
        domElem.querySelector('.js-modal-close-btn').removeEventListener('click', onCloseBtnClick);
        document.removeEventListener('keydown', onKeyDown);
        domElem.removeEventListener('click', onBackdropClick); 
    };

    const onKeyDown = event => {
        if (event.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', onKeyDown);
            domElem.removeEventListener('click', onBackdropClick); 
        }
    };

    domElem.querySelector('.js-modal-close-btn').addEventListener('click', onCloseBtnClick);
    document.addEventListener('keydown', onKeyDown);
};

const onInputField = () => {
    const maxValueLength = 50;

    emailValue = emailFieldEl.value;
    commentValue = commentFieldEl.value;

    if (emailValue.length > maxValueLength) {
        if (!emailValue.endsWith('...')) {
            emailFieldEl.value = emailValue.substring(0, maxValueLength) + "...";
        };
    } else {
        if (emailValue.endsWith('...')) {
            emailFieldEl.value = emailValue.substring(0, maxValueLength);
        };
    };

    if (commentValue.length > maxValueLength) {
        if (!commentValue.endsWith('...')) {
            commentFieldEl.value = commentValue.substring(0, maxValueLength) + "...";
        };
    } else {
        if (commentValue.endsWith('...')) {
            commentFieldEl.value = commentValue.substring(0, maxValueLength);
        };
    };

    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    
    if (emailPattern.test(emailValue)) {
      invalidEmailEl.classList.add('is-hidden');
        successEmailEl.classList.remove('is-hidden');
        emailFieldEl.style.borderBottom = "1px solid #3cbc81";
    } else {
        successEmailEl.classList.add('is-hidden');
        invalidEmailEl.classList.remove('is-hidden');
        emailFieldEl.style.borderBottom = "1px solid #e74a3b";
    };
};

const onFooterFormSubmit = async event => {
    event.preventDefault();
    
    emailValue = footerFormEl.elements.userEmail.value.trim();
    commentValue = footerFormEl.elements.userComment.value.trim();

    try {
        await axios.post('/requests', {
            email: emailValue,
            comment: commentValue,
        });

        emailFieldEl.style.borderBottom = "1px solid rgba(250, 250, 250, 0.2)";
        successEmailEl.classList.add('is-hidden');
        footerFormEl.reset();
        
        showModalWindow();

    } catch (err) {
        iziToast.show({
            title: 'Error',
            message: `Something went wrong. Please try again later.`,
            messageColor: '#fff',
            titleColor: '#fff',
            messageSize: '16px',
            messageLineHeight: '24px',
            position: 'topRight',
            closeOnClick: true,
            maxWidth: '420px',
            backgroundColor: '#e74a3b',
            progressBarColor: '#B51B1B',
        });
    };
};

footerFormEl.addEventListener('submit', onFooterFormSubmit);
footerFormEl.addEventListener('input', onInputField);
