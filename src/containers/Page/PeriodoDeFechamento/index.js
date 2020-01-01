import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button, Tabs, Select } from 'antd';
import './tab.css';
import SearcherFechamento from './SearcherFechamento';
import calendario from '../../../image/calendario.png';
import responsavel from '../../../image/usuario.png';
import livro from '../../../image/livro.png';

function Calendario() {
	  return  <img alt="Dasat" src={calendario} height="25" width="25" />;
}

function Responsavel() {
	  return  <img alt="Responsável" src={responsavel} height="25" width="25" />;
}

function Livro() {
	  return  <img alt="Editar" src={livro} height="25" width="25" />;
}


const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;


class AdvancedSearchForm extends React.Component {
   state = {
    expand: false,
  };
   
   
 
 render() {
		    return (
		       <div className="card-container">
		         <Tabs type="card">
		              <TabPane tab="Período de Fechamento" key="1" textStyle={{color: '#fff'}} >
		                 <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
		                      <Row>
		                       <Col span={13}>
		                         <div style={{ marginBottom: 25 , width:300}}>
				                               Competência<br />
					                               <Select
					                                  labelInValue
					                                  defaultValue={{ key: '04/2012' }}
					                                  style={{ width: 300 }}
					                                  name="competencia" id="competencia"  onChange = {this.handleacompetenciaChange}> 
					                                  <Option value="competencia">04/2012</Option>
					                                  <Option value="competencia">05/212</Option>
					                                </Select>
				                              
			                       </div>
		                        <Col span={12}>
		                          <div>
		                            <table>
		                              <tr>
		                                <td>
		                                  <div style={{ marginBottom: 16 , width:200}}>
		                                     Data de Inicio
		                                     <br />
		                                     <Input type="date" name="datainicio" id="datainicio"  onChange = {this.handleDataIniciohange}  required="require"/>
		                                   </div>
		                                 </td>
                                     <td>
		                                 &nbsp;<Calendario />&nbsp;&nbsp; 
		                                 </td>
		                                  <td>
		                                  <div style={{ marginBottom: 16 , width:200}}>
		                                     Data de Término
		                                     <br />
		                                     <Input type="date" name="datatermino" id="datatermino"  onChange = {this.handleDataTerminoChange}  required="require"/>
		                                   </div>
		                                 </td>
                                     <td>
		                                 <Calendario />
		                                 </td>
		                                </tr>
		                            </table>
			                        <table>
			                           <tr>
			                             <td>
					                          <div style={{ marginBottom: 25 , width:300}}>
				                               Liberado para integração<br />
					                               <Select
                                           defaultValue={{ key: 'Selecione' }}
					                                  labelInValue
					                                  style={{ width: 300 }}
					                                  name="integracao" id="integracao"  onChange = {this.handleaintegracaoChange}>
                                            <Option value="">Selecione</Option>
					                                  <Option value="integracao">04/2012</Option>
					                                  <Option value="integracao">05/212</Option>
					                                </Select>
				                              
			                               </div>
				                            
			                             </td>
			                           </tr>
			                        </table>
			                        <table>
			                           <tr>
			                             <td>
			                               <div style={{ marginBottom: 25 , width:300}}>
				                               Bloquear horas normais<br />
					                               <Select
                                            defaultValue={{ key: 'Selecione' }}
					                                  labelInValue
					                                  style={{ width: 300 }}
					                                  name="horasnormais" id="horasnormais"  onChange = {this.handleahorasNormaisChange}>
                                            <Option value="">Selecione</Option>
					                                  <Option value="horasnormais">horas01</Option>
					                                  <Option value="horasnormais">horas02</Option>
					                                </Select>
				                              
			                               </div>
			                              </td>
                                 </tr>    
                               </table>     
                                    <table>
                                    <tr>
			                               <td>
				                              <div style={{ marginBottom: 25 , width:300}}>
				                               Bloquear horas extras<br />
					                               <Select
                                            defaultValue={{ key: 'Selecione' }}
					                                  labelInValue
					                                  style={{ width: 300 }}
					                                  name="horasextras" id="horasextras"  onChange = {this.handleahorasExtrasChange}>
                                            <Option value="">Selecione</Option>
					                                  <Option value="horasextras">horas01</Option>
					                                  <Option value="horasextras">horas02</Option>
					                                </Select>
				                              </div>
			                              </td>
			                             </tr>
		                           </table>
		                           <table>
				                        <tr>
				                          <td>
				                            <div style={{ marginBottom: 16 , width:220}}>
				                               Responsável pelo fechamento
				                               <Input type="text" name="responsavelfechamento" id="responsavelfechamento"  onChange = {this.handleresponsavelFechamentoChange} required="require"/>
                                      
				                             </div>
				                           </td>
                                   <td>
				                               &nbsp;<Responsavel />&nbsp;<Livro />
				                            
				                           </td>
				                          </tr>
		                            </table>
                                
				                     </div>
		                        </Col>
		                       </Col>
		                      </Row>
		                      <Row>
		                          <Col span={24} style={{ textAlign: 'left' }}>
		                            <Button type="primary" htmlType="submit" >
		                              Salvar
		                            </Button>
		                            <Button style={{ marginLeft: 450 }}>
		                              Cancelar
		                            </Button>
		                            
		                          </Col>
		                     </Row>
		                 </Form>
		              </TabPane>
		              <TabPane tab="Lista de Fechamento" key="2">
			              <div>
			               
			                <SearcherFechamento />,
			             </div>
		              </TabPane>
		              
		          </Tabs>
		       </div>
		    );
      }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
export default WrappedAdvancedSearchForm;



