import React, {Component} from 'react';
import { Col ,
     Row , 
     Progress , 
     Media ,
     Table ,
     Alert , TabContent, TabPane, Nav, NavItem, NavLink, 
     Card, Button, CardTitle, 
     CardText ,
     CardImg, CardBody,
     CardSubtitle, } from 'reactstrap';
     
     
class Price extends Component {
    render() {
        return (
                    <Row>
                        <Col sm={12}>
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Daily Prices of Coin</h3>
                                <div className="box-body">
                                    <Row>
                                        <Col md={12}>
                                            <p className="text-center">
                                                <strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</strong>
                                            </p>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="box-footer">
                                    <Row>
                                        <Col md={3} xs={6}>
                                            <Col sm={6}>
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                                                    <h5 className="description-header">$35,210.43</h5>
                                                    <span className="description-text">TOTAL REVENUE</span>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                                                    <h5 className="description-header">$35,210.43</h5>
                                                    <span className="description-text">TOTAL REVENUE</span>
                                                </div>
                                            </Col>
                                        </Col>  
                                        <Col md={3} xs={6}>
                                            <Col sm={6}>
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                                                    <h5 className="description-header">$35,210.43</h5>
                                                    <span className="description-text">TOTAL REVENUE</span>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                                                    <h5 className="description-header">$35,210.43</h5>
                                                    <span className="description-text">TOTAL REVENUE</span>
                                                </div>
                                            </Col>
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Col sm={6}>
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                                                    <h5 className="description-header">$35,210.43</h5>
                                                    <span className="description-text">TOTAL REVENUE</span>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                                                    <h5 className="description-header">$35,210.43</h5>
                                                    <span className="description-text">TOTAL REVENUE</span>
                                                </div>
                                            </Col>
                                        </Col>
                                        <Col md={3} xs={6}>
                                            <Col sm={6}>
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                                                    <h5 className="description-header">$35,210.43</h5>
                                                    <span className="description-text">TOTAL REVENUE</span>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                                                    <h5 className="description-header">$35,210.43</h5>
                                                    <span className="description-text">TOTAL REVENUE</span>
                                                </div>
                                            </Col>
                                        </Col>
                                    </Row>
                                </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
        )
    }
}

export default Price;