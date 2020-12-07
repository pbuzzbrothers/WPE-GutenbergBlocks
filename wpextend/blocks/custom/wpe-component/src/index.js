import { registerBlockType } from '@wordpress/blocks';

import {
    InnerBlocks
} from '@wordpress/block-editor';

import frontspec from '../../../../../frontspec.json';

/**
 * Internal dependencies
 */
import edit from './edit';

frontspec.components.forEach( ( element ) => {

    var initAttributes = {
        id_component: {
            type: 'string'
        },
        margin: {
            type: 'object'
        }
    };

    for (const [key, value] of Object.entries(element.props)) {
        
        let currentType = value.type;
        if( typeof value.repeatable != 'undefined' && value.repeatable ) {
            currentType = 'array';
        }

        switch( currentType ) {
            case 'string':
                initAttributes[key] = {
                    type: 'string'
                };
                break;
            case 'text':
                initAttributes[key] = {
                    type: 'string'
                };
                break;
            case 'richText':
                initAttributes[key] = {
                    type: 'string'
                };
                break;
            case 'boolean':
                initAttributes[key] = {
                    type: 'boolean'
                };
                break;
            case 'select':
                initAttributes[key] = {
                    type: 'string'
                };
                break;
            case 'relation':
                initAttributes[key] = {
                    type: 'number'
                };
                break;
            case 'array':
                initAttributes[key] = {
                    type: 'array'
                };
                break;
            case 'object':
                initAttributes[key] = {
                    type: 'object'
                };
                break;
            case 'number':
                initAttributes[key] = {
                    type: 'number'
                };
                break;
            case 'image':
                initAttributes[key] = {
                    type: 'object'
                };
                break;
            case 'file':
                initAttributes[key] = {
                    type: 'object'
                };
                break;
            case 'gallery':
                initAttributes[key] = {
                    type: 'array'
                };
                break;
        }
    }

    registerBlockType( 'custom/wpe-component-' + element.id, {
        title: element.name,
        parent: [ 'custom/wpe-column' ],
        attributes: initAttributes,
        description: element.description,
        edit,
        save: () => {
            return (
                <InnerBlocks.Content />
            );
        }
    } );
});