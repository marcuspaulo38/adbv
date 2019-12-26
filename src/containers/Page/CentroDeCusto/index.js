import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Row, Col, Button, Tabs, Table ,Select, Component } from 'antd';

import SearchField from "react-search-field";
import PropTypes from 'prop-types';
import Search from 'react-search';

import userpic from '../../../image/visualizar.png';

function Img() {
 	return  <img alt="user" src={userpic} height="25" width="25"/>;
}

function handleChange(value) {
	  console.log(value); 
	  alert("Localizando...:"+value);
}

function onSearchClick(value) {
	    
	 console.log(value); 
	 alert("Localizando...:"+value);
}

const { TabPane } = Tabs;
const { Option } = Select;
const rowSelection = {
		  onChange: (selectedRowKeys, selectedRows) => {
		    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		  },
		  getCheckboxProps: record => ({
		    disabled: record.name === 'Disabled User', 
		    name: record.name,
		  }),
		};

const dataSourceAtividadesInternas = [

  {
    key                : '1',
    titulo             : "Atendimento Avulso - Público - Fortaleza(CC:X.05.XXXXX.071)",
    aprovador          : "Carmem A. Pires de Castro",
    centrodecusto      : "2.896",
    visualizar         : "visualizar",
    
  },
  {
    key                : '2',
    titulo             : "Melhoria de Continuados - Fortaleza(CC:X.05.XXXXX.031)",
    aprovador          : "Renata Simões Cavalcanti ",
    centrodecusto      : "2.366",
    visualizar         : "visualizar",
    
  },
  
  {
    key                : '3',
    titulo             : "Centro de Gerênciamento de Serviços CC:X.05.XXXXX.071)",
    aprovador          : "Lucio Antônio de Velga e Silva",
    centrodecusto      : "2.367",
    visualizar         : "visualizar",
    
  },
 
];

const columnsAtividadeInternas = [
  
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
    title: 'Visualizar',
    dataIndex: 'visualizar',
    render: text => <a>{<Img />}</a>,
  },
];

const dataSourceListaDeContratos = [

  {
    key                : '1',
    contrato           : "CONTRATO PARA 91949 ATIVAÇÃO 0365TJPA",
    aprovador          : "Allah",
    centrodecusto      : "2896",
    visualizar         : "visualizar",
  },
  {
    key                : '2',
    contrato           : "CONTRATO PARA 91949 ATIVAÇÃO 0365TJPA",
    aprovador          : "Marcus Paulo",
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
    render: text => <a>{<Img />}</a>,
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
    render: text => <a>{<Img />}</a>,
  
  },
];


const dataSourceListaDeProjetos = [

  {
    key                : '1',
    projeto            : "COMP-INT BEL GOV -RORAIMA- COMPLEMENTAR ON 57121 ON CN 60629 -CC5977CC5971",
    aprovador          : "Paulo Fco Brito Moreira",
    centrodecusto      : "5977",
    visualizar         : "visualizar",
  },
  {
    key                : '2',
    projeto            : "COMP-INT BSB MPU - COMPLEMENTAR 67335 -2013 ON 62295 -CC5977CC123971",
    aprovador          : "Samuel Teixeira",
    centrodecusto      : "6459",
    visualizar         : "visualizar",
  },
    
  
  
  {
    key                : '3',
     projeto            : "COMP-INT BSB MPU - COMPLEMENTAR 63335 -2013 ON 62295 -CC5977CC1453971",
    aprovador          : "Rafael Morais dos Santos",
    centrodecusto      : "6479",
    visualizar         : "visualizar",
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
    render: text => <a>{<Img />}</a>,
    
    
  },
];

class AdvancedSearchForm extends React.Component {
	   state = {
	    expand: false,
	  };

	  render() {
	    
return (
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Atividades Internas" key="1" textStyle={{color: '#fff'}} >
          <div>
		      <h1 style={{ marginTop: '0em', textAlign: 'right' }}>
		        <SearchField name="localizarAtividades" id="localizarAtividades"  onChange={this.handlelocalizarAtividadesChange} placeholder='Localizar Atividades...' onSearchClick={onSearchClick} />
		      </h1>
		      <Table dataSource={dataSourceAtividadesInternas} columns={columnsAtividadeInternas} />
	          
	     </div>
      </TabPane>
      
      <TabPane tab="Lista de Contratos" key="2">
	      <div>
		      <h1 style={{ marginTop: '0em', textAlign: 'right' }}>
		        <SearchField  name="localizarContratos" id="localizarContratos"  onChange={this.handlelocalizarContratosChange} placeholder='Localizar Contratos...' onSearchClick={onSearchClick} />
		      </h1>
		        <Table dataSource={dataSourceListaDeContratos} columns={columnsListaDeContratos} />;
	     </div>
	  </TabPane>
      
	  <TabPane tab="Lista de Licenciamentos" key="3">
	  
		  <div>
		      <h1 style={{ marginTop: '0em', textAlign: 'right' }}>
		        <SearchField  name="localizarLicenciamentos" id="localizarLicenciamentos"  onChange={this.handlelocalizarLicenciamentosChange} placeholder='Localizar Licenciamentos...' onSearchClick={onSearchClick} />
		      </h1>
		        <Table dataSource={dataSourceListaDeLicenciamentos} columns={columnsListaDeLicenciamentos} />;
	     </div>
        
      </TabPane>
      <TabPane tab="Lista de Projetos" key="4">
      
	      <div>
		      <h1 style={{ marginTop: '0em', textAlign: 'right' }}>
		        <SearchField  name="localizarProjetos" id="localizarProjetos"  onChange={this.handlelocalizarProjetosChange} placeholder='Localizar Projetos' onSearchClick={onSearchClick} />
		      </h1>
		        <Table dataSource={dataSourceListaDeProjetos} columns={columnsListaDeProjetos} />;
	     </div>
      </TabPane>
    </Tabs>
  </div>
);
	  }
	}

	const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);


	export default WrappedAdvancedSearchForm;
