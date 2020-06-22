module.exports = {
  siteMetadata: {
    title: `iiriya`,
    author: `Lucio Benini`,
    description: `coffee free since 2004`,
    locale: {
      language: `it`,
      culture: `IT`
    },
    siteUrl: `https://iiriya.com/`,
    legal: {
      privacy: '/legal/privacy',
      terms: '/legal/tos',
      cookies: '/legal/cookies'
    },
    organization: {
      company: `Lucio Benini`,
      address: `Via Garigliano, 4`,
      url: `https://iiriya.com/`,
      logo: `https://iiriya.com/logo.png`,
      zipCode: `48121`,
      city: `Ravenna`,
      province: `RA`,
      country: `Italia`,
      email: `iiriya@iiriya.com`,
      taxId: `BNNLCU85D11H199I`,
      vatId: `02428060392`,
      registryId: ``
    },
    appearance: {
      accent: `#fC074f`,
      background: `#ffffff`,
      theme: `#1d1d1d`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-36380372-1`,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'iiriya.com',
        ErrorDocument: `
          ErrorDocument 401 /error/401/index.html
          ErrorDocument 403 /error/403/index.html
          ErrorDocument 404 /error/404/index.html
          ErrorDocument 500 /error/500/index.html
        `
      }
    },
    {
      resolve: `gatsby-plugin-iubenda-cookie-footer`,
      options: {
        iubendaOptions: {
          "lang": "it",
          "siteId": 1781270,
          "countryDetection": true,
          "consentOnContinuedBrowsing": false,
          "cookiePolicyInOtherWindow": true,
          "cookiePolicyId": 29008249,
          "cookiePolicyUrl": "https://iiriya.com/legal/cookies",
          "banner": {
            "position": "float-top-center",
            "textColor": "#fff",
            "backgroundColor": "#1d1d1d",
            "acceptButtonDisplay": true,
            "acceptButtonColor": "#fC074f",
            "acceptButtonCaptionColor": "#fff"
          }
        }
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Iiriya's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Iiriya`,
        short_name: `Iiriya`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FC074F`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    {
      resolve: `@pittica/gatsby-plugin-seo`,
      options: {
        image: `/assets/icons/iiriya-512x512.jpg`,
        socials: {
          twitter: {
            username: "DarkAion"
          },
          github: {
            username: `iiriya`
          },
          facebook: {
            page: `iiriya`,
            app: `1600413680199158`
          },
          linkedin: {
            page: `iiriya`
          }
        }
      }
    }
  ]
}
