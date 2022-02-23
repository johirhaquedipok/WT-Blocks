import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';

export default function Edit(  ) {
	const DEFAULT_TEMPLATE = [
		[ 'core/image', {} ],
		[ 'core/list', { placeholder: 'Products specification' } ],
	];


	return (
		<>
			<InspectorControls>
			</InspectorControls>
			<div { ...useBlockProps() }>

				<InnerBlocks
                template={ DEFAULT_TEMPLATE }
                templateLock="all"
            />
		
			</div>
		</>
	);
}

