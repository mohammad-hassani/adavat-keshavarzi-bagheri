import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "",
  siteUrl: "https://hasani.id.ir",
  siteName: "ادوات کشاورزی باقری",
  siteDescription:
    "Tis is a personal website blog, built with Next.js, MDX, and Tailwind CSS.",
  siteThumbnail: "https://hasani.id.ir/assets/bl33hIcon-01f3a8f7.png?raw=true",
  nav: [
    { label: "محصولات", href: "/posts" },
    { label: "درباره ما", href: "/about" },
  ],
  social: {
    instagram: "https://www.instagram.com/hassani_mohammad_mh/",
    phone: "tell:09137357024",
    mail: "mailto:hasani9821.mh@gmail.com",
  },
};
export default siteConfig;
