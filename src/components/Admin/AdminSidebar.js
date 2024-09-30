import React from 'react';
import { FiActivity } from 'react-icons/fi';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';
import 'react-pro-sidebar/dist/css/styles.css';
import './AdminSidebar.scss';
import { Link, useNavigate } from 'react-router-dom';

const AdminSidebar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
    const navigate = useNavigate();
    return (
        <ProSidebar
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
            width='15rem'
            collapsedWidth={'0px'}
        >
            {/* <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer'
                    }}

                    onClick={() => navigate("/")}
                >
                    sidebarTitle
                </div>
            </SidebarHeader> */}

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                    >
                        Core
                    </MenuItem>
                    <SubMenu title="Dashboards" icon={<FiActivity />}>
                        <MenuItem>Default <Link to="/admin/manage-user" /></MenuItem>
                        <MenuItem>Multiopurpose <Link to="/admin/manage-quiz" /></MenuItem>
                        <MenuItem>Affiliate <Link to="/admin/manage-question" /></MenuItem>
                    </SubMenu>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        icon={<FaRegLaughWink />}
                    >
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                    </SubMenu>
                    <SubMenu
                        prefix={<span className="badge gray">3</span>}
                        icon={<FaHeart />}
                    >
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        {!collapsed && (
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                viewSource
                            </span>
                        )}
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default AdminSidebar;
