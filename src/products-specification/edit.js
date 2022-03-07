import {
	InnerBlocks, useBlockProps
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( ) {
	return (
		<div
			{ ...useBlockProps( ) }
		>
			
			<InnerBlocks
				allowedBlocks={ [[ 'wt-theme/listimage' ], 
				['wt-theme/headwithpara'],
				['wt-theme/artbutton']]  }

				template={ [
					['wt-theme/headwithpara'],
					[ 'wt-theme/listimage' ],
					['wt-theme/artbutton']
				] }
			/>
		
		</div>
	);
}
