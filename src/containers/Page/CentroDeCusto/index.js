import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

import ReactDOM from 'react-dom';
import './index.css';
import { Tabs, Table } from 'antd';

const { TabPane } = Tabs;


const dataSourceAtividadesInternas = [

  {
    key                : '1',
    id                 : "01",
    titulo             : "Atendimento Avulso - Público - Fortaleza(CC:X.05.XXXXX.071)",
    aprovador          : "Carmem A. Pires de Castro",
    centrodecusto      : "2.896",
    centrodecustoafter : "2896",
    visualizar         : "visualizar",
  },
  {
    key                : '2',
    id                 : "02",
    titulo             : "Melhoria de Continuados - Fortaleza(CC:X.05.XXXXX.031)",
    aprovador          : "Renata Simões Cavalcanti ",
    centrodecusto      : "2.366",
    centrodecustoafter : "2366",
    visualizar         : "visualizar",
    
  },
  
  {
    key                : '3',
    id                 : "03",
    titulo             : "Centro de Gerênciamento de Serviços CC:X.05.XXXXX.071)",
    aprovador          : "Lucio Antônio de Velga e Silva",
    centrodecusto      : "2.367",
    centrodecustoafter : "2367",
    visualizar         : "visualizar",
    
  },
 
];

const columnsAtividadeInternas = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Titulo',
    dataIndex: 'titulo',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Aprovador',
    dataIndex: 'aprovador',
  },
  {
    title: 'Centro de Custo',
    dataIndex: 'centrodecusto',
  },
  {
    title: 'Centro de Custo After',
    dataIndex: 'centrodecustoafter',
  },
  {
    title: 'Visualizar',
    dataIndex: 'visualizar',
  },
];

const dataSourceListaDeContratos = [

  {
    key                : '1',
    contrato           : "CONTRATO PARA 91949 ATIVAÇÃO 0365TJPA",
    aprovador          : "Carmem A. Pires de Castro",
    centrodecusto      : "2896",
    visualizar         : "visualizar",
  },
  {
    key                : '2',
    contrato           : "CONTRATO PARA 91949 ATIVAÇÃO 0365TJPA",
    aprovador          : "Carmem A. Pires de Castro",
    centrodecusto      : "2896",
    visualizar         : "visualizar",
    
  },
  
  {
    key                : '3',
    contrato           : "CONTRATO PARA 91949 ATIVAÇÃO 0365TJPA",
    aprovador          : "Carmem A. Pires de Castro",
    centrodecusto      : "2896",
    visualizar         : "visualizar",
    
  },
 
];

const columnsListaDeContratos = [
  {
    title: 'Contrato',
    dataIndex: 'contrato',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Aprovador',
    dataIndex: 'aprovador',
   
  },
  {
    title: 'Centro de Custo',
    dataIndex: 'centrodecusto',
  },
  {
    title: 'Visualizar',
    dataIndex: 'visualizar',
  },
];


const dataSourceListaDeLicenciamentos = [

  {
    key                : '1',
    projeto            : "LIC-MICROSOFT/EX-91544-SAM MICROSOFT AMBIENTE FUNASA - CC(10128)",
    aprovador          : "Mauro Neves Araujo",
    centrodecusto      : "10.128",
    visualizar         : "visualizar",
  },
  {
    key                : '2',
    projeto           : "LIC-MICROSOFT/EX-94633-SAM MICROSOFT AMBIENTE CNJ - CC(11984)",
    aprovador          : "Valdinei Zimmer",
    centrodecusto      : "11.984",
    visualizar         : "visualizar",
    
  },
  
  {
    key                : '3',
    projeto            : "LIC-MICROSOFT/EX-80659-SAM MICROSOFT AMBIENTE BASA- CC(8910)",
    aprovador          : "Antônio Arthur Cavalcante Rocha",
    centrodecusto      : "89.10",
    visualizar         : "visualizar",
    
  },
 
];

const columnsListaDeLicenciamentos = [
  {
    title: 'Projeto',
    dataIndex: 'projeto',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Aprovador',
    dataIndex: 'aprovador',
   
  },
  {
    title: 'Centro de Custo',
    dataIndex: 'centrodecusto',
  },
  {
    title: 'Visualizar',
    dataIndex: 'visualizar',
  
  },
];


const dataSourceListaDeProjetos = [

  {
    key                : '1',
    projeto            : "COMP-INT BEL GOV -RORAIMA- COMPLEMENTAR ON 57121 ON CN 60629 -CC5977CC5971",
    aprovador          : "Paulo Fco Brito Moreira",
    centrodecusto      : "5977",
    visualizar         : require('C:/projetoADVB/src/image/1.jpg'),
  },
  {
    key                : '2',
    projeto            : "COMP-INT BSB MPU - COMPLEMENTAR 67335 -2013 ON 62295 -CC5977CC123971",
    aprovador          : "Rafael Morais dos Santos",
    centrodecusto      : "6459",
    visualizar         : require('C:/projetoADVB/src/image/1.jpg'),
  },
    
  
  
  {
    key                : '3',
     projeto            : "COMP-INT BSB MPU - COMPLEMENTAR 63335 -2013 ON 62295 -CC5977CC1453971",
    aprovador          : "Rafael Morais dos Santos",
    centrodecusto      : "6479",
    visualizar         : require('C:/projetoADVB/src/image/1.jpg'),
  },
    
  
 
];

const columnsListaDeProjetos = [
  {
    title: 'Projeto',
    dataIndex: 'projeto',
    render: text => <a>{text}</a>,
    
  },
  {
    title: 'Aprovador',
    dataIndex: 'aprovador',
   
  },
  {
    title: 'Centro de Custo',
    dataIndex: 'centrodecusto',
  },
  {
    title: 'Visualizar',
    dataIndex: 'visualizar',
    
    
  },
];


const ListItem = ({ onChange, onDelete, value }) => {
  return (
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Atividades Internas" key="1" textStyle={{color: '#fff'}} >
      
     
        <Table dataSource={dataSourceAtividadesInternas} columns={columnsAtividadeInternas} />;
      </TabPane>
      <TabPane tab="Lista de Contratos" key="2">
        <Table dataSource={dataSourceListaDeContratos} columns={columnsListaDeContratos} />;
      </TabPane>
      <TabPane tab="Lista de Licenciamentos" key="3">
       <Table dataSource={dataSourceListaDeLicenciamentos} columns={columnsListaDeLicenciamentos} />;
      </TabPane>
      <TabPane tab="Lista de Projetos" key="4">
       <Table dataSource={dataSourceListaDeProjetos} columns={columnsListaDeProjetos} />;
      </TabPane>
    </Tabs>
          </div>
  );
};

  
export default ListItem;