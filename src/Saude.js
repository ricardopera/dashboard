import React from 'react';
import { useIntl } from 'react-intl';
// import Switch from 'react-switch';
import { FaBars, FaHeartbeat } from 'react-icons/fa';
import reactLogo from './assets/logo.svg';
import health from './assets/health.jpg'
// import  ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import "regenerator-runtime/runtime";
// import Navbar from './Select'
// import $ from "jquery";
// import renderCharts from './dash';
// import Dash2 from './dash2';



const Saude = ({
  scroll,
  dark,
  handleToggleSidebar,
  handleScroll,
}) => {


window.onload = function(e) {
    var offset = document.getElementsByClassName('faixa-ano')[0].offsetTop;
    var menu = document.getElementsByClassName('faixa-ano')[0];
    var div1 = document.getElementsByClassName('divOne')[0];
    document.addEventListener('wheel', function() {
        console.log(menu.getBoundingClientRect().top)
        if (div1.getBoundingClientRect().top < -offset+25) {
            menu.style.position = 'fixed';
        } else {
            menu.style.position = 'initial';
        }
    });
}
  const intl = useIntl();
  
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
            <select className="ano" id="filtro-ano">
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
          </h4>
        </header>
      </div>
      <div className="body-content">
        
      </div>
      <h4>Mostrando <span id="filterMessage">todos os processos</span></h4>
      <div className="body-content">
        <div className="chart2" id="chart1"></div>
        <div className="chart" id="chart2"></div>
      </div>
      <div className="body-content">
        <div className="chart" id="chart3"></div>
        <div className="chart" id="chart4"></div>
      </div>
      <div className="body-content">
        <div className="chart" id="chart7"></div>

        <div className="chart" id="chart8"></div>
      </div>
      <div className="body-content">
        <div className="chart" id="chart5_1"></div>
        <div className="chart" id="chart6"></div>
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

export default Saude;
