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
                                    [ 'core/paragraph', { content: 'Morbi augue ' } ],
                                ]
                            ],
                            [ 'core/column', {}, [
                                    [ 'core/paragraph', { content: '$200' } ],
                                ]
                            ],
                            [ 'core/column', {}, [
                                    [ 'core/button', { placeholder : 'Button 1',
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