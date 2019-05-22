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

	    if(this.props.peter !== null){
			
			this.state = {
				checked: this.props.peter.checked,
				adults1: this.props.peter.adults1,
				children1: this.props.peter.children1,
				adults2: this.props.peter.adults2,
				children2: this.props.peter.children2,
				adults3: this.props.peter.adults3,
				children3: this.props.peter.children3,
				adults4: this.props.peter.adults4,
				children4: this.props.peter.children4
			}
		}
		else{
			console.log('not');
			this.state = {
				checked: '',
				adults1: '',
				children1: '',
				adults2: '',
				children2: '',
				adults3: '',
				children3: '',
				adults4: '',
				children4: ''
			}
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
	    		this.setState({adults1: value[2], children1: value[3]},() => {
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
	    		this.setState({adults2: value[2], children2: value[3]},() => {
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
	    		this.setState({adults3: value[2], children3: value[3]},() => {
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
	    		this.setState({adults4: value[2], children4: value[3]},() => {
    			});	    		
	    	}
	  	};

	  	let children = '';

	  	if(this.state.checked === 2){
	  		children = 
	  			<gridWrap>
				    <Room1  fromChildToParentCallback={room1Value} data={this} />
					<Room2  fromChildToParentCallback={room2Value} data={this} check={true} />
					<Room3  fromChildToParentCallback={room3Value} data={this} check={false} />
					<Room4  fromChildToParentCallback={room4Value} data={this} check={false} /> 
				</gridWrap>
	  	}
	  	else if(this.state.checked === 3){
	  		children = 
	  			<gridWrap>
				    <Room1  fromChildToParentCallback={room1Value} data={this} />
					<Room2  fromChildToParentCallback={room2Value} data={this} check={true} />
					<Room3  fromChildToParentCallback={room3Value} data={this} check={true} />
					<Room4  fromChildToParentCallback={room4Value} data={this} check={false} /> 
				</gridWrap>
	  	}

	  	else if(this.state.checked === 4){
	  		children = 
	  			<gridWrap>
				    <Room1  fromChildToParentCallback={room1Value} data={this} />
					<Room2  fromChildToParentCallback={room2Value} data={this} check={true} />
					<Room3  fromChildToParentCallback={room3Value} data={this} check={true} />
					<Room4  fromChildToParentCallback={room4Value} data={this} check={true} /> 
				</gridWrap>
	  	}
	  	else{
	  		children =
	  			<gridWrap>
				    <Room1  fromChildToParentCallback={room1Value} data={this} />
					<Room2  fromChildToParentCallback={room2Value} data={this} check={false} />
					<Room3  fromChildToParentCallback={room3Value} data={this} check={false} />
					<Room4  fromChildToParentCallback={room4Value} data={this} check={false} /> 
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
		let status = this.state
		localStorage.setItem('submittedData', JSON.stringify(status));
	}

}

export default Parent;
