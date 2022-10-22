import { useSelector } from 'react-redux';
import { Row, Col,Progress } from 'reactstrap';

import Widget from '../../components/Widget';

import s from './Dashboard.module.scss';

import React, { useEffect, useState } from "react";

import axios from 'axios'

import { defaultTo, set } from 'lodash';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import indicatoriFormReducers from 'store/reducers/indicatori/indicatoriFormReducers';

  

const Dashboard = () => {
 
  const currentUser = useSelector((store) => store.auth.currentUser);

  const [popular, setPopular] = useState([]);

 
  useEffect(() => {
    fetchPopular();
    
  }, []);
  
    const fetchPopular = async () => {
     
    const data = await fetch('https://air-10871-lnm5nd2pia-uc.a.run.app/api/participanti', 
     
     
    {
     
    });
     
    const participanti = await data.json();
    console.log(participanti);
    setPopular(participanti.rows);
    
  
  }
//indicatori widget



const i114= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
  .filter(c => c.Nume === "4S114" ).length > 0).length
const i1141= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
.filter(c => c.Nume === "4S114.1" ).length > 0).length
const i1142= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
.filter(c => c.Nume === "4S114.2" ).length > 0).length
const i1143= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
.filter(c => c.Nume === "4S114.3" ).length > 0).length

const i110= popular.filter(item =>  item.Pocu === "DA" && item.Status === "Finalizare implicare proiect" && item.INDICATORI
.filter(c => c.Nume === "4S110" ).length > 0).length
  
const i1101= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
.filter(c => c.Nume === "4S110.1" ).length > 0).length
const i1102= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
.filter(c => c.Nume === "4S110.2" ).length > 0).length
const i1103= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
.filter(c => c.Nume === "4S110.3" ).length > 0).length


const i111= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
  .filter(c => c.Nume === "4S111" ).length > 0).length
const i1111= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
.filter(c => c.Nume === "4S111.1" ).length > 0).length
const i1112= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
.filter(c => c.Nume === "4S111.2" ).length > 0).length
const i1113= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
.filter(c => c.Nume === "4S111.3" ).length > 0).length

const i112= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
  .filter(c => c.Nume === "4S112" ).length > 0).length
