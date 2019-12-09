# Chapter 01: Options for themes
## Minimum Theme
- fixing the 'broken' theme
- minimum requirements
  - style.css
  - index.php

## Basic Theme
- creating a minimal theme from static html
- it works, but relative links require a wp function to operate
  - `get_template_directory_uri()`.'/css/path/here.css'

## Enqueue
- adding external css and js to your theme
- linking to external styles and scripts the "right" way
- use add_action to add your hook function
  - `add_action('wp_enqueue_scripts', '[name-of-function]')`
- create your hook function to create link and script tags
  - styles: `wp_enqueue_style('blendmode-styles',paht-to-css,false);`
  - scripts: `wp_enqueue_script('blendmode-scripts',path-to-js, false);`

## Child Themes
- creating a child theme from twentynineteen
- directory functions for enqueue:
  - `get_template_directory_uri()`
    - return the path to the parent theme folder
  - `get_stylesheet_directory_uri()`
    - returns the path to the child theme, if it exists (returns parent, otherwise)

## Custom Themes
- Chopshop exercise: sait-theme

## Theme Mods
- Playing with underscores
