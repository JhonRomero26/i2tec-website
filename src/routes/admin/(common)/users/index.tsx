import { component$, useStyles$ } from '@builder.io/qwik'
import { Button } from '~/components/Button'
import { Icon } from '~/components/Icon'
import { TitleWithTrigger } from '~/components/TitleAndTrigger'
import { GridView } from '~/components/GridView'
import { AvatarWithUsername } from '~/components/Avatar'

import styles from './styles.css?inline'
import { ModifyWrapper } from '~/components/ModifyWrapper'
import { Link } from '@builder.io/qwik-city'

export default component$(() => {
  useStyles$(styles)

  return (
    <div>
      <TitleWithTrigger title="Usuarios">
        <Button type="primary" q:slot="trigger">
          <Icon q:slot="icon" title="Agregar nuevo usuario" name="plus" />
          Agregar
        </Button>
      </TitleWithTrigger>
      <GridView gap="2.5rem" minWidth="150px">
        {[...Array(20).keys()].map((i) => (
          <ModifyWrapper
            handleDelete$={() => {}}
            handleEdit$={() => {}}
            key={i}
          >
            <Link href={`/admin/users/${i}`}>
              <AvatarWithUsername size="100%" name={`prueba ${i}`} />
            </Link>
          </ModifyWrapper>
        ))}
      </GridView>
    </div>
  )
})
