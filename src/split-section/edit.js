import {
	InnerBlocks, useBlockProps
} from '@wordpress/block-editor';
import './editor.scss';


export default function Edit( ) {
	const DEFAULT_TEMPLATE = [
		[ 'core/columns', {},
                        [
                            [ 'core/column', {}, [
                            
                                    [ 'core/image', { } ],
                                ]
                            ],
                            [ 'core/column', {}, [
                                    [ 'core/heading', { content: 'Morbi augue', level: 3 } ],
                                    [ 'core/paragraph', { content: 'Instead of locking the template, you could instead restrict it by stating which blocks you are allowed to insert into it. Simply replace the Edit function with the following code.' } ],
									['core/button', {placeholder: 'click here'}],
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
				template={ DEFAULT_TEMPLATE}
				templateLock="insert"
				renderAppender={ false }
			/>
		
		</div>
	);
}
