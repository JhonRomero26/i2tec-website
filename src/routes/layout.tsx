import { component$, Slot } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { MainHeader } from '~/components/Header'
import { Footer } from '~/components/Footer'

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  }
})

export default component$(() => {
  return (
    <>
      <MainHeader />
      <Slot />
      <Footer />
    </>
  )
})
