
function generateSiteMap(posts) {

    const pages= ['', 'about', 'contact','california-privacy-policy','cookies-policy','donald-pelgrim','investors','kari-laitinen','privacy-policy','terms-of-use','thank-you','services','services/corporate-finance','services/capital-raising','services/mergers-acquisitions','services/due-diligence','services/lending'];
    const baseUrl = 'https://aiasecure.com';
   // console.log(Array.isArray(pages));

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(( page ) => {
          return `
        <url>
        <loc>${`${baseUrl}/${page}`}</loc>
        <changefreq>monthly</changefreq>
                 
          
        </url>
      `;
        })
        .join('')}
    </urlset>
  `;
  }
 
  function SiteMap() {
    // getServerSideProps will do the heavy lifting
  }
  
  export async function getServerSideProps({ res }) {
    var pages = [
        {"id": 1, "EXTERNAL_DATA_URL": "https://aiasecure.com/about"},
        {"id": 2, "EXTERNAL_DATA_URL": "https://aiasecure.com/contact"},
        {"id": 3, "EXTERNAL_DATA_URL": "https://aiasecure.com/california-privacy-policy"}
    ];
    let obj = {};
    pages.forEach(page => obj[page.id] = page.EXTERNAL_DATA_URL);

    // We make an API call to gather the URLs for our site
    // const request = await fetch(EXTERNAL_DATA_URL);
    // const posts = await request.json();
    const posts=JSON.stringify(obj);
    // We generate the XML sitemap with the posts data
   // console.log(posts);
     const sitemap = generateSiteMap(posts);
  
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }
  
  export default SiteMap;

// export default function SiteMap(){}