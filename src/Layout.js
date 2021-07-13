import React, { useState } from 'react';
import Aside from './Aside';
import Main from './Main';
import MultiSelect from './Select';
import {options_filters, chart1, chart2, chartMedicamentos, chart3, chart4,
        chartTabelaCID,
        chartTabelaTipos,
        chartTabelaAno,
        chartPizzaMedicamentos,
        chartPizzaDoencas,
        chartPizzaDoencasCirurgia,
        chart7, chart8} from './index';

function Layout({ setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);
  const [dark, setDark] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [defaultf, setDefaultf] = useState(options_filters);

  const handleDefaultf = (filters) => {
    console.log([{ label: 'Ovo', value: 'Ovo' }])
    console.log(options_filters);
    // setDefaultf(options_filters);
    setDefaultf(filters);
  }

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = () => {
    setImage(!image);
  };
  const handleDarkMode = () => {
    setDark(!dark);
    !dark ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
    const tema = !dark ? 'dark': 'light';
  	chart1.setTheme(tema);
    chartMedicamentos.setTheme(tema);
    chart2.setTheme(tema);
    chart3.setTheme(tema);
    chart4.setTheme(tema);
    chartTabelaCID.setTheme(tema);
    chartTabelaTipos.setTheme(tema);
    chartTabelaAno.setTheme(tema);
    chartPizzaMedicamentos.setTheme(tema);
    chartPizzaDoencas.setTheme(tema);
    chartPizzaDoencasCirurgia.setTheme(tema);
    chart7.setTheme(tema);
    chart8.setTheme(tema);
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
  const handleScroll = () => {
    // if {}
    // console.log(document.getElementsByClassName('faixa-ano')[0].offsetTop);
    console.log(document.getElementsByClassName('divOne')[0].getBoundingClientRect().top);
    
    if (document.getElementsByClassName('divOne')[0].getBoundingClientRect().top < 0){
      setScroll(!scroll);
    }
      
    // setCollapsed(true);
  };

  return (
    <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
      <Aside
        dark={dark}
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleOnMouseEnter={handleOnMouseEnter}
        handleOnMouseLeave={handleOnMouseLeave}
        handleImageChange={handleImageChange}
        handleDarkMode={handleDarkMode}
      />
      {/* <div>
        <MultiSelect
          defaultf={defaultf}
          handleDefaultf={handleDefaultf}
          options_filters={options_filters}
        /> */}
        <Main
          dark={dark}
          image={image}
          toggled={toggled}
          collapsed={collapsed}
          rtl={rtl}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
          handleRtlChange={handleRtlChange}
          handleImageChange={handleImageChange}
          handleScroll={handleScroll}
          scroll={scroll}
          defaultf={defaultf}
          handleDefaultf={handleDefaultf}
          options_filters={options_filters}
        />
      {/* </div> */}
    </div>
  );
}

export default Layout;
