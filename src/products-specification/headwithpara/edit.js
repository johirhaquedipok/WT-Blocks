import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Edit(  ) {
	const DEFAULT_TEMPLATE = [
		[ 'core/heading', { placeholder: 'Products specification' } ],
		[ 'core/paragraph', { placeholder: 'Products specification' } ],
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

