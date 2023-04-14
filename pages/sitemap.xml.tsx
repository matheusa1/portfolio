import React from 'react'
import * as glob from 'glob'

const Sitemap = () => {
	return null
}

export const getServerSideProps = async ({ res }: any) => {
	const BASE_URL = 'https://matheussandrade.com.br'

	const pagesDir = 'pages/**/*.tsx'
	let pagesPaths = await glob.sync(pagesDir)

	pagesPaths = pagesPaths
		.filter((path) => !path.includes('['))
		.filter((path) => !path.includes('/_'))
		.filter((path) => !path.includes('404'))

	const staticPaths = pagesPaths
		.filter((staticPage) => {
			return ![
				'_app.tsx',
				'_document.tsx',
				'404.tsx',
				'sitemap.xml.tsx',
			].includes(staticPage)
		})
		.map((staticPagePath) => {
			staticPagePath = staticPagePath.replace('pages/', '')
			staticPagePath = staticPagePath.replace('/index.tsx', '')

			return `${BASE_URL}/${staticPagePath}`
		})

	const allPaths = [...staticPaths]

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
				.map((url) => {
					return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
				})
				.join('')}
    </urlset>
  `

	res.setHeader('Content-Type', 'text/xml')
	res.write(sitemap)
	res.end()

	return {
		props: {},
	}
}

export default Sitemap
