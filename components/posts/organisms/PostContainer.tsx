import Tag from '@/components/tags/Tag'
import { Authors, Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer.js'
import { PostSummaryTextElement } from '../../common/atoms/PostTextElement'
import NavigationButton from '../../common/molecules/NavigationButton'
import PostThumbnailWrapper from '../../common/molecules/PostThumbnailWrapper'
import PostAuthorSection from '../../common/organisms/PostAuthorSection'

export default function PostContainer({
  post,
  author,
}: {
  post: Blog | CoreContent<Blog>
  author: Authors
}) {
  const { slug, date, title, summary, tags, images } = post

  return (
    <article className="container overflow-hidden max-w-7xl mx-auto">
      <div className="lg:-mx-6 lg:flex lg:items-center">
        <PostThumbnailWrapper
          title={title}
          slug={slug}
          image={Array.isArray(images) ? images[0] : '/static/images/banner.jpeg'}
          className="lg:mx-6 lg:w-1/2 rounded-xl h-72 border-gray-300/40 border-[0.5px]"
          imageObjectFit="contain"
        />

        <div className="py-1 mt-2 lg:mx-6 lg:w-1/2 lg:mt-0 lg:h-72 flex flex-col items-start justify-start overflow-hidden">
          <div className="flex-1 w-full overflow-hidden max-w-full">
            <NavigationButton
              href={`/posts/${slug}`}
              isArrow={false}
              color="slate"
              title={title}
              spanClassName="text-xl font-semibold text-gray-800 dark:text-white md:text-2xl leading-6 line-clamp-2 overflow-hidden text-ellipsis"
              buttonClassName="tracking-normal w-full"
            />

            <div className="overflow-hidden max-h-20">
              <PostSummaryTextElement summary={summary ?? ''} />
            </div>
            <div className="mt-3 overflow-hidden">
              <NavigationButton
                color="primary"
                href={`/posts/${slug}`}
                title={`Read more`}
                isArrow={true}
                aria-label={`Read more about ${title}`}
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap overflow-hidden">
            {tags.map((tag) => (
              <Tag className="mr-2 my-1" key={tag} text={tag} />
            ))}
          </div>
          <PostAuthorSection author={author} date={date} />
        </div>
      </div>
    </article>
  )
}
