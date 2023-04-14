const Sitemap = () => {
	return null
}

export const getServerSideProps = async ({ res }: any) => {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<url>
<loc>https://www.matheussandrade.com.br</loc>
</url>
<url>
<loc>https://www.matheussandrade.com.br/contact</loc>
</url>
<url>
<loc>https://www.matheussandrade.com.br/portfolio</loc>
</url>
<url>
<loc>https://www.matheussandrade.com.br/frontend</loc>
</url>
<url>
<loc>https://www.matheussandrade.com.br/</loc>
</url>
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