const i1121= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
.filter(c => c.Nume === "4S112.1" ).length > 0).length
const i1122= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
.filter(c => c.Nume === "4S112.2" ).length > 0).length
const i1123= popular.filter(item =>  item.Pocu === "DA" && item.INDICATORI
.filter(c => c.Nume === "4S112.3" ).length > 0).length




    //indicatori

    const certifpocu = popular.reduce((total, participant) => total + Math.min(participant.INDICATORI
      .filter(indicator => indicator.Nume === "4S111").length, participant.INDICATORI
      .filter(indicator => indicator.Nume === "4S110").length), 0)
     
  const total = popular.reduce((total, participant) => total + participant.INDICATORI
  .filter(indicator => indicator.Nume === "4S114").length,0)

  const total1 = popular.reduce((total, participant) => total + participant.INDICATORI
  .filter(indicator => indicator.Nume === "4S110").length,0)



  const total2 = popular.reduce((total, participant) => total + participant.INDICATORI
  .filter(indicator => indicator.Nume === "4S111").length,0)

  const total3 = popular.reduce((total, participant) => total + participant.INDICATORI
  .filter(indicator => indicator.Nume === "4S112").length,0)

  const total4 = popular.length
  
 //pocu
 const pocu = popular.filter(item =>  item.Pocu === "DA").length

 const nopocu =  popular.filter(item =>  item.Pocu === "NU").length

 
 //cursuri
 


  const tapiter = popular.reduce((total, participant) => total + participant.Cursuri
  .filter(indicator => indicator.Nume === "Tapiter").length,0)

  const parttapiter = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Tapiter").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S114").length), 0)

  const printare3d = popular.reduce((total, participant) => total + participant.Cursuri
  .filter(indicator => indicator.Nume === "Printare 3D").length,0)

  const partprintare3d =  popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Printare 3D").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S114").length), 0)

  const ipf = popular.reduce((total, participant) => total + participant.Cursuri
  .filter(indicator => indicator.Nume === "Instructor preparator formare").length,0)

  const partipf = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Instructor preparator formare").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S114").length), 0)
  
  const ger = popular.reduce((total, participant) => total + participant.Cursuri
  .filter(indicator => indicator.Nume === "Comunicare in limba germana").length,0)

  const partger = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Comunicare in limba germana").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S114").length), 0)

  const iru = popular.reduce((total, participant) => total + participant.Cursuri
  .filter(indicator => indicator.Nume === "Inspector resurse umane").length,0)

  const partiru = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Inspector resurse umane").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S114").length), 0)

  const mru = popular.reduce((total, participant) => total + participant.Cursuri
  .filter(indicator => indicator.Nume === "Manager Resurse Umane").length,0)

  const partmru =  popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Manager Resurse Umane").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S114").length), 0)

  const conta= popular.reduce((total, participant) => total + participant.Cursuri
  .filter(indicator => indicator.Nume === "Contabilitate").length,0)

  const partconta = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Contabilitate").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S114").length), 0)

  const digitale= popular.reduce((total, participant) => total + participant.Cursuri
  .filter(indicator => indicator.Nume === "Competente digitale").length,0)

  const partdigitale =  popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Competente digitale").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S114").length), 0)

    const mp= popular.reduce((total, participant) => total + participant.Cursuri
  .filter(indicator => indicator.Nume === "Manager de proiect").length,0)

  const partmp =  popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Manager de proiect").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S114").length), 0)
   
 const mip= popular.reduce((total, participant) => total + participant.Cursuri
    .filter(indicator => indicator.Nume === "Management procese").length,0)
  
 const partmip =  popular.reduce((total, participant) => total + Math.min(participant.Cursuri
      .filter(indicator => indicator.Nume === "Management procese").length, participant.INDICATORI
      .filter(indicator => indicator.Nume === "4S114").length), 0)
  
const opcnc= popular.reduce((total, participant) => total + participant.Cursuri
      .filter(indicator => indicator.Nume === "Operator CNC").length,0)
    
const partopcnc =  popular.reduce((total, participant) => total + Math.min(participant.Cursuri
        .filter(indicator => indicator.Nume === "Operator CNC").length, participant.INDICATORI
        .filter(indicator => indicator.Nume === "4S114").length), 0)
        
const evalc = popular.reduce((total, participant) => total + participant.Cursuri
        .filter(indicator => indicator.Nume === "Evaluare competente").length,0)
      
  const partevalc =  popular.reduce((total, participant) => total + Math.min(participant.Cursuri
          .filter(indicator => indicator.Nume === "Evaluare competente").length, participant.INDICATORI
          .filter(indicator => indicator.Nume === "4S114").length), 0)

 const opci = popular.reduce((total, participant) => total + participant.Cursuri
         .filter(indicator => indicator.Nume === "Operator confectioner industrial").length,0)
          
          
 const partopci =  popular.reduce((total, participant) => total + Math.min(participant.Cursuri
            .filter(indicator => indicator.Nume === "Operator confectioner industrial").length, participant.INDICATORI
            .filter(indicator => indicator.Nume === "4S114").length), 0)

const opmp = popular.reduce((total, participant) => total + participant.Cursuri
            .filter(indicator => indicator.Nume === "Operator mase plastice").length,0)
             
             
