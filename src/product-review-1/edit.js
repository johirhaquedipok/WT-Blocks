import {
    InnerBlocks, useBlockProps, useInnerBlocksProps
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
    const innerBlocksProps = useInnerBlocksProps();

    return (
        <div { ...useBlockProps() }>
            <div {...innerBlocksProps}>
            <InnerBlocks
                template={ [

                    ['core/columns', { columns: 1 },
                        [
                            ['core/column', {}, 
                        
                                [
                                    [ 'core/heading', { level: 2, content: 'Example Nested Block Template' } ],
                                    [ 'core/paragraph', { content: 'Lorem ipsum dolor sit amet labore cras venenatis.' } ],
                                    [ 'core/columns', { columns: 2, verticalAlignment: 'center' },
                                    [
                                        [ 'core/column', {}, [
                                            [ 'core/image', { } ],
                                        ]
                                    ],
                                    [ 'core/column', {}, [
                                                    [ 'core/list', { content: 'list item',  } ],
                                                ]
                                            ],
                                        ]
                                    ],

                                    [ 'core/button', { text: 'Buy Now',  align: 'center' } ],
                                ]
                            ]
                        ]
                    ]
                  
                ] }
                templateLock="all"
                // renderAppender={false}
                // allowedBlocks= {false}
            />
            </div>
        </div>
    );
}


