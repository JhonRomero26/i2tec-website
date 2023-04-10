import { component$ } from '@builder.io/qwik'

import { Input, InputPassword } from '~/components/Input'
import { useInput } from '~/hooks'
import { Button } from '~/components/Button'

export default component$(() => {
  const username = useInput('')
  const password = useInput('')

  // const handleSubmit = $(() => {

  // })

  return (
    <>
      <div class="Auth-title text-3xl text-center">Iniciar sesión</div>
      <form preventdefault:submit class="Auth-form">
        <label style="">
          <span class="text-sm weight-500">Usuario</span>
          <Input value={username.value} onInput$={username.onInput$} />
        </label>
        <label style="">
          <span class="text-sm weight-500">Contraseña</span>
          <InputPassword onInput$={password.onInput$} value={password.value} />
        </label>
        <footer class="Auth-footer">
          <Button type="primary" htmlType="submit">
            Iniciar sesión
          </Button>
        </footer>
      </form>
    </>
  )
})
