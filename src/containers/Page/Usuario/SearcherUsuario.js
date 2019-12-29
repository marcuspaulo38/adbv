import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';


import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form } from 'antd';
import './tab.css';

import userpic from '../../../image/editar.png';

function Img() {
	  return  <img alt="user" src={userpic} height="25" width="25"/>;
}

  const data = [
  {
    key                           :'1',
    colaborador                   : "Antonio Dos Santos",
    datainicio                    : "21/01/2019",
    datafim                       : "",
    gestor                        : "Lucio Amâncio",
    apontamentocontroladoporescala: "Não",
    editar                        : "Visualizar",
  },
  {
    key                           :'2',
    colaborador                   : "Jose Dos Santos",
    datainicio                    : "21/10/2019",
    datafim                       : "",
    gestor                        : "Antonio Amâncio",
    apontamentocontroladoporescala: "Não",
    editar                        : "Visualizar",
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
    title: 'Colaborador',
    dataIndex: 'colaborador',
    render: text => <a>{text}</a>,
    onFilter: (value, record) => record.colaborador.indexOf(value) === 0,
    sorter: (a, b) => a.colaborador.length - b.colaborador.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('colaborador'),
  },
  {
    title: 'Inicio de Apontamento',
    dataIndex: 'datainicio',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.datainicio - b.datainicio,
  },
  {
    title: 'Termino de Apontamento',
    dataIndex: 'datafim',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.datafim - b.datafim,
  },
  {
    title: 'Gestor',
    dataIndex: 'gestor',
    onFilter: (value, record) => record.colaborador.indexOf(value) === 0,
    sorter: (a, b) => a.gestor.length - b.gestor.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('gestor'),
   },
   {
    title: 'Apontamento Controlado por Escala',
    dataIndex: 'apontamentocontroladoporescala',
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
	
