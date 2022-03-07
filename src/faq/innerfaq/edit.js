import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Edit(  ) {
	const DEFAULT_TEMPLATE = [
		
		[ 'core/column', {}, [
			[ 'core/heading', { content: 'Write some frequently asked question', level: 4 } ],
			[ 'core/paragraph', {content: 'I used multiple inner blocks to make a new block for me. And I found a problem. The problem is after every block if I hover over there is a block appender popping up though I used the props Morbi augue' } ],
		]
	],
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

