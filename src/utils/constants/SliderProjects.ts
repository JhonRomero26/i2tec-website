import { $ } from '@builder.io/qwik'
import { Autoplay, Navigation } from 'swiper'

import type { SwiperOptions } from 'swiper'
import { breakpoints } from '~/utils/enums'

export const sliderProyectsOptions: SwiperOptions = {
  modules: [Autoplay, Navigation],
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    dynamicBullets: true,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    [breakpoints.sm]: {
      slidesPerView: 2,
    },
    [breakpoints.md]: {
      slidesPerView: 3,
    },
    [breakpoints.lg]: {
      slidesPerView: 4,
    },
    [breakpoints.xxl]: {
      slidesPerView: 6,
    },
  },
}

const sliderProyectsOptions$ = $(() => sliderProyectsOptions)

export default sliderProyectsOptions$
