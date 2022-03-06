
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';



export default function Edit() {
	const default_block = 

		[
			[ 'core/columns', {},
                        [
                            [ 'core/column', {}, [
								[ 'core/heading', { content: 'Morbi augue', level: 3 } ],
								[ 'core/columns', {},
												[
													[ 'core/column', {}, [
															[ 'core/heading', { content: 'Positive', level: 4 } ],
															[ 'core/list', { } ],
														]
													],
													[ 'core/column', {}, [
															[ 'core/heading', { content: 'Negative', level: 4 } ],
															[ 'core/list', { } ],
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
			/>
		</div>
	);
}
