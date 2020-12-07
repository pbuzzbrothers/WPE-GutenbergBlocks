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
    HorizontalRule
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

    getMargin(type) {
        let currentMargin = this.props.attributes.margin;
        if( typeof currentMargin == 'object' && currentMargin.hasOwnProperty(type) ) {
            return currentMargin[type];
        }
        
        return null;
    }

    setMargin( type, value ) {
        let currentMargin = this.props.attributes.margin;
        if( typeof currentMargin == 'undefined' ) {
            currentMargin = {};
        }
        this.props.setAttributes( { margin: Object.assign(currentMargin, { [type]: value }) } )
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

        if( typeof className == 'undefined' && typeof deviceType != 'undefined' )
            className = deviceType;
            
        let sectionStyle = {};
        var heightGridTemplateRows = 1;

        // Custom style section
        if( backgroundData !== null && typeof backgroundData != 'undefined' && backgroundData.media_type == 'image' ) {
            Object.assign(sectionStyle, {
                background: 'url(' + backgroundData.media_details.sizes.thumbnail.source_url + ') no-repeat center center',
                backgroundSize: 'cover'
            });
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
        if( typeof attributes.margin == 'object' ) {        
            for( const [key, value] of Object.entries(attributes.margin) ) {
                switch( value ) {
                    case 0:
                        className += ' ' + key + '-none';
                        break;
                    case 1:
                        className += ' ' + key + '-smaller';
                        break;
                    case 2:
                        className += ' ' + key + '-small';
                        break;
                    case 3:
                        className += ' ' + key + '-medium';
                        break;
                    case 4:
                        className += ' ' + key + '-big';
                        break;
                    case 5:
                        className += ' ' + key + '-bigger';
                        break;
                }
            }
        }



        /**
         * Style
         */
        if( typeof attributes.style != 'undefined' && attributes.style != '' )
            className += ' st-' + attributes.style;




        
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
                        return createBlock('custom/wpe-column')
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

                        // Column
                        let currentColumnStart = element.attributes['columnStart' + layout.attributeName] - 1;
                        let currentWidth = element.attributes['width' + layout.attributeName];
                        let maxColumnStart = configTotalColumns - currentWidth;
                        let maxWidth = configTotalColumns - currentColumnStart;

                        let disabledColumnStart = ( maxColumnStart == 0 ) ? true : false;
                        maxColumnStart = ( maxColumnStart == 0 ) ? 1 : maxColumnStart;

                        // Row
                        let currentRowStart = element.attributes['rowStart' + layout.attributeName] - 1;
                        let currentHeight = element.attributes['height' + layout.attributeName];

                        if( currentRowStart + currentHeight > heightGridTemplateRows )
                            heightGridTemplateRows = currentRowStart + currentHeight;

                        let maxHeight = heightGridTemplateRows + 1;
                        let RowStart = maxHeight - currentHeight;

                        gridForm.push(
                            <div key={index} >
                                <HorizontalRule />
                                <label>
                                    <strong>{"Column " + indexLabel}</strong>
                                </label>
                                <div className="flex flex-2 mt-smaller">
                                    <RangeControl
                                        label="Column start"
                                        value={ currentColumnStart }
                                        onChange={ ( value ) => updateColumnAttribute(index, 'columnStart' + layout.attributeName, Number.parseInt(value) + 1) }
                                        min={ 0 }
                                        max={ maxColumnStart }
                                        marks={ [
                                            {
                                                value: 0,
                                                label: '0',
                                            },
                                            {
                                                value: maxColumnStart,
                                                label: maxColumnStart,
                                            }
                                        ] }                                       
                                        withInputField={false}
                                        disabled={ disabledColumnStart }
                                    />
                                    <RangeControl
                                        label="Width"
                                        value={ currentWidth }
                                        onChange={ ( value ) => updateColumnAttribute(index, 'width' + layout.attributeName, Number.parseInt(value)) }
                                        min={ 1 }
                                        max={ maxWidth }
                                        marks={ [
                                            {
                                                value: 0,
                                                label: '1',
                                            },
                                            {
                                                value: maxWidth,
                                                label: maxWidth,
                                            }
                                        ] }    
                                        withInputField={false}
                                    />
                                </div>
                                <div className="flex flex-2">
                                    <RangeControl
                                        label="Row start"
                                        value={ currentRowStart }
                                        onChange={ ( value ) => updateColumnAttribute(index, 'rowStart' + layout.attributeName, Number.parseInt(value) + 1) }
                                        min={ 0 }
                                        max={ RowStart }
                                        marks={ [
                                            {
                                                value: 0,
                                                label: '0',
                                            },
                                            {
                                                value: RowStart,
                                                label: RowStart,
                                            }
                                        ] }    
                                        withInputField={false}
                                    />
                                    <RangeControl
                                        label="Height"
                                        value={ currentHeight }
                                        onChange={ ( value ) => updateColumnAttribute(index, 'height' + layout.attributeName, Number.parseInt(value)) }
                                        min={ 1 }
                                        max={ maxHeight }
                                        marks={ [
                                            {
                                                value: 0,
                                                label: '1',
                                            },
                                            {
                                                value: maxHeight,
                                                label: maxHeight,
                                            }
                                        ] }    
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
            var editDisplay = (
                <InnerBlocks
                    allowedBlocks={ ALLOWED_BLOCKS }
                    __experimentalMoverDirection="horizontal"
                    __experimentalTagName={ Block.div }
                    __experimentalPassedProps={ {
                        className: className,
                        style: sectionStyle
                    } }
                    renderAppender={ false }
                />
            );
        }

        Object.assign(sectionStyle, {
            gridTemplateColumns: 'repeat(' + configTotalColumns + ', [col-start] 1fr)'
        });


        function updateColumnAttribute(indexFunction, attributeName, newValue ) {

            inner_blocks.forEach( ( element, index ) => {

                if( index == indexFunction ) {

                    // Update the child block's attributes
                    if( element.attributes[attributeName] != newValue )
                        dispatch('core/editor').updateBlockAttributes(element.clientId, { [attributeName]: newValue });
                }
            });
        }

        // InspectorControls
        let inspectorControls = '';
        if( ! attributes.gridLocked ) {

            inspectorControls = (
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
                            value={ this.getMargin('pt') }
                            onChange={ ( value ) => 
                                this.setMargin('pt', value)
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                        <RangeControl
                            label="Padding Bottom"
                            value={ this.getMargin('pb') }
                            onChange={ ( value ) =>
                                this.setMargin('pb', value)
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                        <RangeControl
                            label="Margin Top"
                            value={ this.getMargin('mt') }
                            onChange={ ( value ) =>
                                this.setMargin('mt', value)
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                        <RangeControl
                            label="Margin Bottom"
                            value={ this.getMargin('mb') }
                            onChange={ ( value ) =>
                                this.setMargin('mb', value)
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                    </PanelBody>
                </InspectorControls>
            );
        }

        /**
         * Render
         */
        return (
            <>
                { inspectorControls }
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