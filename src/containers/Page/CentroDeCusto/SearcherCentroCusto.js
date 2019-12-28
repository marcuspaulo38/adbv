import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';


import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Row, Col, Tabs ,Select, DatePicker, Checkbox  } from 'antd';
import './tab.css';

import userpic from '../../../image/editar.png';
import calendario from '../../../image/calendario.png';
import window from '../../../image/window.jpg';
import livro from '../../../image/livro.png';

function Img() {
	  return  <img alt="user" src={userpic} height="25" width="25"/>;
}

function Calendario() {
	  return  <img alt="user" src={calendario} height="25" width="25"/>;
}
function Window() {
	  return  <img alt="user" src={window} height="25" width="25"/>;
}
function Livro() {
	  return  <img alt="user" src={livro} height="25" width="25"/>;
}

	const data = [
  {
      key                                   :'1',
      titulo                                :'Apontamento criado por José Luiz Pires em 01/07/20113',
      tipodoapontamento                     :'Normal',
      datadaatividade                       :'01/07/2013',
      horariodeinicio                       :'...',
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
  {
      key                                   :'2',
      titulo                                :'1Apontamento criado por MArcus Paulo em 03/05/20113',
      tipodoapontamento                     :'Especial',
      datadaatividade                       :'03/02/2013',
      horariodeinicio                       :'...',
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
  
    return <Table columns={columns} dataSource={data} />;
  }
}
  const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
	export default WrappedAdvancedSearchForm;
	
