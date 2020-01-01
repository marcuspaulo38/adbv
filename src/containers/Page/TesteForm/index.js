
import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './tab.css';
import { Form, Input, Row, Col, Button, Tabs, Select   } from 'antd';
import { AutoComplete } from 'antd';

const { TextArea } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

function onSelect(value) {
  console.log('onSelect', value);
  alert('Dados: '+value);
}

class AdvancedSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: '', inicio:'', obs:'' };
 }

  myChangenomeHandler = (value) => {
    this.setState({nome: value});
    alert(value);
  }
  myChangeinicioHandler = (event) => {
	    this.setState({inicio: event.target.value});
	    alert(event.target.value);
  }
  myChangeobsHandler = (event) => {
	    this.setState({inicio: event.target.value});
	    alert(event.target.value);
}
  

  
  render() {
	 const { dataSource, value } = this.state;
  
    return (
    		<div className="card-container">
	         <Tabs type="card">
		       <TabPane tab="Escala Avulsa" key="1" textStyle={{color: '#fff'}} >
      			  <form className="ant-advanced-search-form">
						      {/*<h1>Resultado: {this.state.username}</h1>*/}
						      
						      <Row>
					          <Col span={13} >
					                   <Form.Item label={`Nome`}>
					                          <AutoComplete
					                          dataSource={dataSource}
					                          style={{ width: 600 }}
					                          onSearch={this.onSearch}
					                          onChange={this.myChangenomeHandler}
					                          placeholder="Digite o nome que irá buscar..." />
					                    </Form.Item>
					          <Col span={12}> <br />
					          <div>
					               <table>
					                 <tr>
					                     <td>
					                     <div style={{ marginBottom: 16 , width:200}}>
					                        Horário de Inicio
					                        <br />
					                        <Input type="text"  placeholder="00:00:00"  onChange={this.myChangeinicioHandler} required="require"/>
					                     </div>
					                     </td>
					                 </tr>
					                 </table>     
					                 
					                 <table>
					                 <tr>
					                     <td>
					                     <div style={{ marginBottom: 16 , width:200}}>
					                       
					                         Colaborador<br />
						                      
					                         <Select labelInValue  defaultValue={{ key: 'colaborador01' }}
						                                  style={{ width: 600 }}> 
						                                  <Option value="colaborador01">Colaborador01</Option>
						                                  <Option value="colaborador02">Colaborador02</Option>
						                      </Select>
					                      </div>
					                      </td>
					                  </tr>
					                  </table>
					                  
					                  <table>
					                  <tr>
						                   <td>
						                   <div style={{ marginBottom: 16 , width:400}}>
						                       Obs<br />
						                       <TextArea rows={4} cols={15} style={{ width: 800 }}  onChange={this.myChangeobsHandler} />  
						                    </div>
						                   </td>
					                  </tr>
						               </table>     
					          </div>
					         <Row>
					             <Col span={24} style={{ textAlign: 'left' }}>
					               <Button type="primary" onClick={this.handleSend} > Salvar </Button>
					               <Button style={{ marginLeft: 450 }}>  Cancelar </Button>
					               
					             </Col>
					        </Row>
					     </Col>
					    </Col>
					  </Row>
						   </form>
	   </TabPane>
       </Tabs>
  </div>
    );
  }
}
const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
export default WrappedAdvancedSearchForm;
