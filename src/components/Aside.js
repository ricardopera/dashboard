import React from 'react';
import { useIntl } from 'react-intl';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaStethoscope, FaGem, FaHome, FaList, FaGithub, FaRegLaughWink, FaHeart, FaMoon, FaImage, FaRegImage, FaSun, FaHeartbeat, FaChild } from 'react-icons/fa';
import sidebarBg from '../assets/bg1.jpg';
import { Link } from "react-router-dom";

const Aside = ({ dark,
    image,
    collapsed,
    //  rtl,
    toggled,
    handleToggleSidebar,
    handleOnMouseEnter,
    handleOnMouseLeave,
    handleImageChange,
    handleDarkMode
}) => {
    const intl = useIntl();
    return (
        <ProSidebar
            image={image ? sidebarBg : false}
            // rtl={rtl}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            // handleImageChange={handleImageChange}
            // handleDarkMode={handleDarkMode}
            styles={{ position: 'sticky' }}
        >
            <SidebarHeader>
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
                    }}
                >
                    {intl.formatMessage({ id: 'sidebarTitle' })}
                    {/* {intl.formatMessage({ id: 'sidebarTitle' })} */}
                    {/* {' '}{<FaTachometerAlt /> } */}
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle"
                    style={{
                        // padding: '24px',
                        // textTransform: 'uppercase',
                        fontWeight: 'bold',
                        // fontSize: 14,
                        letterSpacing: '0.5px',
                        // overflow: 'hidden',
                        // textOverflow: 'ellipsis',
                        // whiteSpace: 'nowrap',
                    }} >

                    <MenuItem
                        icon={<FaHeartbeat />}//{<FaStethoscope />}//{<FaHeartbeat />}//{<FaTachometerAlt />}
                        suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
                    // title={intl.formatMessage({ id: 'dashboard' })}
                    // key="Dashboard Saúde"
                    >
                        <Link to='/dashboard'>{intl.formatMessage({ id: 'health' })}</Link>
                    </MenuItem>


                    <MenuItem
                        icon={<FaChild />}
                        suffix={<span className="badge red" >{intl.formatMessage({ id: 'new' })}</span>}
                    // key='Page-1'
                    >
                        <Link to='/page-1'>Creche</Link>
                        {/* {intl.formatMessage({ id: 'health' })} */}
                    </MenuItem>

                    <MenuItem
                        icon={<FaHome />}
                        suffix={<span className="badge red" >{intl.formatMessage({ id: 'new' })}</span>}>
                        Usucapião
                        {/* {intl.formatMessage({ id: 'health' })} */}
                    </MenuItem>
                </Menu>

                <Menu iconShape="circle">
                    <MenuItem
                        icon={dark ? <FaMoon /> : <FaSun />}
                        onClick={handleDarkMode}
                    >
                        {intl.formatMessage(dark ? { id: 'dark' } : { id: 'light' })}
                    </MenuItem>
                    <MenuItem
                        icon={image ? <FaImage /> : <FaRegImage />}
                        onClick={handleImageChange}
                    >
                        {intl.formatMessage({ id: 'image' })}
                    </MenuItem>
                    {/* <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: 'withSuffix' })}
            icon={<FaRegLaughWink />}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: 'withPrefix' })}
            icon={<FaHeart />}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu> */}
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
                        href="https://github.com/ricardopera/dashboard"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span> {intl.formatMessage({ id: 'viewSource' })}</span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Aside;
