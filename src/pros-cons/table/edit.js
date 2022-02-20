import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';


export default function Edit(  ) {
	const DEFAULT_TEMPLATE = [
		[ 'core/paragraph', { placeholder: 'Positive/Negative' } ],
		[ 'core/list', { placeholder: 'Product Title' } ],
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