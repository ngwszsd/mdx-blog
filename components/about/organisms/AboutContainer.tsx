import { allPages } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

const AboutContentSection = () => {
  // 找到 resume.mdx
  const resume = allPages.find((p) => p._raw.sourceFileName === 'resume.mdx')

  if (!resume) return <div>简历未找到</div>

  const MDXContent = useMDXComponent(resume.body.code)

  return (
    <section className="prose dark:prose-invert max-w-3xl mx-auto p-4">
      <MDXContent />
    </section>
  )
}

export default AboutContentSection
