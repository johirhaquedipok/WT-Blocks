
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import './innerfaq';
import save from './save';
import './style.scss';
registerBlockType( 'wt-theme/faq', {
	edit: Edit,
	save,
} );
