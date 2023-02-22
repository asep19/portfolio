import Image from 'next/image'
import { useRouter } from 'next/router'
import projectsData from '@/data/projectsData'

export default function Project() {
  const router = useRouter()
  const { id } = router.query
  const { title, description, url, images, role, stack } = projectsData[id - 1]

  return (
    <section className="max-w-[550px] mx-auto ">
      <h1 className="text-xl font-medium mb-2">{title}</h1>
      <p className="indent-6">{description}</p>
      <ul className="space-y-1 mt-6">
        <li>
          <span className="bg-gray-300 py-0.5 px-1 mr-2 rounded-sm">Stack</span>
          {stack.join(' • ')}
        </li>
        <li>
          <span className="bg-gray-300 py-0.5 px-1 mr-2 rounded-sm">Website</span>
          <a href={url} className="text-blue-500">
            {url}
          </a>
        </li>
        <li>
          <span className="bg-gray-300 py-0.5 px-1 mr-2 rounded-sm">Role</span>
          {role.join(' • ')}
        </li>
      </ul>
      <div className="mt-4 space-y-4 flex flex-col justify-center items-center">
        {images.map((image) => (
          <div key={image.id}>
            <Image width={500} height={320} src={image.imgSrc} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}
