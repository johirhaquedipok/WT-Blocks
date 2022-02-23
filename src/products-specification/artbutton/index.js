import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';


registerBlockType( 'wt-theme/artbutton', {

	title: __( 'heading with para', 'products-specification' ),
	description: __( 'A products specification block.', 'products-specification' ),
	icon: 'minus',
	parent: [ 'wt-theme/products-specification' ],
	supports: {
		reusable: false,
		html: false,
	},
	edit: Edit,

	save,
} );
