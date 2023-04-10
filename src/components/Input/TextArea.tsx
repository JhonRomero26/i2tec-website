import { component$, useStyles$ } from '@builder.io/qwik'

import type { HTMLAttributes, PropFunction } from '@builder.io/qwik'

import styles from '../styles/Input.css?inline'
import cx from 'clsx'

export type TextAreaProps = {
  value?: string
  onInput$?: PropFunction<(e: Event) => void>
  rows?: number
  cols?: number
  resize?: 'none' | 'vertical' | 'horizontal'
  minLength?: number
  maxLength?: number
} & Omit<HTMLAttributes<HTMLTextAreaElement>, 'children'>

const TextArea = component$(
  ({
    class: className,
    onInput$,
    rows = 10,
    cols,
    resize,
    minLength,
    maxLength,
    value,
    ...restProps
  }: TextAreaProps) => {
    useStyles$(styles)
    const classes = cx('textarea', className)
    return (
      <div class="textarea-container">
        <textarea
          class={classes}
          rows={rows}
          cols={cols}
          minLength={minLength}
          maxLength={maxLength}
          onInput$={onInput$}
          value={value}
          style={{
            resize: resize,
          }}
          {...restProps}
        />
        <div class="textarea-metas">
          <div class="textarea-metas-length text-xs">
            {value?.length}/{maxLength}
          </div>
        </div>
      </div>
    )
  }
)

export default TextArea
