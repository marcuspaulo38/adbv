import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button, Tabs, Table, Select, Icon, Modal,  Alert , InputNumber } from 'antd';
import { AutoComplete } from 'antd';
//import SearcherEscalaAvulsa from './SearcherEscalaAvulsa';
import Highlighter from 'react-highlight-words';
import userpic from '../../../image/editar.png';
import './tab.css';

const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

function Img() {
	  return  <img alt="user" src={userpic} height="25" width="25"/>;
}

function onSelect(value) {
  console.log('onSelect', value);
}



function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

onSearch = searchText => {
    this.setState({
      dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
    });
  };


class AdvancedSearchForm extends React.Component {
   constructor(props) {
    super(props);
	   this.state = {
	                  expand                    : false,         
                    value                     : '',
	                  dataSource                : ['Marcus Paulo', 'Samuel', 'Carlos', 'Samanta'],
	                  search                    : "",
	                  searchText                : '',
	                  searchedColumn            : '',
                    nome                      : '',
                    horainicio                : '',
                    horatermino               : '',
                    quantidadehoras           : '',
                    inicioalmoco              : '',
                    terminoalmoco             : '',
                    descanso                  : '',
                    visibleNome               : false,
                };
    
    this.handleOnChangeNome        = this.handleOnChangeNome.bind(this);
    this.handleChange              = this.handleChange.bind(this);
    this.handleSubmit              = this.handleSubmit.bind(this);
    this.modalEscalaAvulsaVisible  = false;
    this.pagination                = {};
    this.loading                   = false;
    
 
    
    
 }
 handleOnChangeNome = (selectedValue) => {
    this.setState({
                    nome: selectedValue
                });
}

handleChange(event) {
  
  
   if (event.target.name == "nome") {
            this.setState({
                nome: event.target.value
              
            });
     }
    
     if (event.target.name == "horainicio") {
            this.setState({
                horainicio: event.target.value
              
            });
     }
 
     if (event.target.name == "horatermino") {
            this.setState({
                horatermino: event.target.value
              
            });
      }
      if (event.target.name == "quantidadehoras") {
            this.setState({
                quantidadehoras: event.target.value
              
            });
      }
       if (event.target.name == "inicioalmoco") {
            this.setState({
                inicioalmoco: event.target.value
              
            });
      }
        if (event.target.name == "terminoalmoco") {
            this.setState({
                terminoalmoco: event.target.value
              
            });
      }
     
     
}


handleSubmit(event) {
     /* alert('Os dados submetidos são:');
      alert('nome : '           + this.state.nome);
      alert('horainicio : '     + this.state.horainicio);
      alert('horatermino: '     + this.state.horatermino );
      alert('quantidadehoras: ' + this.state.quantidadehoras );
      alert('inicioalmoco: '    + this.state.inicioalmoco );
      alert('terminoalmoco: '   + this.state.terminoalmoco );
      alert('descanso:'         + this.state.descanso );*/
     this.setState({quantidadehoras: parseFloat(this.state.horainicio) - parseFloat(this.state.horatermino)});
     this.setState({descanso:       parseFloat(this.state.inicioalmoco) - parseFloat(this.state.terminoalmoco)});
   
      
    if (this.state.nome == '')
    {
       this.setState({ visibleNome: true });
       this.setModalEscalaAvulsaVisible(false);
       event.preventDefault(false);
       return false;
    }  
    
    else{ 
         event.preventDefault(true);
         this.setModalEscalaAvulsaVisible(true);
    }
    
}

setModalEscalaAvulsaVisible(modalEscalaAvulsaVisible) {
    this.setState({ modalEscalaAvulsaVisible });
}


 getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Localizar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  
render() {
  
  const { dataSource, value } = this.state;
  
 const columns = [
  {
    title: 'Matricula',
    dataIndex: 'matricula',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'nome',
    onFilter: (value, record) => record.nome.indexOf(value) === 0,
    sorter: (a, b) => a.nome.length - b.nome.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('nome'),
  },
  {
    title: 'Inicio',
    dataIndex: 'horainicio',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.horainicio - b.horainicio,
  },
  {
    title: 'Almoço',
    dataIndex: 'inicioalmoco',
  },
  {
    title: 'Término',
    dataIndex: 'horatermino',
  },
  {
    title: 'Quantidade',
    dataIndex: 'quantidadehoras',
   },
   {
    title: 'Total Descanso',
    dataIndex: 'totaldescanso',
  },
];
  
  
  const data = [
  {
    key            : '1',
    matricula      : "FORTALEZA - F9612101",
    nome           : this.state.nome,
    horainicio     : this.state.horainicio,
    inicioalmoco   : this.state.inicioalmoco,
    horatermino    : this.state.horatermino,
    quantidadehoras: this.state.quantidadehoras,
    totaldescanso  : this.state.descanso,
    editar         : "Editar | Excluir"
  },
 
  
 
];
  
  const columns1 = [
  {
    title: 'Matricula',
    dataIndex: 'matricula',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'nome',
    onFilter: (value, record) => record.nome.indexOf(value) === 0,
    sorter: (a, b) => a.nome.length - b.nome.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('nome'),
  },
  {
    title: 'Inicio',
    dataIndex: 'horainicio',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.horainicio - b.horainicio,
  },
  {
    title: 'Término',
    dataIndex: 'horatermino',
  },
 
  {
    title: 'Total Descanso',
    dataIndex: 'totaldescanso',
  },
  
];

  const data1 = [
  {
    key            : '1',
    matricula      : "FORTALEZA - F9612101",
    nome           : this.state.nome,
    horainicio     : this.state.horainicio,
    horatermino    : this.state.horatermino,
    totaldescanso  : this.state.descanso,
  },
  
 
];
  
  
  
 
  
return (
		     <div className="card-container">
		         <Tabs type="card">
		              <TabPane tab="Período de Fechamento" key="1" textStyle={{color: '#fff'}} >
		                 <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
		                       
				                      <Row>
				                       <Col span={13}>
				                         <Form.Item label={`Nome`}>
					                         <AutoComplete
					                           dataSource={dataSource}
					                           style={{ width: 600 }}
					                           //onSelect={onSelect}
                                     onSelect={(value, event) => this.handleOnChangeNome(value, event)} 
					                           onSearch={this.onSearch}
                                     id="nome" name="nome"
                                     value={this.state.nome} 
					                           placeholder="Digite o nome que irá buscar..."
					                         />
                                  
					                          {/*<Select
                                          showSearch
                                          style={{ width: 600 }}
                                          placeholder="Selecione o nome"
                                          optionFilterProp="children"
                                          onChange={onChange}
                                          onFocus={onFocus}
                                          onBlur={onBlur}
                                          onSearch={onSearch}
                                          onSelect={(value, event) => this.handleOnChangeNome(value, event)}
                                          filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                          } required="required"
                                        >
                                          <Option value="04/12">04/12</Option>
                                          <Option value="05/12">05/12</Option>
                                          <Option value="06/12">06/12</Option>
                                        </Select>*/}
				                         </Form.Item>
                                 <div>
                                    {this.state.visibleNome ? (
                                      <Alert
                                        message="Atenção: Informe o Nome."
                                        type="error"
                                        closable
                                        afterClose={this.handleCloseNome}
                                      /> ) : null}
                            </div>
                                 
				                        <Col span={12}> <br />
				                          <div>
				                            <table>
				                              <tr>
				                                <td>
				                                  <div style={{ marginBottom: 16 , width:200}}>
				                                     Horário de Inicio
				                                     <br />
				                                     <Input type="time" step='1' min="01:00:00" max="24:00:00" name="horainicio" id="horainicio" value={this.state.horainicio}  onChange={this.handleChange} required="required"/>
                                             </div>
                                             
				                                 </td>
				                                  <td>
				                                  <div style={{ marginBottom: 16 , width:200}}>
				                                     Horário de término 
				                                     <br />
				                                     <Input type="time" step='1' min="01:00:00" max="24:00:00" name="horatermino" id="horatermino"   placeholder="00:00:00"  value={this.state.horatermino}  onChange={this.handleChange} required="required"/>
				                                   </div>
				                                 </td>
				                                  <td>
				                                  <div style={{ marginBottom: 16 , width:200}}>
				                                     Quantidade de horas
				                                     <br />
				                                     <Input type="text" name="quantidadehoras" id="quantidadehoras"  placeholder="00:00:00"  value={this.state.quantidadehoras}   disabled="disabled"/>
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
				                                     <Input type="time" step='1' min="01:00:00" max="24:00:00"  name="inicioalmoco" id="inicioalmoco"  class="form-control time-mask"  placeholder="00:00:00"  value={this.state.inicioalmoco}  onChange={this.handleChange} required="required"/>
				                                   </div>
				                                 </td>
				                                  <td>
				                                  <div style={{ marginBottom: 16 , width:200}}>
				                                     Término de almoço
				                                     <br />
				                                     <Input type="time" step='1' min="01:00:00" max="24:00:00"  name="terminoalmoco" id="terminoalmoco"  placeholder="00:00:00"  value={this.state.terminoalmoco}  onChange={this.handleChange} required="required"/>
				                                   </div>
				                                  
				                                 </td>
				                                 <td>
				                                  <div style={{ marginBottom: 16 , width:200}}>
				                                     Total Descanso
                                             <br />
                                             <Input type="text" name="descanso" id="descanso" value={this.state.descanso} placeholder="00:00:00" disabled="disabled"/>
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
                                   <Modal
		                                  title="Dados enviados com sucesso!"
		                                  style={{ top: 20, width:400 }}
		                                  visible={this.state.modalEscalaAvulsaVisible}
		                                  onOk={() => this.setModalEscalaAvulsaVisible(false)}
		                                  onCancel={() => this.setModalEscalaAvulsaVisible(false)}>
		                                 <p><Table dataSource={data1} columns={columns1} />,</p>  
		                         </Modal>
				                     </Row>
		                 </Form>
		              </TabPane>
		              <TabPane tab="Lista de Fechamento" key="2">
			            <Table dataSource={data} columns={columns} />
				       </TabPane>
		            </Tabs>
		          </div>
		    );
		   }
		  }
    	const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
    	export default WrappedAdvancedSearchForm;


