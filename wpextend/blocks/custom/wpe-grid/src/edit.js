/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';
import { Component, useRef } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {
    InnerBlocks,
    InspectorControls,
    BlockControls,
    useBlockProps,
    __experimentalUseInnerBlocksProps as useInnerBlocksProps,
    __experimentalBlockVariationPicker,
    __experimentalBlock as Block
} from '@wordpress/block-editor';

import {
    PanelBody,
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

import { MarginControls, generateMarginClassName } from '../../wpe-component/src/_marginControls';

import * as gridConfig from '../../../../json/wpe-grid_config.json';
const configTotalColumns = gridConfig.totalColumns;

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
class WpeGrid extends Component {

	constructor() {
        super( ...arguments );

        this.state = {
            selectedDevice: getLayouts()[0].value,
            defaultClassName: null
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
            clientId,
            inner_blocks,
            innerBlocksProps,
            countColumns,
            blockVariations,
            blockType
        } = this.props;

        if( this.state.defaultClassName === null )
            this.state.defaultClassName = innerBlocksProps.className;

        // Device
        const deviceType = this.getDeviceType();
        if( typeof deviceType != 'undefined' && deviceType != 'undefined' ) {
            innerBlocksProps.className = this.state.defaultClassName + ' ' + deviceType;
        }

        // Padding & Margin
        const className = generateMarginClassName(this.props);
        if( className ) {
            innerBlocksProps.className += className;
        }
            
        let sectionStyle = {};
        var heightGridTemplateRows = 1;


        /**
         * Define innerBlocks
         */
        if( typeof(inner_blocks ) != 'object' || ( typeof(inner_blocks ) == 'object' && countColumns == 0 ) ) {

            var editDisplay = (
                <div { ...innerBlocksProps }>
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
                </div>
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
                <div { ...innerBlocksProps } />
            )
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
                    <MarginControls props={ this.props }/>
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
            innerBlocksProps: useInnerBlocksProps( useBlockProps( { className: '' } ), { renderAppender: false } ),
            countColumns: select( 'core/block-editor' ).getBlockCount(props.clientId),
            blockVariations: select('core/blocks').getBlockVariations(props.name, 'block'),
            blockType: select('core/blocks').getBlockType(props.name)
        };
    } ),
] )( WpeGrid );