import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';


registerBlockType( 'wt-theme/product-table', {

	title: __( 'Product Table', 'products-table' ),
	description: __( 'A products table item', 'products-table' ),
	icon: 'admin-users',
	parent: [ 'wt-theme/products-table' ],
	supports: {
		reusable: false,
		html: false,
	},
	attributes: {
		productTag: {
			type: 'string',
			source: 'html',
			selector: 'span',
		},
		productName: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
		productDetails: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},
	edit: Edit,

	save,
} );