const partopmp =  popular.reduce((total, participant) => total + Math.min(participant.Cursuri
               .filter(indicator => indicator.Nume === "Operator mase plastice").length, participant.INDICATORI
               .filter(indicator => indicator.Nume === "4S114").length), 0)    

  //certificati

  const certconta = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Contabilitate").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S110").length), 0)

  const certtapiter = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
      .filter(indicator => indicator.Nume === "Tapiter").length, participant.INDICATORI
      .filter(indicator => indicator.Nume === "4S110").length), 0)

  const certger = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
      .filter(indicator => indicator.Nume === "Comunicare in limba germana").length, participant.INDICATORI
      .filter(indicator => indicator.Nume === "4S110").length), 0)

  const cert3d = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
        .filter(indicator => indicator.Nume === "Printare 3D").length, participant.INDICATORI
        .filter(indicator => indicator.Nume === "4S110").length), 0)

   const certmru = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
          .filter(indicator => indicator.Nume === "Manager Resurse Umane").length, participant.INDICATORI
          .filter(indicator => indicator.Nume === "4S110").length), 0)

  
   const certiru21 = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
            .filter(indicator => indicator.Nume === "Inspector resurse umane").length, participant.INDICATORI
            .filter(indicator => indicator.Nume === "4S110").length), 0)

  const certipf = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
            .filter(indicator => indicator.Nume === "Instructor preparator formare").length, participant.INDICATORI
            .filter(indicator => indicator.Nume === "4S110").length), 0)
            
  const certdigitale = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
              .filter(indicator => indicator.Nume === "Competente digitale").length, participant.INDICATORI
              .filter(indicator => indicator.Nume === "4S110").length), 0)

 const certmp = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
              .filter(indicator => indicator.Nume === "Manager de proiect").length, participant.INDICATORI
              .filter(indicator => indicator.Nume === "4S110").length), 0)
  
 const certmip = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
                .filter(indicator => indicator.Nume === "Management procese").length, participant.INDICATORI
                .filter(indicator => indicator.Nume === "4S110").length), 0)

  const certopcnc = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
              .filter(indicator => indicator.Nume === "Operator CNC").length, participant.INDICATORI
               .filter(indicator => indicator.Nume === "4S110").length), 0)

   const certevalc = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
          .filter(indicator => indicator.Nume === "Evaluare competente").length, participant.INDICATORI
           .filter(indicator => indicator.Nume === "4S110").length), 0)

 const certopci = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
            .filter(indicator => indicator.Nume === "Operator confectioner industrial").length, participant.INDICATORI
             .filter(indicator => indicator.Nume === "4S110").length), 0)

