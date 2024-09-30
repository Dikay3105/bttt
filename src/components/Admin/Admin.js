import AdminSidebar from "./AdminSidebar";
import "./Admin.scss";
import { FaBars, FaSearch, FaBell, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import { FiBell, FiMail } from 'react-icons/fi';
import { useState } from "react";
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Button, Card } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-header">
                <nav className="navbar top-nav shadow navbar-expand justify-content-between justify-content-sm-start navbar-light bg-white"
                    style={{ flexWrap: 'nowrap', zIndex: "1039", height: '3.625rem' }}
                >
                    <button onClick={() => { setCollapsed(!collapsed); }}
                        className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0">
                        <FaBars style={{ fontSize: '12px' }} />
                    </button>
                    <a class="navbar-brand pe-3 ps-4 ps-lg-2"
                        style={{ width: '11rem', color: '#363d47', fontSize: '1rem', fontWeight: 'bold' }}
                        href="index.html">
                        SB Admin Pro
                    </a>

                    <form className="form-inline me-auto d-none d-lg-block me-3">
                        <div className="input-group input-group-joined input-group-solid"
                            style={{
                                maxWidth: '400px',
                                width: '100%',
                                height: '2.75rem',
                                borderRadius: '0.4375rem',
                                backgroundColor: '#eef2f8',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out' // Đổi thành chuỗi cho thuộc tính transition
                            }}

                        >
                            <input
                                className="form-control pe-0"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                style={{
                                    borderRadius: '10px 0 0 10px', // Làm tròn chỉ ở phía trái
                                    backgroundColor: 'inherit',
                                    border: '0px',
                                    height: '100%',
                                    flex: 1 // Giúp input chiếm hết chiều rộng còn lại
                                }}
                            />
                            <div className="input-group-text"
                                style={{
                                    backgroundColor: 'inherit',
                                    border: 'none',
                                    padding: '0 10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                        </div>
                    </form>

                    <ul className="navbar-nav align-items-center ms-auto me-3">
                        <li className="nav-item dropdown no-caret d-none d-md-block me-3">
                            <a className="me-3 text-decoration-none text-muted" href="#">
                                Documentation <FaChevronRight style={{ fontSize: '10px' }} />
                            </a>
                        </li>
                        <button onClick={() => { setCollapsed(!collapsed); }}
                            className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0">
                            <FiBell style={{ fontSize: '14px' }} />
                        </button>
                        <button onClick={() => { setCollapsed(!collapsed); }}
                            className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0">
                            <FiMail style={{ fontSize: '14px' }} />
                        </button>
                        <button onClick={() => { setCollapsed(!collapsed); }}
                            className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0">
                            <img
                                src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-1.png"
                                alt="User avatar"
                                className="img-fluid"
                            />
                        </button>

                    </ul>
                </nav>

            </div>
            <div className="admin-content">
                <div className="admin-sidebar">
                    <AdminSidebar collapsed={collapsed}></AdminSidebar>
                </div>
                <div className="admin-main">
                    <PerfectScrollbar>
                        <div className="welcome-container d-flex align-items-center">
                            <div class="container-xl px-4">
                                <div class="welcome-banner text-center align-items-center">
                                    <h1 class="text-white">Welcome to SB Admin Pro</h1>
                                    <p class="lead mb-0 text-white-50">A professionally designed admin panel template built with Bootstrap 5</p>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-container px-4">
                            <div className="dashboard-header">
                                <h2 class="mt-5 mb-0">Dashboards</h2>
                                <p>Three dashboard examples to get you started!</p>
                            </div>
                            <hr class="mt-0 mb-4"></hr>
                            <div className="dashboard-content row px-4">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="col-md-6 col-xl-4 mb-4 mb-xl-0">
                                        <Card style={{ width: '100%' }}>
                                            <Card.Img
                                                className="img-fluid"
                                                variant="top"
                                                src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/dashboards/default.png"
                                            />
                                            <Card.Body>
                                                <Card.Text>
                                                    <div className="text-center small">
                                                        Default
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>


                        </div>
                        <div className="app-page-container px-4">
                            <div className="app-page-header">
                                <h2 class="mt-5 mb-0">App Pages</h2>
                                <p>App pages to cover common use pages to help build your app!</p>
                            </div>
                            <hr class="mt-0 mb-4"></hr>
                            <div className="app-page-content row px-4">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="col-md-6 col-xl-4 mb-4 mb-xl-0">
                                        <Card style={{ width: '100%' }}>
                                            <Card.Img
                                                variant="top"
                                                src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/dashboards/default.png"
                                            />
                                            <Card.Body>
                                                <Card.Text>
                                                    <div className="text-center small">
                                                        Default
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="starter-layout-container px-4">
                            <div className="startyer-layout-header">
                                <h2 class="mt-5 mb-0">Starter Layouts</h2>
                                <p>Layouts for creating new pages within your project!</p>
                            </div>
                            <hr class="mt-0 mb-4"></hr>
                            <div className="startyer-layout-content row">
                                <div className="col-sm-6 col-md-4 mb-4">
                                    <div className="small mb-01">Navigation</div>
                                    <ListGroup className="mb-4">
                                        <ListGroup.Item action href="#link1">
                                            Link 1
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="#link2" disabled>
                                            Link 2
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            This one is a button
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            This one is a button
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            This one is a button
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            This one is a button
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>

                                <div className="col-sm-6 col-md-4 mb-4">
                                    <div className="small mb-01">Navigation</div>
                                    <ListGroup className="mb-4">
                                        <ListGroup.Item action href="#link1">
                                            Link 1
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="#link2" disabled>
                                            Link 2
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            This one is a button
                                        </ListGroup.Item>
                                    </ListGroup>

                                    <div className="small mb-01">Navigation</div>
                                    <ListGroup className="mb-4">
                                        <ListGroup.Item action href="#link1">
                                            Link 1
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="#link2" disabled>
                                            Link 2
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            This one is a button
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>

                                <div className="col-sm-6 col-md-4 mb-4">
                                    <div className="small mb-01">Navigation</div>
                                    <ListGroup className="mb-4">
                                        <ListGroup.Item action href="#link1">
                                            Link 1
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="#link2" disabled>
                                            Link 2
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            This one is a button
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                    </PerfectScrollbar>


                </div>

            </div >


        </div >
    );
}

export default Admin;