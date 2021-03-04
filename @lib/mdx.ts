import renderToString from 'next-mdx-remote/render-to-string'
import mdxPrism from 'mdx-prism'
import MDXComponents from '@/components/MDXComponents'

export async function parseMDXContent(source) {
  const promises = source.map(async (item) => {
    return {
      ...item,
      content: await renderToString(<string>(<unknown>item.content), {
        components: MDXComponents,
        mdxOptions: {
          rehypePlugins: [mdxPrism],
        },
      }),
    }
  })

  return Promise.all(promises)
}
