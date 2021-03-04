import React from 'react'
import Fetcher from '@/lib/fetcher'
import { SITE_URL } from '@/constants'

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${SITE_URL}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.00</priority>
    </url>
        ${posts
          .map((url) => {
            return `
                    <url>
                        <loc>${url}</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                        <priority>0.8</priority>
                    </url>
                `
          })
          .join('')}
    </urlset>
    `

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const [allPosts, allPages, allProjects] = await Promise.all([
      Fetcher(`${process.env.NEXT_PUBLIC_API_URL}/items/articles`),
      Fetcher(`${process.env.NEXT_PUBLIC_API_URL}/items/pages`),
      Fetcher(`${process.env.NEXT_PUBLIC_API_URL}/items/projects`),
    ])

    let allURLs = []

    allPosts.data.map((post) =>
      allURLs.push(`${SITE_URL}/articles/${post.slug}`)
    )
    allPages.data.map((post) => allURLs.push(`${SITE_URL}/pages/${post.slug}`))
    allProjects.data.map((post) =>
      allURLs.push(`${SITE_URL}/work/${post.slug}`)
    )

    res.setHeader('Content-Type', 'text/xml')
    res.write(createSitemap(allURLs))
    res.end()
  }
}

export default Sitemap
