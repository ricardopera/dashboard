import React, { useState } from 'react';
import { useIntl } from 'react-intl';
// import Switch from 'react-switch';
import { FaBars, FaHeartbeat } from 'react-icons/fa';
import reactLogo from './assets/logo.svg';
import health from './assets/health.jpg'
// import  ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import "regenerator-runtime/runtime";
// import Select from 'react-select';
// import MultiSelect from './Select'
import { options_filters } from './index';
// import { defaults } from 'gh-pages';
// import { MultiSelectField } from './Multiselect'
// import $ from "jquery";
// import renderCharts from './dash';
// import Dash2 from './dash2';


const Main = ({
  scroll,
  dark,
  handleToggleSidebar,
  handleDefaultf,
  handleScroll,
  options_filters,
  // defaultf,
}) => {
  const intl = useIntl();
  // const [defaultf, setDefaultf] = useState(options_filters);

  // const handleDefaultf = (options_filters) => {
  //   console.log([{ label: 'Ovo', value: 'Ovo' }])
  //   console.log(options_filters);
  //   setDefaultf(options_filters);
  // };

  
  return (
    <main>
      <div className='divOne'>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars style={dark ? {color: 'white'} : {color: '#353535'}} />
      </div >
      <header>
        <h1>
          <FaHeartbeat style={{width: '50px', color: '#00b193'}} />
          {/* <img width={80} src={health} alt="react logo" /> {intl.formatMessage({ id: 'title' })} */}
          {intl.formatMessage({ id: 'title' })}
        </h1>
        <h4>Processos de saúde em trâmite na procuradoria judicial do Município de Itajaí</h4>
        {/* <p>{intl.formatMessage({ id: 'description' })}</p> */}
      </header>
      {/* <div className="block">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          // onChange={handleImageChange}
          // checked={image}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> {intl.formatMessage({ id: 'image' })}</span>
      </div> */}
      <div className="body-content2">
        <header className="faixa-ano" id="faixa-ano" style={scroll ? {position: 'fixed'}: {position: ''}}>
          <h4>Filtre por ano de distribuição do processo{' '}
            <select className="ano" id="filtro-ano" >
              <option value="">--Todos--</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
            {/* <MultiSelect
              handleDefaultf={handleDefaultf}
              defaultf={defaultf}
              // options_filters={defaultf}
            /> */}
            {/* <Select className="basic-multi-select"
            classNamePrefix="select"
            value={defaultf}
            isMulti
            options={[{ label: 'Abacate', value: 'Abacate' },{ label: 'Uva', value: 'Uva'}]}
            onChange={handleDefaultf}
            defaultf={defaultf}
            /> */}
            <h4>Mostrando <span id="filterMessage" onChange={handleDefaultf(options_filters)}>todos os processos</span></h4>
          </h4>
        </header>
      </div>
      <div className="body-content">
        
      </div>
      {/* <h4>Mostrando <span id="filterMessage" onChange={handleDefaultf(options_filters)}>todos os processos</span></h4> */}
      {/* <div className="body-content">
        <div className="chart2" id="chart1"></div>
        <div className="chart" id="chart2"></div>
      </div> */}
      <div className="body-content">
        <div className="chart" id="chart1"></div>
        <div className="chart" id="chartMedicamentos"></div>
      </div>
      <div className="body-content">
        <div className="chart" id="chart2"></div>
      </div>
      {/* <div className="body-content"> */}
      <br></br>
        <h4>QUANTIDADE E VALOR DOS PROCESSOS</h4>
        <br></br>
      {/* </div> */}
      <div className="body-content">
        <div className="chart" id="chartQuantidade"></div>
        <div className="chart" id="chartValor"></div>
      </div>

        <br></br>
        <h4>COMPETÊNCIA</h4>
        <br></br>
      {/* </div> */}
      <div className="body-content">
        <div className="chart" id="chart3"></div>
        <div className="chart" id="chart4"></div>
      </div>
      {/* <div className="body-content"> */}
        <br></br>
        <h4>TIPOS DE SOLICITAÇÕES</h4>
        <br></br>
      {/* </div> */}
      <div className="body-content">
        <div className="chart" id="chart8"></div>
        <div className="chart" id="chart7"></div>
      </div>
      <div className="body-content">
        <div className="chart" id="chartTabelaCID"></div>
        <div className="chart" id="chartTabelaTipos"></div>
        <div className="chart" id="chartTabelaAno"></div>
      </div>
      <br></br>
      <h4>PROCESSOS DE MEDICAMENTOS</h4>
      <br></br>
      <div className="body-content">
        <div className="chart" id="chartPizzaMedicamentos"></div>
        <div className="chart" id="chartPizzaDoencas"></div>
      </div>
      <br></br>
      <h4>PROCESSOS DE CIRURGIA</h4>
      <br></br>
      <div className="body-content">
        {/* <div className="chart" id="chartPizzaMedicamentos"></div> */}
        <div className="chart" id="chartPizzaDoencasCirurgia"></div>
      </div>
      <footer>
        <small>
          © 2021 made by -{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://azouaoui.netlify.com">
            Ricardo Pereira
          </a>
        </small>
        <br />
        <div className="social-bagdes">
          <a href="https://github.com/ricardopera" target="_blank" rel="noopener noreferrer">
            <img
              alt="GitHub followers"
              src="https://img.shields.io/github/followers/ricardopera?label=github&style=social"
            />
          </a>
          <a href="https://twitter.com/ricardoru" target="_blank" rel="noopener noreferrer">
            <img
              alt="Twitter Follow"
              src="https://img.shields.io/twitter/follow/ricardoru?label=twitter&style=social"
            />
          </a>
        </div>
      </footer>
      </div>
    </main>
  );
};

export default Main;
