import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "wCGuPb6p2BkbtwrQMw6Jco",
      token: "2xbYtGPD2zD5topz7Bzq4eUrkeW5S8ubF8oi0hYjYDo4NsOjzYEikpKwxljrbS2jVnU73123dbjsjwWjg0iw",
    },
  ],
  host: "https://builder.yurekai.com",
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
