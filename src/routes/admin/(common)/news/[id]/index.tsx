import { component$, useSignal, useStyles$ } from '@builder.io/qwik'

import styles from './styles.css?inline'
import { MarkdownEditor } from '~/components/MarkdownEditor'
import { FormFieldWrapper, Input, TextArea } from '~/components/Input'
import { useInput } from '~/hooks'
import { CardNews } from '~/components/CardNews'
import { parseDatePublished } from '~/utils/functions'
import { UploadImage } from '~/components/UploadImage'
import { Title } from '~/components/Typography'
import { TitleWithTrigger } from '~/components/TitleAndTrigger'
import { Button } from '~/components/Button'
import { Icon } from '~/components/Icon'

const defaultImage =
  'https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png'

export default component$(() => {
  const published = parseDatePublished(new Date().toDateString())
  const title = useInput('')
  const imagesrc = useSignal<string>(defaultImage)
  const description = useInput('')
  useStyles$(styles)

  return (
    <div class="ModifyLayout">
      <div class="ModifyLayout-left">
        <div class="ModifyLayout-wrapper">
          <Title class="" fontSize="2xl" fontWeight="700" tag="h3"></Title>
          <TitleWithTrigger
            fontSize="2xl"
            fontWeight="700"
            tag="h3"
            title="Modificador"
          >
            <Button q:slot="trigger" type="primary" onClick$={() => {}}>
              <Icon q:slot="icon" name="device-floppy" title="Guardar" />
              Guardar
            </Button>
          </TitleWithTrigger>
          <FormFieldWrapper label="Imágen">
            <UploadImage
              handleUpload$={({ image, file }) => {
                imagesrc.value = image ? image : defaultImage
                if (file) console.log(file)
              }}
            />
          </FormFieldWrapper>
          <FormFieldWrapper label="Título">
            <Input value={title.value} onInput$={title.onInput$} />
          </FormFieldWrapper>
          <FormFieldWrapper label="Descripción">
            <TextArea
              resize="vertical"
              rows={5}
              maxLength={180}
              value={description.value}
              onInput$={description.onInput$}
            />
          </FormFieldWrapper>
          <FormFieldWrapper required label="Contenido">
            <MarkdownEditor />
          </FormFieldWrapper>
        </div>
      </div>
      <div class="ModifyLayout-right">
        <Title class="" fontSize="2xl" fontWeight="700" tag="h3">
          Previsualización
        </Title>
        <div class="ModifyLayout-preview">
          <CardNews
            title={title.value}
            href=""
            description={description.value}
            image={imagesrc.value}
            publishedDate={published}
          />
        </div>
      </div>
    </div>
  )
})
