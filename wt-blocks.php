<?php
/**
 * Plugin Name:       Wt Blocks
 * Description:       Make your own style with our custom blocks.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wt-blocks
 *
 * @package           wt-theme
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function wt_theme_wt_blocks_block_init() {
	register_block_type( __DIR__ . '/build/products-table' );
	register_block_type( __DIR__ . '/build/pros-cons' );
	register_block_type( __DIR__ . '/build/products-htable' );
	register_block_type( __DIR__ . '/build/split-section' );
	register_block_type( __DIR__ . '/build/products-specification' );
	register_block_type( __DIR__ . '/build/product-review-1' );
	register_block_type( __DIR__ . '/build/faq' );
}
add_action( 'init', 'wt_theme_wt_blocks_block_init' );



function _themename_custom_block_categories( $categories ) {
    return array_merge(
        $categories,
        [
            [
                'slug'  => 'wt-blocks',
                'title' => __( '_WT Blocks', 'wholesome-boilerplate' ),
            ],
        ]
    );
}
add_action( 'block_categories', '_themename_custom_block_categories', 10, 2 );