import {
	InnerBlocks,
	InspectorControls, useBlockProps
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { columns } = attributes;

	const onChangeColumns = ( newColumns ) => {
		setAttributes( { columns: newColumns } );
	};
	return (
		<div
			{ ...useBlockProps( {
				className: `has-${ columns }-columns`,
			} ) }
		>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Columns', 'products-htable' ) }
						min={ 1 }
						max={ 6 }
						onChange={ onChangeColumns }
						value={ columns }
					/>
				</PanelBody>
			</InspectorControls>
			
			<InnerBlocks
				allowedBlocks={ [ 'wt-theme/innertable' ] }
				template={ [
					[ 'wt-theme/innertable' ],
				] }
			/>
		
		</div>
	);
}
