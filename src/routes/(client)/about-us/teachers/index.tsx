import { component$, useStyles$, useSignal, $ } from '@builder.io/qwik'
import { Title } from '~/components/Typography'
import { CardTeacher } from '~/components/CardTeacher'
import { TeacherDetail } from '~/components/TeacherDetail'

import styles from './styles.css?inline'

const teachers = [
  {
    id: '1',
    image:
      'https://telecomunicaciones.edu.ec/images/docentes/2019/pabel_merino.jpg',
    prefix: 'Ing.',
    firstName: 'Rodolfo Pabel',
    lastName: 'Merino Vivanco',
    fullName: 'Rodolfo Pabel Merino Vivanco',
    suffix: 'Mg. Sc.',
    summary:
      'Ingeniero en Electrónica y Telecomunicaciones y máster en Diseño y Gestión de Proyectos Tecnológicos. Especialista en sistemas de Telecomunicaciones, sistemas Electrónicos de Seguridad, vinculado a la docencia y al campo empresarial desde muy temprano en mi vida profesional tengo cerca de 11 años de experiencia docente y la misma cantidad como empresario donde he formado parte en el diseño, construcción, gestión y administración de proyectos de Telecomunicaciones que se han desarrollado en la Región Sur del País.',
  },
  {
    id: '2',
    image:
      'https://telecomunicaciones.edu.ec/images/docentes/2019/marianela_carrion.jpg',
    prefix: 'Ing.',
    firstName: 'Marianela del Cisne',
    lastName: 'Carrión González',
    fullName: 'Marianela del Cisne Carrión González',
    suffix: 'Mg. Sc.',
    summary:
      'Profesional con título de cuarto nivel en Tecnologías, Sistemas y Redes de comunicaciones por la Universidad Politécnica de Valencia (España), título de tercer nivel en Electrónica y Telecomunicaciones por la Universidad Nacional de Loja, con experiencia docente y profesional con un total de 7 años y 6 meses, capacitada en cursos de: Máquinas y Accionamientos eléctricos, Riesgos Eléctricos, GPON, y Prevención de Riesgos Laborables. Experta en temas de IoT y redes inalámbricas de sensores. Experiencia en diseño, selección, dimensionamiento y puesta en marcha de proyectos de Electrónica y Telecomunicaciones. Experiencia en dirección y representación legal de la compañía GENSESELT S.A. Cualidades de responsabilidad, aprendizaje continuo y trabajo en equipo.',
  },
  {
    id: '3',
    image:
      'https://telecomunicaciones.edu.ec/images/docentes/2019/andy_vega.jpg',
    prefix: 'Ing.',
    firstName: 'Andy Fabricio',
    lastName: 'Carrión González',
    fullName: 'Andy Fabricio Carrión González',
    suffix: 'Mg. Sc.',
    summary:
      'Profesional con título de cuarto nivel en Tecnologías, Sistemas y Redes de comunicaciones por la Universidad Politécnica de Valencia (España), título de tercer nivel en Electrónica y Telecomunicaciones por la Universidad Nacional de Loja, con experiencia docente y profesional con un total de 7 años y 6 meses, capacitada en cursos de: Máquinas y Accionamientos eléctricos, Riesgos Eléctricos, GPON, y Prevención de Riesgos Laborables. Experta en temas de IoT y redes inalámbricas de sensores. Experiencia en diseño, selección, dimensionamiento y puesta en marcha de proyectos de Electrónica y Telecomunicaciones. Experiencia en dirección y representación legal de la compañía GENSESELT S.A. Cualidades de responsabilidad, aprendizaje continuo y trabajo en equipo.',
  },
]

export interface Teacher {
  id: string
  image: string
  firstName: string
  lastName: string
  fullName: string
  summary: string
  suffix?: string
  prefix?: string
}

export default component$(() => {
  useStyles$(styles)
  const selectTeacher = useSignal<Teacher>(teachers[1])

  const handleClick = $((id: string) => {
    const teacher = teachers.find((teacher) => teacher.id === id)

    if (teacher !== undefined) {
      selectTeacher.value = teacher
      window.scroll({ top: 100 })
    }
  })

  return (
    <main>
      <section class="bg-svg-brick TeachersPage-detail">
        <div class="container">
          <TeacherDetail
            title={selectTeacher.value.fullName}
            image={selectTeacher.value.image}
            summary={selectTeacher.value.summary}
          />
        </div>
      </section>
      <section class="section section-final TeachersPage-teachers">
        <Title
          class="TeachersPage-title"
          fontSize="4xl"
          align="center"
          fontWeight="700"
        >
          Nuestros docentes
        </Title>
        <div class="container TeachersPage-teachers-wrapper">
          {teachers.map((teacher) => (
            <CardTeacher
              key={teacher.id}
              onClick$={() => handleClick(teacher.id)}
              image={teacher.image}
              firstName={teacher.firstName}
              lastName={teacher.lastName}
              suffix={teacher.suffix}
              prefix={teacher.prefix}
            />
          ))}
        </div>
      </section>
    </main>
  )
})
