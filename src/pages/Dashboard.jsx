import React, { useRef, useCallback, useState, useEffect } from "react";
import Select from "react-select";
// import PrettySlider from "./PrettySlider";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import { FaBars, FaHeartbeat } from 'react-icons/fa';
import { useIntl } from 'react-intl';

var tema = "light";

var filter = null;

export var options_filters = [{ label: 'Ovo', value: 'Ovo' }, { label: 'Jaca', value: 'Jaca' }];

const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-saude-ualvx", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});
export const chart1 = sdk.createChart({
    chartId: "147fe4a4-cd35-462c-aa79-8925840b30d4", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "600px",
    theme: tema,
    background: "transparent",
    // showAttribution: false
});
export const chartMed = sdk.createChart({
    chartId: "3420c4f9-1974-4df4-9912-750879601b97", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "600px",
    theme: tema,
    background: "transparent"
});
export const chart2 = sdk.createChart({
    chartId: "e01702d3-d246-4df9-821e-091cab268832", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "500px",
    theme: tema,
    background: "transparent"
});
export const chartQuantidade = sdk.createChart({
    chartId: "c9396b9b-be3e-488f-a07e-7ca6a82b24d6", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "150px",
    theme: tema,
    background: "transparent"
});
export const chartValor = sdk.createChart({
    chartId: "b3ac1dea-df55-4d59-8474-f4f7a2bbe7d3", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "150px",
    theme: tema,
    background: "transparent"
});
export const chart3 = sdk.createChart({
    chartId: "ec432340-d756-4992-b0c4-742c3a24b437", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "300px",
    theme: tema,
    background: "transparent"
});
export const chart4 = sdk.createChart({
    chartId: "70a55ce1-46bc-4005-8fd2-8eb2d61132c0", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "300px",
    theme: tema,
    background: "transparent"
});
// const chart5 = sdk.createChart({
// 	chartId: "739f10d9-1084-45e7-b32f-06fee9570ff5", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
// 	height: "500px",
// 	theme: tema
// });
export const chart7 = sdk.createChart({
    chartId: "f11f894d-9040-4c20-aa30-487323217dc2", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "400px",
    theme: tema,
    background: "transparent"
});
export const chart8 = sdk.createChart({
    chartId: "bb264786-e2df-4c17-b6e3-ff1e40b5df4a", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "400px",
    theme: tema,
    background: "transparent"
});
export const chartTabelaCID = sdk.createChart({
    chartId: "ec1cffd7-508c-48cd-828a-7ad4066f377b", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "600px",
    theme: tema,
    background: "transparent"
});
export const chartTabelaTipos = sdk.createChart({
    chartId: "2cc73c91-fd2b-4353-9d00-479da43c1f8b", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "600px",
    theme: tema,
    background: "transparent"
});
export const chartTabelaAno = sdk.createChart({
    chartId: "62db981e-481b-47f2-947e-8318afcd6b33", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "600px",
    theme: tema,
    background: "transparent"
});
export const chartPizzaMedicamentos = sdk.createChart({
    chartId: "63ae3627-ff4f-44e5-83cd-d755b48b436a", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "500px",
    theme: tema,
    background: "transparent"
});
export const chartPizzaDoencas = sdk.createChart({
    chartId: "f39c46f7-16e2-4994-8141-c9111f680475", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "500px",
    theme: tema,
    background: "transparent"
});
export const chartPizzaDoencasCirurgia = sdk.createChart({
    chartId: "c08bc76a-f635-42ce-8b8a-be6f418d9837", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
    height: "500px",
    theme: tema,
    background: "transparent"
});

// const barChart = sdk.createChart({
//     chartId: "ff518bbb-923c-4c2c-91f5-4a2b3137f312", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
// });
// const geoChart = sdk.createChart({
//     chartId: "b1983061-ee44-40ad-9c45-4bb1d4e74884", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
// });

