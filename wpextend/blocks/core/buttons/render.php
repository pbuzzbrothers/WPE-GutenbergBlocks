<?php

if( ! function_exists( 'core_buttons_render_callback' ) ) {

    function core_buttons_render_callback( $attributes, $content ) {

        preg_match( '/^<div class="wp-block-buttons[^"]*">(.*)<\/div>$/ms', $content, $matches );
        if( count($matches) == 2 ) {

            return '<div class="' . \Wpextend\GutenbergBlock::get_container_class_name() . '">
                <div class="row">' . $matches[1] . '</div>
            </div>';
        }
    }

}