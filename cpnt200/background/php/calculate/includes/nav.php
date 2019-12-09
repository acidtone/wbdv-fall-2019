<?php

// Global Navigation
$nav = array(
  'home'  =>  array(
    'label' =>  'Home',
    'link'  =>  'index.php'
  ),
  'services'  =>  array(
    'label' =>  'Services',
    'link'  =>  'services.php'
  ),
  'products'  =>  array(
    'label' =>  'Products',
    'link'  =>  'products.php'
  )
);

$nav_bar = '';

foreach($nav as $key => $value) {
  $nav_bar .= '<li class="'.$key.'"><a href="'.$value['link'].'">'.$value['label']."</a></li>\n";
}

?>