import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button, Tabs, Select, Modal, Table, Icon, Alert} from 'antd';
import SearcherUsuario from './SearcherUsuario';
import Highlighter from 'react-highlight-words';
import userpic from '../../../image/editar.png';
import './tab.css';
import { cpfMask } from './Mask';
import { AutoComplete } from 'antd';


const { Option } = Select;
const { TabPane } = Tabs;
const { TextArea } = Input;

function Img() {
	  return  <img alt="user" src={userpic} height="25" width="25"/>;
}

function onChange(value) {
  console.log(`selected ${value}`);
}

function onSelect(value) {
  console.log('onSelect', value);
  const dado1 = value;
 // alert(dado1);
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


class AdvancedSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {colaborador           :'',
                  datainicioapontamento :'',
                  dataterminoapontamento:'',
                  apontamentoescala     :'',
                  restricao             :'',
                  ecolaborador          :'',
                  tiporestricao         :'',
                  obs                   :'',
                  gestor                :'',
                  cargoprestacaoservico :'',
                  prefiltro             :'',
                  cpf                   :'',
                  visible               :false,
                  visibleUsuario       :false,
                  value: '',
                  dataSource: ['Marcus', 'Outro'],
                  onSelect:[],
                  
                };
    this.handleOnChangeaApontamentoEscala= this.handleOnChangeaApontamentoEscala.bind(this);
    this.handleOnChangeRestricao         = this.handleOnChangeRestricao.bind(this);
    this.handleOnChangeTipoRestricao     = this.handleOnChangeTipoRestricao.bind(this);
    this.handleOnChangeEcolaborador      = this.handleOnChangeEcolaborador.bind(this);
    this.handleChange                    = this.handleChange.bind(this);
    this.handleSubmit                    = this.handleSubmit.bind(this);
    this.modalUsuarioVisible             = false;
    this.pagination                      = {};
    this.loading                         = false;
    this.onChange                        = this.onChange.bind(this);
    
    
    
 }
 

onSearch = searchText => {
    this.setState({
      dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
    });
  };

onChange = value => {
    this.setState({colaborador: value});
    //alert('ddd'+this.state.coborador);
   
}; 
 
handleClose = () => {
    this.setState({ visible: false });
}

handleCloseUsuario = () => {
    this.setState({ visibleUsuario: false });
}
 

handleOnChangeaApontamentoEscala = (selectedValue) => {
    this.setState({
                    apontamentoescala: selectedValue
                  });
}
handleOnChangeRestricao= (selectedValue) => {
    this.setState({
                    restricao: selectedValue
                });
}
handleOnChangeTipoRestricao = (selectedValue) => {
    this.setState({
                    tiporestricao: selectedValue
                });
}
handleOnChangeEcolaborador = (selectedValue) => {
    this.setState({
                    ecolaborador: selectedValue
                });
}

handleSend = () => {
   // alert(`Seu nome é ${this.state.colaborador}`);
};

handleChange(event) {
      
      if (event.target.name == "datainicioapontamento") {
            this.setState({
                datainicioapontamento: event.target.value
            });
      }
      if (event.target.name == "dataterminoapontamento") {
            this.setState({
                dataterminoapontamento: event.target.value
            });
      }
  
     if (event.target.name == "obs") {
            this.setState({
                obs: event.target.value
            });
      }
      
      if(event.target.name == "gestor") {
             this.setState({
                 gestor: (event.target.value.toUpperCase())
             });
      }
       if (event.target.name == "cargoprestacaoservico") {
             this.setState({
                 cargoprestacaoservico: (event.target.value.toUpperCase())
             });
      }        
      if (event.target.name == "prefiltro") {
              this.setState({
                prefiltro: (event.target.value.toUpperCase())
          });
      }
      if (event.target.name == "cpf") {
              this.setState({
                cpf: cpfMask(event.target.value)
          });
      }
     
}

