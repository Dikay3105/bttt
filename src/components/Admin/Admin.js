import AdminSidebar from "./AdminSidebar";
import "./Admin.scss";
import { FaBars, FaSearch, FaBell, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import { FiBell, FiMail, FiActivity } from 'react-icons/fi';
import { BiCalendar } from 'react-icons/bi';
import { IoIosSearch } from "react-icons/io";
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
import DashboardCharts from "./Content/Chart/DashboardCharts";


const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-header">
                <nav className="navbar top-nav shadow navbar-expand justify-content-between justify-content-sm-start navbar-light bg-white"
                    style={{ flexWrap: 'nowrap', zIndex: "1039", height: '3.625rem', boxShadow: 'inset -4px 0px 6px -1px rgba(0, 0, 0, 0.1), 0 0.15rem 1.75rem 0 rgba(33, 40, 50, 0.15)' }}
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
                                <IoIosSearch style={{ fontSize: '20px' }}></IoIosSearch>
                            </div>
                        </div>
                    </form>

                    <ul className="navbar-nav align-items-center ms-auto me-4 d-flex gap-3">
                        <li className="nav-item d-none d-md-block">
                            <a className="me-3 text-decoration-none text-muted" href="#">
                                Documentation <FaChevronRight style={{ fontSize: '10px' }} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-icon btn-transparent-dark">
                                <FiBell style={{ fontSize: '14px' }} />
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-icon btn-transparent-dark">
                                <FiMail style={{ fontSize: '14px' }} />
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="custom-avatar-btn">
                                <img
                                    src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-1.png"
                                    alt="User avatar"
                                />
                            </button>
                        </li>
                    </ul>

                </nav>

            </div>
            <div className="admin-content">
                <div className="admin-sidebar">
                    <AdminSidebar collapsed={collapsed}></AdminSidebar>
                </div>
                <div className="admin-main">
                    <PerfectScrollbar>
                        <div className="welcome-container d-flex align-items-center pb-10" style={{ backgroundColor: '#3a80ba' }}>
                            <div className="container-xl px-4">
                                <div className="page-header-content pt-4">
                                    <div className="row align-items-center justify-content-between">
                                        {/* Left Content: Welcome Banner */}
                                        <div className="col-md-8">
                                            <div className="welcome-banner ms-3">
                                                <h1 className="text-white d-flex align-items-center">
                                                    <FiActivity className="me-2" style={{ color: 'rgba(255, 255, 255, 0.5)' }} /> Dashboard
                                                </h1>
                                                <p className="lead mb-0 text-white-50">Example dashboard overview and content summary</p>
                                            </div>
                                        </div>

                                        {/* Right Content: Calendar Button */}
                                        <div className="col-12 col-xl-auto mt-4 mt-xl-0">
                                            <div>
                                                <button className="btn btn-light">
                                                    <BiCalendar className="me-2" /> Sep 30, 2024 - Sep 30, 2024
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <DashboardCharts></DashboardCharts>
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