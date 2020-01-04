import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';

import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form } from 'antd';

const data = [

  {
    key                 : '1',
    titulo              : "",
    criadopor           : "",
    dataapontamento     :"",
    quilometragem       :"",
    classificacao       :"",
    detalheclassificacao:"",
    tipoapontamento     :"",
    inicioextra         :"",
    terminoextra        :"",
    totalhorasextras    :"",
    
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
    title: 'Titulo',
    dataIndex: 'titulo',
    onFilter: (value, record) => record.titulo.indexOf(value) === 0,
    sorter: (a, b) => a.titulo.length - b.titulo.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('titulo'),
  },
  {
    title: 'Criado por',
    dataIndex: 'criadopor',
    onFilter: (value, record) => record.criadopor.indexOf(value) === 0,
    sorter: (a, b) => a.criadopor.length - b.criadopor.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('criadopor'),
  },
  {
    title: 'Data',
    dataIndex: 'dataapontamento',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.dataapontamento - b.dataapontamento,
    
  },
   {
    title: 'Quilometragem',
    dataIndex: 'quilometragem',
    
    
  },
    {
    title: 'Classificação',
    dataIndex: 'classificacao',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.classificacao - b.classificacao,
    
  },
    {
    title: 'Detalhe',
    dataIndex: 'detalheclassificacao',
    
    
  },
    {
    title: 'Tipo',
    dataIndex: 'tipoapontamento',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.tipoapontamento - b.tipoapontamento,
    
  },
    {
    title: 'Inicio Extra',
    dataIndex: 'inicioextra',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.inicioextra - b.inicioextra,
    
  },
    {
    title: 'Termino Extra',
    dataIndex: 'terminoextra',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.terminoextra - b.terminoextra,
    
  },
   {
    title: 'Total Horas Extras',
    dataIndex: 'totalhorasextras',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.totalhorasextras - b.totalhorasextras,
    
  },
 
];

    return <Table columns={columns} dataSource={data} />;
  }
}
  const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
	export default WrappedAdvancedSearchForm;
	
