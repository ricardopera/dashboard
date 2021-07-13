import React, { useState } from 'react';
import Routes from "../routes";
// import Sidebar from "./Sidebar";
import Aside from './Aside';
import Nav from "./Nav";

import Page1 from "../pages/Page-1";
// import Page2 from "./pages/Page-2";
// import Page3 from "./pages/Page-3";
import Dashboard from "../pages/Dashboard";
// import NotFound from "./pages/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function Layout(props) {
    const [rtl, setRtl] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(true);
    const [toggled, setToggled] = useState(false);
    const [dark, setDark] = useState(false);
    const [scroll, setScroll] = useState(false);

    // const handleDefaultf = (filters) => {
    //     console.log([{ label: 'Ovo', value: 'Ovo' }])
    //     console.log(options_filters);
    //     // setDefaultf(options_filters);
    //     setDefaultf(filters);
    // }

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };

    // const handleRtlChange = (checked) => {
    //     setRtl(checked);
    //     setLocale(checked ? 'ar' : 'en');
    // };
    const handleImageChange = () => {
        setImage(!image);
    };
    const handleDarkMode = () => {
        setDark(!dark);
        !dark ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
        const tema = !dark ? 'dark' : 'light';
        // chart1.setTheme(tema);
        // chartMedicamentos.setTheme(tema);
        // chart2.setTheme(tema);
        // chart3.setTheme(tema);
        // chart4.setTheme(tema);
        // chartTabelaCID.setTheme(tema);
        // chartTabelaTipos.setTheme(tema);
        // chartTabelaAno.setTheme(tema);
        // chartPizzaMedicamentos.setTheme(tema);
        // chartPizzaDoencas.setTheme(tema);
        // chartPizzaDoencasCirurgia.setTheme(tema);
        // chart7.setTheme(tema);
        // chart8.setTheme(tema);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    const handleOnMouseEnter = () => {
        console.log("mouse enter");
        setCollapsed(false);
    };
    const handleOnMouseLeave = () => {
        console.log("mouse leave");
        setCollapsed(true);
    };
    // const handleScroll = () => {
    //     // if {}
    //     // console.log(document.getElementsByClassName('faixa-ano')[0].offsetTop);
    //     console.log(document.getElementsByClassName('divOne')[0].getBoundingClientRect().top);

    //     if (document.getElementsByClassName('divOne')[0].getBoundingClientRect().top < 0) {
    //         setScroll(!scroll);
    //     }

    //     // setCollapsed(true);
    // };

    // return (
    //     <div className={`app ${toggled ? 'toggled' : ''}`}>
    //         <Aside 
    //         dark={dark}
    //         image={image}
    //         collapsed={collapsed}
    //         // rtl={rtl}
    //         toggled={toggled}
    //         handleToggleSidebar={handleToggleSidebar}
    //         handleOnMouseEnter={handleOnMouseEnter}
    //         handleOnMouseLeave={handleOnMouseLeave}
    //         handleImageChange={handleImageChange}
    //         handleDarkMode={handleDarkMode}
    //         />                
    //         {/* <Sidebar history={props.history}/> */}
    //         <main>
    //             {/* <Nav/> */}
    //             {props.children}
    //         </main>
    //     </div>
    // );

    return (
        <div className={`app ${toggled ? 'toggled' : ''}`}>
            <Aside 
            dark={dark}
            image={image}
            collapsed={collapsed}
            // rtl={rtl}
            toggled={toggled}
            handleToggleSidebar={handleToggleSidebar}
            handleOnMouseEnter={handleOnMouseEnter}
            handleOnMouseLeave={handleOnMouseLeave}
            handleImageChange={handleImageChange}
            handleDarkMode={handleDarkMode}
            />                
            {/* <Sidebar history={props.history}/> */}
            <main>
                
                    
                        <Switch>
                            {/* <Route path="/" render={(props)=>(<Dashboard {...props} dark={dark}/>)}/> */}
                            <Route path="/dashboard" render={(props)=>(<Dashboard {...props} dark={dark}/>)}/>
                            <Route path="/page-1" render={(props)=>(<Page1 {...props} dark={dark}/>)}/>
                            {/* <Route path="/page-2" component={Page2}/>
                            <Route path="/page-3" component={Page3}/> */}
                            {/* <Route component={NotFound}/> */}
                        </Switch>
                   
                
            </main>
        </div>
    );
}

