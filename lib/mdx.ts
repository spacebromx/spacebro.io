import { serialize } from 'next-mdx-remote/serialize'
import mdxPrism from 'mdx-prism'
import autoLinkHeadings from 'rehype-autolink-headings'
import slug from 'rehype-slug'
import remarkGemoji from "remark-gemoji";
import remarkHighlightjs from "remark-highlight.js";
import remarkToc from 'remark-toc'

export async function parseMDXContent(source: any) {
  const promises = source.map(async (item: any) => {
    return {
      ...item,
      content: await serialize(<string>(<unknown>item.content), {
        mdxOptions: {
          remarkPlugins: [
            require('remark-code-titles'),
            remarkGemoji,
            remarkHighlightjs,
            remarkToc,
          ],
          rehypePlugins: [
            mdxPrism,
            slug,
            [
              autoLinkHeadings,
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
