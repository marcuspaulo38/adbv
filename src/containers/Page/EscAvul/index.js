import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button, Tabs   } from 'antd';
import './tab.css';
import SearcherEscalaAvulsa from './SearcherEscalaAvulsa';
import { AutoComplete } from 'antd';

const { TabPane } = Tabs;

function onSelect(value) {
  console.log('onSelect', value);
}

class AdvancedSearchForm extends React.Component {
	   state = {
	    expand: false,
	    value: '',
	    dataSource: ['Marcus Paulo', 'Samuel', 'Carlos', 'Samanta'],
};

  render(){
		    const { dataSource, value } = this.state;
			 return (
				       <div className="card-container">
				         <Tabs type="card">
				              <TabPane tab="Escala Avulsa" key="1" textStyle={{color: '#fff'}} >
				                 <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
				                     
				                      <Row>
				                       <Col span={13}>
				                         <Form.Item label={`Nome`}>
					                         <AutoComplete
					                           dataSource={dataSource}
					                           style={{ width: 600 }}
					                           onSelect={onSelect}
					                           onSearch={this.onSearch}
					                           placeholder="Digite o nome que irá buscar..."
					                         />
				                         </Form.Item>
				                        <Col span={12}> <br />
				                          <div>
				                            <table>
				                              <tr>
				                                <td>
				                                  <div style={{ marginBottom: 16 , width:200}}>
				                                     Horário de Inicio
				                                     <br />
				                                     <Input type="text" name="horainicio" id="horainicio"  onChange = {this.handleHorainicioChange}   placeholder="00:00:00"   required="require"/>
				                                   </div>
				                                 </td>
				                                  <td>
				                                  <div style={{ marginBottom: 16 , width:200}}>
				                                     Horário de término 
				                                     <br />
				                                     <Input type="text" name="horatermino" id="horatermino"  onChange = {this.handleHoraterminoChange}  placeholder="00:00:00"  required="require"/>
				                                   </div>
				                                 </td>
				                                  <td>
				                                  <div style={{ marginBottom: 16 , width:200}}>
				                                     Quantidade de horas
				                                     <br />
				                                     <Input type="text" name="quantidadedehoras" id="quantidadedehoras"  onChange = {this.handleQuantidadedehorasChange}  placeholder="00:00:00"  required="require"/>
				                                   </div>
				                                 </td>
				                                </tr>
				                           </table>
				                           <table>
				                              <tr>
				                                <td>
				                                  <div style={{ marginBottom: 16 , width:200}}>
				                                     Horário de almoço
				                                     <br />
				                                     <Input type="text" name="horainicio" id="horadealmoco"  onChange = {this.handleHoradealmocoChange}  placeholder="00:00:00"  required="require"/>
				                                   </div>
				                                 </td>
				                                  <td>
				                                  <div style={{ marginBottom: 16 , width:200}}>
				                                     Término de almoço
				                                     <br />
				                                     <Input type="text" name="horainicio" id="horainicio"  onChange = {this.handleHorainicioChange}  placeholder="00:00:00"  required="require"/>
				                                   </div>
				                                 </td>
				                                 <td>
				                                  <div style={{ marginBottom: 16 , width:200}}>
				                                     Descanso total
				                                     <br />
				                                     <Input type="text" name="horainicio" id="horainicio"  onChange = {this.handleHorainicioChange}  placeholder="00:00:00"  required="require"/>
				                                   </div>
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
				              <TabPane tab="Lista de Escala Avulsa" key="2">
						                  <SearcherEscalaAvulsa />
				              </TabPane>
				          </Tabs>
				         </div>
				    );
   }
 }
  const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
  export default WrappedAdvancedSearchForm;


