import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Edit(  ) {
	const DEFAULT_TEMPLATE = [
		[ 'core/paragraph', { placeholder: 'Tag Name' } ],
		[ 'core/image', {} ],
		[ 'core/heading', { placeholder: 'Product Title' } ],
		[ 'core/paragraph', { placeholder: 'Product Details' } ],
		[ 'core/button', { placeholder: 'Buy Now' } ],
	];


	return (
		<>
			<div { ...useBlockProps() }>

				<InnerBlocks
                template={ DEFAULT_TEMPLATE }
                templateLock="all"
            />
		
			</div>
		</>
	);
}

