import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';


import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form } from 'antd';

import editar from '../../../image/editar.png';

function Img() {
	  return  <img alt="Edição" src={editar} height="25" width="25"/>;
}

  const data = [
  {
    key                           : '1',
    dataatividade                 : "01/04/12",
    tipoapontamento               : "Extra",
    tempogasto                    : "0,8",
    horainicio                    : "08:00",
    horatermino                   : "09:00",
    integradocomrubi              : "Atividade Interna",
		centrodecusto                 : "2038",
    aprovador                     : "Sergio Luiz Torres",
    descricaodoservico            : "",
    informacoesadicionais          : "",
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
    title: 'Data da Atividade',
    dataIndex: 'dataatividade',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.dataatividade - b.dataatividade,
	},
  {
    title: 'Tipo de Apontamento',
    dataIndex: 'tipoapontamento',
  },
	{
    title: 'Tempo Gasto',
    dataIndex: 'tempogasto',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.tempogasto - b.tempogasto,
  },
	{
		title: 'Hora de Inicio',
    dataIndex: 'horainicio',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.horainicio - b.horainicio,
		
	},
	{
		title: 'Hora Término',
    dataIndex: 'horatermino',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.horatermino - b.horatermino,
  },
	{
		title: 'Integrado com Rubi',
    dataIndex: 'integradocomrubi',
  },
	{
		title: 'Centro de Custo ',
    dataIndex: 'centrodecusto',
  },
	{
		title: 'Aprovador',
    dataIndex: 'aprovador',
    render: text => <a>{text}</a>,
		onFilter: (value, record) => record.aprovador.indexOf(value) === 0,
    sorter: (a, b) => a.aprovador.length - b.aprovador.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('aprovador'),
	},
  	{
		title: 'Descrição do Serviço',
    dataIndex: 'descricaosdoservido',
    render: text => <a>{text}</a>,
		onFilter: (value, record) => record.descricaosdoservido.indexOf(value) === 0,
    sorter: (a, b) => a.descricaosdoservido.length - b.descricaosdoservido.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('descricaosdoservido'),
	},
  	{
		title: 'Informações Adicionais',
    dataIndex: 'informacoesadicionais',
    render: text => <a>{text}</a>,
		onFilter: (value, record) => record.informacoesadicionais.indexOf(value) === 0,
    sorter: (a, b) => a.informacoesadicionais.length - b.informacoesadicionais.length,
    sortDirections: ['descend', 'ascend'],
     ...this.getColumnSearchProps('informacoesadicionais'),
	},
	{
    title: 'Editar',
    dataIndex: 'editar',
    render: text => <a>{<Img />}</a>,
  },
];  
   
    return  <Table columns={columns} dataSource={data} />;
  }
}
  const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
	export default WrappedAdvancedSearchForm;
	
