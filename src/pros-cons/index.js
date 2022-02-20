
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.scss';
import './table';



registerBlockType( 'wt-theme/pros-cons', {
	edit: Edit,
	save,
} );
