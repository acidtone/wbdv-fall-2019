# Day 04: Pages, Posts and Theme Extras
## Posts vs Pages
### Pages
- great for content
  - that is important enough to be in the navigation
  - that doesn't change often
  - adding structured layouts
    - Codex: [Page Templates](https://developer.wordpress.org/themes/template-files-section/page-template-files/)
    - Codex: [Custom Templates](https://developer.wordpress.org/themes/template-files-section/page-template-files/#creating-a-custom-page-template-for-one-specific-page)
    - Codex: [Template Partials](https://developer.wordpress.org/themes/template-files-section/partial-and-miscellaneous-template-files/#content-slug-php)
    - Note: Template pages overide custom pages
- not a lot of options
  - limited settings
  - no scheduling

### Posts 
- great for content that
  - has an author(s)
  - has a category
    - Codex: [Post Categories](https://en.support.wordpress.com/posts/categories/)
  - can be tagged
    - Codex: [Post Tags](https://en.support.wordpress.com/posts/tags/)
  - has a date
    - is organized by date
    - needs to be scheduled
- each post type can be assigned a page template
  - Codex: [Post Templates](https://developer.wordpress.org/themes/template-files-section/post-template-files/)
- don't support custom templates
- can be customized by setting a [Post Format](https://developer.wordpress.org/themes/functionality/post-formats/) (the theme must explicitly support this)

### Questions to ask
- How often is the content changing?
- How often is new content added?
  - Is it published on a regular(ish) schedule?
  - How much of it is there?
  - How much will there (hopefully) be?
  - Would tagging help filter the content?
- Does the content naturally fall into categories?
- Is author attribution important?

## Template Parts
- Codex: [Template Parts](https://developer.wordpress.org/themes/template-files-section/partial-and-miscellaneous-template-files/#content-slug-php)
- Article: [`get_template_part()`: What and Why](https://wpshout.com/get-template-part/)

## Menus
- Codex: [Navigation Menus](https://codex.wordpress.org/Navigation_Menus)
- Video Tutorial: [Wordpress Menus](https://www.youtube.com/watch?v=ERpr0TCnf4w) by Buildapreneur

## Extras
- Codex: [Categories, Tags and Custom Taxonomies](https://developer.wordpress.org/themes/basics/categories-tags-custom-taxonomies/)
- Codex: [Gutenberg Block Editor](https://developer.wordpress.org/block-editor/)
