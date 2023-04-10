import { component$, useStyles$ } from '@builder.io/qwik'

export type TeacherDetailProps = {
  title: string
  image: string
  summary: string
}

export const TeacherDetail = component$(
  ({ title, image, summary }: TeacherDetailProps) => {
    useStyles$(`
    .TeacherDetail {
      display: grid;
      width: min(1200px, 100%);
      margin-left: auto;
      margin-right: auto;
      gap: 3rem;
      padding: 3rem;
      bacground-color: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(6px);
      box-shadow: 2px 2px 5px 2px rgba(var(--primary-rgb), 0.25) ;
      isolation: isolate;
    }
    
    .TeacherDetail-picture {
      position: relative;
      aspect-ratio: 3/4;
      margin-left: 3rem;
      margin-top: 3rem;
      height: min-content;
      justify-self: center;
    }

    .TeacherDetail-picture::before {
      content: '';
      position: absolute;
      bottom: 3rem;
      right: 3rem;
      height: 100%;
      width: 100%;
      border: 10px solid var(--primary);
      z-index: -1;
    }

    .TeacherDetail-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .TeacherDetail-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    @media (min-width: 990px) {
      .TeacherDetail {
        grid-template-columns: max-content 1fr;
      }
    }
  `)

    return (
      <div class=" TeacherDetail">
        <picture class="TeacherDetail-picture">
          <img class="TeacherDetail-image" src={image} alt={title} />
        </picture>
        <div class="TeacherDetail-content">
          <div class="text-2xl weight-700">{title}</div>
          <div>{summary}</div>
        </div>
      </div>
    )
  }
)