export default Layout;


// import React, { useState } from 'react';
// import Aside from '../Aside';
// // import Main from './Main';
// import Dashboard from '../pages/Dashboard';

// function Layout({ setLocale }) {
//     const [rtl, setRtl] = useState(false);
//     const [collapsed, setCollapsed] = useState(false);
//     const [image, setImage] = useState(true);
//     const [toggled, setToggled] = useState(false);
//     const [dark, setDark] = useState(false);
//     const [scroll, setScroll] = useState(false);

//     // const handleDefaultf = (filters) => {
//     //     console.log([{ label: 'Ovo', value: 'Ovo' }])
//     //     console.log(options_filters);
//     //     // setDefaultf(options_filters);
//     //     setDefaultf(filters);
//     // }

//     const handleCollapsedChange = (checked) => {
//         setCollapsed(checked);
//     };

//     const handleRtlChange = (checked) => {
//         setRtl(checked);
//         setLocale(checked ? 'ar' : 'en');
//     };
//     const handleImageChange = () => {
//         setImage(!image);
//     };
//     // const handleDarkMode = () => {
//     //     setDark(!dark);
//     //     !dark ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
//     //     const tema = !dark ? 'dark' : 'light';
//     //     chart1.setTheme(tema);
//     //     chartMedicamentos.setTheme(tema);
//     //     chart2.setTheme(tema);
//     //     chart3.setTheme(tema);
//     //     chart4.setTheme(tema);
//     //     chartTabelaCID.setTheme(tema);
//     //     chartTabelaTipos.setTheme(tema);
//     //     chartTabelaAno.setTheme(tema);
//     //     chartPizzaMedicamentos.setTheme(tema);
//     //     chartPizzaDoencas.setTheme(tema);
//     //     chartPizzaDoencasCirurgia.setTheme(tema);
//     //     chart7.setTheme(tema);
//     //     chart8.setTheme(tema);
//     // };

//     const handleToggleSidebar = (value) => {
//         setToggled(value);
//     };
//     const handleOnMouseEnter = () => {
//         console.log("mouse enter");
//         setCollapsed(false);
//     };
//     const handleOnMouseLeave = () => {
//         console.log("mouse leave");
//         setCollapsed(true);
//     };
//     // const handleScroll = () => {
//     //     // if {}
//     //     // console.log(document.getElementsByClassName('faixa-ano')[0].offsetTop);
//     //     console.log(document.getElementsByClassName('divOne')[0].getBoundingClientRect().top);

//     //     if (document.getElementsByClassName('divOne')[0].getBoundingClientRect().top < 0) {
//     //         setScroll(!scroll);
//     //     }

//     //     // setCollapsed(true);
//     // };

//     return (
//         <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
//             <Aside
//                 dark={dark}
//                 image={image}
//                 collapsed={collapsed}
//                 rtl={rtl}
//                 toggled={toggled}
//                 handleToggleSidebar={handleToggleSidebar}
//                 handleOnMouseEnter={handleOnMouseEnter}
//                 handleOnMouseLeave={handleOnMouseLeave}
//                 handleImageChange={handleImageChange}
//                 // handleDarkMode={handleDarkMode}
//             />
//             <Dashboard />
//             {/* <Main
//                 dark={dark}
//                 image={image}
//                 toggled={toggled}
//                 collapsed={collapsed}
//                 rtl={rtl}
//                 handleToggleSidebar={handleToggleSidebar}
//                 handleCollapsedChange={handleCollapsedChange}
//                 handleRtlChange={handleRtlChange}
//                 handleImageChange={handleImageChange}
//                 handleScroll={handleScroll}
//                 scroll={scroll}
//                 defaultf={defaultf}
//                 handleDefaultf={handleDefaultf}
//                 options_filters={options_filters}
//             /> */}
//         </div>
//     );
// }

// export default Layout;
