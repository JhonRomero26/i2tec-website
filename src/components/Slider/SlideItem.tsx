import { Slot, component$ } from '@builder.io/qwik'

const SlideItem = component$(() => {
  return (
    <div class="swiper-slide">
      <Slot />
    </div>
  )
})

export default SlideItem
