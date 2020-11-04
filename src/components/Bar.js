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
import user from '../images/user.jpg';
     
     
class Bar extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
      
    render() {
        return (
                <Row>
                        <Col md={12}>
                            <div className="box">
                                <div className="box-header with-border">

                                    <Col sm={6}>
                                            <h3 className="box-title">User Progess Report</h3>
                                        <div className="text-center">25%</div>
                                            <Progress value="25" />
                                        <div className="text-center">55%</div>
                                            <Progress value={55} />
                                        <div className="text-center">70%</div>
                                            <Progress value={70} />
                                        <div className="text-center">95%</div>
                                            <Progress value={95} />
                                        <div className="text-center">85%</div>
                                        <Progress value={85} />
                                    </Col>

                                    <Col sm={6}>
                                        <h3 className="box-title">User Recent Comments</h3>
                                            <Media>
                                                <Media left href="#">
                                                <img src={user} height="50px" ></img>
                                                </Media>
                                                <Media body>
                                                    <Media heading>
                                                    User Demo-1
                                                    </Media>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                </Media>
                                            </Media>
                                            <Media>
                                                <Media left href="#">
                                                <img src={user} height="50px" ></img>
                                                </Media>
                                                <Media body>
                                                    <Media heading>
                                                    User Demo-2
                                                    </Media>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                </Media>
                                            </Media>
                                            <Media>
                                                <Media left href="#">
                                                <img src={user} height="50px" ></img>
                                                </Media>
                                                <Media body>
                                                    <Media heading>
                                                    User Demo-3
                                                    </Media>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                </Media>
                                            </Media>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                </Row>
        )
    }
}

export default Bar;