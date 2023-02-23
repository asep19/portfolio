import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <section className="max-w-[600px] mx-auto pt-16">
        <h2 className="text-center md:text-left text-xl font-semibold">Projects</h2>
        {/* <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center sm:items-stretch space-y-10 sm:space-y-0"> */}
        <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap ">
          {projectsData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.summary}
              imgSrc={item.thumbnail}
              href={item.href}
            />
          ))}
        </div>
      </section>
    </>
  )
}
