# nuxt-netlifycms

## Stack

This is going to be my personal website.

I started with Nuxt, Vue 3, Tailwind, Netlify, Netlify CMS, and added Storybook.  
My Netlify CMS has been configured to use a local editing dashboard.

Now I'm adding prebuilt components from a wonderful free theme by
[Creative Tim](https://www.creative-tim.com/)  
[Vue Notus](https://www.creative-tim.com/product/vue-notus)

I have removed postCss and tailwind from the Nuxt version and am running these from a subdirectory. The reason being, @nuxt/tailwind was using an older version of PostCss and would not allow me all the configurations I wanted. I also plan to upgrade nuxt/Vue as soon as the new version is out and this will allow easy upgrade.

I'm going to deploy both the CMS version and the storybook version with Netlify

TODO

- [x] Wire in browser-syc, for a better tailwind watch
- [ ] Create data structure in Netlify CMS
- [ ] Create pages with new or existing components
- [ ] Wire the stories with fake data /or CMS data, undecided
- [ ] Customize Tailwind for my own design
- [ ] Customize the local dashboard for CMS editing
