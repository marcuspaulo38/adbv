import React from 'react';

export default class SeachBar extends REact.Component{
	
	render(){
		return(
	    	<div className="SeacheBar">
		    	<form name="FormBusca" id="FormBusca" method="post"> 
		    	  <input type="text" name="Busca" id="Busca" />
		    	</form>
	       </div>		
		);
		
	}
	
}