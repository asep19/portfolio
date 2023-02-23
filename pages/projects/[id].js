import Image from 'next/image'
// import { useRouter } from 'next/router'
import projectsData from '@/data/projectsData'

export default function Project({ project }) {
  // const router = useRouter()
  // const { id } = router.query
  // const { title, description, url, images, role, stack } = projectsData[id - 1]

  return (
    <section className="max-w-[550px] mx-auto ">
      <h1 className="text-xl font-medium mb-2 mt-4">{project.title}</h1>
      <p className="indent-6">{project.description}</p>
      <ul className="space-y-1 mt-6">
        <li>
          <span className="bg-gray-300 py-0.5 px-1 mr-2 rounded-sm">Stack</span>
          {project.stack.join(' • ')}
        </li>
        <li>
          <span className="bg-gray-300 py-0.5 px-1 mr-2 rounded-sm">Website</span>
          <a href={project.url} className="text-blue-500">
            {project.url}
          </a>
        </li>
        <li>
          <span className="bg-gray-300 py-0.5 px-1 mr-2 rounded-sm">Role</span>
          {project.role.join(' • ')}
        </li>
      </ul>
      <div className="mt-4 space-y-4 flex flex-col justify-center items-center">
        {project.images.map((image) => (
          <div key={image.id}>
            <Image width={500} height={320} src={image.imgSrc} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export async function getStaticPaths() {
  const paths = projectsData.map((project) => ({
    params: { id: `${project.id}` },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const project = projectsData[params.id - 1]
  return { props: { project } }
}
