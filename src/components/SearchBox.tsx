import { $, component$, useStyles$ } from '@builder.io/qwik'
import { Input } from './Input'

import type { QRL } from '@builder.io/qwik'

import styles from './styles/SearchBox.css?inline'
import { IconButton } from '~/components/Button'

type SearchBoxProps = {
  title?: string
  value: string
  onInput$: QRL<(e: Event) => void>
  handleSubmit$?: QRL<() => void>
  placeholder: string
  preventSubmit?: boolean
}

export const SearchBox = component$(
  ({
    title,
    value,
    onInput$,
    handleSubmit$ = $(() => {}),
    placeholder,
    preventSubmit = false,
  }: SearchBoxProps) => {
    useStyles$(styles)

    return (
      <form
        preventdefault:submit={preventSubmit}
        method="GET"
        onSubmit$={handleSubmit$}
        class="SearchBox"
      >
        <label for="search" class="SearchBox-wrapper">
          {title && <span class="SearchBox-title">{title}</span>}
          <div class="SearchBox-input">
            <IconButton
              htmlType="submit"
              type="primary"
              ariaLabel="Search"
              icon="search"
            />
            <Input
              name="search"
              placeholder={placeholder}
              value={value}
              onInput$={onInput$}
            />
          </div>
        </label>
      </form>
    )
  }
)