handleSubmit(event) {
    /*alert('Os dados submetidos são:');
    alert('Colaborador: '              + this.state.colaborador);
    alert('Observação: '               + this.state.obs);
    alert('Data Inicio Apontamento: '  + this.state.datainicioapontamento);
    alert('Data Termino Apontamento: ' + this.state.dataterminoapontamento);
    alert('Apontamento por Escala: '   + this.state.apontamentoescala);
    alert('Possuei Rstricao? '         + this.state.restricao);
    alert('É colaborador? '            + this.state.ecolaborador);
    alert('Tipo de Restricao: '        + this.state.tiporestricao);
    alert('Gestor: '                   + this.state. gestor);
    alert('Cargo Prestacão Serviço: '  + this.state.cargoprestacaoservico);
    alert('Pré - Fltro: '              + this.state.prefiltro);
    alert('CPF: '                      + this.state.cpf);*/
   
    
    if (this.state.colaborador == 'undefined' || this.state.colaborador == '')
    {
       this.setState({ visibleUsuario: true });
       this.setModalUsuarioVisible(false);
       event.preventDefault(false);
       return false;
    }  
    
    else{
      event.preventDefault();
       this.setModalUsuarioVisible(true);
    }
 
}

setModalUsuarioVisible(modalUsuarioVisible) {
    this.setState({ modalUsuarioVisible });
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
    title: 'Colaborador',
    dataIndex: 'colaborador',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.colaborador.indexOf(value) === 0,
    sorter: (a, b) => a.colaborador.length - b.colaborador.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('colaborador'),
  },
  {
    title: 'Inicio',
    dataIndex: 'datainicio',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.datainicio - b.datainicio,
  },
  {
    title: 'Término ',
    dataIndex: 'datafim',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.datafim - b.datafim,
  },
  {
    title: 'Gestor',
    dataIndex: 'gestor',
    onFilter: (value, record) => record.gestor.indexOf(value) === 0,
    sorter: (a, b) => a.gestor.length - b.gestor.length,
    sortDirections: ['descend', 'ascend'],
    ...this.getColumnSearchProps('gestor'),
  },
   {
    title: 'Apontamento',
    dataIndex: 'apontamentocontroladoporescala',
  },
  {
    title: 'Editar',
    dataIndex: 'editar',
    render: text => <a>{<Img />}</a>,
  },
 
  
];
 const data = [
  {
    key                            : '1',
    colaborador                    : this.state.colaborador,
    datainicio                     : this.state.datainicioapontamento,
    datafim                        : this.state.dataterminoapontamento,
    gestor                         : this.state.gestor,
    apontamentocontroladoporescala: "Não",
    editar                        : "Visualizar",
   
   },
];
 
 const columns1 = [
  {
    title: 'Colaborador',
    dataIndex: 'colaborador',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.colaborador.indexOf(value) === 0,
    sorter: (a, b) => a.colaborador.length - b.colaborador.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('colaborador'),
  },
  {
    title: 'Inicio',
    dataIndex: 'datainicio',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.datainicio - b.datainicio,
  },
  {
    title: 'Término ',
    dataIndex: 'datafim',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.datafim - b.datafim,
  },
  {
    title: 'Gestor',
    dataIndex: 'gestor',
    onFilter: (value, record) => record.gestor.indexOf(value) === 0,
    sorter: (a, b) => a.gestor.length - b.gestor.length,
    sortDirections: ['descend', 'ascend'],
    ...this.getColumnSearchProps('gestor'),
  },
  
];
 const data1 = [
  {
    key                            : '1',
    colaborador                    : this.state.colaborador,
    datainicio                     : this.state.datainicioapontamento,
    datafim                        : this.state.dataterminoapontamento,
    gestor                         : this.state.gestor
   },
];
		    return (
		       <div className="card-container">
		         <Tabs type="card">
		              <TabPane tab="Novo Cadastro" key="1" textStyle={{color: '#fff'}} >
                     <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
		                      <Row>
		                       <Col span={13}>
		                             <div style={{ marginBottom: 25 , width:600}}>
				                            Colaborador<br />
                                     <AutoComplete
                                        value={this.state.colaborador}
                                        dataSource={dataSource}
                                        style={{ width: 600 }}
                                        onSelect={onSelect}
                                        onSearch={this.onSearch}
                                        onChange={this.onChange}
                                        placeholder="Digite para buscar um colaborador"
                                        id="colaborador" name="colaborador"
                                      />    
                                    <div>
                                         {this.state.visibleUsuario ? (
                                           <Alert
                                             message="Atenção: Informe um Colaborador."
                                             type="error"
                                             closable
                                             afterClose={this.handleCloseUsuario}
                                           /> ) : null}
                                       </div>
                                        
                             </div>
		                        <Col span={12}>
		                          <div>
		                            <table>
		                              <tr>
		                                <td>
		                                  <div style={{ marginBottom: 16 , width:300}}>
		                                     Data Inicio de Apontamento
		                                     <br />
		                                     <Input type="date" name="datainicioapontamento" id="datainicioapontamento" value={this.state.datainicioapontamento}  onChange={this.handleChange} required="required"/>
		                                   </div>
		                                 </td>
		                                  <td>
		                                  <div style={{ marginBottom: 16 , width:300}}>
		                                     Data de Término Apontamento 
		                                     <br />
		                                     
		                                     <Input type="date" name="dataterminoapontamento" id="dataterminoapontamento"  value={this.state.dataterminoapontamento}  onChange={this.handleChange} required="required"/>
		                                   </div>
		                                 </td>
		                                </tr>
		                            </table>
			                        <table>
			                           <tr>
			                             <td>
					                          <Form.Item label={`Observação`} > 
					                             <TextArea rows={4} cols={5} style={{ width: 800 }} id="obs" name="obs" value={this.state.obs}  onChange={this.handleChange}/>
					                          </Form.Item> 
				                            
			                             </td>
			                           </tr>
			                        </table>
			                        <table>
			                           <tr>
			                             <td>
			                               <div style={{ marginBottom: 16 , width:400}}>
			                                  Gestor
                                        <Input type="text" name="gestor" id="gestor"  value={this.state.gestor}  onChange={this.handleChange} required="required"/>
			                                  <i>O usuário que receberá informações.</i>
			                                </div>
			                              </td>
			                               <td>
				                               <div style={{ marginBottom: 16 , width:400}}>
					                               Apontamento por escala? <br />
						                                <Select onSelect={(value, event) => this.handleOnChangeaApontamentoEscala(value, event)} style={{ width: 400 }}
						                                  name="apontamentoescala" id="apontamentoescala"  required="required"> 
						                                  <Option value="sim">Sim</Option>
						                                  <Option value="não">Não</Option>
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
				                               <Input type="text" name="cargoprestacaoservico" id="cargoprestacaoservico"  value={this.state.cargoprestacaoservico}  onChange={this.handleChange} required="required"/>
				                                 <i>Preencher somente se o colaborador presta serviço para cliente.</i>
				                               
				                             </div>
				                           </td>
				                            <td>
					                               <div style={{ marginBottom: 16 , width:400}}>
						                               Possui Restrição? <br />
							                               <Select onSelect={(value, event) => this.handleOnChangeTipoRestricao(value, event)}
							                                  style={{ width: 400 }}
							                                  name="restricao" id="restricao"  required="required" >
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
				                            <Input type="text" name="prefiltro" id="prefiltro"  value={this.state.prefiltro}  onChange={this.handleChange} required="required"/>
				                          </div>
				                        </td>
				                         <td>
					                               <div style={{ marginBottom: 16 , width:400}}>
						                               Tipo Restrição? <br />
							                               <Select onSelect={(value, event) => this.handleOnChangeTipoRestricao(value, event)}
							                                  style={{ width: 400 }}
							                                  name="tiporestricao" id="tiporestricao" required="required" >
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
					                      <Select onSelect={(value, event) => this.handleOnChangeEcolaborador(value, event)}
					                         style={{ width: 400 }}
					                         name="ecolaborador" id="ecolaborador" required="required" >
					                         <Option value="sim">Sim</Option>
					                         <Option value="nao">Não</Option>
					                       </Select>
					                 
					                       </div>
					                     </td>
					                      <td>
						                     <div style={{ marginBottom: 16 , width:400}}>
						                       CPF
						                      <Input type="text" name="cpf" id="cpf"  value={this.state.cpf}  onChange={this.handleChange} required="required"/>
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
		                            <Button type="primary" htmlType="submit">  Submit </Button>
					                <Button type="reset" style={{ marginLeft: 450 }}>  Cancelar </Button>
		                          </Col>
		                             <Modal
		                                  title="Dados enviados com sucesso!"
		                                  style={{ top: 20, width:400 }}
		                                  visible={this.state.modalUsuarioVisible}
		                                  onOk={() => this.setModalUsuarioVisible(false)}
		                                  onCancel={() => this.setModalUsuarioVisible(false)}>
		                                 <p><Table dataSource={data1} columns={columns1} />,</p>  
		                             </Modal>
		                     </Row>
		                 </Form>
		              </TabPane>
		              <TabPane tab="Lista de Usuários" key="2">
			              <div>
			                <Table dataSource={data}  columns={columns} />,
			             </div>
		              </TabPane>
		              
		          </Tabs>
		       </div>
		    );
      }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
export default WrappedAdvancedSearchForm;



