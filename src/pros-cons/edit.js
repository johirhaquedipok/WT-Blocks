
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';



export default function Edit() {

	return (
		<div
			{ ...useBlockProps( {
				className: `has-2-columns`,
			} ) }
		>
			<InnerBlocks
				allowedBlocks={ [ 'wt-theme/table' ] }
				templateLock="all"
				orientation="horizontal"
				template={ [
					[ 'wt-theme/table' ],
					[ 'wt-theme/table' ],
				] }
			/>
		</div>
	);
}