const certopmp = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
         .filter(indicator => indicator.Nume === "Operator mase plastice").length, participant.INDICATORI
         .filter(indicator => indicator.Nume === "4S110").length), 0)

   //  certificati POCU   
    
   
   const pocuiru= popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Inspector resurse umane").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)

  const pocu3d = popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Printare 3D").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)

    const pocutapiter= popular.reduce((total, participant) => total + Math.min(participant.Cursuri
      .filter(indicator => indicator.Nume === "Tapiter").length, participant.INDICATORI
      .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)

    const pocuconta= popular.reduce((total, participant) => total + Math.min(participant.Cursuri
      .filter(indicator => indicator.Nume === "Contabilitate").length, participant.INDICATORI
      .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)

   const pocuger= popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Comunicare in limba germana").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)
    
   const pocumru= popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Manager Resurse Umane").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)

   const pocudigitale= popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Competente digitale").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)

   const pocuipf= popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Instructor preparator formare").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)

    const pocump= popular.reduce((total, participant) => total + Math.min(participant.Cursuri
      .filter(indicator => indicator.Nume === "Manager de proiect").length, participant.INDICATORI
      .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)

  const pocumip= popular.reduce((total, participant) => total + Math.min(participant.Cursuri
  .filter(indicator => indicator.Nume === "Management procese").length, participant.INDICATORI
  .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)

  const pocuopcnc= popular.reduce((total, participant) => total + Math.min(participant.Cursuri
    .filter(indicator => indicator.Nume === "Operator CNC").length, participant.INDICATORI
    .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)

    const pocuevalc= popular.reduce((total, participant) => total + Math.min(participant.Cursuri
      .filter(indicator => indicator.Nume === "Evaluare competente").length, participant.INDICATORI
      .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)

      const pocuopci= popular.reduce((total, participant) => total + Math.min(participant.Cursuri
        .filter(indicator => indicator.Nume === "Operator confectioner industrial").length, participant.INDICATORI
        .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)

        const pocuopmp= popular.reduce((total, participant) => total + Math.min(participant.Cursuri
          .filter(indicator => indicator.Nume === "Operator mase plastice").length, participant.INDICATORI
          .filter(indicator => indicator.Nume === "4S111" || indicator.Nume ==="4S112").length), 0)



  //Domiciliul
  
  const rural = popular.filter(item =>  item.Pocu === "DA" && item.Domiciliul ==="Rural").length

    const urban = popular.filter(item =>  item.Pocu === "DA" && item.Domiciliul ==="Urban").length
  
  
  
// status participare proiect
const abandon =  popular.filter(item =>  item.Status === "Abandon" && item.Pocu==="DA" ).length

const finalizare = popular.filter(item =>  item.Status === "Finalizare implicare proiect" && item.Pocu==="DA" ).length



const options = {
  chart: {
    type: 'column'
},
title: {
    text: 'Indicatori AIR'
},
subtitle: {
    text: 'Source: A21'
},
xAxis: {
    categories: [
        'Indicatori'
    ],
    crosshair: true
},
yAxis: {
    min: 0,
    title: {
        text: 'Participanti'
    }
},
tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
},
plotOptions: {
    column: {
        pointPadding: 0.2,
        borderWidth: 0
    }
},
series: [{
  name: '4S114',
  data: [total]

}, {
  name: '4S110',
  data: [total1]

}, {
  name: '4S111',
  data: [total2]

}, {
  name: '4S112',
  data: [total3]

}]
};
console.log(options)

const options3 = {
  chart: {
    type: 'column'
},
title: {
    text: 'Indicatori AIR'
},
subtitle: {
    text: 'Source: Pocu'
},
xAxis: {
    categories: [
        'Indicatori'
    ],
    crosshair: true
},
yAxis: {
    min: 0,
    title: {
        text: 'Participanti'
    }
},
tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
},
plotOptions: {
    column: {
        pointPadding: 0.2,
        borderWidth: 0
    }
},
series: [{
  name: '4S114',
  data: [i114]

}, {
  name: '4S110',
  data: [certifpocu]

}, {
  name: '4S111',
  data: [total2]

}, {
  name: '4S112',
  data: [i112]

}]
};
console.log(options3)


const options2 = {
  chart: {
    type: 'column'
},
title: {
    text: 'Indicatori AIR'
},
subtitle: {
    text: 'Source: A21'
},
xAxis: {
    categories: [
        'Indicatori'
    ],
    crosshair: true
},
yAxis: {
    min: 0,
    title: {
        text: 'Participanti'
    }
},
tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
},
plotOptions: {
    column: {
        pointPadding: 0.2,
        borderWidth: 0
    }
},
series: [{
  name: 'Rural',
  data: [rural]

}, {
  name: 'Urban',
  data: [urban]

},]
};




const options1 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
},
title: {
    text: 'Indicatori AIR'
},
tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
accessibility: {
    point: {
        valueSuffix: '%'
    }
},
plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
    }

},
series: [{
  name: 'Indicatori',
  colorByPoint: true,
  data: [{
      name: '4S114',
      y: total,
      sliced: true,
      selected: true
  }, {
      name: '4s110',
      y: total1
  }, {
      name: '4S111',
      y: total2
  },{
    name: '4S112',
    y: total3
}]
}]
};
console.log(options)

