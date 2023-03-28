import { createDOM } from '@builder.io/qwik/testing'
import { expect, test, describe } from 'vitest'
import { Icon } from '~/components/Icon'

import type { IconNames } from '~/utils/types'

const icons: IconNames[]= ['user', 'trash', 'trending-up']

describe('[Icon Component]', async () => {
  test('Correct render user icon', async () => {
    const { screen, render } = await createDOM()
    await render(<Icon name={icons[0]} />)
    expect(screen.outerHTML).toContain(`<span class=" ti ti-${icons[0]}"></span>`)
  })
  
  test('Correct render trash icon', async () => {
    const { screen, render } = await createDOM()
    await render(<Icon name={icons[1]} />)
    expect(screen.outerHTML).toContain(`<span class=" ti ti-${icons[1]}"></span>`)
  })
  
  test('Correct render trending-up icon', async () => {
    const { screen, render } = await createDOM()
    await render(<Icon name={icons[2]} />)
    expect(screen.outerHTML).toContain(`<span class=" ti ti-${icons[2]}"></span>`)
  })
})