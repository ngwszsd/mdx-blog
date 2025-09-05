// app/about/page.tsx （Next.js App Router 写法）
import { allPages } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

export default function AboutPage() {
  // 找到 frontmatter.title = "我的简历" 的那篇
  const resume = allPages.find((p) => p.title.includes('简历'))

  if (!resume) {
    return <div>简历内容未找到</div>
  }

  const MDXContent = useMDXComponent(resume.body.code)

  return (
    <section className="prose dark:prose-invert max-w-3xl mx-auto p-4">
      <MDXContent />
    </section>
  )
}
