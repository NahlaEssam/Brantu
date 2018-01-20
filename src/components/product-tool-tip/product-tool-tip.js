
import React, { Component } from 'react';
import {OverlayTrigger , Tooltip} from 'react-bootstrap';
import './product-tool-tip.css';

class ProductNameTooltip extends Component {

    render() {
        let id = this.props.id;
        let children = this.props.children;
        let name = this.props.name;
        return (
    
            <OverlayTrigger
                overlay={<Tooltip className="toolTip" id={id}>{name}</Tooltip>}
                placement="top"
                positionTop={0}
                delayShow={300}
                delayHide={150}
                className="overlayTrigger"
            >
             
                <div className="product-name">{children}</div>
                
            </OverlayTrigger>
        );
    }
}

export default ProductNameTooltip;