import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button,Table, Tabs, DatePicker, Checkbox,Icon, Modal,  Alert, Select } from 'antd';
//import SearchePlantonista from "./SearchePlantonista";
import Highlighter from 'react-highlight-words';
import calendario from '../../../image/calendario.png';

import moment from 'moment';

import './tab.css';

const { RangePicker }                 = DatePicker;
const dateFormat                      = 'DD/MM/YYYY';
const monthFormat                     = 'YYYY/MM';
const dateFormatList                  = ['DD/MM/YYYY', 'DD/MM/YY'];

const plainOptionsFatosRelevantes     = ['Marque esta opção para compor o ciário Projeto ou EG'];
const plainOptionsFinalizarApontamento= ['Deseja manter o apontamento?'];
const plainOptionsCombustivel         = ['Realizou atividade com relocamento?'];

const { TabPane }     = Tabs;
const { TextArea }    = Input;
const { MonthPicker } = DatePicker;
const { Option }      = Select;
const { Search }       = Input;


function Calendario() {
	  return  <img alt="user" src={calendario} height="25" width="25"/>;
}

function onChange(pagination, filters, sorter, extra) {
	  console.log('params', pagination, filters, sorter, extra);
   
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
	   this.state = {
	                  expand              : false,
	                  search              : "",
	                  searchText          : '',
	                  searchedColumn      : '',
                    dataatividade       : '',
                    tipoapontamento     : '',
                    horainicio          :'',
                    classificacao       :'',
                    filtro              :'',
                    obs                 :'',
                    fatosrelevantes     :'',
                    numerosdm           :'',
                    finalizarapontamento:'',
                    combustivel         :'',
                    visible             :false,
                    visibleApontamento  :false,
                    
                };
    this.handleOnChangeTipoApontamento = this.handleOnChangeTipoApontamento.bind(this);            
    this.handleOnChangeClassificacao    = this.handleOnChangeClassificacao.bind(this);
    this.onChangeFatosRelevantes        = this.onChangeFatosRelevantes.bind(this);
    this.onChangeFinalizarApontamento   = this.onChangeFinalizarApontamento.bind(this);
    this.onChangeCombustivel            = this.onChangeCombustivel.bind(this);
    this.handleChange                   = this.handleChange.bind(this);
    this.handleSubmit                   = this.handleSubmit.bind(this);
    this.modalApontamentoVisible        = false;
    this.pagination                     = {};
    this.loading                        = false;
    
    
 }

handleClose = () => {
    this.setState({ visible: false });
}

handleCloseApontamento = () => {
    this.setState({ visibleApontamento: false });
}

handleOnChangeTipoApontamento = (selectedValue) => {
    this.setState({
                    tipoapontamento: selectedValue
                });
}

handleOnChangeClassificacao = (selectedValue) => {
    this.setState({
                    classificacao: selectedValue
                 });
}

onChangeFatosRelevantes(checkedValues) {
  this.setState({ fatosrelevantes: checkedValues})
  
}
onChangeFinalizarApontamento(checkedValues) {
  this.setState({ finalizarapontamento: checkedValues})
  
}
onChangeCombustivel(checkedValues) {
  this.setState({ combustivel: checkedValues})
  
}

setModalApontamentoVisible(modalApontamentoVisible) {
    this.setState({ modalApontamentoVisible });
}

handleChange(event) {
  
     if (event.target.name == "dataatividade") {
            this.setState({
                dataatividade: event.target.value
              
            });
      }
      
      if (event.target.name == "horainicio") {
            this.setState({
                horainicio: event.target.value
            });
      }
      if (event.target.name == "filtro") {
            this.setState({
                filtro: event.target.value
            });
      }
       if (event.target.name == "obs") {
            this.setState({
                obs: event.target.value
            });
      }
       if (event.target.name == "numerosdm") {
            this.setState({
                numerosdm: event.target.value
            });
      }
     
}

