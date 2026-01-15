import React, { useRef } from 'react';
import ecoKonf1 from '../images/ecoKonf1.png';
import ecoKonf2 from '../images/ecoKonf2.png';
import ecoKonf4 from '../images/ecoKonf4.png';
import pakSystem1 from '../images/paksystem1.png';
import pakSystem2 from '../images/paksystem2.png';
import netreact from '../images/netreact.webp';
import erpRcpReaders from '../images/Erp/ListaCzytnikowRCP.jpg';
import erpProducts from '../images/Erp/ListaProduktow.jpg';
import erpTimeReport from '../images/Erp/RaportCzasuPracy.jpg';
import erpLeaveRequest from '../images/Erp/TworzenieWnioskuUrlopowego.jpg';
import erpLeaveBalances from '../images/Erp/WymiaryUrlopow.jpg';
import erpProjectBoard from '../images/Erp/ZarzadzenieProjektem.jpg';
import gymReaders from '../images/Gym/CzytnikiRCP.jpg';
import gymPassTemplates from '../images/Gym/KarnetyWzorcowe.jpg';
import gymDetails from '../images/Gym/SzczegolySilowni.jpg';
import gymUsers from '../images/Gym/UzytkownicySilowni.jpg';
import cvPl from '../images/cvPl.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown, faCode, faDatabase, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

type Project = {
    title: string;
    summary: string;
    details: string[];
    stack: string[];
    images: string[];
};

type ProjectGalleryProps = {
    images: string[];
    title: string;
};

type ImageGalleryHandle = InstanceType<typeof ImageGallery> & { toggleFullScreen: () => void };

const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
    const galleryRef = useRef<ImageGalleryHandle | null>(null);

    const items = images.map((src) => ({ original: src, thumbnail: src, description: title }));

    return (
        <ImageGallery
            ref={galleryRef}
            items={items}
            showPlayButton={false}
            showBullets
            showFullscreenButton
            showNav
            showThumbnails
            onClick={() => galleryRef.current?.toggleFullScreen()}
            additionalClass="project-gallery"
        />
    );
};

const techStack = [
    { title: 'C# / .NET', icon: faHashtag, description: 'Primary stack for building robust backend services and APIs.' },
    { title: 'Clean Architecture', icon: faCode, description: 'Separation of concerns with CQRS + MediatR for maintainable codebases.' },
    { title: 'REST APIs', icon: faCloudArrowDown, description: 'Designing and testing RESTful endpoints with Swagger and Postman.' },
    { title: 'SQL Server', icon: faDatabase, description: 'Queries, procedures, and triggers tuned for production workloads.' },
    { title: 'React', icon: faReact, description: 'Modern UI development with React 18 and TypeScript.' },
    { title: 'HTML / CSS', icon: faHtml5, description: 'Adapting templates and crafting responsive layouts quickly.' },
];

const projects: Project[] = [
    {
        title: 'ERP workforce portal',
        summary: 'Role-based ERP system that unifies HR, project tracking, and production catalogs.',
        details: [
            'Employee leave request workflow. Information on current, overdue, and selected leave.',
            'Integration with RCP readers for timesheet reading. Integration with an IP camera for monitoring timesheet readings.',
            'Extensive work time reporting with the ability to manually edit and calculate employee pay, taking into account leave and sick leave requests.',
            'Project management by creating, modifying, and linking relevant documentation.',
        ],
        stack: ['.NET 8', 'React 18', 'SQL Server', 'REST APIs', 'RCP Readers', 'Role-based access', 'CQRS + MediatR', "SSRS integration", "Modular monolith"],
        images: [
            erpRcpReaders,
            erpTimeReport,
            erpLeaveBalances,
            erpLeaveRequest,
            erpProducts,
            erpProjectBoard,
        ],
    },
    {
        title: 'Gym manager',
        summary: 'Access-control and membership management portal for multi-location gyms.',
        details: [
            'Integration with RCP reader for unattended gym door opening.',
            'Ability to define memberships sold to customers.',
            'Purchase and extend memberships for users.',
            'Block users who violate gym rules.',
            'Management of employees and system users.',
        ],
        stack: ['.NET 9', 'React 18', 'PostgreSQL', 'REST APIs', 'RCP Readers', 'CQRS + MediatR', "Modular monolith"],
        images: [
            gymReaders,
            gymPassTemplates,
            gymDetails,
            gymUsers,
        ],
    },
    {
        title: 'Eco-installation configurator',
        summary: 'Interactive web app for visualizing green energy installations across diverse buildings.',
        details: [
            'Real-time ERP synchronization keeps configurations and pricing aligned.',
            'TomTom Maps overlay highlights completed installations with contextual detail.',
            'CQRS + MediatR with Entity Framework ensures clean business logic boundaries.',
        ],
        stack: ['.NET 7', 'React 18', 'TomTom Maps', 'Entity Framework', 'CQRS + MediatR'],
        images: [ecoKonf1, ecoKonf2, ecoKonf4],
    },
    {
        title: 'Packing system',
        summary: 'Automation suite connecting PLC drivers, smart cameras, and inkjet printers.',
        details: [
            'Windows Service coordinates device communication and persists production data.',
            'Web dashboard surfaces device status, product traceability, and audit history.',
            'TCP/IP integrations built with s7NetPlus and custom printer protocol handlers.',
        ],
        stack: ['.NET 7', 'React 18', 'Windows Service', 's7NetPlus', 'TCP/IP'],
        images: [pakSystem1, pakSystem2],
    },
];

