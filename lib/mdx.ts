import renderToString from 'next-mdx-remote/render-to-string'
import mdxPrism from 'mdx-prism'
import autolinkHeadings from 'rehype-autolink-headings'
import slug from 'rehype-slug'
import MDXComponents from '@/components/MDXComponents'

export async function parseMDXContent(source) {
  const promises = source.map(async (item) => {
    return {
      ...item,
      content: await renderToString(<string>(<unknown>item.content), {
        components: MDXComponents,
        mdxOptions: {
          remarkPlugins: [
            require('remark-code-titles'),
            require('remark-gemoji'),
            require('remark-highlight.js'),
          ],
          rehypePlugins: [
            mdxPrism,
            slug,
            [
              require('rehype-autolink-headings'),
              {
                behavior: 'prepend',
                properties: { className: ['anchor-link'] },
                content: {
                  type: 'element',
                  tagName: 'span',
                  children: [{ type: 'text', value: '#' }],
                },
              },
            ],
          ],
        },
      }),
    }
  })

  return Promise.all(promises)
}
