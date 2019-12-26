import React from 'react';
import SeachBar from './SeacherBar'; 
import Table from './Table';

export default class App extends React.Component{
	constructor()
	{
		super();
		this.state({
			db:[]
		});
		this.searcheDB();
		//const Root="http://"+document.location.hostname+"/app";
	}
	
	searchDB(){
		fetch(Root+"src/api/index.php", {method:'POST'})
		.then((response)=>response.Json())
		.then(response)=>
		{
			this.setState({
				db: responseJson
			});
			console.log(responseJson);
			
		});
		
	}
	
	render(){
		return(
	    	<div>
	    	  <SeacherBar funcao={debounce(300, this.searchDB.bind(this))} />
	    	  <Table  arrayCarros={this.state.db} />
	    	</div>		
		);
		
	}
	
}