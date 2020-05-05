import React, { Component } from 'react'; 
import {Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import LogoTick from '../Photos/tick.png';
import LogoHome from '../Photos/home.png';
import history from './History'; 
import DatePicker from './DatePicker'; 
import Airports from './Airports'; 
import AirportForms from './autoComplete'; 
import '../App.css'

export default class Home extends Component {
    
    constructor(props){
        super(props);
        this.state={
          username:'',
          password:''
        }
      };


    render() {

        //jsx
        return (
            <div class="ui centered aligned grid">
                <div class="wrap2">
                    <div className="HomePage">
                        <div className="Navbar">
                            <Navbar bg="success">
                                <div class="form-row">
                                    <div class="badge">
                                        <span class="badge badge-warning"><h4>Track Your Next Trip!</h4></span>
                                    </div>
                                    <div class="badge">
                                        <span class="badge badge-warning"><h4>Book When You Find The Best Rates!</h4></span>
                                    </div>
                                    <div class="badge">
                                        <span class="badge badge-warning"><h4>Never Over Pay Again!</h4></span>
                                    </div>
                                </div>
                            </Navbar> 
                            <Navbar bg= "primary" variant="dark">
                                <nav class="navbar navbar-primary bg-primary">
                                    <img src={LogoTick} width="50" height="50" alt=""/>
                                    <img src={LogoHome} width="25" height="25" alt=""/>
                                </nav>

                                <Nav className="mr-auto" >
                                    <h7><Nav.Link onClick={() => history.push('/contact')}>Contact</Nav.Link></h7>
                                    <h7><Nav.Link onClick={() => history.push('/about')}>About</Nav.Link></h7>
                                </Nav>

                                <div class="btn">
                                    <button type="button" onClick={() => history.push('/signup')} class="btn btn-warning btn-lg">SIGNUP</button>
                                </div>
                                <div class="btn">
                                    <button type="button" onClick={() => history.push('/login')} class="btn btn-success btn-lg">LOGIN</button>
                                </div>
                            </Navbar> 
                            <br/>
                        </div>
                        <form class="transparentForm">
                            <p class="text-center">
                                <div>
                                    <span class="badge badge-primary"><h2>T I C -C L I C K: The Flight Tracker App!</h2></span>
                                </div>
                                <div>
                                    <h5>Just One <span class="badge badge-primary">C L I C K</span> Away From Finding The Best Rates On Flights</h5>
                                </div>`
                            </p>
                        </form>
                        
                        {/* start of input forms */}

                        <div class="container">
                            <div class="col">
                                <div class="row">
                                    <div class="col-md-4 text-center">
                                        <label><h7>Departing Airport</h7></label>
                                        <AirportForms items={Airports}/>
                                    </div>
                                    <div class="col-md-4 text-center">
                                        <label><h7>Arriving Airport</h7></label>
                                        <AirportForms items={Airports}/>
                                    </div>
                                </div>
                                <br/>
                                <DatePicker/>
                                <br/>
                                <div class="row">
                                    <div class="col-sm-2 text center">
                                        <label for="price">Highest price willing to pay</label>
                                        <div class="input-group mb-2">
                                            <div class="input-group-text">$</div>
                                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Enter price"></input>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                
                                <button type="submit" class="btn btn-success">SUBMIT</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar  bg="dark" variant="dark">
                    <Nav className="mr-auto" >
                        <Nav.Link class="footer-copyright py-3">© 2020 Copyright:
                            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                        </Nav.Link>

                        <h7><Nav.Link onClick={() => history.push('/contact')}>Report an issue</Nav.Link></h7>
                        <h7><Nav.Link onClick={() => history.push('/privacy')}>Privacy policy</Nav.Link></h7>
                        <h7><Nav.Link onClick={() => history.push('/info')}>Using this site</Nav.Link></h7>
                    </Nav>
                    <div class="row">
                        <h6>  | <a href="https://www.cheapoair.com/">cheapoair</a>   |   </h6>
                        <h6>  |  <a href="https://www.expedia.com/">expedia</a>   |  </h6>
                        <h6>  |   <a href="https://www.justfly.com/">justfly</a>  |  </h6>
                    </div>
     
                </Navbar>
            </div>
        );
    }
}