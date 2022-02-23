import {
	InnerBlocks, useBlockProps
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
    return (
        <div { ...useBlockProps() }>
            <InnerBlocks
                template={ [
                    [ 'core/heading', { level: 2, content: 'Example Nested Block Template' } ],
                    [ 'core/paragraph', { content: 'Lorem ipsum dolor sit amet labore cras venenatis.' } ],
                    [ 'core/columns', {},
                        [
                            [ 'core/column', {}, [
                                    [ 'core/image', { } ],
                                ]
                            ],
                            [ 'core/column', {}, [
                                    [ 'core/list', { content: 'list item' } ],
                                ]
                            ],
                        ]
                    ],
					[ 'core/buttons', { placeholder: 'Buy Now' } ],
                ] }
                templateLock="all"
            />
        </div>
    );
}

