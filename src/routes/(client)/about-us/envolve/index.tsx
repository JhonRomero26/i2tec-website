import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik'
import { Title } from '~/components/Typography'

import styles from './styles.css?inline'

const image = 'https://source.unsplash.com/random'

const featuress = [
  {
    id: '1',
    title: 'Hello world',
    image,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet dolorem delectus. Incidunt porro pariatur natus error quam eaque, praesentium, explicabo totam, dolore sunt odit fuga facere doloribus suscipit tenetur!',
  },
  {
    id: '2',
    title: 'Hello world 2',
    image,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet dolorem delectus. Incidunt porro pariatur natus error quam eaque, praesentium, explicabo totam, dolore sunt odit fuga facere doloribus suscipit tenetur!',
  },
  {
    id: '3',
    title: 'Hello world ADFSASD3',
    image,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet dolorem delectus. Incidunt porro pariatur natus error quam eaque, praesentium, explicabo totam, dolore sunt odit fuga facere doloribus suscipit tenetur!',
  },
  {
    id: '4',
    title: 'Hello world 4',
    image,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet dolorem delectus. Incidunt porro pariatur natus error quam eaque, praesentium, explicabo totam, dolore sunt odit fuga facere doloribus suscipit tenetur!',
  },
]

export interface Feature {
  id: string
  title: string
  image: string
  content: string
}

export default component$(() => {
  const features = useSignal<Feature[]>(featuress)
  const selectFeature = useSignal<Feature>(features.value[0])

  useStyles$(styles)

  const handleClick = $((id: string) => {
    const item = features.value.find((item) => item.id === id)

    if (item !== undefined) {
      selectFeature.value = item
    }
  })

  return (
    <main>
      <section class="section section-final">
        <div class="container Envolve-wrapper">
          <div class="Envolve-detail">
            <Title
              fontWeight="700"
              class="text-center lg:text-left"
              fontSize="3xl"
            >
              {selectFeature.value.title}
            </Title>
            <div>{selectFeature.value.content}</div>
          </div>

          <div class="Envolve-features">
            {features.value.map((item) => (
              <picture
                class={`Envolve-features-picture ${
                  selectFeature.value.id === item.id ? 'active' : ''
                }`}
                onClick$={() => handleClick(item.id)}
                key={item.id}
              >
                <img class="Envolve-features-image" src={item.image} />
              </picture>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
})
