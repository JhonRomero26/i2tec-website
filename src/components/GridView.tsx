import { Slot, component$, useStyles$ } from '@builder.io/qwik'

import styles from './styles/GridView.css?inline'

export type GridViewProps = {
  minWidth?: 'min-content' | 'max-content' | string
  gap?: string | { x: string; y: string }
}

export const GridView = component$(
  ({ minWidth = '250px', gap = '1rem' }: GridViewProps) => {
    useStyles$(styles)
    const gapValue = typeof gap === 'object' ? `${gap.y} ${gap.x}` : gap

    return (
      <div
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}, 1fr))`,
          gap: gapValue,
        }}
        class="GridView"
      >
        <Slot />
      </div>
    )
  }
)
