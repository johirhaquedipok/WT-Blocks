import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';


registerBlockType( 'wt-theme/innerfaq', {

	title: __( 'inner faq', 'faq' ),
	description: __( 'A faq item', 'faq' ),
	icon: 'admin-users',
	parent: [ 'wt-theme/faq' ],
	supports: {
		reusable: false,
		html: false,
	},
	edit: Edit,

	save,
} );
