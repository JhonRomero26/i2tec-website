import { component$, useStyles$ } from '@builder.io/qwik'
import { HeroImage } from '~/components/Hero'
import { Title, TitleWithText } from '~/components/Typography'
import { BesselClipPathCSS } from '~/utils/constants'
import { MisionAndVision } from '~/components/MisionAndVision'
import { AvatarWithUsername } from '~/components/Avatar'

import styles from './styles.css?inline'

const bannerImage =
  'https://images.unsplash.com/photo-1580894896813-652ff5aa8146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
const description =
  'Estamos comprometidos en fomentar un ambiente de trabajo inclusivo y respetuoso donde todas las ideas son bienvenidas y donde cada individuo tiene la oportunidad de crecer y desarrollarse profesionalmente.'

const founders = [
  'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
]

export default component$(() => {
  useStyles$(styles)

  return (
    <main>
      <HeroImage
        title="En I2TEC crecen todos"
        description={description}
        image={bannerImage}
      />
      <section class="section Aboutus-presentation bg-svg bg-svg-waves">
        <div class="container Aboutus-presentation-container">
          <TitleWithText
            align="center"
            fontSize="3xl"
            fontWeight="700"
            tag="h2"
            title="Surgimos de la investigación"
          >
            En el centro de investigación, innovación y tecnología, nuestro
            compromiso con la investigación es el corazón de todo lo que
            hacemos. Surgimos de la investigación y estamos dedicados a llevar a
            cabo investigaciones vanguardistas que aborden algunos de los
            desafíos más apremiantes de nuestro tiempo.
          </TitleWithText>
          <picture
            style={{
              clipPath: BesselClipPathCSS,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Ingeniero desarrollando producto"
            />
          </picture>
        </div>
      </section>
      <section class="section Aboutus-ourgoals">
        <div class="container">
          <div class="Aboutus-ourgoals-head">
            <TitleWithText
              align="center"
              fontSize="3xl"
              fontWeight="700"
              tag="h2"
              title="Nuestra meta"
            >
              Tenemos una dirección hacia nuestros propositos, contamos con
              nuestra misión y visión.
            </TitleWithText>
          </div>
          <MisionAndVision />
        </div>
      </section>
      <section class="section section-final Aboutus-founders">
        <div class="container">
          <div class="Aboutus-founders-head">
            <Title class="Aboutus-titles" fontSize="3xl" fontWeight="700">
              Nuestros fundadores
            </Title>
            <div></div>
          </div>

          <div>
            <div class="Aboutus-founders-wrapper">
              {founders.map((i) => (
                <AvatarWithUsername
                  key={i}
                  aspectRatio="1/1"
                  name="Mario Julio"
                  size="100%"
                  image={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
})