const I4S114 = 653
const i4s114=437
const result = Math.round((I4S114 / i4s114) * 100)
console.log(result)
    return (
    <div className={s.root}>
      <h1 className="page-title">
        Welcome, {currentUser ? currentUser.firstName || 'User' : 'User'}! <br />
        <small>
          <small>Your role is {currentUser && currentUser.role}</small>
        </small>
      </h1>
      
  
        
      
        <Row>
        <Col xl={3} lg={4} xs={12}>
            <Widget className="widget-sm"
                  title={<h6>Indicator <span className="fw-semi-bold">asumat/realizat</span></h6>}
                >
                  <div className="clearfix fs-mini">
                    <span className="fs-mini"> 4S114</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  651 / {i114}</span>
                  </div>
                  <Progress color="bg-widget-transparent-lighter" className="progress-xs" value={i114}  max="651"/>
                  <div className="clearfix fs-mini">
                    <span className="fs-mini"> 4S114.1</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  100 / {i1141}</span>
                  </div>
                  <Progress color="warning" className="bg-widget-transparent-lighter progress-xs" value={i1141} max="100"/>
                  <div className="clearfix fs-mini">
                    <span className="fs-mini"> 4S114.2</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  80 / {i1142}</span>
                  </div>
                  <Progress color="danger" className="bg-widget-transparent-lighter progress-xs" value={i1142} max="161"/>
                  <div className="clearfix fs-mini">
                    <span className="fs-mini"> 4S114.3</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  49 / {i1143}</span>
                  </div>
                  <Progress color="success" className="bg-widget-transparent-lighter progress-xs" value={i1143} max="49" />
                </Widget>
              </Col>

              <Col xl={3} lg={4} xs={12}>
              <Widget className="widget-sm"
                  title={<h6>Indicator <span className="fw-semi-bold">asumat/realizat</span></h6>}
                >
                  <div className="clearfix fs-mini">
                    <span className="fs-mini"> 4S110</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  521 / {i110}</span>
                  </div>
                  <Progress color="bg-widget-transparent-lighter" className="progress-xs" value={i110} max="521"/>
                  <div className="clearfix fs-mini">
                    <span className="fs-mini"> 4S110.1</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  80 / {i1101}</span>
                  </div>
                  <Progress color="warning" className="bg-widget-transparent-lighter progress-xs" value={i1101} max="80" />
                  <div className="clearfix fs-mini">
                    <span className="fs-mini"> 4S110.2</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  64 / {i1102}</span>
                  </div>
                  <Progress color="danger" className="bg-widget-transparent-lighter progress-xs" value={i1102} max="64"/>
                  <div className="clearfix fs-mini">
                    <span className="fs-mini"> 4S110.3</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  40 / {i1103}</span>
                  </div>
                  <Progress color="success" className="bg-widget-transparent-lighter progress-xs" value={i1103} max="40"/>
                </Widget>
              </Col>

              <Col xl={3} lg={4} xs={12}>
              <Widget className="widget-sm"
                  title={<h6>Indicator <span className="fw-semi-bold">asumat/realizat</span></h6>}
                >
                  <div className="clearfix fs-mini">
                    <span className="fs-mini">4S111</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  378 / {i111}</span>
                  </div>
                  <Progress color="bg-widget-transparent-lighter" className="progress-xs" value={i111} max="378"/>
                  <div className="clearfix fs-mini">
                    <span className="pfs-mini">4S111.1</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  58 / {i1111}</span>
                  </div>
                  <Progress color="warning" className="bg-widget-transparent-lighter progress-xs" value={i1111} max="58"/>
                  <div className="clearfix fs-mini">
                    <span className="fs-mini"> 4S111.2</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  46 / {i1112}</span>
                  </div>
                  <Progress color="danger" className="bg-widget-transparent-lighter progress-xs" value={i1112} max="46" />
                  <div className="clearfix fs-mini">
                    <span className="fs-mini"> 4S111.3</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  28 / {i1113}</span>
                  </div>
                  <Progress color="success" className="bg-widget-transparent-lighter progress-xs" value={i1113} max="28"/>
                </Widget>
              </Col>

              <Col xl={3} lg={4} xs={12}>
              <Widget className="widget-sm"
                  title={<h6>Indicator <span className="fw-semi-bold">asumat/realizat</span></h6>}
                >
                  <div className="clearfix fs-mini">
                    <span className="fs-mini">4S112</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  70 / {i112}</span>
                  </div>
                  <Progress color="bg-widget-transparent-lighter" className="progress-xs" value={i112} max="70"/>
                  <div className="clearfix fs-mini">
                    <span className="fs-mini"> 4S112.1</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  11 / {i1121}</span>
                  </div>
                  <Progress color="warning" className="bg-widget-transparent-lighter progress-xs" value={i1121} max="11"/>
                  <div className="clearfix fs-mini">
                    <span className="fs-mini"> 4S112.2</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  9 / {i1122}</span>
                  </div>
                  <Progress color="danger" className="bg-widget-transparent-lighter progress-xs" value={i1122} max="9"/>
                  <div className="clearfix fs-mini">
                    <span className="fs-mini"> 4S112.3</span>
                    <span className="pull-right m-0 fw-semi-bold"> :  5 / {i1123}</span>
                  </div>
                  <Progress color="success" className="bg-widget-transparent-lighter progress-xs" value={i1123} max="5"/>
                </Widget>
              </Col>

        </Row>


        <Row>

        <Col lg={6} >

            <Widget
              title={<h6> Indicatori proiect</h6>}
              close settings
            >
              <div className="stats-row">
              <div className="stat-item">
                  <h6 className="name fs-sm">4S114</h6>
                  
                  <p className="value">Cursanti:<b> {i114}</b>
                    </p>
    
                </div>
                <div className="stat-item">
                  <h6 className="name fs-sm">4S110</h6>
                  <p className="value">Participanti: <b> {total1}</b></p>

                </div>
                <div className="stat-item">
                  <h6 className="name fs-sm">4S111</h6>
                  <p className="value">Participanti: <b> {i111}</b></p>
                </div>
                <div className="stat-item">
                  <h6 className="name fs-sm">4S112</h6>
                  <p className="value">Participanti: <b> {total3}</b></p>
                </div>
               
                
              </div>
              <Progress color="bg-primary" value={total1} className="bg-gray-lighter progress-xs" />
              <p>
                <small><span className="circle bg-primary text-white"><i className="fa fa-plus" /></span></small>
              
                <span className="fw-semi-bold">&nbsp;<h5>Anexa 21: {total4}</h5></span>
                
                
                &nbsp;
                <span className="fw-semi-bold">&nbsp;<h5>Cursanti: {i114}</h5></span>
                
                &nbsp;
                <span className="fw-semi-bold">&nbsp;<h5>Abandon: {abandon}</h5></span>
                &nbsp;
                <span className="fw-semi-bold">&nbsp;<h5>Finalizare implicare proiect: {finalizare}</h5></span>
              </p>

              <ul>
        
      </ul>
            </Widget>

            </Col>

           
                                   
         <Col lg={6} >

         <Widget
              title={<h6> Indicatori proiect - Pocuform</h6>}
              close settings
            >
              <div className="stats-row">
              <div className="stat-item">
                  <h6 className="name fs-sm">4S114</h6>
                  <p className="value">Participanti:<b> {i114}</b>
                    </p>
    
                </div>
                <div className="stat-item">
                  <h6 className="name fs-sm">4S110</h6>
                  <p className="value">Participanti: <b> {i110}</b></p>

                </div>
                <div className="stat-item">
                  <h6 className="name fs-sm">4S111</h6>
                  <p className="value">Participanti: <b> {i111}</b></p>
                </div>
                <div className="stat-item">
                  <h6 className="name fs-sm">4S112</h6>
                  <p className="value">Participanti: <b> {i112}</b></p>
                </div>
               
                
              </div>
              <Progress color="bg-primary" value={total1} className="bg-gray-lighter progress-xs" />
              <p>
                <small><span className="circle bg-primary text-white"><i className="fa fa-plus" /></span></small>
              
               
                &nbsp;
                <span className="fw-semi-bold">&nbsp;<h5>PocuForm: {pocu}</h5></span>
               
                &nbsp;
                <span className="fw-semi-bold">&nbsp;<h5>Cursanti: {i114}</h5></span>
                <span className="fw-semi-bold">&nbsp;<h5>Abandon: {abandon}</h5></span>
                &nbsp;
                <span className="fw-semi-bold">&nbsp;<h5>Finalizare implicare proiect: {finalizare}</h5></span>
              </p>

              <ul>
        
      </ul>
            </Widget>


        
          </Col>
    

        </Row>

        <Row>
          
          
          <Col lg={6}>
          <div >
        <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            </Col>
            <Col lg={6}>
            <div >
        <HighchartsReact highcharts={Highcharts} options={options3} />
            </div>
            </Col>
            
            </Row>

            <Row>
            <Col lg={6}>
             <div> &nbsp; &nbsp;</div>
              </Col>
              </Row>

              <Row>
            <Col lg={6}>
          <Widget
              title={<h6> Cursuri proiect</h6>}
              close settings>

              <div className="stats-row">
              <div className="stat-item">
                  <h6 className="name fs-sm"><b>Printare 3D</b></h6>
                  <p className="value">Inscrisi: {printare3d}</p>
                  <p className="value">Participare: {partprintare3d}</p>
                  <p className="value">Certificati: {cert3d}</p>
                  <p className="value">Cert-POCU: {pocu3d}</p>
                                 
                </div>
                <div className="stat-item">
                  <h6 className="name fs-sm"><b>Inspector RU</b></h6>
                  <p className="value">Inscrisi: {iru}</p>
                  <p className="value">Participare: {partiru}</p>
                  <p className="value">Certificati: {certiru21}</p>
                  <p className="value">Cert-POCU: {pocuiru}</p>
                </div>
                <div className="stat-item">
                  <h6 className="name fs-sm"><b>Germana</b></h6>
                  <p className="value">Participanti: {ger}</p>
                  <p className="value">Participare: {partger}</p>
                  <p className="value">Certificati: {certger}</p>
                  <p className="value">Cert-POCU: {pocuger}</p>
                </div>
                <div className="stat-item">
      <h6 className="name fs-sm"><b>Contabilitate</b></h6>
      <p className="value">Inscrisi: {conta}</p>
                  <p className="value">Participare: {partconta}</p>
                  <p className="value">Certificati: {certconta}</p>
                  <p className="value">Cert-POCU: {pocuconta}</p>
    </div>
              </div>
              
              <Progress color="bg-primary" value="60" className="bg-gray-lighter progress-xs" />
              <p>
                <small><span className="circle bg-primary text-white"><i className="fa fa-plus" /></span></small>
                         
                <span className="fw-semi-bold">&nbsp;<h5>Cursanti: {i114}</h5></span>
              
              </p>

              <ul>
        
      </ul>
            </Widget>
            </Col>

          
                
                <Col lg={6}>
                <Widget
          title={<h6> Cursuri proiect</h6>}
          close settings>

          <div className="stats-row">
              <div className="stat-item">
                  <h6 className="name fs-sm"><b>Competente digitale</b></h6>
                  <p className="value">Inscrisi: {digitale}</p>
                  <p className="value">Participare: {partdigitale}</p>
                  <p className="value">Certificati: {certdigitale}</p>
                  <p className="value">Cert-POCU: {pocudigitale}</p>
                                 
                </div>
                <div className="stat-item">
                  <h6 className="name fs-sm"><b>Instructor PF</b></h6>
                  <p className="value">Inscrisi: {ipf}</p>
                  <p className="value">Participare: {partipf}</p>
                  <p className="value">Certificati: {certipf}</p>
                  <p className="value">Cert-POCU: {pocuipf}</p>
                </div>
                <div className="stat-item">
                  <h6 className="name fs-sm"><b>Manager de proiect</b></h6>
                  <p className="value">Inscrisi: {mp}</p>
                  <p className="value">Participare: {partmp}</p>
                  <p className="value">Certificati: {certmp}</p>
                  <p className="value">Cert-POCU: {pocump}</p>
                </div>
                
               
              </div>
          
          <Progress color="bg-primary" value="60" className="bg-gray-lighter progress-xs" />
          <p>
            <small><span className="circle bg-primary text-white"><i className="fa fa-plus" /></span></small>
                     
            <span className="fw-semi-bold">&nbsp;<h5>Cursanti: {i114}</h5></span>
          
          </p>

          <ul>
    
  </ul>
        </Widget>
        
               </Col>
        

        </Row>
        
        <Row>
      
        <Col lg={6} >
        <div>

            
<Widget
  title={<h6> Cursuri proiect</h6>}
  close settings>

  <div className="stats-row">
  <div className="stat-item">
                  <h6 className="name fs-sm"><b>Manager RU</b></h6>
                  <p className="value">Inscrisi: {mru}</p>
                  <p className="value">Participare: {partmru}</p>
                  <p className="value">Certificati: {certmru}</p>
                  <p className="value">Cert-POCU: {pocumru}</p>
                                 
                </div>
               
                <div className="stat-item">
                  <h6 className="name fs-sm"><b>Imbunatatire procese</b></h6>
                  <p className="value">Inscrisi: {mip}</p>
                  <p className="value">Participare: {partmip}</p>
                  <p className="value">Certificati: {certmip}</p>
                  <p className="value">Cert-POCU: {pocumip}</p>
                                 
                </div>
                <div className="stat-item">
                <h6 className="name fs-sm"><b>Operator CI</b></h6>
                 <p className="value">Inscrisi: {opci}</p>
                  <p className="value">Participare: {partopci}</p>
                  <p className="value">Certificati: {certopci}</p>
                  <p className="value">Cert-POCU: {pocuopci}</p>
                  
                     
    </div>
    
  </div>
  
  <Progress color="bg-primary" value="60" className="bg-gray-lighter progress-xs" />
  <p>
    <small><span className="circle bg-primary text-white"><i className="fa fa-plus" /></span></small>
             
    <span className="fw-semi-bold">&nbsp;<h5>Cursanti: {i114}</h5></span>
    &nbsp;
  </p>

  <ul>

</ul>
</Widget>
</div>
        </Col>

        <Col lg={6} >
        <div>

            
<Widget
  title={<h6> Cursuri proiect calificare</h6>}
  close settings>

  <div className="stats-row">
  <div className="stat-item">
      <h6 className="name fs-sm"><b>Tapiter</b></h6>
      <p className="value">Inscrisi: {tapiter}</p>
                  <p className="value">Participare: {parttapiter}</p>
                  <p className="value">Certificati: {certtapiter}</p>
                  <p className="value">Cert-POCU: {pocutapiter}</p>
                     
    </div>
    <div className="stat-item">
      <h6 className="name fs-sm"><b>Operator MP</b></h6>
      <p className="value">Inscrisi: {opmp}</p>
                  <p className="value">Participare: {partopmp}</p>
                  <p className="value">Certificati: {certopmp}</p>
                  <p className="value">Cert-POCU: {pocuopmp}</p>
    </div>
    <div className="stat-item">
      <h6 className="name fs-sm"><b>Operator CNC</b></h6>
      <p className="value">Inscrisi: {opcnc}</p>
                  <p className="value">Participare: {partopcnc}</p>
                  <p className="value">Certificati: {certopcnc}</p>
                  <p className="value">Cert-POCU: {pocuopcnc}</p>
                     
    </div>
    
    <div className="stat-item">
                <h6 className="name fs-sm"><b>Operator CI</b></h6>
                 <p className="value">Inscrisi: {opci}</p>
                  <p className="value">Participare: {partopci}</p>
                  <p className="value">Certificati: {certopci}</p>
                  <p className="value">Cert-POCU: {pocuopci}</p>
                  
                     
    </div>
   
  </div>
  
  <Progress color="bg-primary" value="60" className="bg-gray-lighter progress-xs" />
  <p>
    <small><span className="circle bg-primary text-white"><i className="fa fa-plus" /></span></small>
             
    <span className="fw-semi-bold">&nbsp;<h5>Cursanti: {i114}</h5></span>
    &nbsp;
  </p>

  <ul>

</ul>
</Widget>
</div>
        </Col>
        </Row>

<Row>
               <Col lg={6}  >
        

            <div >
        <HighchartsReact highcharts={Highcharts} options={options1} />
            </div>
            
          </Col>

         
 
          <Col lg={6} >

         

<div >
<HighchartsReact highcharts={Highcharts} options={options2} />
    </div>
  </Col>
  </Row>
    </div>
    
  );
};

export default Dashboard;


