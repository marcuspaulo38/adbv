import React, { Component } from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

import 'antd/dist/antd.css';
import { Form, Row, Col,  Tabs, Table   } from 'antd';

//import "./styles.css";
//import "./flags.min.css";


const columns = [
	  {
	        title: 'Data',
	        dataIndex: 'data',
	  },
	  {
	        title: 'Platonista Fortaleza',
	        dataIndex: 'platonistafortaleza',
	        render: text => <a>{text}</a>,
	  },
	  {
		    title: 'Platonista Recife',
		    dataIndex: 'platonistarecife',
		    render: text => <a>{text}</a>,
	  },
	  {
		    title: 'Platonista Salvador Aracaju',
		    dataIndex: 'platonistasalvadoraracaju',
		    render: text => <a>{text}</a>,
	  },
	  
	  {
		    title: 'Observações',
		    dataIndex: 'obs',
	  },
	  {
		    title: 'Integrado com o rubi',
		    dataIndex: 'integradocomrubi',
	  },
	  {
		    title: 'Criado por',
		    dataIndex: 'criadopor',
		    renderIndex: text => <a>{text}</a>,
	  },
	  {
		    title: 'Modificado por',
		    dataIndex: 'modificadopor',
		    renderIndex: text => <a>{text}</a>,
	  },
	  {
		    title: 'Editar',
		    dataIndex: 'editar',
		    renderIndex: text => <a>{text}</a>,
	  },
	];

	const data = [
	  {
	    key                        : '1',
	    data                       : "01/12/2019",
	    platonistafortaleza        : "Luiz Camargo Reis, David Tavares, Mario Moreira Vasconcelos",
	    platonistarecife           : "Robson Carvalhos de Sousa",
	    platonistasalvadoraracaju  : "",
	    obs                        : "",
	    integradocomrubi           : "Não",
	    criadopor                  : "Samuel",
	    modificadopor              : "Marcus Paulo",
	    editar                     : "Editar"
	  },
	  
	  {
		    key                        : '2',
		    data                       : "01/12/2019",
		    platonistafortaleza        : "Marcus Paulo",
		    platonistarecife           : "Robson Carvalhos de Sousa",
		    platonistasalvadoraracaju  : "",
		    obs                        : "",
		    integradocomrubi           : "Não",
		    criadopor                  : "Samuel",
		    modificadopor              : "Marcus Paulo",
		    editar                     : "Editar"
		  },
	 
	  
	 
	];

	
	const countriesList = data;



class App extends Component {
  state = {
    search: ""
  };

  renderCountry = country => {
    const { search } = this.state;
    var key = country.key.toLowerCase();

    /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    return (
        <Card>
          <CardBody>
           
          </CardBody>
        </Card>
     
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredCountries = countriesList.filter(country => {
      return country.platonistafortaleza.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
              
              <div className="col">
                <Input
                  label="Search Country"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="row">
               {filteredCountries.map(country => {
                //return this.renderCountry(country);
            	   
                return <Table columns={columns} dataSource={data} />
              })}
               
               
            </div>
          </div>
        </main>
       
      </div>
    );
  }
}

export default App;
