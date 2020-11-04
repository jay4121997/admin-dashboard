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
 
class Basicorder extends Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <div className="box">
                        <div className="box-header with-border">

                            <Col sm={6}>
                                <h3 className="box-title">User Daily Basis Order</h3>
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>

                            <Col sm={6}>
                                <h3 className="box-title">User Last Transaction raise Tickets</h3>         
                                <Card>
                                    <Col sm={6}>
                                        {/* <CardImg top width="100%" src="#" alt="Card image cap" /> */}
                                        <CardBody>
                                        <CardTitle className="ticket">1) Ticket No : #2569885</CardTitle>
                                        <CardTitle>Make the home page dynamic .</CardTitle>
                                        <CardSubtitle>Joshua Mulski</CardSubtitle>
                                        <CardText>Stella Johnson invited Joshua K. to the project Jump Jump Kim.</CardText>
                                        <Button>Solve</Button>
                                        </CardBody>
                                    </Col>
                                    <Col sm={6}>
                                        {/* <CardImg top width="100%" src="#" alt="Card image cap" /> */}
                                        <CardBody>
                                        <CardTitle className="ticket">2) Ticket No : #2569885</CardTitle>
                                        <CardTitle>Make the home page dynamic .</CardTitle>
                                        <CardSubtitle>Joshua Mulski</CardSubtitle>
                                        <CardText>Stella Johnson invited Joshua K. to the project Jump Jump Kim.</CardText>
                                        <Button>Solve</Button>
                                        </CardBody>
                                    </Col>
                                </Card>                  
                            </Col>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Basicorder;