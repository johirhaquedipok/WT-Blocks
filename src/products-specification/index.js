import { registerBlockType } from '@wordpress/blocks';
import './artbutton';
import Edit from './edit';
import './headwithpara';
import './listimage';
import save from './save';
import './style.scss';
registerBlockType( 'wt-theme/products-specification', {
	edit: Edit,
	save,
} );
