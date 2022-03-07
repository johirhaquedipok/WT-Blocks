import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.scss';
registerBlockType( 'wt-theme/split-section', {
	edit: Edit,
	save,
} );
