import { component$, useStyles$ } from '@builder.io/qwik'
import { InfoBox } from './InfoBox'

import styles from './styles/MisionAndVision.css?inline'

export const MisionAndVision = component$(() => {
  useStyles$(styles)

  return (
    <div class="MisionAndVision">
      <InfoBox title="Misión">
        <p>
          Dinamizar la investigación e innovación aplicada para el desarrollo de
          soluciones tecnológicas que contribuyan con el medio ambiental y
          económicamente sostenibles hacia los retos de la sociedad del Sur del
          Ecuador.
        </p>
        <p>
          Contribuir a que el conocimiento en ciencia, tecnología e innovación
          se transforme en desarrollo de soluciones tecnológicas, para impulsar,
          articular, generar y transferir conocimiento científico y tecnológico
          que aporte al desarrollo educativo, productivo y sostenible, para dar
          respuesta a los intereses de la sociedad Sur del Ecuador, mediante
          programas, proyectos y servicios económicamente sostenibles y que
          contribuyan con el desarrollo de la sociedad.
        </p>
      </InfoBox>
      <InfoBox title="visión" decoration="right">
        <p>
          Ser un referente regional y nacional en la gestión y apropiación de la
          ciencia, la tecnología y la innovación, para ofrecer soluciones
          útiles, integrales, sostenibles e innovadoras, para contribuir con el
          desarrollo de la sociedad.
        </p>
      </InfoBox>
    </div>
  )
})
