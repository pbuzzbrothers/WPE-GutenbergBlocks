/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {
    InnerBlocks,
    InspectorControls,
    BlockControls,
    MediaPlaceholder,
    __experimentalBlockVariationPicker,
    __experimentalBlock as Block
} from '@wordpress/block-editor';

import {
    PanelBody,
    SelectControl,
    Button,
    ButtonGroup,
    RangeControl,
    Dropdown,
    ToolbarGroup,
    MenuGroup,
    MenuItem,
    HorizontalRule,
    TextControl
} from '@wordpress/components';

import { withSelect, dispatch } from '@wordpress/data';
import { get, map, times } from 'lodash';
import { mobile, tablet, desktop } from '@wordpress/icons';

import * as blockConfig from '../../../../json/wpe-container_config.json';
const configTotalColumns = blockConfig.totalColumns;

/**
 * Some constants
 */
const ALLOWED_BLOCKS = [ 'custom/wpe-column' ];

/**
 * Add some columns in wpe-container based on variation selected
 *
 */
function createBlocksFromInnerBlocksTemplate ( innerBlocksTemplate ) {

    return map(
        innerBlocksTemplate,
        ( { name, attributes } ) =>
            createBlock(
                name,
                attributes
            )
    );
}


const getLayouts = () => ( [
	{ value: 'desktop', label: 'Desktop', attributeName: 'Desktop', icon: desktop },
	{ value: 'tablet', label: 'Tablet', attributeName: 'Tablet', icon: tablet  },
	{ value: 'mobile', label: 'Mobile', attributeName: 'Mobile', icon: mobile },
] );

/**
 * registerBlockType edit function
 */
class WpeContainer extends Component {

	constructor() {
        super( ...arguments );

        this.state = {
			selectedDevice: getLayouts()[0].value
		};
    }

    getDeviceType() {
		return this.state.selectedDevice;
    }


    setDeviceType(deviceType) {
        this.setState( { selectedDevice: deviceType } );
    }