export default function Dashboard({
    scroll,
    dark,
    handleToggleSidebar,
    handleDefaultf,
    handleScroll,
    options_filters,
    // defaultf,
}) {

    const intl = useIntl();
    const refChart1 = useRef(null);
    const refChartMed = useRef(null);
    const refChart2 = useRef(null);
    const refChartQuantidade = useRef(null);
    const refChartValor = useRef(null);
    const refChart3 = useRef(null);
    const refChart4 = useRef(null);
    const refChart8 = useRef(null);
    const refChart7 = useRef(null);
    const refChartTabelaCID = useRef(null);
    const refChartTabelaTipos = useRef(null);
    const refChartTabelaAno = useRef(null);
    const refChartPizzaMedicamentos = useRef(null);
    const refChartPizzaDoencas = useRef(null);
    const refChartPizzaDoencasCirurgia = useRef(null);
    const [dk, setDk] = useState(dark);
    const anos = [
        {
            value: "",
            label: "Todos"
        },
        {
            value: "2007",
            label: "2007"
        },
        {
            value: "2008",
            label: "2008"
        },
        {
            value: "2009",
            label: "2009"
        },
        {
            value: "2010",
            label: "2010"
        },
        {
            value: "2011",
            label: "2011"
        },
        {
            value: "2012",
            label: "2012"
        },
        {
            value: "2012",
            label: "2012"
        },
        {
            value: "2012",
            label: "2012"
        },
        {
            value: "2012",
            label: "2012"
        },
        {
            value: "2012",
            label: "2012"
        },
        {
            value: "2013",
            label: "2013"
        },
        {
            value: "2014",
            label: "2014"
        },
        {
            value: "2015",
            label: "2015"
        },
        {
            value: "2016",
            label: "2016"
        },
        {
            value: "2017",
            label: "2017"
        },
        {
            value: "2018",
            label: "2018"
        },
        {
            value: "2019",
            label: "2019"
        },
        {
            value: "2020",
            label: "2020"
        },
        {
            value: "2021",
            label: "2021"
        },
        {
            value: "2022",
            label: "2022"
        },
    ];
    const tribunais = [
        {
            value: "TJSC",
            label: "TJSC"
        },
        {
            value: "JFSC",
            label: "JFSC"
        }
    ];
    // Similar a componentDidMount e componentDidUpdate:
    useEffect(() => {
        if (dark !== dk) {
            setDk(dark);
            console.log(dark);
            console.log(dk);
            console.log("dark");
            // dk = !dk;
            chart1.setTheme(dark ? "dark" : "light");
            chartMed.setTheme(dark ? "dark" : "light");
            chart2.setTheme(dark ? "dark" : "light");
            chartQuantidade.setTheme(dark ? "dark" : "light");
            chartValor.setTheme(dark ? "dark" : "light");
            chart3.setTheme(dark ? "dark" : "light");
            chart4.setTheme(dark ? "dark" : "light");
            chartTabelaCID.setTheme(dark ? "dark" : "light");
            chartTabelaTipos.setTheme(dark ? "dark" : "light");
            chartTabelaAno.setTheme(dark ? "dark" : "light");
            chartPizzaMedicamentos.setTheme(dark ? "dark" : "light");
            chartPizzaDoencas.setTheme(dark ? "dark" : "light");
            chartPizzaDoencasCirurgia.setTheme(dark ? "dark" : "light");
            chart7.setTheme(dark ? "dark" : "light");
            chart8.setTheme(dark ? "dark" : "light");
        }
        // else{
        //     console.log(dark);
        //     console.log(dk);
        //     console.log("dark2")
        //     chart1.setTheme(dark ? "dark": "light");
        //     chartMed.setTheme(dark ? "dark": "light");
        // }

        // Atualiza o título do documento utilizando a API do navegador
        //   document.title = `You clicked ${count} times`;
    });

    window.onload = function (e) {
        var offset = document.getElementsByClassName('faixa-ano')[0].offsetTop;
        var menu = document.getElementsByClassName('faixa-ano')[0];
        var div1 = document.getElementsByClassName('divOne')[0];
        document.addEventListener('wheel', function () {
            console.log(menu.getBoundingClientRect().top)
            if (div1.getBoundingClientRect().top < -offset + 25) {
                menu.style.position = 'fixed';
                menu.style.paddingLeft = "100px";
            } else {
                menu.style.position = 'initial';
                menu.style.paddingLeft = "initial";
            }
        });
    };

    const clickHandler = (payload) => {
        // Optional: ~REPLACE~ this with a suitable filter if you're using your own chart
        const ano = document.getElementById("filtro-ano").value;
        // const filter = Object.assign({},payload.selectionFilter , { "data_distribuicao":{$gte: new Date(`${ano}-01-01T00:00:00.000Z`),$lte: new Date(`${ano}-12-31T00:00:00.000Z`)}});
        var f = { ...filter, ...payload.selectionFilter };//, ...{ "data_distribuicao":{$gte: new Date(`${ano}-01-01T00:00:00.000Z`),$lte: new Date(`${ano}-12-31T00:00:00.000Z`)}}};
        if (!f["data_distribuicao"] && ano) {
            f = { ...f, ...{ "data_distribuicao": { $gte: new Date(`${ano}-01-01T00:00:00.000Z`), $lte: new Date(`${ano}-12-31T00:00:00.000Z`) } } };
        }
        console.log(f);
        var texto = '';
        chart2.setFilter(f);
        // ano ? chart2.setFilter(f) : chart2.setFilter(payload.selectionFilter);
        ano ? texto = `processos com o CID-10 ${JSON.stringify(payload.selectionFilter["cid.codigo"])}: ${JSON.stringify(payload.selectionFilter["cid.doenca"])} de ${ano}`
            : texto = `processos com o CID-10 ${JSON.stringify(payload.selectionFilter["cid.codigo"])}: ${JSON.stringify(payload.selectionFilter["cid.doenca"])}`

        console.log(filter);
        document.getElementById("filterMessage").innerText = texto;
    };

    const clickHandlerCID = (payload) => {
        // Optional: ~REPLACE~ this with a suitable filter if you're using your own chart
        chartPizzaDoencas.setFilter(payload.selectionFilter);
        console.log(payload.selectionFilter);
        // document.getElementById(
        // 	"filterMessage"
        // 	).innerText = `processos com o CID-10 ${JSON.stringify(payload.selectionFilter["cid.codigo"])}: ${JSON.stringify(payload.selectionFilter["cid.doenca"])}`;
    };

    const clickHandlerANO = (payload) => {
        // Optional: ~REPLACE~ this with a suitable filter if you're using your own chart
        chart8.setFilter(payload.selectionFilter);
        console.log(JSON.stringify(payload));
        document.getElementById(
            "filterANO"
            // ).innerText = `processos apenas de ${JSON.stringify(payload.data["x"])}`;
        ).innerText = `processos apenas de ${payload.data.cell.value}`;
    };

    const clickHandlerANO1 = (payload) => {
        // Optional: ~REPLACE~ this with a suitable filter if you're using your own chart
        chartPizzaDoencas.setFilter(payload.selectionFilter);
        console.log(JSON.stringify(payload));
        document.getElementById(
            "filterANO"
            // ).innerText = `processos apenas de ${JSON.stringify(payload.data["x"])}`;
        ).innerText = `processos apenas de ${payload.data.cell.value}`;
    };

    const clickHandlerTRIBUNAL = (payload) => {
        // Optional: ~REPLACE~ this with a suitable filter if you're using your own chart
        const ano = document.getElementById("filtro-ano").value;
        if (ano) {
            filter = { ...payload.selectionFilter, ...{ "data_distribuicao": { $gte: new Date(`${ano}-01-01T00:00:00.000Z`), $lte: new Date(`${ano}-12-31T00:00:00.000Z`) } } };
        }
        else {
            filter = payload.selectionFilter;
        }
        console.log(filter);
        // filter = payload.selectionFilter;
        chart1.setFilter(filter);
        chart2.setFilter(filter);
        console.log(JSON.stringify(payload));
    };

    const options = { includes: [{ types: ['text'] }] };
    const options2 = { includes: [{ roles: ['mark'] }] };
    const options3 = { includes: [{ types: ['text'] }, { roles: ['mark'] }] };

    const renderChart1 = useCallback(async (ref) => {
        try {
            // console.log(dark);
            await chart1.render(ref);
            await chart1.addEventListener("click", clickHandler, options);
            // await chart1.setTheme(!tem ? "dark": "light");
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChartMed = useCallback(async (ref) => {
        try {
            await chartMed.render(ref);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChart2 = useCallback(async (ref) => {
        try {
            await chart2.render(ref);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChartQuantidade = useCallback(async (ref) => {
        try {
            await chartQuantidade.render(ref);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChartValor = useCallback(async (ref) => {
        try {
            await chartValor.render(ref);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChart3 = useCallback(async (ref) => {
        try {
            await chart3.render(ref);
            await chart3.addEventListener("click", clickHandlerTRIBUNAL, options3);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChart4 = useCallback(async (ref) => {
        try {
            await chart4.render(ref);
            await chart4.addEventListener("click", clickHandlerTRIBUNAL, options3);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChart8 = useCallback(async (ref) => {
        try {
            await chart8.render(ref);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChart7 = useCallback(async (ref) => {
        try {
            await chart7.render(ref);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChartTabelaCID = useCallback(async (ref) => {
        try {
            await chartTabelaCID.render(ref);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChartTabelaTipos = useCallback(async (ref) => {
        try {
            await chartTabelaTipos.render(ref);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChartTabelaAno = useCallback(async (ref) => {
        try {
            await chartTabelaAno.render(ref);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChartPizzaMedicamentos = useCallback(async (ref) => {
        try {
            await chartPizzaMedicamentos.render(ref);
            await chartPizzaMedicamentos.addEventListener("click", clickHandlerANO1, options2);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChartPizzaDoencas = useCallback(async (ref) => {
        try {
            await chartPizzaDoencas.render(ref);
            await chartPizzaDoencas.addEventListener("click", clickHandlerANO, options);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const renderChartPizzaDoencasCirurgia = useCallback(async (ref) => {
        try {
            await chartPizzaDoencasCirurgia.render(ref);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const setRefChart1 = useCallback(
        (ref) => {
            if (ref) {
                renderChart1(ref);
            }
            // Save a reference to the node
            refChart1.current = ref;
        },
        [renderChart1]
    );

    const setRefChartMed = useCallback(
        (ref) => {
            if (ref) {
                renderChartMed(ref);
            }
            // Save a reference to the node
            refChartMed.current = ref;
        },
        [renderChartMed]
    );

    const setRefChart2 = useCallback(
        (ref) => {
            if (ref) {
                renderChart2(ref);
            }
            // Save a reference to the node
            refChart2.current = ref;
        },
        [renderChart2]
    );

    const setRefChartQuantidade = useCallback(
        (ref) => {
            if (ref) {
                renderChartQuantidade(ref);
            }
            // Save a reference to the node
            refChartQuantidade.current = ref;
        },
        [renderChartQuantidade]
    );

    const setRefChartValor = useCallback(
        (ref) => {
            if (ref) {
                renderChartValor(ref);
            }
            // Save a reference to the node
            refChartValor.current = ref;
        },
        [renderChartValor]
    );

    const setRefChart3 = useCallback(
        (ref) => {
            if (ref) {
                renderChart3(ref);
            }
            // Save a reference to the node
            refChart3.current = ref;
        },
        [renderChart3]
    );

    const setRefChart4 = useCallback(
        (ref) => {
            if (ref) {
                renderChart4(ref);
            }
            // Save a reference to the node
            refChart4.current = ref;
        },
        [renderChart4]
    );

    const setRefChart8 = useCallback(
        (ref) => {
            if (ref) {
                renderChart8(ref);
            }
            // Save a reference to the node
            refChart8.current = ref;
        },
        [renderChart8]
    );

    const setRefChart7 = useCallback(
        (ref) => {
            if (ref) {
                renderChart7(ref);
            }
            // Save a reference to the node
            refChart7.current = ref;
        },
        [renderChart7]
    );

    const setRefChartTabelaCID = useCallback(
        (ref) => {
            if (ref) {
                renderChartTabelaCID(ref);
            }
            // Save a reference to the node
            refChartTabelaCID.current = ref;
        },
        [renderChartTabelaCID]
    );

    const setRefChartTabelaTipos = useCallback(
        (ref) => {
            if (ref) {
                renderChartTabelaTipos(ref);
            }
            // Save a reference to the node
            refChartTabelaTipos.current = ref;
        },
        [renderChartTabelaTipos]
    );

    const setRefChartTabelaAno = useCallback(
        (ref) => {
            if (ref) {
                renderChartTabelaAno(ref);
            }
            // Save a reference to the node
            refChartTabelaAno.current = ref;
        },
        [renderChartTabelaAno]
    );

    const setRefChartPizzaMedicamentos = useCallback(
        (ref) => {
            if (ref) {
                renderChartPizzaMedicamentos(ref);
            }
            // Save a reference to the node
            refChartPizzaMedicamentos.current = ref;
        },
        [renderChartPizzaMedicamentos]
    );

    const setRefChartPizzaDoencas = useCallback(
        (ref) => {
            if (ref) {
                renderChartPizzaDoencas(ref);
            }
            // Save a reference to the node
            refChartPizzaDoencas.current = ref;
        },
        [renderChartPizzaDoencas]
    );

    const setRefChartPizzaDoencasCirurgia = useCallback(
        (ref) => {
            if (ref) {
                renderChartPizzaDoencasCirurgia(ref);
            }
            // Save a reference to the node
            refChartPizzaDoencasCirurgia.current = ref;
        },
        [renderChartPizzaDoencasCirurgia]
    );

    const handleChangeTribunais = selectObject => {
        let query = [];
    };

    const handleChangeAnos = selectObject => {
        // const ano = selectObject[0].value;
        // const dat = new Date(2008, 1, 1);
        let query = [];
        selectObject.forEach(function ({ value, index, array }) {
            console.log(value.value);
            console.log(value);
            query.push({ "data_distribuicao": { $gte: new Date(`${value}-01-01T00:00:00.000Z`), $lte: new Date(`${value}-12-31T00:00:00.000Z`) } })
        });
        console.log(query);

        filter = {};
        // console.log(JSON.stringify(ano));
        query.length > 0 ? chart1.setFilter({ $or: query })
            : chart1.setFilter({});
        query.length > 0 ? chartMed.setFilter({ $or: query })
            : chartMed.setFilter({});
        query.length > 0 ? chart2.setFilter({ $or: query })
            : chart2.setFilter({});
        // ano ? chart2.setFilter({ "data_distribuicao": { $gte: new Date(`${ano}-01-01T00:00:00.000Z`), $lte: new Date(`${ano}-12-31T00:00:00.000Z`) } })
        //     : chart2.setFilter({});
        query.length > 0 ? chartQuantidade.setFilter({ $or: query })
            : chartQuantidade.setFilter({});
        query.length > 0 ? chartValor.setFilter({ $or: query })
            : chartValor.setFilter({});
        query.length > 0 ? chart3.setFilter({ $or: query })
            : chart3.setFilter({});
        query.length > 0 ? chart4.setFilter({ $or: query })
            : chart4.setFilter({});
        query.length > 0 ? chartTabelaCID.setFilter({ $or: query })
            : chart3.setFilter({});
        query.length > 0 ? chart4.setFilter({ $or: query })
            : chart4.setFilter({});
        query.length > 0 ? chartPizzaMedicamentos.setFilter({ $or: query })
            : chartPizzaMedicamentos.setFilter({});
        query.length > 0 ? chartPizzaDoencas.setFilter({ $or: query })
            : chartPizzaDoencas.setFilter({});
        query.length > 0 ? chart7.setFilter({ $or: query })
            : chart7.setFilter({});
        query.length > 0 ? chart8.setFilter({ $or: query })
            : chart8.setFilter({});
        var texto = '';
        // ano
        //     ? texto = `processos de ${ano}`
        //     : texto = `todos os processos`;
        // document.getElementById("filterMessage").innerText = texto;
        // options_filters = [{ label: ano, value: ano }, { label: 'Acerola', value: 'Acerola' }];
        // document.getElementsByClassName("basic-multi-select")[0].setAttribute("value", [{ label: ano, value: ano }]);
    };
    // const refBarChart = useRef(null);
    // const refGeoChart = useRef(null);
    // const [year, setYear] = useState(lastOlympicsYear);
    // const [playing, setPlaying] = useState(false);

    // const yearRef = React.useRef(year);
    // yearRef.current = year;

    // const timerIdRef = React.useRef();
    // const replayRef = React.useRef(false);

    // const renderBarChart = useCallback(async (ref) => {
    //     try {
    //         await barChart.render(ref);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }, []);

    // const renderGeoChart = useCallback(async (ref) => {
    //     try {
    //         await geoChart.render(ref);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }, []);

    // const setRefBarChart = useCallback(
    //     (ref) => {
    //         if (ref) {
    //             renderBarChart(ref);
    //         }
    //         // Save a reference to the node
    //         refBarChart.current = ref;
    //     },
    //     [renderBarChart]
    // );

    // const setRefGeoChart = useCallback(
    //     (ref) => {
    //         if (ref) {
    //             renderGeoChart(ref);
    //         }
    //         // Save a reference to the node
    //         refGeoChart.current = ref;
    //     },
    //     [renderGeoChart]
    // );

    // const handleChange = (_event, newValue) => {
    //     setYear(newValue);
    // };

    // const handleChangeCommitted = (_event, newValue) => {
    //     setYear(newValue);
    //     getDataFromAllPreviousYears(newValue);
    // };

    // // This function is creating the filter that will be executed on the data.
    // // If you wish to run this example on your data, change it to accomodate your idea or make sure you have a "Year" field in your data source
    // const getDataFromAllPreviousYears = (endYear) => {
    //     let filter = {
    //         $and: [
    //             { Year: { $gte: firstOlympicsYear } },
    //             { Year: { $lte: endYear } },
    //         ],
    //     };

    //     return Promise.all([
    //         geoChart.setFilter(filter),
    //         barChart.setFilter(filter),
    //     ]);
    // };

    // const play = () => {
    //     let currentYear = yearRef.current + 4;

    //     if (currentYear > lastOlympicsYear) {
    //         if (replayRef.current) {
    //             currentYear = firstOlympicsYear;
    //             replayRef.current = false;
    //         } else {
    //             clearInterval(timerIdRef.current);
    //             setPlaying(false);
    //             return;
    //         }
    //     }
    //     getDataFromAllPreviousYears(currentYear);
    //     setYear(currentYear);
    // };

    // const setTimelineInterval = () => {
    //     if (playing) {
    //         // we do this because the first play with setInterval is after the time specified
    //         // and the first filter should be instantaneous
    //         play();
    //         timerIdRef.current = setInterval(play, timelineInterval);
    //     } else {
    //         clearInterval(timerIdRef.current);
    //     }
    // };

    // const actionTimeline = () => {
    //     if (yearRef.current === lastOlympicsYear) {
    //         replayRef.current = true;
    //     }

    //     setPlaying(!playing);
    // };

    // useEffect(() => {
    //     setTimelineInterval();
    // }, [playing]);

    // const buttonClass = `action-button ${playing ? "pause-button" : "play-button"
    //     }`;

    return (
        <div className='divOne'>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars style={dark ? { color: 'white' } : { color: '#353535' }} />
            </div >
            <header>
                <h1>
                    <FaHeartbeat style={{ width: '50px', color: '#00b193' }} />
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
                <header className="faixa-ano" id="faixa-ano" style={scroll ? { position: 'fixed' } : { position: '' }}>
                    <div style={{display: 'flex', "border-top": "5px solid rgba(255,255,255,.0)"}}>
                        <div style={{display: 'block', width: '100%', "border-left": "5px solid rgba(255,255,255,.0)", "border-right": "5px solid rgba(255,255,255,.0)"}}>
                            <div style={{display: 'flex'}}>
                                <h4 style={{width: '45%'}}>Ano de distribuição{' '}</h4>
                                <div style={{width: '100%'}}>
                                    <Select className="ano" id="filtro-ano"
                                            isMulti
                                            placeholder="Selecione o ano"
                                            options={anos}
                                            onChange={handleChangeAnos}
                                            style={{"border-left": ""}}
                                    />
                                </div>
                            </div>
                            <div style={{display: 'flex'}}>
                                <h4 style={{width: '45%'}}>Tribunal{' '}</h4>
                                <div style={{width: '100%'}}>
                                    <Select className="ano" id="filtro-ano"
                                            isMulti
                                            placeholder="Selecione o tribunal"
                                            options={tribunais}
                                            onChange={handleChangeTribunais}
                                    />
                                </div>    
                            </div>
                        </div>
                        <div style={{display: 'block', width: '100%', "border-left": "5px solid rgba(255,255,255,.0)", "border-right": "5px solid rgba(255,255,255,.0)"}}>
                            <div style={{display: 'flex'}}>
                                <h4 style={{width: '45%'}}>Tipo de solicitação{' '}</h4>
                                <div style={{width: '100%'}}>
                                    <Select className="ano" id="filtro-ano"
                                            isMulti
                                            placeholder="Selecione o ano"
                                            options={anos}
                                            onChange={handleChangeAnos}
                                    />
                                </div>
                            </div>
                            <div style={{display: 'flex'}}>
                                <h4 style={{width: '45%'}}>Procurador{' '}</h4>
                                <div style={{width: '100%'}}>
                                    <Select className="ano" id="filtro-ano"
                                            isMulti
                                            placeholder="Selecione o tribunal"
                                            options={tribunais}
                                            onChange={handleChangeTribunais}
                                    />
                                </div>    
                            </div>
                        </div>
                        
                    </div>
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
                        {/* <h4>Mostrando <span id="filterMessage" onChange={handleDefaultf(options_filters)}>todos os processos</span></h4> */}
                        <h4>Mostrando <span id="filterMessage">todos os processos</span></h4>
                    
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
                <div className="chart" id="chart1" ref={setRefChart1}></div>
                <div className="chart" id="chartMed" ref={setRefChartMed}></div>
            </div>
            <div className="body-content">
                <div className="chart" id="chart2" ref={setRefChart2}></div>
            </div>
            {/* <div className="body-content"> */}
            <br></br>
            <h4>QUANTIDADE E VALOR DOS PROCESSOS</h4>
            <br></br>
            {/* </div> */}
            <div className="body-content">
                <div className="chart" id="chartQuantidade" ref={setRefChartQuantidade}></div>
                <div className="chart" id="chartValor" ref={setRefChartValor}></div>
            </div>

            <br></br>
            <h4>COMPETÊNCIA</h4>
            <br></br>
            {/* </div> */}
            <div className="body-content">
                <div className="chart" id="chart3" ref={setRefChart3}></div>
                <div className="chart" id="chart4" ref={setRefChart4}></div>
            </div>
            {/* <div className="body-content"> */}
            <br></br>
            <h4>TIPOS DE SOLICITAÇÕES</h4>
            <br></br>
            {/* </div> */}
            <div className="body-content">
                <div className="chart" id="chart8" ref={setRefChart8}></div>
                <div className="chart" id="chart7" ref={setRefChart7}></div>
            </div>
            <div className="body-content">
                <div className="chart" id="chartTabelaCID" ref={setRefChartTabelaCID}></div>
                <div className="chart" id="chartTabelaTipos" ref={setRefChartTabelaTipos}></div>
                <div className="chart" id="chartTabelaAno" ref={setRefChartTabelaAno}></div>
            </div>
            <br></br>
            <h4>PROCESSOS DE MEDICAMENTOS</h4>
            <br></br>
            <div className="body-content">
                <div className="chart" id="chartPizzaMedicamentos" ref={setRefChartPizzaMedicamentos}></div>
                <div className="chart" id="chartPizzaDoencas" ref={setRefChartPizzaDoencas}></div>
            </div>
            <br></br>
            <h4>PROCESSOS DE CIRURGIA</h4>
            <br></br>
            <div className="body-content">
                {/* <div className="chart" id="chartPizzaMedicamentos"></div> */}
                <div className="chart" id="chartPizzaDoencasCirurgia" ref={setRefChartPizzaDoencasCirurgia}></div>
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
        //     <>
        //         <header className="header">
        //             <h1>Building timeline charts with Charts Embedding SDK (MongoDB)</h1>
        //             {/* <button className={buttonClass} onClick={actionTimeline}></button> */}
        //         </header>

        //         {/* <div className="actions">
        //             <div className="slider">
        //                 <PrettySlider
        //                     valueLabelDisplay="on"
        //                     aria-label="pretto slider"
        //                     min={firstOlympicsYear}
        //                     max={lastOlympicsYear}
        //                     step={4}
        //                     onChangeCommitted={handleChangeCommitted}
        //                     onChange={handleChange}
        //                     value={year}
        //                     defaultValue={lastOlympicsYear}
        //                 />
        //             </div>
        //         </div> */}

        //         <div className="charts">
        //             <div id="chart1" ref={setRefChart1}></div>
        //             <div id="chartMed" ref={setRefChartMed}></div>
        //         </div>
        //     </>
    );
}