import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import linkedinProfile from "../../assets/linkedinProfile.PNG"

export class BootstrapCarousel extends Component {    
    render() {       
        return (    
            <div>
                <div className='container-fluid'>
                    <Carousel>
                        <Carousel.Item style={{'height':"auto"}}>
                            <img style={{'height':"auto"}} className={"d-block m-auto"}  src={linkedinProfile}/>
                            <Carousel.Caption>
                                <h3>LinkedIn Profile</h3>
                            </Carousel.Caption>  
                        </Carousel.Item>
                        <Carousel.Item style={{'height':"900px"}}>  
                            <img style={{'height':"auto"}}  className={"d-block m-auto"}  src={linkedinProfile}/>
                            <Carousel.Caption>
                                <h3>Second Demo</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>    
                </div>
            </div>
        )
    }
}