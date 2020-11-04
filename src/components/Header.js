import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini">John</span>
                    <span className="logo-lg"><b>Hell'o</b> John</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">2</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 2 messages</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bullseye"></i>
                                    <span className="label label-success">6</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 6 New Register User</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    {/* <div className="pull-left">
                                                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div> */}
                                                    <h4 className="headerdrop">
                                                        1) lorem Ipsum
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    {/* <div className="pull-left">
                                                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div> */}
                                                    <h4 className="headerdrop">
                                                        2) Raj Kangad
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    {/* <div className="pull-left">
                                                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div> */}
                                                    <h4 className="headerdrop">
                                                        3) Demo Testing
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    {/* <div className="pull-left">
                                                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div> */}
                                                    <h4 className="headerdrop">
                                                        4) Hohn Doe
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    {/* <div className="pull-left">
                                                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div> */}
                                                    <h4 className="headerdrop">
                                                        5) Sanjay Rathod
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    {/* <div className="pull-left">
                                                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div> */}
                                                    <h4 className="headerdrop">
                                                        6) Manish Vora
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-th"></i>
                                    <span className="label label-success"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}