handleSubmit(event) {
      /*alert('dataatividade : '       + this.state.dataatividade)
      alert('tipoDeApontamento : '   + this.state.tipoapontamento);
      alert('horainicio: '           + this.state.horainiciotipoapontamento );
      alert('filtro: '               + this.state.filtro );
      alert('obs: '                  + this.state.obs );
      alert('numerosdm: '            + this.state.numerosdm );
      alert('fatosrelevantes: '      + this.state.fatosrelevantes );
      alert('finalizarApontamento: ' + this.state.finalizarapontamento );
      alert('combustivel: '          + this.state.combustivel   );*/
    
    if (this.state.tipoapontamento == 'undefined' || this.state.tipoapontamento == '')
    {
       this.setState({ visibleApontamento: true });
       this.setModalApontamentoVisible(false);
       event.preventDefault(false);
       return false;
    }  
    
    else{ 
         event.preventDefault(true);
         this.setModalApontamentoVisible(true);
    }
    
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
    title: 'Título',
    dataIndex: 'titulo',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.titulo.indexOf(value) === 0,
    sorter: (a, b) => a.titulo.length - b.titulo.length,
    sortDirections: ['descend'],
    ...this.getColumnSearchProps('titulo'),
  },
  {
    title: 'Tipo',
    dataIndex: 'tipodoapontamento',
    onFilter: (value, record) => record.tipodoapontamento.indexOf(value) === 0,
    sorter: (a, b) => a.tipodoapontamento.length - b.tipodoapontamento.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('tipodoapontamento'),
  },
  {
    title: 'Data',
    dataIndex: 'datadaatividade',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.datadaatividade - b.datadaatividade,
  },
  {
    title: 'Inicio',
    dataIndex: 'horariodeinicio',
  },
  {
    title: 'Término',
    dataIndex: 'horariodetermino',
  },
  {
    title: 'Tempo',
    dataIndex: 'tempogasto',
   },
   {
    title: 'At. Interna',
    dataIndex: 'atividadeinterna',
  },
  {
    title: 'Projeto',
	dataIndex: 'projeto',
  },
  {
    title: 'Contrato',
    dataIndex: 'contrato',
  },
  {
	title: 'Observações',
	dataIndex: 'observacoes',
  },
  {
   title: 'Finalizar',
   dataIndex: 'finalizarapontamentodeatividades',
  },
  {
   title: 'Status',
   dataIndex: 'status',
   },
  {
   title: 'Criador',
   dataIndex: 'criadopor',
  },
  {
   title: 'Aprovador',
   dataIndex: 'aprovador',
  },
  {
   title: 'Centro de Custo',
   dataIndex: 'centrodecusto',
  },
  {
   title: 'Classificação',
   dataIndex: 'classificao',
  }
  
];
  
    
 const data = [
  {
      key                                   :'1',
      titulo                                :'Apontamento criado por José Luiz Pires em 01/07/20113',
      tipodoapontamento                     :this.state.tipoapontamento,
      datadaatividade                       :this.state.dataatividade,
      horariodeinicio                       :this.state.horainicio,
      horariodetermino                      :'...',
      tempogasto                            :'3,92',
      atividadeinterna                      :'...',
      projeto                               :'...',
      contrato                              :'LLFORTE-TJCE CT78/2009',
      observacoes                           :'...',
      finalizarapontamentodeatividades      :'Sim',
      status                                :'Aprovado',
      criadopor                             :'José Luiz Pires',
      aprovador                             :'Edson Nascimento',
      centrodecusto                         :'5405',
      classificao                           :'Contrato',
  },
];

  
const columns1 = [
  {
    title: 'Título',
    dataIndex: 'titulo',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.titulo.indexOf(value) === 0,
    sorter: (a, b) => a.titulo.length - b.titulo.length,
    sortDirections: ['descend'],
    ...this.getColumnSearchProps('titulo'),
  },
  {
    title: 'Tipo',
    dataIndex: 'tipodoapontamento',
    onFilter: (value, record) => record.tipodoapontamento.indexOf(value) === 0,
    sorter: (a, b) => a.tipodoapontamento.length - b.tipodoapontamento.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('tipodoapontamento'),
  },
  {
    title: 'Data',
    dataIndex: 'datadaatividade',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.datadaatividade - b.datadaatividade,
  },
  {
    title: 'Inicio',
    dataIndex: 'horariodeinicio',
  },
  {
    title: 'Término',
    dataIndex: 'horariodetermino',
  },
  
  
];
                                
  const data1 = [
  {
      key                                   :'1',
      titulo                               :'Apontamento criado por José Luiz Pires em 01/07/20113',
      tipodoapontamento                     :this.state.tipoapontamento,
      datadaatividade                       :this.state.dataatividade,
      horariodeinicio                       :this.state.horainicio,
      horariodetermino                      :'...',
      
      
  },
];
 
	    
		return (
		     <div className="card-container">
		         <Tabs type="card">
		              <TabPane tab="Novo Item" key="1" textStyle={{color: '#fff'}} >
		                  <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
                      <Row>
                       <Col span={13}>
                       <table>
                       <tr>
                          <td>
                           <div style={{ marginBottom: 16 , width:200}}>
                              Data da Atividade
                              <br />
                              <Input type="date" name="dataatividade" id="dataatividade"  value={this.state.dataatividade}  onChange={this.handleChange}  required="require"/>
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
                                          showSearch
                                          style={{ width: 300 }}
                                          placeholder="Selecione o Apontamento"
                                          optionFilterProp="children"
                                          onChange={onChange}
                                          onFocus={onFocus}
                                          onBlur={onBlur}
                                          onSearch={onSearch}
                                          onSelect={(value, event) => this.handleOnChangeTipoApontamento(value, event)}
                                          filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                          } required="required"
                                        >
                                          <Option value="Normal">Normal</Option>
                                          <Option value="Outros">Outros</Option>
                                         
                                        </Select>
                            </div>
                          </td>
                           <td>
                           <div style={{ marginBottom: 16 , width:150, marginLeft: 455}}>
                              <Button type="primary">  Rascunho  </Button>
                           </div>
                          </td>
                         </tr>
                    </table>
                    <table>
                    <tr>
                    <td>
                        <div style={{ marginBottom: 16 , width:600}}>
                                <div>
                                    {this.state.visibleApontamento ? (
                                      <Alert
                                        message="Atenção: Informe um tipo de apontamento"
                                        type="error"
                                        closable
                                        afterClose={this.handleCloseApontamento}
                                      /> ) : null}
                                  </div>
                           </div>
                        </td>
                      </tr>
                    </table>      
		                <div style={{ marginBottom: 16 , width:200}}>
			               <Form.Item label={`Horário de Inicio`} >
			                   <Input type="time" step='1' min="01:00:00" max="24:00:00"  name="horainicio" id="horainicio" value={this.state.horainicio}  onChange={this.handleChange} required="require"/>
			               </Form.Item>
		                </div>
		                <Col span={12}> <br />
                          <div>
                            <table>
                              <tr>
                                <td>
                                <Form.Item label={`Classificação`} > 
                                    <Select
                                          showSearch
                                          style={{ width: 300 }}
                                          placeholder="Selecione"
                                          optionFilterProp="children"
                                          onChange={onChange}
                                          onFocus={onFocus}
                                          onBlur={onBlur}
                                          onSearch={onSearch}
                                          onSelect={(value, event) => this.handleOnChangeClassificacao(value, event)}
                                          filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                          } required="required"
                                        >
                                          <Option value="Normal">Normal</Option>
                                          <Option value="Outros">Outros</Option>
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
	                                     style={{ width: 300 }}  id="filtro" name="filtro"
                                       value={this.state.filtro}  onChange={this.handleChange} required="require"/>
                                     </Form.Item> 
                                  
                                 </td>
                             </tr>
                           </table>
                           {/*<table>
                           <tr>
                             <td>
	                             <Form.Item label={`Selecione a atividade inteira`} > 
	                             <AutoComplete
		                           dataSource={dataSource}
		                           style={{ width: 400 }} id="atividadeinteira" name="atividadeinteira"
		                           onSelect={onSelect}
		                           onSearch={this.onSearch}
		                           placeholder="Clique aqui para buscar..."
		                         />
	                              </Form.Item> 
	                         </td>
	                       </tr>
                        </table>*/}
                           <table>
                              <tr>
                                <td>
                                   <Form.Item label={`Observação`} > 
	                                  <TextArea rows={4} cols={5} style={{ width: 400 }} id="obs" name="obs" value={this.state.obs}  onChange={this.handleChange}/>
	                               </Form.Item> 
	                             </td>
	                             <td>
                                 &nbsp;&nbsp; 
	                             </td>
	                             <td>
             
	                                  <Form.Item label={`Fatos Relevantes`} >
                                     <Checkbox.Group options={plainOptionsFatosRelevantes} defaultValue={['FatosRelevantes']} value={this.state.fatosrelevantes} onChange={this.onChangeFatosRelevantes} style={{ width: 500 }} required="required"/>
	                                 </Form.Item> 
                                 </td>
                                </tr>
                           </table>
                           <table>
                           <tr>
                             <td>
                                <Form.Item label={`Número do SDM`} style={{ width: 200 }}> 
                                      <Input type="text" name="numerosdm" id="numerosdm"  value={this.state.numerosdm}  onChange={this.handleChange} required="require"/>
	                                 
	                               </Form.Item> 
	                             </td>
	                             <td>
                                    &nbsp;&nbsp; 
	                             </td>
	                             <td>
  
	                                  <Form.Item label={`Finalizar Apontamento`} >
                                    <Checkbox.Group options={plainOptionsFinalizarApontamento} defaultValue={['FinalizarApontamento']} value={this.state.finalizarapontamento} onChange={this.onChangeFinalizarApontamento} style={{ width: 300 }} required="required"/>
	                                 </Form.Item> 
                                 </td>
                                 <td>
                                   <Form.Item label={`Combustível`} >
                                   <Checkbox.Group options={plainOptionsCombustivel} defaultValue={['Combustivel']} value={this.state.combustivel} onChange={this.onChangeCombustivel} style={{ width: 300 }} required="required"/>
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
                          <Modal
                                  title="Dados enviados com sucesso!"
                                  style={{ top: 20, width:400 }}
                                  visible={this.state.modalApontamentoVisible}
                                  onOk={() => this.setModalApontamentoVisible(false)}
                                  onCancel={() => this.setModalApontamentoVisible(false)}>
                                 <p><Table dataSource={data1} columns={columns1} />,</p>  
                             </Modal>
                     </Row>
                 </Form>
		              </TabPane>
		              <TabPane tab="Lista de Apontamentos" key="2">
			            <Table dataSource={data} columns={columns} />
				       </TabPane>
		            </Tabs>
		          </div>
		    );
		   }
		  }
    	const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
    	export default WrappedAdvancedSearchForm;


