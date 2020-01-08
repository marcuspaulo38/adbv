import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Button, Tabs, Table, Select, Icon, Modal,  Alert } from 'antd';
//import SearchePlantonista from "./SearchePlantonista";
import Highlighter from 'react-highlight-words';

import { compareAsc, format, zonedTimeToUtc, utcToZonedTime,addYears,formatWithOptions,toDate } from 'date-fns';
import {eo} from 'date-fns/locale/eo';



import calendario from '../../../image/calendario.png';
import responsavel from '../../../image/usuario.png';
import livro from '../../../image/livro.png';
import editar from '../../../image/editar.png';
import './tab.css';



function Img() {
	  return  <img alt="Edição" src={editar} height="25" width="25"/>;
}

function Calendario() {
	  return  <img alt="Dasat" src={calendario} height="25" width="25" />;
}
function Responsavel() {
	  return  <img alt="Responsável" src={responsavel} height="25" width="25" />;
}
function Livro() {
	  return  <img alt="Editar" src={livro} height="25" width="25" />;
}

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
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


const { TabPane } = Tabs;

const { TextArea } = Input;


class AdvancedSearchForm extends React.Component {
   constructor(props) {
    super(props);
	   this.state = {
	                  expand                    : false,
	                  search                    : "",
	                  searchText                : '',
	                  searchedColumn            : '',
                    competencia               : '',
                    datainicio                :'',
                    datatermino               :'',
                    integracao                :'',
                    horasnormais              :'',
                    horasextras               :'',
                    responsavelpelofechamento :'',
                    visibleCompetencia        : false,
                };
              
    this.handleOnChangeCompetencia = this.handleOnChangeCompetencia.bind(this);
    this.handleOnChangeIntegracao  = this.handleOnChangeIntegracao.bind(this);
    this.handleOnChangeHorasNormais= this.handleOnChangeHorasNormais.bind(this);
    this.handleOnChangeHorasExtras = this.handleOnChangeHorasExtras.bind(this);
    this.handleChange              = this.handleChange.bind(this);
    this.handleSubmit              = this.handleSubmit.bind(this);
    this.modalCompetenciaVisible   = false;
    this.pagination                = {};
    this.loading                   = false;
    
 }

 
handleOnChangeCompetencia = (selectedValue) => {
    this.setState({
                    competencia: selectedValue
                });
}
handleOnChangeIntegracao = (selectedValue) => {
    this.setState({
                    integracao: selectedValue
                });
}
handleOnChangeHorasNormais = (selectedValue) => {
    this.setState({
                    horasnormais: selectedValue
                });
}
handleOnChangeHorasExtras = (selectedValue) => {
    this.setState({
                    horasextras: selectedValue
                });
} 

handleChange(event) {
  
    if (event.target.name == "datainicio") {
            this.setState({
                datainicio: event.target.value
              
            });
     }
      
     if (event.target.name == "datatermino") {
            this.setState({
                datatermino: event.target.value
              
            });
     }
 
     if (event.target.name == "responsavelpelofechamento") {
            this.setState({
                responsavelpelofechamento: event.target.value
              
            });
      }
     
}

handleSubmit(event) {
    /*  alert('Os dados submetidos são:');
      alert('Data competencia : '       + this.state.competencia);
      alert('datainicio : '             + this.state.datainicio);
      alert('datatermino: '             + this.state.datatermino );
      alert('integracao: '              + this.state.integracao );
      alert('horasnormais: '            + this.state.horasnormais );
      alert('horasextras: '             + this.state.horasextras );
      alert('responsavelpelofechamento:'+ this.state.responsavelpelofechamento );*/
    
    let data = new Date(this.state.datainicio);
    let dia  = data.getDate().toString();
    let diaF = (dia.length == 1) ? '0'+dia : dia;
    let mes  = (data.getMonth()+1).toString(); //+1 pois no getMonth Janeiro começa com zero.
    let mesF = (mes.length == 1) ? '0'+mes : mes;
    let anoF = data.getFullYear();
    
     if(anoF <= 2019 )
     {
       this.setState({ visibleCompetencia: true });
       this.setModalCompetenciaVisible(false);
       event.preventDefault(false);
       return false;
     }
        
    if(mes =='02'){
          this.setState({ competencia: "02/"+anoF });
          
    }else{
      
       if(diaF <=20 && mes != '02'){
        let mes2 = (data.getMonth()-1).toString();
        this.setState({ competencia: +mes+"/"+anoF });
          
      }
      if(diaF >=21 && mes != '02'){
          let mes1  = (data.getMonth()+2).toString();
          this.setState({ competencia: +mes1+"/"+anoF });
      }
    }

   
    if (this.state.competencia == 'undefined' || this.state.competencia == '')
    {
       this.setState({ visibleCompetencia: true });
       this.setModalCompetenciaVisible(false);
       event.preventDefault(false);
       return false;
    }  
    if (this.state.integracao == 'undefined' || this.state.integracao == '')
    {
       this.setState({ visibleIntegracao: true });
       this.setModalIntegracaoVisible(false);
       event.preventDefault(false);
       return false;
    }
    if (this.state.horasnormais == 'undefined' || this.state.horasnormais == '')
    {
       this.setState({ visibleHorasNormais: true });
       this.setModalHorasNormaisVisible(false);
       event.preventDefault(false);
       return false;
    }
    if (this.state.horasextras == 'undefined' || this.state.horasextras == '')
    {
       this.setState({ visibleHorasExtras: true });
       this.setModalHorasExtrasVisible(false);
       event.preventDefault(false);
       return false;
    }
    else{ 
         event.preventDefault(true);
         this.setModalCompetenciaVisible(true);
    }
    
}

handleCloseCompetencia = () => {
    this.setState({ visibleCompetencia: false });
}
handleCloseIntegracao = () => {
    this.setState({ visibleIntegracao: false });
}
handleCloseHorasNormais = () => {
    this.setState({ visibleHorasNormais: false });
}
handleCloseHorasExtras = () => {
    this.setState({ visibleHorasExtras: false });
}

setModalCompetenciaVisible(modalCompetenciaVisible) {
    this.setState({ modalCompetenciaVisible });
}
setModalIntegracaoVisible(modalIntegracaoVisible) {
    this.setState({ modalIntegracaoVisible });
}
setModalHorasNormaisVisible(modalHorasNormaisVisible) {
    this.setState({ modalHorasNormaisVisible });
}
setModalHorasExtrasVisible(modalHorasExtrasVisible) {
    this.setState({ modalHorasExtrasVisible });
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
    title: 'Competência',
    dataIndex: 'competencia',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.competencia - b.competencia,
	},
  {
    title: 'Inicio',
    dataIndex: 'datainicio',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.datainicio - b.datainicio,
  },
	{
    title: 'Término',
    dataIndex: 'datatermino',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.datatermino - b.datatermino,
  },
	{
		title: 'Responsável',
    dataIndex: 'responsavel',
    render: text => <a>{text}</a>,
		onFilter: (value, record) => record.responsavel.indexOf(value) === 0,
    sorter: (a, b) => a.responsavel.length - b.responsavel.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('responsavel'),
	},
	{
		title: 'Liberado para Integração',
    dataIndex: 'liberado',
  },
	{
		title: 'Integrado com Rubi',
    dataIndex: 'integradocomrubi',
  },
	{
		title: 'Horas Normais',
    dataIndex: 'boquearhorasnormais',
  },
	{
		title: 'Horas Extras',
    dataIndex: 'bloquearhorasextras',
  },
	{
		title: 'Modificado por',
    dataIndex: 'modificadopor',
    render: text => <a>{text}</a>,
		onFilter: (value, record) => record.modificadopor.indexOf(value) === 0,
    sorter: (a, b) => a.modificadopor.length - b.modificadopor.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('modificadopor'),
	},
	{
    title: 'Editar',
    dataIndex: 'editar',
    render: text => <a>{<Img />}</a>,
  },
];
  
   const data = [
  {
    key                           : '1',
    competencia                   : this.state.competencia,
    datainicio                    : this.state.datainicio,
    datatermino                   : this.state.datatermino,
    responsavel                   : this.state.responsavelpelofechamento,
		liberado                      : this.state.integracao,
		integradocomrubi              : "Sim",
		boquearhorasnormais           : this.state.horasnormais,
		bloquearhorasextras           : this.state.horasextras,
		modificadopor                 : "Alexandre Pontes",
		editar                        : "Editar",
  },
	
 
];
  
  const columns1 = [
  {
    title: 'Competência',
    dataIndex: 'competencia',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.competencia - b.competencia,
	},
  {
    title: 'Inicio',
    dataIndex: 'datainicio',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.datainicio - b.datainicio,
  },
	{
    title: 'Término',
    dataIndex: 'datatermino',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.datatermino - b.datatermino,
  },
	{
		title: 'Responsável',
    dataIndex: 'responsavel',
    render: text => <a>{text}</a>,
		onFilter: (value, record) => record.responsavel.indexOf(value) === 0,
    sorter: (a, b) => a.responsavel.length - b.responsavel.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('responsavel'),
	},

];  
                                
 const data1 = [
  {
    key                           : '1',
    competencia                   : this.state.competencia,
    datainicio                    : this.state.datainicio,
    datatermino                   : this.state.datatermino,
    responsavel                   : this.state.responsavelpelofechamento,
		liberado                      : this.state.integracao,
  },
 
];
  
