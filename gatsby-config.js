module.exports = {
  siteMetadata: {
    title: 'Pyza Labs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui'
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `Open Sans\:300,300i,400,400i,600,600i,700,700i,800,800i`
        ]
      }
    },
    'gatsby-plugin-offline',
  ],
}
