import {
    InnerBlocks, useBlockProps
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
    return (
        <div { ...useBlockProps() }>
            <InnerBlocks
                template={ [
                    [ 'core/columns', {},
                        [
                            [ 'core/column', {}, [
                            
                                    [ 'core/image', { } ],
                                ]
                            ],
                            [ 'core/column', {}, [
                                    [ 'core/paragraph', { content: 'Lorem Ipsum ' } ],
                                ]
                            ],
                            [ 'core/column', {}, [
                                    [ 'core/paragraph', { content: '$200',  } ],
                                ]
                            ],
                            [ 'core/column', {}, [
                                    [ 'core/button', { text : 'Buy Now',
                                    align : 'center', } ],
                                ]
                            ],
                        ]
                    ],
                ] }

                templateLock="all"
            />
        </div>
    );
}