return (
		     <div className="card-container">
		         <Tabs type="card">
		              <TabPane tab="Período de Fechamento" key="1" textStyle={{color: '#fff'}} >
		                 <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
		                      <Row>
		                       <Col span={13}>
		                         <div style={{ marginBottom: 25 , width:300}}>
				                               Competência<br />
					                               <Select
                                          showSearch
                                          style={{ width: 600 }}
                                          placeholder="Selecione a competencia"
                                          optionFilterProp="children"
                                          onChange={onChange}
                                          onFocus={onFocus}
                                          onBlur={onBlur}
                                          onSearch={onSearch}
                                          onSelect={(value, event) => this.handleOnChangeCompetencia(value, event)}
                                          filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                          } disabled="disabled"
                                        >
                                          <Option value="04/12">Competência Automática</Option>
                                        </Select>
				                              
			                       </div>
                             <div>
                                    {this.state.visibleCompetencia ? (
                                      <Alert
                                        message="Atenção: Competências de 2019 são inválida! Favor informe uma competência apartir de 01/2020."
                                        type="error"
                                        closable
                                        afterClose={this.handleCloseCompetencia}
                                      /> ) : null}
                            </div>
		                        <Col span={12}>
		                          <div>
		                            <table>
		                              <tr>
		                                <td>
		                                  <div style={{ marginBottom: 16 , width:200}}>
		                                     Data de Inicio
		                                     <br />
		                                      <Input type="date" name="datainicio" id="datainicio" value={this.state.datainicio}  onChange={this.handleChange} required="required"/>
                                          
		                                   </div> 
		                                 </td>
                                     <td>
		                                 &nbsp;<Calendario />&nbsp;&nbsp; 
		                                 </td>
		                                  <td>
		                                  <div style={{ marginBottom: 16 , width:200}}>
		                                     Data de Término
		                                     <br />
		                                     <Input type="date" name="datatermino" id="datatermino" value={this.state.datatermino}  onChange={this.handleChange} required="required"/>
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
                                          showSearch
                                          style={{ width: 600 }}
                                          placeholder="Selecione a Integração"
                                          optionFilterProp="children"
                                          onChange={onChange}
                                          onFocus={onFocus}
                                          onBlur={onBlur}
                                          onSearch={onSearch}
                                          onSelect={(value, event) => this.handleOnChangeIntegracao(value, event)}
                                          filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                          } required="required"
                                        >
                                          <Option value="04/2020">04/2020</Option>
                                          <Option value="05/2020">05/2020</Option>
                                          <Option value="06/2020">06/2020</Option>
                                        </Select>
				                              
			                               </div>
                                      <div>
                                            {this.state.visibleIntegracao ? (
                                              <Alert
                                                message="Atenção: Informe uma Integração."
                                                type="error"
                                                closable
                                                afterClose={this.handleCloseIntegracao}
                                              /> ) : null}
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
                                          showSearch
                                          style={{ width: 600 }}
                                          placeholder="Deseja Bloquear  Horas Normais?"
                                          optionFilterProp="children"
                                          onChange={onChange}
                                          onFocus={onFocus}
                                          onBlur={onBlur}
                                          onSearch={onSearch}
                                          onSelect={(value, event) => this.handleOnChangeHorasNormais(value, event)}
                                          filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                          } required="required"
                                        >
                                          <Option value="Sim">Sim</Option>
                                          <Option value="Não">Não</Option>
                                        </Select>
                                         <div>
                                                {this.state.visibleHorasNormais ? (
                                                  <Alert
                                                    message="Atenção: marque o bloqueio das Horas Normais."
                                                    type="error"
                                                    closable
                                                    afterClose={this.handleCloseHorasNormais}
                                                  /> ) : null}
                                        </div>
				                              
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
                                          showSearch
                                          style={{ width: 600 }}
                                          placeholder="Deseja Bloquear  Horas Extras?"
                                          optionFilterProp="children"
                                          onChange={onChange}
                                          onFocus={onFocus}
                                          onBlur={onBlur}
                                          onSearch={onSearch}
                                          onSelect={(value, event) => this.handleOnChangeHorasExtras(value, event)}
                                          filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                          } required="required"
                                        >
                                          <Option value="Sim">Sim</Option>
                                          <Option value="Não">Não</Option>
                                          
                                        </Select>
				                              </div>
                                       <div>
                                              {this.state.visibleHorasExtras ? (
                                                <Alert
                                                  message="Atenção: marque o bloqueio das Horas Extras."
                                                  type="error"
                                                  closable
                                                  afterClose={this.handleCloseHorasExtras}
                                                /> ) : null}
                                      </div>
			                              </td>
			                             </tr>
		                           </table>
		                           <table>
				                        <tr>
				                          <td>
				                            <div style={{ marginBottom: 16 , width:220}}>
				                               Responsável pelo fechamento
				                               <Input type="text" name="responsavelpelofechamento" id="responsavelpelofechamento" value={this.state.responsavelpelofechamento}  onChange={this.handleChange} required="required"/>
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
                               <Modal
		                                  title="Dados enviados com sucesso!"
		                                  style={{ top: 20, width:400 }}
		                                  visible={this.state.modalCompetenciaVisible}
		                                  onOk={() => this.setModalCompetenciaVisible(false)}
		                                  onCancel={() => this.setModalCompetenciaVisible(false)}>
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


