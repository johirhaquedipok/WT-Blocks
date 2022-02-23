import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Edit(  ) {
	const DEFAULT_TEMPLATE = [
		[ 'core/buttons', { placeholder: 'Buy Now' } ]
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

