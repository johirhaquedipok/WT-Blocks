
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';


export default function save() {
	return (
		<div
			{ ...useBlockProps.save( {
				className: `has-2-columns`,
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
