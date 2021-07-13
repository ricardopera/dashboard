import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './components/Layout';
import messages from './messages';
import './styles/App.scss';
// import './App.css';

function App() {
  const [locale, setLocale] = useState('pt');

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {/* <div className="App"> */}
        <Layout setLocale={setLocale} />
      {/* </div> */}
    </IntlProvider>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import Layout from './Layout';
// // import Dashboard from "./Dashboard";

// function App() {
//   return (
//     <div className="App">
//       <Layout />
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
