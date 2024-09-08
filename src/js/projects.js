import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Navigation } from 'swiper/modules';
const swiper = new Swiper('.swiper', {
  speed: 400,
    spaceBetween: 100,
    modules: [Keyboard, Navigation],
    navigation: {
        nextEl: '.right-arrow',
        prevEl: '.left-arrow',
    },
    mousewheel: true,
    keyboard: true,
});



