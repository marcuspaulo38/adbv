import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button, Tabs ,Select, Checkbox  } from 'antd';
import './tab.css';

import SearcheApontamento from "./SearcheApontamento";
import calendario from '../../../image/calendario.png';

const { TabPane } = Tabs;
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;

function Calendario() {
	  return  <img alt="user" src={calendario} height="25" width="25"/>;
}

function handleChange(value) {
	  console.log(value); 
}

function onChange(pagination, filters, sorter, extra) {
	  console.log('params', pagination, filters, sorter, extra);
}

class AdvancedSearchForm extends React.Component {
	   state = {
	    expand: false,
	  };

render() {
	    
 return (
 
       <div className="card-container">
         <Tabs type="card">
              <TabPane tab="Novo Item" key="1" textStyle={{color: '#fff'}} >
                 <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                     
                      <Row>
                       <Col span={13}>
                       
                       <table>
                       <tr>
                          <td>
                           <div style={{ marginBottom: 16 , width:200}}>
                              Data da Atividade
                              <br />
                              <Input type="date" name="dataatividade" id="dataatividade"  onChange = {this.handledataatividadeChange}  required="require"/>
                            </div>
                          </td>
                          
                          <td>
	                         <Calendario />
	                      </td>
                          
	                      <td>
                           <div style={{ marginBottom: 16 , width:150}}>
                              Tipo de Apontamento 
                              <br />
                              <Select
                              labelInValue
                              defaultValue={{ key: 'nomal' }}
                              style={{ width: 300 }}
                              onChange={handleChange} id="tipoDeApontamento" name="tipoDeApontamento"
                            >
                              <Option value="normal">Normal</Option>
                              <Option value="outros">Outros</Option>
                            </Select>
                            </div>
                          </td>
                           
                         </tr>
                    </table>
		                <div style={{ marginBottom: 16 , width:200}}>
			               <Form.Item label={`Horário de Inicio`} >
			                  <Input type="text" name="horainicio" id="horainicio"  onChange = {this.handleHorainicioChange} placeholder="00:00:00"   required="require"/>
			               </Form.Item>
		                </div>
		                <Col span={12}> <br />
                          <div>
                            <table>
                              <tr>
                                <td>
                                <Form.Item label={`Classificação`} > 
                                    <Select
                                     labelInValue
                                     defaultValue={{ key: 'nomal' }}
                                     style={{ width: 200 }}
                                     onChange={handleChange} id="classificacao" name="classificacao"
                                   >
                                     <Option value="normal">Normal</Option>
                                     <Option value="outros">Outros</Option>
                                   </Select>
                                   </Form.Item>
                                 </td>
                                 <td>
                                 <div style={{ marginBottom: 16 , width:25}}>
                                    &nbsp;&nbsp;&nbsp;
                                  </div>
                                </td>
                                 <td>
                                      <Form.Item label={`Filtro`} > 
	                                     <Search
	                                     placeholder="TIC Sistemas"
	                                     onSearch={value => console.log(value)}
	                                     style={{ width: 300 }}  id="filtro" name="filtro"/>
	                                 </Form.Item> 
                                  
                                 </td>
                                </tr>
                           </table>
                           <table>
                              <tr>
                                <td>
                                   <Form.Item label={`Observação`} > 
	                                  <TextArea rows={4} cols={5} style={{ width: 400 }} id="obs" name="obs" />
	                               </Form.Item> 
	                             </td>
	                             <td>
                                 &nbsp;&nbsp; 
	                             </td>
	                             <td>
	                                  <Form.Item label={`Fatos Relevantes`} > 
	                                  <Checkbox onChange={onChange} style={{ width: 500 }} id="fatosrelevantes" name="fatosrelevantes">Marque esta opção para compor o ciário Projeto ou EGP</Checkbox>
	                                 </Form.Item> 
                                 </td>
                                </tr>
                           </table>
                           <table>
                           <tr>
                             <td>
                                <Form.Item label={`Número do SDM`} style={{ width: 200 }}> 
                                      <Input type="text" name="numerosdm" id="numerosdm"  onChange = {this.handleHorainicioChange}   required="require"/>
	                                 
	                               </Form.Item> 
	                             </td>
	                             <td>
                                    &nbsp;&nbsp; 
	                             </td>
	                             <td>
	                                  <Form.Item label={`Finalizar Apontamento`} > 
	                                  <Checkbox onChange={onChange} style={{ width: 300 }} id="finalizarApontamento" name="finalizarApontamento" >Deseja manter o apontamento?</Checkbox>
	                                 </Form.Item> 
                                 </td>
                                 <td>
	                                 <Form.Item label={`Combustível`} > 
	                                 <Checkbox onChange={onChange} style={{ width: 300 }} id="combustivel" name="combustivel">Realizou atividade com relocamento?</Checkbox>
	                                </Form.Item> 
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
              <TabPane tab="Lista de Apontamentos" key="2">
		              <SearcheApontamento />,
              </TabPane>
              
              
          </Tabs>
          </div>
    );
    	  }
    	}

    	const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);


    	export default WrappedAdvancedSearchForm;


