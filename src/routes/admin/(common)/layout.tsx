import { Slot, component$ } from '@builder.io/qwik'
import { Sidebar } from '~/components/Sidebar'

import { AdminHeader } from '~/components/Header'


export default component$(() => {

  return (
    <div class="grid grid-template-columns-[min-content 1fr] grid-template-rows-[64px 1fr] overflow-hidden h-max">
      <Sidebar class="row-span-2" />
      <AdminHeader />
      <main class="overflow-y-auto bg-neutral-100">
        <Slot />
      </main>
    </div>
  )
})
