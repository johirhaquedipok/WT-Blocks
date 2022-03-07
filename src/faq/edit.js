
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';



export default function Edit() {
	const default_block = 

							[
								[ 'core/heading', { content: 'FAQ', level: 3 } ],
								[ 'core/columns', {},
								[
													[ 'core/column', {}, [
															[ 'core/heading', { content: 'Write your Faq', level: 4 } ],
															[ 'core/paragraph', { content: 'I used multiple inner blocks to make a new block for me. And I found a problem. The problem is after every block if I hover over there is a block appender popping up though I used the props Morbi augue'} ],
														]
													],
													
												],
											],
        					];

	return (
		<div
			{ ...useBlockProps() }
		>
			<InnerBlocks
				orientation="horizontal"
				template={ default_block }
				allowedBlocks={['wt-theme/innerfaq']}
			/>
		</div>
	);
}
