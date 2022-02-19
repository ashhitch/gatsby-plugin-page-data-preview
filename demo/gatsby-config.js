module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-page-data-preview",
      options: {
        onlyDev: false,
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {},
    },
  ],
};
