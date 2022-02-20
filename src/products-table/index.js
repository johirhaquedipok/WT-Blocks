import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import './product-table';
import save from './save';
import './style.scss';
registerBlockType( 'wt-theme/products-table', {
	edit: Edit,
	save,
} );
