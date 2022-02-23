import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.scss';
registerBlockType( 'wt-theme/product-review-1', {
	edit: Edit,
	save,
} );
