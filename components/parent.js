import React from 'react';
import styled from 'styled-components';

import Room1 from '../components/room1.js';
import Room2 from '../components/room2.js';
import Room3 from '../components/room3.js';
import Room4 from '../components/room4.js';

const gridWrap = styled.div`
	width: calc(100%);
	font: verdana;
`;

const Submit = styled.button`
	position: relative;
	display: flex;
	margin-top: 10px;
	margin-left: 10px;
`;


class Parent extends React.Component {

	constructor(props){

	    super(props)

	    this.state = {
			checked: '',
			room1:[
			    {
			      adults: '',
			      children: ''
			    }
	  		],
			room2:[
			    {
			      adults: '',
			      children: ''
			    }
	  		],
			room3:[
			    {
			      adults: '',
			      children: ''
			    }
	  		],
			room4:[
			    {
			      adults: '',
			      children: ''
			    }
	  		]
		}
	}

	state = {

	}


	render() {

	  	const room1Value = (value) => {
	  		if(value[0] === true && this.state.checked === ''){
	    		this.setState({checked:''});
	    	}
	    	else if(value[0] === false){
	    		this.setState({checked:''});
	    	}
	    	else{
	    		this.setState({room1:[{adults: value[2], children: value[3]}]},() => {
    			});	    		
	    	}
	  	};

		const room2Value = (value) => {
			if(value[0] === true && this.state.checked === '' || this.state.checked < value[1]){
	    		this.setState({checked: parseInt(2)});
	    	}
	    	else if(value[0] === false){
	    		this.setState({checked:''});
	    	}
	    	else{
	    		this.setState({room2:[{adults: value[2], children: value[3]}]},() => {
    			});	    		
	    	}
	  	};

		const room3Value = (value) => {
			if(value[0] === true && this.state.checked === '' || this.state.checked < value[1]){
	    		this.setState({checked: parseInt(3)});
	    	}
	    	else if(value[0] === false && this.state.checked === value[1]){
	    		this.setState({checked: parseInt(2)});
	    	}
	    	else if(value[0] === false && this.state.checked > value[1]){
	    		this.setState({checked: parseInt(2)});
	    	}
	    	else if(value[0] === false){
	    		this.setState({checked:''});
	    	}
	    	else{
	    		this.setState({room3:[{adults: value[2], children: value[3]}]},() => {
    			});	    		
	    	}
	  	};

		const room4Value = (value) => {
	    	if(value[0] === true && this.state.checked === '' || this.state.checked < value[1]){
	    		this.setState({checked:parseInt(4)});
	    	}
	    	else if(value[0] === false && this.state.checked === value[1]){
	    		this.setState({checked: parseInt(3)});
	    	}
	    	else if(value[0] === false){
	    		this.setState({checked:''});
	    	}
	    	else{
	    		this.setState({room4:[{adults: value[2], children: value[3]}]},() => {
    			});	    		
	    	}
	  	};

	  	let children = '';
	  	console.log('dog');
	  	console.log(this.state);
	  	if(this.state.checked === 2){
	  		children = 
	  			<gridWrap>
				    <Room1  fromChildToParentCallback={room1Value} />
					<Room2  fromChildToParentCallback={room2Value} check={true} />
					<Room3  fromChildToParentCallback={room3Value} check={false} />
					<Room4  fromChildToParentCallback={room4Value} check={false} /> 
				</gridWrap>
	  	}
	  	else if(this.state.checked === 3){
	  		children = 
	  			<gridWrap>
				    <Room1  fromChildToParentCallback={room1Value} />
					<Room2  fromChildToParentCallback={room2Value} check={true} />
					<Room3  fromChildToParentCallback={room3Value} check={true} />
					<Room4  fromChildToParentCallback={room4Value} check={false} /> 
				</gridWrap>
	  	}

	  	else if(this.state.checked === 4){
	  		children = 
	  			<gridWrap>
				    <Room1  fromChildToParentCallback={room1Value} />
					<Room2  fromChildToParentCallback={room2Value} check={true} />
					<Room3  fromChildToParentCallback={room3Value} check={true} />
					<Room4  fromChildToParentCallback={room4Value} check={true} /> 
				</gridWrap>
	  	}
	  	else{
	  		children =
	  			<gridWrap>
				    <Room1  fromChildToParentCallback={room1Value} />
					<Room2  fromChildToParentCallback={room2Value} check={false} />
					<Room3  fromChildToParentCallback={room3Value} check={false} />
					<Room4  fromChildToParentCallback={room4Value} check={false} /> 
				</gridWrap>
	  	}

	    return(
	    	<gridWrap>
	    		{children}
				<Submit type='button' onClick={() => this.storeStuff()}>Submit</Submit>
			</gridWrap>
		)
	} 

	storeStuff(){
		console.log('here');
		console.log(this.state);
		let status = this.state
		localStorage.setItem('submittedData', JSON.stringify(status));
	}

}

export default Parent;
