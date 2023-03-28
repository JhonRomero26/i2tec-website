import { $ } from '@builder.io/qwik'
import { Autoplay, EffectCreative } from 'swiper'

import type { SwiperOptions } from 'swiper'

export const sliderHeroOptions: SwiperOptions = {
  modules: [Autoplay, EffectCreative],
  slidesPerView: 'auto',
  effect: 'creative',
  autoplay: { delay: 3500, disableOnInteraction: false },
  creativeEffect: {
    prev: { translate: [0, 0, -400] },
    next: { translate: ['100%', 0, 0] },
  },
}

const sliderHeroOptions$ = $(() => sliderHeroOptions)

export default sliderHeroOptions$
