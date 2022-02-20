import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';


registerBlockType( 'wt-theme/table', {

	title: __( 'Table', 'pros-cons' ),
	description: __( 'Pros N Cons', 'pros-cons' ),
	icon: 'editor-alignleft',
	parent: [ 'wt-theme/pros-cons' ],
	supports: {
		reusable: false,
		html: false,
	},
	
	edit: Edit,
	save,
} );
