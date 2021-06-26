const settings = {
  name: "hello-frontity",
  state: {
    frontity: {
      url: process.env.WP_API_URL,
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "my-first-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://wordpress-520827-2003301.cloudwaysapps.com/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
