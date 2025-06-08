// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
const baseUrl = import.meta.env.BASE_URL;
// Site config
export const SITE_URL = "https://nyung.netlify.app"; // your https url
export const SITE_TITLE = "NyungLog"; // your base page title
export const SITE_DESCRIPTION = "웹 서비스 기술 블로그"; // your base description
export const HEADER_TITLE = "NyungLog"; // your title used in header
export const LOGO_FILE_NAME = "kitty.png"; // put your logo in 'public' folder
export const OPEN_GRAPH_IMAGE = "og-image.png"; // put the image in 'public' folder
export const LOCALE = "en-EN";

// Analytics
export const GOOGLE_ANALYTICS_ID = "";

// Home page
export const POST_ON_HOME_PAGE = 6; // amount off post on main page
export const POSTS_PER_PAGE = 4; // Pagination on 'Posts' page

// Social config
export const SHOW_SOCIAL_LINKS = true;
export const GITHUB = "https://github.com/nyungnim";
export const LINKEDIN = "";
export const X = "";
export const FACEBOOK = "";
export const INSTAGRAM = "";
export const EMAIL = "nyu0kim@gmail.com";
export const RSS = `${baseUrl}/rss.xml`;
