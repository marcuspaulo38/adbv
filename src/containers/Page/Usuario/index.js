import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button, Tabs, Table ,Select } from 'antd';
import './tab.css';
import userpic from '../../../image/editar.png';
import SearcherUsuario from './SearcherUsuario';



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

const { TextArea } = Input;



const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', 
    name: record.name,
  }),
};

class AdvancedSearchForm extends React.Component {
   state = {
    expand: false,
  };
   
   
 
  render() {
    return (
       <div className="card-container">
         <Tabs type="card">
              <TabPane tab="Novo Cadastro" key="1" textStyle={{color: '#fff'}} >
                 <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                      <Row>
                       <Col span={13}>
                         
                         <div style={{ marginBottom: 25 , width:600}}>
		                               Colaborador<br />
			                               <Select
			                                  labelInValue
			                                  defaultValue={{ key: 'colaborador01' }}
			                                  style={{ width: 600 }}
			                                  name="colaborador" id="colaborador"  onChange = {this.handleacolaboradorChange}> 
			                                  <Option value="colaborador01">Colaborador01</Option>
			                                  <Option value="colaborador02">Colaborador02</Option>
			                                </Select>
		                              
	                                </div>
                         
                        <Col span={12}>
                          <div>
                            <table>
                              <tr>
                                <td>
                                  <div style={{ marginBottom: 16 , width:300}}>
                                     Data Inicio de Apontamento
                                     <br />
                                     <Input type="date" name="datainicioapontamento" id="datainicioapontamento"  onChange = {this.handleDataInicioApontamentoChange}  required="require"/>
                                   </div>
                                 </td>
                                  <td>
                                  <div style={{ marginBottom: 16 , width:300}}>
                                     Data de Término Apontamento 
                                     <br />
                                     
                                     <Input type="date" name="dataterminoapontamento" id="dataterminoapontamento"  onChange = {this.handleDataTerminoApontamentoChange}  required="require"/>
                                   </div>
                                 </td>
                                </tr>
                           </table>
                           
                           <table>
                           <tr>
                             <td>
		                          <Form.Item label={`Observação`} > 
		                             <TextArea rows={4} cols={5} style={{ width: 800 }} id="obs" name="obs" />
		                          </Form.Item> 
	                            
                             </td>
                           </tr>
                        </table>
                           
                         
                           <table>
                           <tr>
                             <td>
                               <div style={{ marginBottom: 16 , width:400}}>
                                  Gestor
                                  <Input type="text" name="gestor" id="gestor"  onChange = {this.handleGestorChange} required="require"/>
                                  <i>O usuário que receberá informações.</i>
                                </div>
                              </td>
                               <td>
	                               <div style={{ marginBottom: 16 , width:400}}>
		                               Apontamento por escala? <br />
			                               <Select
			                                  labelInValue
			                                  defaultValue={{ key: 'sim' }}
			                                  style={{ width: 400 }}
			                                  name="apontamentoescala" id="apontamentoescala"  onChange = {this.handleapontamentoEscalaChange}> 
			                                  <Option value="sim">Sim</Option>
			                                  <Option value="sim">Não</Option>
			                                </Select>
                                         <i>Somente marca não para áreas que não prestam serviços</i>
		                              
	                                </div>
                              </td>
                              
                             </tr>
                        </table>
                        
                        <table>
                        <tr>
                          <td>
                            <div style={{ marginBottom: 16 , width:400}}>
                               Cargo Prestação de Serviço
                               <Input type="text" name="cargoprestacaoservico" id="cargoprestacaoservico"  onChange = {this.handlecargoPrestacaoServicoChange} required="require"/>
                                 <i>Preencher somente se o colaborador presta serviço para cliente.</i>
                               
                             </div>
                           </td>
                            <td>
	                               <div style={{ marginBottom: 16 , width:400}}>
		                               Possui Restrição? <br />
			                               <Select
			                                  labelInValue
			                                  defaultValue={{ key: 'sim' }}
			                                  style={{ width: 400 }}
			                                  name="restricao" id="restricao"  onChange = {this.handlerestricaoChange}>
			                                  <Option value="sim">Sim</Option>
			                                  <Option value="sim">Não</Option>
			                                </Select>
                                         &nbsp;&nbsp;&nbsp;<i>O usuário não poderá escolher a classificação e o</i>
		                              
	                                </div>
                           </td>
                           
                          </tr>
                     </table>
                     
                     <table>
                     <tr>
                       <td>
                         <div style={{ marginBottom: 16 , width:400}}>
                            Pré-Filtro
                            <Input type="text" name="prefiltro" id="prefiltro"  onChange = {this.handlepreFiltroChange} required="require"/>
                          </div>
                        </td>
                         <td>
	                               <div style={{ marginBottom: 16 , width:400}}>
		                               Tipo Restrição? <br />
			                               <Select
			                                  labelInValue
			                                  defaultValue={{ key: 'nenhuma' }}
			                                  style={{ width: 400 }}
			                                  name="tiporestricao" id="tiporestricao"  onChange = {this.handlepretipoRestricaoChange} required="require">
			                                  <Option value="nenhuma">Nenhuma</Option>
			                                  <Option value="retricao">Restrição</Option>
			                                </Select>
		                              
	                                </div>
                        </td>
                        
                       </tr>
                  </table>
                  <table>
                  <tr>
                    <td>
                      <div style={{ marginBottom: 16 , width:400}}>
                      É Colaborador? <br />
                      <Select
                         labelInValue
                         defaultValue={{ key: 'sim' }}
                         style={{ width: 400 }}
                         name="colaborador" id="colaborador"  onChange = {this.handleprecolaboradorChange} required="require">
                         <Option value="sim">Sim</Option>
                         <Option value="nao">Não</Option>
                       </Select>
                 
                       </div>
                     </td>
                      <td>
	                     <div style={{ marginBottom: 16 , width:400}}>
	                       CPF
	                      <Input type="text" name="cpf" id="cpf"  onChange = {this.handlecpfChange} required="require"/>
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
              <TabPane tab="Lista de Usuários" key="2">
	              <div>
	               
	                <SearcherUsuario />,
	             </div>
              </TabPane>
              
          </Tabs>
       </div>
    );
  }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);


export default WrappedAdvancedSearchForm;



