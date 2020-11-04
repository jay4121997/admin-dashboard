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
     
     
class Welcome extends Component {
    render() {
        return (
                <Row>
                    <Col md={12}>
                        <div className="box">
                            <div className="box-header with-border">
                                    <h3 className="box-title">Welcome User.</h3>
                                <div className="common-box">
                                    <div className="innerbox">                          
                                        <Col md={3}>
                                            <div  className="feature-main-box">  
                                                <Col sm={4} className="firstbox"> 
                                                    <i className="fa fa-coffee"></i> 
                                                    </Col>
                                                <Col sm={7}> 
                                                    <h2 className="main-title">Total New User</h2>
                                                    <h5 className="main-inner-title">100 User</h5>
                                                </Col>
                                            </div>   
                                        </Col>
                                        <Col md={3}>
                                            <div  className="feature-main-box1">  
                                                <Col sm={4} className="firstbox"> 
                                                    <i className="fa fa-users"></i> 
                                                    </Col>
                                                <Col sm={7}> 
                                                    <h2 className="main-title">Total New Coin</h2>
                                                    <h5 className="main-inner-title">1000 Coins</h5>
                                                </Col>
                                            </div>   
                                        </Col>
                                        <Col md={3}>
                                            <div  className="feature-main-box2">  
                                                <Col sm={4} className="firstbox"> 
                                                    <i className="fa fa-th"></i> 
                                                    </Col>
                                                <Col sm={7}> 
                                                    <h2 className="main-title">Total Chats</h2>
                                                    <h5 className="main-inner-title">25 Chat</h5>
                                                </Col>
                                            </div>   
                                        </Col>
                                        <Col md={3}>
                                            <div  className="feature-main-box3">  
                                                <Col sm={4} className="firstbox"> 
                                                    <i className="fa fa-dashboard"></i> 
                                                    </Col>
                                                <Col sm={7}> 
                                                    <h2 className="main-title">Total Coffee</h2>
                                                    <h5 className="main-inner-title">5 Coffee</h5>
                                                </Col>
                                            </div>   
                                        </Col>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            )
        }
    }

    export default Welcome;
