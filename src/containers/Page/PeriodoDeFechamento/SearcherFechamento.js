import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';


import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form } from 'antd';
import './tab.css';
import editar from '../../../image/editar.png';

function Img() {
	  return  <img alt="Edição" src={editar} height="25" width="25"/>;
}

  const data = [
  {
    key                           : '1',
    competencia                   : "04/12",
    datainicio                    : "21/01/2019",
    datafim                       : "30/05/2019",
    termino                       : "0/05/2019",
    responsavel                   : "Alexandre Ponte",
		liberado                      : "Sim",
		integradocomrubi              : "Sim",
		boquearhorasnormais           : "Sim",
		bloquearhorasextras           : "Sim",
		modificadopor                 : "Alexandre Pontes",
		editar                        : "Editar",
  },
	{
    key                           : '1',
    competencia                   : "06/11",
    datainicio                    : "12/11/2019",
    datafim                       : "30/01/2020",
    termino                       : "10/05/2020",
    responsavel                   : "Marcus Ponte",
		liberado                      : "Sim",
		integradocomrubi              : "Sim",
		boquearhorasnormais           : "Sim",
		bloquearhorasextras           : "Sim",
		modificadopor                 : "Marcus Pontes",
		editar                        : "Editar",
  },
 
];

	class AdvancedSearchForm extends React.Component {
  	   state = {
  	    expand: false,
  	    search: "",
  	    searchText: '',
  	    searchedColumn: '',
  	    
  	  };


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
		
  const columns = [
  {
    title: 'Competencia',
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
    dataIndex: 'termino',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.termino - b.termino,
  },
	{
		title: 'Responsável Fechamento',
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
		title: 'Boquear Horas Normais',
    dataIndex: 'boquearhorasnormais',
  },
	{
		title: 'Bloquear Horas Extras',
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
  
    return <Table columns={columns} dataSource={data} />;
  }
}
  const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
	export default WrappedAdvancedSearchForm;
	
