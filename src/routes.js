
import React, { useState } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Page1 from "./pages/Page-1";
// import Page2 from "./pages/Page-2";
// import Page3 from "./pages/Page-3";
import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { IntlProvider } from 'react-intl';
import messages from './messages';
import './styles/App.scss';

// function Routes() {
//     const [locale, setLocale] = useState('pt');
//     // const [dark, setDark] = useState(true);
//     return (
//         <BrowserRouter forceRefresh={true}>
//             <Route render={(props)=>(
//                 <IntlProvider locale={locale} messages={messages[locale]}>
//                     <Layout {...props}>
//                         <Switch>
//                             <Route path="/" exact component={Page1}/>
//                             <Route path="/dashboard" exact component={Dashboard}/>
//                             <Route path="/page-1" component={Page1}/>
//                             {/* <Route path="/page-2" component={Page2}/>
//                             <Route path="/page-3" component={Page3}/> */}
//                             {/* <Route component={NotFound}/> */}
//                         </Switch>
//                     </Layout>
//                 </IntlProvider>
//             )}/>
//         </BrowserRouter>
//     )
// }

function Routes() {
    const [locale, setLocale] = useState('pt');
    // const [dark, setDark] = useState(true);
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <BrowserRouter basename="/dashboard" forceRefresh={true}>
                <Layout />
            </BrowserRouter>
        </IntlProvider>
    )
}

export default Routes;