    render() {

        var {
			attributes,
			setAttributes,
			className,
			backgroundData,
            clientId,
            inner_blocks,
            countColumns,
            blockVariations,
            blockType
        } = this.props;
        
        const deviceType = this.getDeviceType();

        className += ' ' + deviceType;       

        // Custom style section
        let sectionStyle = {};
        if( backgroundData !== null && typeof backgroundData != 'undefined' && backgroundData.media_type == 'image' ) {
            sectionStyle = {
                background: 'url(' + backgroundData.media_details.sizes.thumbnail.source_url + ') no-repeat center center',
                backgroundSize: 'cover'
            };
        }

        // Section background
        const titleMediaPlaceholder = ( backgroundData !== null && typeof backgroundData != 'undefined' ) ? backgroundData.media_type == 'image' ? 'Edit image' : backgroundData.title.raw + ' (' + backgroundData.mime_type + ')' : 'Image/Video';
        const mediaPreview = !! backgroundData && (
            <img
                alt={ titleMediaPlaceholder }
                title={ titleMediaPlaceholder }
                className={ 'edit-image-preview' }
                src={ backgroundData.media_type == 'image' ? backgroundData.media_details.sizes.thumbnail.source_url : '/wp/wp-includes/images/media/video.png' }
            />
        );
        const removeButton = !! backgroundData && (
            <Button isLarge onClick={ () => { setAttributes( { backgroundFile: null, backgroundType: null } ); } }>
                { 'Remove' }
            </Button>
        );
        const mediaPlaceholder = (
            <MediaPlaceholder
                onSelect={
                    ( el ) => {
                        setAttributes( { backgroundFile: el.id, backgroundType: el.type } );
                    }
                }
                allowedTypes= { [ 'image', 'video' ] }
                multiple= { false }
                labels={ { title: titleMediaPlaceholder } }
                mediaPreview = { mediaPreview }
                value={ { id: attributes.backgroundFile } }
                disableMediaButtons={ false }>
                { removeButton }
            </MediaPlaceholder>
        );

        /**
         * Padding & Margin
         */
        [
            { name: 'paddingTop', prefix: 'pt', default: 3 },
            { name: 'paddingBottom', prefix: 'pb', default: 3 },
            { name: 'marginTop', prefix: 'mt', default: 0 },
            { name: 'marginBottom', prefix: 'mb', default: 0 }
        ].forEach( ( attribute ) => {

            switch( attributes[attribute.name] ) {

                case 0:
                    className += ' ' + attribute.prefix + '-none';
                    break;
        
                case 1:
                    className += ' ' + attribute.prefix + '-smaller';
                    break;
        
                case 2:
                    className += ' ' + attribute.prefix + '-small';
                    break;
        
                case 3:
                    className += ' ' + attribute.prefix + '-medium';
                    break;
        
                case 4:
                    className += ' ' + attribute.prefix + '-big';
                    break;
        
                case 5:
                    className += ' ' + attribute.prefix + '-bigger';
                    break;
        
                default:
                    attributes[attribute.name] = attribute.default;
            }
        });


        
        /**
         * Define innerBlocks
         */
        if( typeof(inner_blocks ) != 'object' || ( typeof(inner_blocks ) == 'object' && countColumns == 0 ) ) {

            var editDisplay = (
                <__experimentalBlockVariationPicker
                    icon={ get( blockType, [ 'icon', 'src' ] ) }
                    label={ get( blockType, [ 'title' ] ) }
                    variations={ blockVariations }
                    onSelect={ ( nextVariation ) => {
                        if ( nextVariation.innerBlocks ) {
                            dispatch( 'core/block-editor' ).replaceInnerBlocks(
                                clientId,
                                createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks ),
                                false
                            );
                        }
                        if( nextVariation.attributes ) {
                            dispatch('core/editor').updateBlockAttributes( clientId, nextVariation.attributes );
                        }
                    } }
                />
            );

            var gridForm = null;
        }
        else {

            /**
             * Add or remove columns
             */
            if( attributes.gridCountColumns > countColumns ) {

                let numberOfColumnsToAdd = attributes.gridCountColumns - countColumns;
                let inner_blocks_new = [
                    ...inner_blocks,
                    ...times( numberOfColumnsToAdd, () => {
                        return createBlock('custom/wpe-column', { "startDesktop": 1, "widthDesktop": 1, "startTablet": 1, "widthTablet": 1, "startMobile": 1, "widthMobile": 1 } )
                    } )
                ];
                dispatch( 'core/block-editor' ).replaceInnerBlocks(clientId, inner_blocks_new, false);
                inner_blocks = inner_blocks_new;
            }
            else if( attributes.gridCountColumns < countColumns ) {
            
                let inner_blocks_new = inner_blocks.slice(0, attributes.gridCountColumns);
                dispatch( 'core/block-editor' ).replaceInnerBlocks(clientId, inner_blocks_new, false);
            }


            
            var gridForm = [];
            /**
             * Update grid
             */
            getLayouts().forEach( ( layout ) => {

                // Loop on each columns to update start and width attributes
                inner_blocks.forEach( ( element, index ) => {

                    if( layout.value === deviceType ) {

                        let indexLabel = index + 1;
                        let currentStart = element.attributes['start' + layout.attributeName] - 1;
                        let currentWidth = element.attributes['width' + layout.attributeName];
                        let maxStart = configTotalColumns - currentWidth;
                        let maxWidth = configTotalColumns - currentStart;

                        let disabledStart = ( maxStart == 0 ) ? true : false;
                        maxStart = ( maxStart == 0 ) ? 1 : maxStart;

                        gridForm.push(
                            <div key={index} >
                                <HorizontalRule />
                                <label>
                                    <strong>{"Column " + indexLabel}</strong>
                                </label>
                                <div className="flex flex-2 mt-smaller">
                                    <RangeControl
                                        label="Start"
                                        value={ currentStart }
                                        onChange={ ( value ) => updateColumnAttribute(index, 'start' + layout.attributeName, Number.parseInt(value) + 1) }
                                        min={ 0 }
                                        max={ maxStart }
                                        withInputField={false}
                                        disabled={ disabledStart }
                                    />
                                    <RangeControl
                                        label="Width"
                                        value={ currentWidth }
                                        onChange={ ( value ) => updateColumnAttribute(index, 'width' + layout.attributeName, Number.parseInt(value)) }
                                        min={ 1 }
                                        max={ maxWidth }
                                        withInputField={false}
                                    />
                                </div>
                            </div>
                        );
                    }
                });
            });



            /**
             * Render edit
             */
            const css = `.block-editor-block-list__layout{ grid-template-columns: repeat(` + configTotalColumns + `, [col-start] 1fr); }`
            var editDisplay = (
                <div className={ className } style={ sectionStyle }>
                    <style>{css}</style>
                    <InnerBlocks
                        allowedBlocks={ ALLOWED_BLOCKS }
                        renderAppender={ false }
                    />
                </div>
            );
        }



