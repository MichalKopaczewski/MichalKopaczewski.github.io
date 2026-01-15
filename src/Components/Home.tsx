import React, { Component } from 'react';
import frame from '../images/frame.png';
import ecoKonf1 from '../images/ecoKonf1.png';
import ecoKonf2 from '../images/ecoKonf2.png';
import ecoKonf4 from '../images/ecoKonf4.png';
import pakSystem1 from '../images/paksystem1.png';
import pakSystem2 from '../images/paksystem2.png';
import netreact from '../images/netreact.webp';
import cvPl from '../images/cvPl.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudArrowDown, faCode, faDatabase, faHashtag}  from '@fortawesome/free-solid-svg-icons'
import {faReact,faHtml5} from '@fortawesome/free-brands-svg-icons'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <div id="banner" className="wrapper">
                    <div className="inner">
                        <div className="content">
                            <h1>Michał Kopaczewski</h1>
                            <h4>Fullstack .NET Developer</h4>
                            <p>My adventure with C# and .NET started around 2018. From 2021 I am self-employed working with multiple customers.</p>
                            <ul className="actions">
                                <li><a className="button primary" href="#two">Technologies</a></li>
                                <li><a className="button" href="#one">My last projects</a></li>
                            </ul>
                        </div>
                        <div className="image-wrapper">
                            <img src={frame} className="frame" alt="" />
                            <div className="image">
                                <img src={netreact} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <section id="two" className="wrapper style1">
                    <div className="inner">
                        <header className='major'>
                            <h2>Technologies im using</h2>
                        </header>
                        <div className="features">
                            <div className="feature">
                                <span className="icon solid alt major"> <FontAwesomeIcon  icon={faHashtag} /></span>
                                
                                <h2>C#</h2>
                                <p>C# is my main programming language that I use every day.</p>
                            </div>
                            <div className="feature">
                                <span className="icon solid alt major">  <FontAwesomeIcon icon={faCode} /></span>
                                <h2>.NET </h2>
                                <p>.NET (starting from .NET 5), .NET Framework 4.7 </p>
                            </div>
                            <div className="feature">
                                <span className="icon solid alt major">  <FontAwesomeIcon icon={faCloudArrowDown} /></span>
                                <h2>Rest API</h2>
                                <p>Most of my projects are serving or using rest api, im using Swagger or Postman to test API</p>
                            </div>
                            <div className="feature">
                                <span className="icon solid alt major">  <FontAwesomeIcon icon={faDatabase} /></span>
                                <h2>Microsoft SQL Server from 2012</h2>
                                <p>Basic and intermediate usage of queries, procedures and triggers</p>
                           </div>
                            <div className="feature">
                                <span className="icon solid alt major">  <FontAwesomeIcon icon={faReact} /></span>
                                <h2>React</h2>
                                <p>I am able to create simple user interface</p>
                            </div>
                            <div className="feature">
                                <span className="icon solid alt major">  <FontAwesomeIcon icon={faHtml5} /></span>
                                <h2>HTML, CSS</h2>
                                <p>I can use predefined templates and modify them to meet my requirements</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="wrapper">

                    <section id="one" className="wrapper style1">
                        <div className="inner">
                            <header className='major'>
                                <h2>My last projects</h2>
                            </header>
                            <div className="spotlights">
                                <div className="spotlight">
                                    <div className="image fit alt">
                                        <Carousel autoPlay={false}
                                            emulateTouch={true}
                                            showArrows={true}
                                            showThumbs={false}
                                            showStatus={false}
                                            infiniteLoop={true}>
                                            <div>
                                                <img src={ecoKonf1} />
                                            </div>
                                            <div>
                                                <img src={ecoKonf2} />
                                            </div>
                                            <div>
                                                <img src={ecoKonf4} />
                                            </div>
                                        </Carousel>
                                    </div>
                                    <div className="content">
                                        <h2>Eco-installation configurator</h2>
                                        <p>This application was created for customer who specialize in green energy solutions. The goal was to create visualization of configuration on different types of buildings. The visualization is synchronized in real time with data that comes from ERP. Customer is able to add already created installation that will show on map with details that showes on click.</p>
                                        <p>It is web application written in .NET 7 and React 18. It is using Clean Architecture with CQRS + MediatR library</p>
                                        <p>There is written integration with customers ERP database using Entity Framework to get data to visualize and integration with TomTom Maps to show already done installations.</p>
                                    </div>
                                </div>
                                <div className="spotlight">
                                    <div className="image fit">
                                        <Carousel autoPlay={false}
                                            emulateTouch={true}
                                            showArrows={true}
                                            showThumbs={false}
                                            showStatus={false}
                                            infiniteLoop={true}>
                                            <div>
                                                <img src={pakSystem1} alt="" />
                                            </div>
                                            <div>
                                                <img src={pakSystem2} alt="" />
                                            </div>
                                          
                                        </Carousel>
                                    </div>
                                    <div className="content">
                                        <h2>Packing system</h2>
                                        <p>Packing system was built to integrate PLC Driver with Smart Camera and Inkjet Printer.</p>
                                        <p>This system consists of Windows Service and Web Application. 
                                            Windows service is responsible for communication between devices and storing relevant data in application database. 
                                            Web Application enable users to check devices statusses and view information about handled products.</p>
                                        <p>It is written in .NET 7 and React 18. It is using Clean Architecture with CQRS + MediatR library. Communication to printers is handled with TCP/IP, communication to the PLC Drivers is done with help of s7NetPlus library that communicates by TCP/IP.</p>
                                        <p>Using Clean Architecture with CQRS + Mediatr i could reuse code that was needed by Web Application and Windows Service because it has common Application layer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div id="footer" className="wrapper">
                    <div className="inner">
                        <header>
                            <h2>Get in touch</h2>
                            <p></p>
                        </header>
                        <section className="contact-info">
                            <div className="item">
                                <span className="icon solid alt fa-home"></span>
                                <p>
                                    87-305 Zbiczno<br />
                                    Żmijewko 2G
                                </p>
                            </div>
                            <div className="item">
                                <span className="icon solid alt fa-envelope"></span>
                                <a href="mailto:michal.kopaczewski.it+portfolio@gmail.com">Email</a>
                            </div>

                            <div className="item">
                                <span className="icon brands alt fa-linkedin-in"></span>
                                <a href="www.linkedin.com/in/michalkopaczewski">Michał Kopaczewski</a>
                            </div>
                            <div className="item">
                                <span className="icon solid alt fa-book"></span>
                                <p>VatNum: PL8741802122</p>
                            </div>
                            <div className="item">
                                <span className="icon solid alt fa-book"></span>
                                <a href={cvPl} target='_blank'>CV in Polish</a>
                            </div>
                        </section>
                    </div>
                </div>
                <a href="#banner" className="button primary back-to-top">Back to top</a>
            </div>
        );
    }
}
