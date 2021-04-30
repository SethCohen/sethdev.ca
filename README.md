## [Sethdev.ca](https://sethdev.ca/ "sethdev.ca")

[![Website](https://img.shields.io/website?label=sethdev.ca&style=for-the-badge&url=https%3A%2F%2Fsethdev.ca)](https://sethdev.ca/)
![GitHub repo size](https://img.shields.io/github/repo-size/SethCohen/sethdev.ca?style=for-the-badge)

Source code for my personal website.

I'm really proud of how smooth the site functions, from the loading times to the styling to the dynamic content,
everything works wonderfully and efficiently.

---

### A Little Bit More About My Website:

- Styled using the Material UI framework.
- Custom dark theme
- Powered by Gatsby.
- Accessibility; most - if not all - elements have some sort of screenreader accessible attribute for the impaired.
- Full 100s across the board on Chrome's Lighthouse Audit.
- Completely static & client-side oriented, no server-side operations - thus allowing extremely quick loading.
- Internal routing & client-side external redirection.
- Blog Categories.
- Dynamic blog posting using templating; whenever I create a markdown file under the `src/portfolio/` directory, the
  file gets parsed in `sirc/tempaltes/blog-post.js` and added to the `/portfolio/` page.
- Dynamic art gallery; whenever I add an image file to `src/assets/gallery` it will add it to the `/portfolio/gallery`
  page. 
- RSS Feed; all site content gets parsed into an xml that can be accessed from https://sethdev.ca/rss.xml
- Animations, transitions, and effects; various elements have custom onHover effects such as changing gradient colours
  or increasing the size of the element, etc
  
