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
import DashboardCharts from "./Content/Chart/DashboardCharts";
import ActivityProgress from "./Content/ActivityProgress/ActivityProgress";
import PersonalManagement from "./Content/PersonalManagement/PersonalManagement";
import Memo from "./Content/Memo/Memo";
import Header from "../Header/Header";


const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-header">
                <Header collapsed={collapsed} setCollapsed={setCollapsed}></Header>

            </div>
            <div className="admin-content">
                <div className="admin-sidebar">
                    <PerfectScrollbar>
                        <AdminSidebar collapsed={collapsed}></AdminSidebar>
                    </PerfectScrollbar>
                </div>
                <div className="admin-main">
                    <PerfectScrollbar>
                        <div className="welcome-container d-flex align-items-center pb-10" style={{ backgroundColor: '#3a80ba' }}>
                            <div className="container-xl px-4">
                                <div className="page-header-content pt-4">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-auto mt-4">
                                            <div className="welcome-banner ms-3">
                                                <h1 className="main-banner text-white d-flex align-items-center">
                                                    <div style={{ display: 'inline-flex' }}>
                                                        <FiActivity className="me-2" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '30px' }} />
                                                    </div>
                                                    Dashboard
                                                </h1>
                                                <p className="sub-banner lead mb-0 text-white-50">Example dashboard overview and content summary</p>
                                            </div>
                                        </div>

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
                        <div className="container-xl px-4 mt-n10">
                            <ActivityProgress></ActivityProgress>
                            <Memo></Memo>
                            <DashboardCharts></DashboardCharts>
                            <PersonalManagement></PersonalManagement>
                        </div>


                        <div className="app-page-container px-4">
                            <div className="app-page-header">
                                <h2 class="mt-5 mb-0">App Pages</h2>
                                <p>App pages to cover common use pages to help build your app!</p>
                            </div>
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

                    </PerfectScrollbar>


                </div>

            </div >


        </div >
    );
}

export default Admin;