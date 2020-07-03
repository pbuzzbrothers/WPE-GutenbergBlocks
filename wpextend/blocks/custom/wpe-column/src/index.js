import { registerBlockType } from '@wordpress/blocks';
import {
    InnerBlocks
} from '@wordpress/block-editor';

registerBlockType( 'custom/wpe-column', {
    title: 'Col',
    icon: <svg enableBackground="new 0 0 24 24" height="24px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><g><g><g><g><path d="M12,10.9c-0.1,0-0.2,0-0.2-0.1L3.5,6.1C3.4,6,3.3,5.8,3.3,5.6c0-0.2,0.1-0.3,0.2-0.4l8.2-4.7c0.2-0.1,0.3-0.1,0.5,0      l8.2,4.7c0.2,0.1,0.2,0.3,0.2,0.4S20.6,6,20.5,6.1l-8.2,4.7C12.2,10.8,12.1,10.9,12,10.9z M4.8,5.6L12,9.8l7.2-4.2L12,1.5      L4.8,5.6z"/></g><g><path d="M10.4,23.6c-0.1,0-0.2,0-0.2-0.1l-8.2-4.7c-0.2-0.1-0.3-0.3-0.3-0.4V8.9c0-0.2,0.1-0.3,0.2-0.4c0.2-0.1,0.3-0.1,0.5,0      l8.2,4.7c0.2,0.1,0.2,0.3,0.2,0.4v9.5c0,0.2-0.1,0.3-0.2,0.4C10.5,23.6,10.5,23.6,10.4,23.6z M2.7,18.1l7.2,4.2v-8.3L2.7,9.8      V18.1z"/></g><g><path d="M13.6,23.6c-0.1,0-0.2,0-0.2-0.1c-0.2-0.1-0.2-0.3-0.2-0.4v-9.5c0-0.2,0.1-0.3,0.2-0.4l8.2-4.7c0.2-0.1,0.3-0.1,0.5,0      c0.2,0.1,0.2,0.3,0.2,0.4v9.5c0,0.2-0.1,0.3-0.3,0.4l-8.2,4.7C13.8,23.6,13.7,23.6,13.6,23.6z M14.1,13.9v8.3l7.2-4.2V9.8      L14.1,13.9z"/></g></g></g></g></svg>,
    category: 'layout',
    parent: [ 'custom/wpe-container' ],
    attributes: {
        start: {
            type: 'number'
        },
        width: {
            type: 'number'
        }
    },
    edit: ( ( { className } ) => {

        // Render
        return (
            <>
                <div className={ className } >
                    <InnerBlocks
                        renderAppender={ () => (
                            <InnerBlocks.ButtonBlockAppender />
                    ) }
                    />
                </div>
            </>
        );
    } ),
 
    save: () => {
        return <InnerBlocks.Content />;
    },
} );


const { createHigherOrderComponent } = wp.compose;
const withClientIdClassName = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

        if(
            props.name == 'custom/wpe-column' &&
            Number.isInteger(props.attributes.start) && props.attributes.start > 0 && props.attributes.start <= 12 &&
            Number.isInteger(props.attributes.width) && props.attributes.width > 0 && props.attributes.width <= 12
        ) {

            let wrapperProps = props.wrapperProps ? props.wrapperProps : {};
            let ColumnEnd = props.attributes.start + props.attributes.width;
            if( ColumnEnd > 13 ) { ColumnEnd = 13; }
            wrapperProps.style = {
                gridColumnStart: props.attributes.start,
                gridColumnEnd: ColumnEnd
            };
            return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />;
        } else {
            return <BlockListBlock { ...props } />;
        }
    };
}, 'withClientIdClassName' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'custom-wpe-column-add-width', withClientIdClassName );