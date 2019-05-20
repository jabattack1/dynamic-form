import React from 'react';
import styled from 'styled-components';

import Room1 from '../components/room1.js';
import Room2 from '../components/room2.js';
import Room3 from '../components/room3.js';
import Room4 from '../components/room4.js';


class Parent extends React.Component {

	state = {
		checked: '',
		room4:[
		    {
		      adults: '',
		      children: ''
		    }
  		]
	}

	render() {

	  	let array = [];

	  	const room1Value = (value) => {
	  		console.log('room1');
			console.log(value);
	    	this.setState({checked:''});
	  	};

		const room2Value = (value) => {
			console.log('room2');
			console.log(value);
			if(value[0] === true){
	    		this.setState({checked:'room2'});
	    	}
	    	else if(value[0] === false){
	    		this.setState({checked:''});
	    	}
	  	};

		const room3Value = (value) => {
			console.log('room3');
			console.log(value);
			if(value[0] === true){
	    		this.setState({checked:'room3'});
	    	}
	    	else if(value[0] === false){
	    		this.setState({checked:''});
	    	}
	  	};

		const room4Value = (value) => {
	    	if(value[0] === true){
	    		this.setState({checked:'room4'});
	    		this.setState({room4:[{adults: value[2], children: value[3]}]},() => {
    				console.log(this.state)});
	    	}
	    	else if(value[0] === false){
	    		this.setState({checked:''});
	    	}
	  	};

	  	let children = '';

	  	if(this.state.checked === 'room2'){
	  		children = 
	  			<div>
				    <Room1  fromChildToParentCallback={room1Value} />
					<Room2  fromChildToParentCallback={room2Value} check={true} />
					<Room3  fromChildToParentCallback={room3Value} check={false} />
					<Room4  fromChildToParentCallback={room4Value} check={false} /> 
				</div>
	  	}
	  	else if(this.state.checked === 'room3'){
	  		children = 
	  			<div>
				    <Room1  fromChildToParentCallback={room1Value} />
					<Room2  fromChildToParentCallback={room2Value} check={true} />
					<Room3  fromChildToParentCallback={room3Value} check={true} />
					<Room4  fromChildToParentCallback={room4Value} check={false} /> 
				</div>
	  	}

	  	else if(this.state.checked === 'room4'){
	  		children = 
	  			<div>
				    <Room1  fromChildToParentCallback={room1Value} />
					<Room2  fromChildToParentCallback={room2Value} check={true} />
					<Room3  fromChildToParentCallback={room3Value} check={true} />
					<Room4  fromChildToParentCallback={room4Value} check={true} /> 
				</div>
	  	}
	  	else{
	  		children =
	  			<div>
				    <Room1  fromChildToParentCallback={room1Value} />
					<Room2  fromChildToParentCallback={room2Value} check={false} />
					<Room3  fromChildToParentCallback={room3Value} check={false} />
					<Room4  fromChildToParentCallback={room4Value} check={false} /> 
				</div>
	  	}
	 	
	    return(
	    	<div>
	    		{children}
				<button type='button' onClick={() => this.storeStuff()}>Submit</button>
			</div>
		)
	} 

	storeStuff(){
		console.log('here');
		let status = this.state
		localStorage.setItem('submittedData', JSON.stringify(status));
		var parsedData = JSON.parse(localStorage.getItem('submittedData'));
		console.log(parsedData);
	}

}

export default Parent;
