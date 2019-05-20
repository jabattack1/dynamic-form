import React from 'react';
import styled from 'styled-components';

import Room1 from '../components/room1.js';
import Room2 from '../components/room2.js';
import Room3 from '../components/room3.js';
import Room4 from '../components/room4.js';


class Parent extends React.Component {

	state = {
		checked: ''
	}

	render() {

	  	let room4check = false;

	  	const room1Value = (value) => {
	  		console.log(value);
	    	this.setState({checked:''});
	  	};

		const room2Value = (value) => {
			console.log(value);
			if(value[0] === true){
	    		this.setState({checked:'room2'});
	    	}
	    	else if(value[0] === false){
	    		this.setState({checked:''});
	    	}
	  	};

		const room3Value = (value) => {
			console.log(value);
			if(value[0] === true){
	    		this.setState({checked:'room3'});
	    	}
	    	else if(value[0] === false){
	    		this.setState({checked:''});
	    	}
	  	};

		const room4Value = (value) => {
			console.log('kemp');
			console.log(value);
	    	if(value[0] === true){
	    		this.setState({checked:'room4'});
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
					<Room2  fromChildToParentCallback={room2Value} check={true} adults={0} children={0} />
					<Room3  fromChildToParentCallback={room3Value} check={false} adults={0} children={0} />
					<Room4  fromChildToParentCallback={room4Value} check={false} adults={0} children={0} /> 
				</div>
	  	}
	  	else if(this.state.checked === 'room3'){
	  		children = 
	  			<div>
				    <Room1  fromChildToParentCallback={room1Value} />
					<Room2  fromChildToParentCallback={room2Value} check={true} adults={0} children={0} />
					<Room3  fromChildToParentCallback={room3Value} check={true} adults={0} children={0} />
					<Room4  fromChildToParentCallback={room4Value} check={false} adults={0} children={0} /> 
				</div>
	  	}

	  	else if(this.state.checked === 'room4'){
	  		children = 
	  			<div>
				    <Room1  fromChildToParentCallback={room1Value} />
					<Room2  fromChildToParentCallback={room2Value} check={true} adults={0} children={0} />
					<Room3  fromChildToParentCallback={room3Value} check={true} adults={0} children={0} />
					<Room4  fromChildToParentCallback={room4Value} check={true} adults={0} children={0} /> 
				</div>
	  	}
	  	else{
	  		children =
	  			<div>
				    <Room1  fromChildToParentCallback={room1Value} />
					<Room2  fromChildToParentCallback={room2Value} check={false} adults={0} children={0} />
					<Room3  fromChildToParentCallback={room3Value} check={false} adults={0} children={0} />
					<Room4  fromChildToParentCallback={room4Value} check={false} adults={0} children={0} /> 
				</div>
	  	}
	 	
	    return(
	    	<div>
	    		{children}
			</div>
		)
	} 

}

export default Parent;
