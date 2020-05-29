<?php

function core_columns_render_callback( $attributes, $content ) {

    preg_match( '/^<div class="wp-block-columns[^"]*">(.*)<\/div>$/ms', $content, $matches );
    if( count($matches) == 2 ) {

        return '<div class="container">
            <div class="row box">' . $matches[1] . '</div>
        </div>';
    }
}