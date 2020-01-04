import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Tabs, Button } from 'antd';

import Aprovacoes from "./Aprovacoes";


const { TabPane } = Tabs;

class AdvancedSearchForm extends React.Component {
	   state = {
	    expand: false,
	  };

render() {
	 return (
			  <div className="card-container">
			    <Tabs type="card">
			      <TabPane tab="Minhas Aprovações" key="1" textStyle={{color: '#fff'}} >
			          <div>
					      <Aprovacoes />
				     </div>
            
			      </TabPane>
			  
			    </Tabs>
           <div>
            <p style={{ marginLeft: 50 }}>Não existe nemhum item a ser mostrado neste modo de exibição da lista 'tarefas'. Para adicionar um novo
            item, clique em 'Novo'.
            </p>
		         <Button type="primary" htmlType="submit"style={{ marginLeft: 50 }}>
		              + Novo Item
		         </Button>
		                            
		      </div>
			  </div>
			);
  }
}
	const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
	export default WrappedAdvancedSearchForm;
