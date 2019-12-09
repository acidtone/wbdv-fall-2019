<?php

function enqueue_mobilefirst() {
    wp_enqueue_style( 'mobilefirst-styles', get_stylesheet_directory_uri().'/style.css', false ); 
    wp_enqueue_script( 'mobilefirst-scripts', get_stylesheet_directory_uri().'/js/app.js', false ); 

}

add_action( 'wp_enqueue_scripts', 'enqueue_mobilefirst' );

?>