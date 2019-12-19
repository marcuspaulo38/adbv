import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button, Tabs, Table } from 'antd';
import './tab.css';

const { TabPane } = Tabs;


const columns = [
  {
    title: 'Matricula',
    dataIndex: 'matricula',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'nome',
  },
  {
    title: 'Inicio',
    dataIndex: 'horainicio',
  },
  {
    title: 'Almoço',
    dataIndex: 'terminoalmoco',
  },
  {
    title: 'Término',
    dataIndex: 'horafim',
  },
  {
    title: 'Quantidade',
    dataIndex: 'quantidadehoras',
   },
   {
    title: 'Total',
    dataIndex: 'totaldescanso',
  },
   {
    title: 'Opção',
    dataIndex: 'editar',
    render: text => <a>{text}</a>,
   },
];
const data = [
  {
    key            : '1',
    matricula      : "FORTALEZA - F9612101",
    nome           : "ANTONIO L. RODRIGUES",
    horainicio     : "08:00 00:00",
    terminoalmoco  : "12:30 00:00",
    horafim        : "14:00 00:00",
    quantidadehoras: "8,8",
    totaldescanso  : "01:30 00:00:",
    editar         : "Editar | Excluir"
  },
  {
    key            : '2',
    matricula      : "FORTALEZA - F9412102",
    nome           : "MARCUS PAULO",
    horainicio     : "08:00 00:00",
    terminoalmoco  : "12:30 00:00",
    horafim        : "14:00 00:00",
    quantidadehoras: "18,8",
    totaldescanso  : "02:30 00:00",
    editar         : "Editar | Excluir"
    
  },
  
  {
    key            : '3',
    matricula      : "FORTALEZA - F9512222",
    nome           : "MIKAEL MADSON",
    horainicio     : "08:10 00:00",
    terminoalmoco  : "12:40 00:00",
    horafim        : "14:30 00:00",
    quantidadehoras: "5,5",
    totaldescanso  : "01:30 00:00",
    editar         : "Editar | Excluir"
    
  },
  
 
];

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
              <TabPane tab="Escala Avulsa" key="1" textStyle={{color: '#fff'}} >
                 <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                      <Row>
                       <Col span={13}>
                         <Form.Item label={`Matrícula`}>
                            <Input type="text"  name="matricula" id="matricula"  onChange = {this.handleMatriculaChange} required="require" />
                         </Form.Item>
                       </Col>
                      </Row>
                      <Row>
                       <Col span={13}>
                         <Form.Item label={`Nome`}>
                            <Input type="text"  name="nome" id="nome"  onChange = {this.handleNomeChange} />
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
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />,
              </TabPane>
              
              
          </Tabs>
       </div>
    );
  }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);


export default WrappedAdvancedSearchForm;



