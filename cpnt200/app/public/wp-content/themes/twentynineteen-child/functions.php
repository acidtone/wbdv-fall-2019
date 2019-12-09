<?php

add_action( 'wp_enqueue_scripts', 'my_child_enqueue_styles' );

function my_child_enqueue_styles() {
  $parent_style = 'partwentynineteenent-style'; // This is 'twentynineteen-style' for the Twenty Nineteen theme.

  wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' ); 
  
  wp_enqueue_style( 'twentynineteen-child-style',
  get_stylesheet_directory_uri() . '/style.css', array( $parent_style ), wp_get_theme()->get('Version')
); }
?>