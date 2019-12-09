# Slide Synopsis 
Creating WordPress themes involves a lot of trial and error.

## Resources to help you
- [WordPress Codex](https://codex.wordpress.org/)
- [StackOverflow](https://stackoverflow.com/questions/tagged/wordpress)

## Activity: Create a New Theme
1. Inside C:/Program Files/XAMPP/htdocs find the sait-wp folder you created yesterday.
2. Inside sait-wp go to wp-content/themes.
3. Create a new directory for your theme. Call it sait.

## Add style.css
A WordPress theme only needs 2 files to exist. 
- index.php
- style.css

## Activity: Theme Created
Your theme has now been created. Let's check it out.
1. Go back to the WordPress dashboard.
2. Click on Appearance > Themes.
3. You should see SAIT as a theme. Activate it.
4. Now go back to localhost/sait-wp. What do you see?

## Some Notes
- We've created a custom theme, but it doesn't do much since it's still basically just static HTML.
- blog.css isn't being loaded.
- This tries to look at but css/blog.css is actually inside.
- Note: To link to anything on a WordPress page, you'll need some PHP.

## Fix the broken CSS link
1. Find this code in your index.php file.
2. Tell it to dynamically link to the themes folder instead.
3. Reload the page. Your blog.css file should now load.
Note: While this works, it's not the proper way to load stylesheets. I'll show you the proper way later.

## index.php
Right now, everything is in index.php. But we want the header,
footer, sidebar, etc. on all the pages to be the same.

To avoid having to create every page with a header, footer, etc., we're going to divide index.php into 4 sections.
- header
- footer
- sidebar - secondary information 
- content - main content and articles

## Activity: dividing index.php
- Create a header.php file. Move everything from <!DOCTYPE html> through the main blog header (lines 1-34ish) to header.php.
- Create a footer.php file. Move everything from </div><!-- and down to footer.php.
- Create a sidebar.php file. Move all sidebar content to sidebar.php. (lines 101-123)
- Create a content.php file. Move all the articles and main content to content.php. (lines 40-97)
- Refresh your page.

## index.php
- The index file should be pretty sparse now.
- Now, we're going to add everything back in.

## Adding the Header Information
- In index.php we pull in the header information by using:
- In header.php we fire the wp_head action which is used to add elements like styles, scripts, and meta tags. It goes directly before the closing &lt;/head&gt; tag.

## Activity: Add a header
1. In index.php add the following code to the top of the page.
2. In `header/php` add the following code right before the closing &lt;/head&gt; tag.
3. Refresh your page.

## Adding the footer information
- In index.php we pull in the footer information by using:
- In footer.php we fire the wp_footer action which is used to add elements like JavaScript files. It goes directly before the closing &lt;/body&gt; tag.

## Activity: Add a footer
1. In index.php add the following code to the bottom of the page.
2. In `footer.php` add the following code right before the closing tag.
3. Refresh your page.

## Adding content
- In `index.php` we pull in the content information by using:
- `$slug` - the slug name for the generic template
- `$name` - the name of the specialized template (optional parameter)
- For our site, we're going to use:
  - This tells WordPress to find a template part called content (`content.php`) and adds it here.
  - `get_post_format()` returns the post format of the post (aside, gallery, link, image, etc.)

## Activity: Add content
1. In index.php add the following code to the main section of the
page (right after &lt;div class="col-sm-8 blog-main"&gt;)
2. Refresh your page.

## Adding a sidebar
- Adding a sidebar is as simple as adding a header and a footer. It's
built in!

## Activity: Adding a sidebar
1. In `index.php` add the following code to the sidebar area (right
after &lt;/div&gt; &lt;!-- /.blog-main --&gt;).
2. Refresh your page.

## We Did It
- We successfully chopped up our index.php into reusable files that
we can use across our site.
- If you're logged in to WordPress, you'll also see a top bar now.

## Adding more wordpress code
Right now, the title and more are all hardcoded in HTML, but we
want to be able to change this in WordPress. Handy WordPress Code
- `get_bloginfo('name');` - site title
- `get_bloginfo('description');` - site tagline
- `get_bloginfo('wpurl');` - WP address

## Activity: Use Wordpress to change info
- In header.php, change the contents of the title tag and h1 tag
- Change the description
- Wrap the h1 tag in a link. Set the href
- In your WordPress Dashboard, go to Settings > General to change the site title and tagline.
- Refresh!

# The Loop
- IF there are posts, WHILE there are posts, DISPLAY the post. 
- Anything inside the loop will be repeated (like a while loop). 
- "contents of the loop" is where we'll put the code we want it to run every time the loop repeats.

## Activity: Add the loop

## Inside the Loop

## Activity: Edit content.php
1. Open content.php and delete everything except the first blog post.
2. Replace the title with &lt;?php the_title(); ?&gt;
3. Replace the blog post date with &lt;?php the_date(); ?&gt;
4. Replace the author with &lt;?php the_author(); ?&gt;
5. Replace all other content with &lt;?php the_content(); ?&gt;
6. Refresh the page. You should see the Hello World post.
7. Create a new blog post to make sure your loop is working.

## Make the sidebar dynamic
Right now, we have hardcoded archives and user
description. But let's make it dynamic instead!!

## Activity: Make the sidebar dynamic
1. In `sidebar.php`, replace the latin placeholder text under About
2. Replace the list items &lt;li&gt; of dates
3. In WordPress, go to Users, click on yourself, and edit your Biographical Info.
4. Refresh the front page.

# Menus and Pages
## Activity: Add a page
1. In the WordPress Dashboard, add an About Page. You can add any
content you want.

## Edit the navbar
We can use the following code to add the navbar where we want it. This allows us to use WordPress to decide what pages show up on the menu.

## Activity: Add a menu
1. In `header.php`, remove everything between your nav tags.
2. Replace the list
3. Refresh your page. You should now see a menu with About and Sample Page on it.

## Some Notes
This code will grab the first menu it sees, or create a default menu, which isn't always what you want. Later, we'll cover how to add support for specific menus to your custom theme.

# Pages
## page.php
While `index.php` is used as the blog index page, we can create a `page.php` to use for pages instead.

## Activity: create page.php
1. Duplicate your index.php file and name the new file `page.php`.
2. In `page.php`, remove this code:
3. Change `col-sm-8` to `col-sm-12` since we're moving from 8 columns wide to the full 12 columns wide after getting rid of the sidebar.
4. Click on About or Sample Page on your WordPress site. You should now see a difference!

## Individual Post Pages
Before we do anything else, we need to be able to access each post individually. Right now, we can only see a list of the posts but there are no links to take us to the single page.

We can add permalinks

This will give us the permalink for each post.