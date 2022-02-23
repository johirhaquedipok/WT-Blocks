import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.scss';
registerBlockType( 'wt-theme/products-htable2', {
	edit: Edit,
	save,
} );
