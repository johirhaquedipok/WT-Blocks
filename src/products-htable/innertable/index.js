import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';


registerBlockType( 'wt-theme/innertable', {

	title: __( 'innertable', 'products-htable' ),
	description: __( 'A products table item', 'products-htable' ),
	icon: 'admin-users',
	parent: [ 'wt-theme/products-htable' ],
	supports: {
		reusable: false,
		html: false,
	},
	edit: Edit,

	save,
} );
