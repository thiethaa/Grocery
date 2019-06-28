import React, { Component } from 'react'
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap';



export default class ItemDetails extends Component {
constructor(props){
    super(props);

    this.state ={
        open: false,
        originalprice: 49.37
    };
}

    render() {
        return (
            <div>
                <Button
                className="item-details-button"
                variant= "link"
                onClick= {()=> this.setState({open:!this.state.open})}
                >
                {this.state.open === false ? `See ` : `Hide `} item detail
                {this.state.open === false ? ` +`: ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div className="item-detail-box">
                        <Media>
                            <img
                                width={100}
                                height={100}
                                src="https://i5.walmartimages.com/asr/6e5b2525-36ab-45d0-90b6-48dda8e62e6f_1.28e3666fdec2858cf24ed9eb7f6c0166.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                                alt="Diaper"
                            />
                            <Media.Body>
                                <p className="media-item">360˚ FIT are setting a new standard for comfort with the adaptive fit of our 360˚ Stretchy Waistband - and the protection of Dual Leak-Guard Barriers and Air-Dry Channels.</p>
                                <Row className="show-grid">
                                    <Col md={6}>
                                        <strong>{`$${this.props.price}`}</strong>
                                        <br/>
                                        <strong className="price-strike">
                                        {`$${this.state.originalprice}`}
                                        </strong>
                                    </Col>
                                    <Col md={6}> Qty:1</Col>
                                </Row>
                            </Media.Body>
                        </Media>
                    </div>
                </Collapse>
            </div>
        )
    }
}