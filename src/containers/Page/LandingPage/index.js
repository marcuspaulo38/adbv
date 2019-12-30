import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import { Form } from 'antd';
import apontamento from '../../../image/novoApontamento.png';
import controle from '../../../image/meuControleHoras.png';
import historico from '../../../image/meuHistorico.png';


function Apontamento() {
	  return  <a href="#" title="Clique para  visualizar ou criar um apontamento"><img alt="user" src={apontamento} height="250" width="250"/></a>;
           
}

function Controle() {
	  return   <a href="#" title="Clique para ir para seu controle"><img alt="user" src={controle} height="250" width="250"/></a>;
}
function Historico() {
	  return   <a href="#" title="Clique para visualizar o histórico"><img alt="user" src={historico} height="250" width="250"/></a>;
}



class AdvancedSearchForm extends React.Component {
	   state = {
	    expand: false,
	  };

render() {
	 return (
			  <div className="Img">
            <div>
              <Apontamento /> &nbsp;<Historico /> &nbsp; <Controle /> &nbsp;
    			  </div>
			    </div>
			);
  }
}
	const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
	export default WrappedAdvancedSearchForm;
