import { component$, useStyles$ } from '@builder.io/qwik'

import styles from '../styles/HeroImage.css?inline'
import { Title } from '../Typography'

export interface HeroImageProps {
  image: string
  title: string
  description: string
}

const HeroImage = component$(
  ({ image, title, description }: HeroImageProps) => {
    useStyles$(styles)

    return (
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        class="HeroImage"
      >
        <div class="container">
          <div class="HeroImage-welcomebox">
            <Title tag="h1" fontSize="3xl" fontWeight="700">
              {title}
            </Title>
            <p class="HeroImage-descrition">{description}</p>
            <div class="HeroImage-action"></div>
          </div>
        </div>
      </div>
    )
  }
)

export default HeroImage
