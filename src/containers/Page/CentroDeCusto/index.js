import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Tabs, Table } from 'antd';

import SearcherCentroCustoAtividades from "./SearcherCentroCustoAtividades";
import SearcherCentroCustoContratos from "./SearcherCentroCustoContratos";
import  SearcherCentroCustoLicenciamentos from "./SearcherCentroCustoLicenciamentos";
import SearcherCentroCustoProjetos from "./SearcherCentroCustoProjetos";

import userpic from '../../../image/visualizar.png';

function Img() {
 	return  <img alt="user" src={userpic} height="25" width="25"/>;
}

function onSearchClick(value) {
	    
	 console.log(value); 
	 alert("Localizando1...:"+value);
}

const { TabPane } = Tabs;





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
		      <SearcherCentroCustoAtividades />
	          
	     </div>
      </TabPane>
      
      <TabPane tab="Lista de Contratos" key="2">
	      <div>
		        <SearcherCentroCustoContratos />;
	     </div>
	  </TabPane>
      
	  <TabPane tab="Lista de Licenciamentos" key="3">
	  
		  <div>
		      
		        <SearcherCentroCustoLicenciamentos />;
	     </div>
        
      </TabPane>
      <TabPane tab="Lista de Projetos" key="4">
      
	      <div>
		       <SearcherCentroCustoProjetos />
		        
	     </div>
      </TabPane>
    </Tabs>
  </div>
);
	  }
	}

	const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);


	export default WrappedAdvancedSearchForm;