        function updateColumnAttribute(indexFunction, attributeName, newValue ) {

            inner_blocks.forEach( ( element, index ) => {

                if( index == indexFunction ) {

                    // Update the child block's attributes
                    if( element.attributes[attributeName] != newValue )
                        dispatch('core/editor').updateBlockAttributes(element.clientId, { [attributeName]: newValue });
                }
            });
        }



        /**
         * Render
         */
        return (
            <>
                <InspectorControls>
                    <PanelBody>
                        <RangeControl
                            label="Number of columns"
                            value={ attributes.gridCountColumns }
                            onChange={ ( value ) => setAttributes( { gridCountColumns: value } ) }
                            min={ 1 }
                            max={ configTotalColumns }
                        />
                    </PanelBody>
                    <PanelBody title={ 'Responsive layout' } initialOpen={ true }>
                        <ButtonGroup>
                            { getLayouts().map( ( layout ) => (
                                <Button
                                    key={ layout.value }
                                    isPrimary={ layout.value === deviceType }
                                    onClick={ () => this.setDeviceType( layout.value ) }
                                >
                                    { layout.label }
                                </Button>
                            ) ) }
                        </ButtonGroup>
                        <div className="mt-smaller">
                            { gridForm }
                        </div>
                    </PanelBody>
                    <PanelBody title={ 'Style' } initialOpen={ false }>
                        <SelectControl
                            label="Style"
                            value={ attributes.style }
                            options={ [
                                { label: 'Default', value: '' },
                                { label: 'Light', value: 'light' },
                                { label: 'Dark', value: 'dark' }
                            ] }
                            onChange={ ( value ) =>
                                setAttributes( { style: value } )
                            }
                        />
                    </PanelBody>
                    <PanelBody title={ 'Background' } initialOpen={ false }>
                        { mediaPlaceholder }
                    </PanelBody>
                    <PanelBody title={ 'Padding/Margin' } initialOpen={ false }>
                        <RangeControl
                            label="Padding Top"
                            value={ attributes.paddingTop }
                            onChange={ ( value ) =>
                                setAttributes( { paddingTop: value } )
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                        <RangeControl
                            label="Padding Bottom"
                            value={ attributes.paddingBottom }
                            onChange={ ( value ) =>
                                setAttributes( { paddingBottom: value } )
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                        <RangeControl
                            label="Margin Top"
                            value={ attributes.marginTop }
                            onChange={ ( value ) =>
                                setAttributes( { marginTop: value } )
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                        <RangeControl
                            label="Margin Bottom"
                            value={ attributes.marginBottom }
                            onChange={ ( value ) =>
                                setAttributes( { marginBottom: value } )
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    <Dropdown
                        renderToggle={ ( { isOpen, onToggle } ) => (
                            <ToolbarGroup>
                                <Button
                                    aria-expanded={ isOpen }
                                    onClick={ onToggle }
                                    icon={ getLayouts().find( ( layout ) => layout.value === deviceType ).icon }
                                />
                            </ToolbarGroup>
                        ) }
                        renderContent={ ( { onClose } ) => (
                            <MenuGroup>
                                { getLayouts().map( ( layout ) => (
                                    <MenuItem
                                        key={ layout.value }
                                        isSelected={ layout.value === deviceType }
                                        onClick={ () => this.setDeviceType( layout.value ) }
                                        icon={ layout.icon }
                                    >
                                        { layout.label }
                                    </MenuItem>
                                ) ) }
                            </MenuGroup>
                        ) }
                    />
                </BlockControls>
                { editDisplay }
            </>
        );
    }
}

export default compose( [
	withSelect( ( select, props ) => {

        return {
            backgroundData: ! props.attributes.backgroundFile ? null : select('core').getEntityRecord('postType', 'attachment', props.attributes.backgroundFile ),
            inner_blocks: select('core/block-editor').getBlocks(props.clientId),
            countColumns: select( 'core/block-editor' ).getBlockCount(props.clientId),
            blockVariations: select('core/blocks').getBlockVariations(props.name, 'block'),
            blockType: select('core/blocks').getBlockType(props.name)
        };
    } ),
] )( WpeContainer );