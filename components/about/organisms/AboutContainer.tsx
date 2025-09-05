// app/about/page.tsx
import { allPages } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

export default function AboutPage() {
  const about = allPages.find(p => p.slug === 'pages/about') ?? allPages[0]
  const MDX = useMDXComponent(about.body.code)
  return (
    <section className="prose max-w-3xl mx-auto p-4">
      <MDX />
    </section>
  )
}
