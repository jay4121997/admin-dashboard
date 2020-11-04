import React, {Component} from 'react';
import { Col ,
     Row , 
     Progress , 
     Media ,
     Table ,
     Alert , 
     TabContent, TabPane, 
     Nav, NavItem, NavLink, 
     Card, Button, CardTitle, 
     CardText ,
     CardImg, CardBody,
     CardSubtitle, } from 'reactstrap';
import Price from './Price';
import Welcome from './Welcome';
import Bar from './Bar';
import Basicorder from './Basicorder';


export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <Price />
                    <Welcome /> 
                    <Bar />
                    <Basicorder />
                </section>
            </div>
        )
    }
}