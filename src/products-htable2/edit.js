import {
	InnerBlocks, useBlockProps
} from '@wordpress/block-editor';
import './editor.scss';


export default function Edit( ) {
	const DEFAULT_TEMPLATE = [
		[ 'core/image', {} ],
		[ 'core/heading', { placeholder: 'Product Title' } ],
		[ 'core/paragraph', { placeholder: 'Tag Name' } ],
		[ 'core/button', { placeholder: 'Buy Now' } ],
	];

	return (
		<div
			{ ...useBlockProps() }
		>

			
			<InnerBlocks
				// allowedBlocks={ [ 'wt-theme/innertable' ] }
				template={ DEFAULT_TEMPLATE }
			/>
		
		</div>
	);
}
