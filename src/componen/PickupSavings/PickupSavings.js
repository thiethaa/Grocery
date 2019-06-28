import React, { Component } from 'react'
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';  

let style ={
    pickupSavings:{
        textDecoration:'underline'
    },
    totalSavings:{
        color: 'red',
        fontWeight: 800
    }
};


export default class PickupSavings extends Component {
    render() {
    const tooltip = (
        <Tooltip id ="tooltip">
            <p>Picking up  your order help cut the cost.</p>
        </Tooltip>
        )
        return (
            <Row className="show-grid">
                <Col md={6}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={style.pickupSavings}>Pickup Savings</div>
                    </OverlayTrigger>
                </Col>
                <Col md={6} style={style.totalSavings}>{`$${this.props.price}`}</Col>
            </Row>
        )
    }
}
