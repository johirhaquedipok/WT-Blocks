<?php
/**
 * Plugin Name:       Wt Blocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
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
	register_block_type( __DIR__ . '/build/products-htable2' );
	register_block_type( __DIR__ . '/build/products-specification' );
	register_block_type( __DIR__ . '/build/product-review-1' );
}
add_action( 'init', 'wt_theme_wt_blocks_block_init' );
