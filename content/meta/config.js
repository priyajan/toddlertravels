const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Put on your boots, grab that backpack. Lets go on an adventure!", // <title>
  shortSiteTitle: "Toddler traveller", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://toddlertravels.onrender.com/",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Priya and Vivek",
  authorTwitterAccount: "coralpiyu",
  // info
  infoTitle: "Travels with a Toddler",
  infoTitleNote: "Ye! So fun",
  // manifest.json
  manifestName: "Travel Blog",
  manifestShortName: "TravelBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "john@doe.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/coralpiyu" },
    { name: "twitter", url: "https://twitter.com/coralpiyu" },
    { name: "facebook", url: "https://facebook.com/coralpiyu" }
  ]
};