export const Home = () => {
    return (
        <div>
            <section id="hero" className="hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <span className="eyebrow">Fullstack .NET Developer</span>
                            <h1 className="mt-3">Building reliable software for real businesses.</h1>
                            <p className="lead mt-3">
                                I help teams ship production-ready systems across web, services, and integrations. From 2021 I have been
                                working independently with customers that need dependable delivery on the Microsoft stack.
                            </p>
                            <div className="d-flex flex-wrap mt-4 button-row">
                                <a href="#projects" className="btn btn-accent btn-lg">See recent projects</a>
                                <a href={cvPl} className="btn btn-outline-dark btn-lg" target="_blank" rel="noreferrer">CV (PL)</a>
                            </div>
                            <div className="hero-meta">
                                <div className="hero-chip">C# / .NET 7</div>
                                <div className="hero-chip">React 18</div>
                                <div className="hero-chip">SQL Server</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="hero-visual">
                                <img src={netreact} alt="Project preview" className="hero-image w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="technologies" className="section bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>Technologies I lean on</h2>
                        <p>Modern tools and patterns that keep projects maintainable, observable, and quick to evolve.</p>
                    </div>
                    <div className="row g-4">
                        {techStack.map((item) => (
                            <div className="col-md-4" key={item.title}>
                                <div className="tech-card h-100">
                                    <div className="tech-icon"><FontAwesomeIcon icon={item.icon} /></div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Recent work</h2>
                        <p>Selected engagements that combine dependable backends with clear user experiences.</p>
                    </div>

                    {projects.map((project) => (
                        <div className="project-card mb-5" key={project.title}>
                            <div className="row g-0 align-items-center">
                                <div className="col-lg-6">
                                    <ProjectGallery images={project.images} title={""} />
                                </div>
                                <div className="col-lg-6">
                                    <div className="project-body">
                                        <h3>{project.title}</h3>
                                        <p className="text-secondary mb-3">{project.summary}</p>
                                        <ul className="text-secondary ps-3">
                                            {project.details.map((detail) => (
                                                <li className="mb-2" key={detail}>{detail}</li>
                                            ))}
                                        </ul>
                                        <div className="project-meta">
                                            {project.stack.map((tag) => (
                                                <span className="project-tag" key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" className="section bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-card">
                                <h3>Let's build something</h3>
                                <p className="text-secondary mb-4">
                                    Tell me about the system you need or the workflow you want to improve. I respond quickly with next steps.
                                </p>
                                <ul className="contact-list">
                                    <li><strong>Location</strong> <span>87-305 Zbiczno, Żmijewko 2G</span></li>
                                    <li><strong>Email</strong> <span>michal.kopaczewski.it+portfolio@gmail.com</span></li>
                                    <li><strong>LinkedIn</strong> <span>linkedin.com/in/michalkopaczewski</span></li>
                                    <li><strong>VAT</strong> <span>PL8741802122</span></li>
                                </ul>
                                <div className="d-flex flex-wrap mt-4 button-row">
                                    <a className="btn btn-accent" href="mailto:michal.kopaczewski.it+portfolio@gmail.com">Email me</a>
                                    <a className="btn btn-outline-dark" href="https://www.linkedin.com/in/michalkopaczewski/" target="_blank" rel="noreferrer">LinkedIn</a>
                                    <a className="btn btn-outline-dark" href={cvPl} target="_blank" rel="noreferrer">Download CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
