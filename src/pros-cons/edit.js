
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';



export default function Edit() {
	const default_block = 

		[
			[ 'core/columns', {},
                        [
                            [ 'core/column', {}, [
								[ 'core/heading', { content: 'Morbi augue', level: 3 } ],
								[ 'core/columns', {columns: 2, verticalAlignment: 'center'},
												[
													[ 'core/column', {}, [
															[ 'core/heading', { content: 'Positive', level: 4 } ],
															[ 'core/list', {content: 'write your list items',} ],
														]
													],
													[ 'core/column', {}, [
															[ 'core/heading', { content: 'Negative', level: 4 } ],
															[ 'core/list', {content: 'write your list items', } ],
														]
													],
												   
												],
											],
                                ]
                            ],
                    ],
		]

		
        ];

	return (
		<div
			{ ...useBlockProps() }
		>
			<InnerBlocks
				orientation="horizontal"
				template={ default_block }
				templateLock= "all"
			/>
		</div>
	);
}
