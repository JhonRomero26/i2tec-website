import { Slot, component$, useVisibleTask$, useStyles$ } from '@builder.io/qwik'
import Swiper from 'swiper'
import cx from 'clsx'

import type { SwiperOptions } from 'swiper'
import type { QRL } from '@builder.io/qwik'

import styles from '../styles/Slider.css?inline'

type SliderProps = {
  selector: string
  options?: QRL<() => SwiperOptions>
  scaleEffect?: boolean
}

const Slider = component$(
  ({ selector, options, scaleEffect = false }: SliderProps) => {
    useStyles$(styles)

    useVisibleTask$(async () => {
      const fn = options !== undefined ? await options.resolve() : () => ({})
      const opts: SwiperOptions = fn()

      new Swiper(`[data-slider-id="${selector}-slider"]`, opts)
    })

    const classes = cx('swiper', {
      'swiper-scale': scaleEffect,
    })

    return (
      <div data-slider-id={`${selector}-slider`} class={classes}>
        <div class="swiper-wrapper">
          <Slot />
        </div>
        <Slot name="prev-btn" />
        <Slot name="next-btn" />
      </div>
    )
  }
)

export default Slider
