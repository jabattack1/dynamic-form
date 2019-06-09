import React from 'react';
import styled from 'styled-components';

import Room1 from '../components/room1.js';
import Room2 from '../components/room2.js';
import Room3 from '../components/room3.js';
import Room4 from '../components/room4.js';

const gridWrap = styled.div`
	width: calc(100%);
`;


const Submit = styled.button`
	position: relative;
	display: flex;
	margin-top: 10px;
	margin-left: 10px;
`;

const Clear = styled.button`
	position: relative;
	display: flex;
	margin-top: 30px;
	margin-left: 10px;
`;


class Parent extends React.Component {

	constructor(props){

	    super(props)
	    if(this.props.peter !== null){;
			let initial = this.props.peter;
			this.state = {
				checked: initial.checked,
				adults1: initial.adults1,
				children1: initial.children1,
				adults2: initial.adults2,
				children2: initial.children2,
				adults3: initial.adults3,
				children3: initial.children3,
				adults4: initial.adults4,
				children4: initial.children4
			}
		}
		else{
			this.state = {
				checked: '',
				adults1: 1,
				children1: 0,
				adults2: 1,
				children2: 0,
				adults3: 1,
				children3: 0,
				adults4: 1,
				children4: 0
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

	  	if(this.props.peter !== null){

	  		let chips = this.props.peter;
	  		console.log(this.state.checked);

	  		if(this.state.checked === 2){
	  		children = 
	  			<gridWrap>
				    <Room1  fromChildToParentCallback={room1Value} data={chips} />
					<Room2  fromChildToParentCallback={room2Value} data={chips} check={true} />
					<Room3  fromChildToParentCallback={room3Value} data={chips} check={false} />
					<Room4  fromChildToParentCallback={room4Value} data={chips} check={false} /> 
				</gridWrap>
	  	}
	  	else if(this.state.checked === 3){
	  		children = 
	  			<gridWrap>
				    <Room1  fromChildToParentCallback={room1Value} data={chips} />
					<Room2  fromChildToParentCallback={room2Value} data={chips} check={true} />
					<Room3  fromChildToParentCallback={room3Value} data={chips} check={true} />
					<Room4  fromChildToParentCallback={room4Value} data={chips} check={false} /> 
				</gridWrap>
	  	}

	  	else if(this.state.checked === 4){
	  		children = 
	  			<gridWrap>
				    <Room1  fromChildToParentCallback={room1Value} data={chips} />
					<Room2  fromChildToParentCallback={room2Value} data={chips} check={true} />
					<Room3  fromChildToParentCallback={room3Value} data={chips} check={true} />
					<Room4  fromChildToParentCallback={room4Value} data={chips} check={true} /> 
				</gridWrap>
	  	}
	  	else{
	  		children =
	  			<gridWrap>
				    <Room1  fromChildToParentCallback={room1Value} data={chips} />
					<Room2  fromChildToParentCallback={room2Value} data={chips} check={false} />
					<Room3  fromChildToParentCallback={room3Value} data={chips} check={false} />
					<Room4  fromChildToParentCallback={room4Value} data={chips} check={false} /> 
				</gridWrap>
	  	}
		}
		else{
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
		}


	    return(
	    	<gridWrap>
	    		{children}
				<Submit type='button' onClick={() => this.storeStuff()}>Submit</Submit>
				<Clear type='button' onClick={() => this.eraseStuff()}>Clear</Clear>
			</gridWrap>
		)
	} 

	storeStuff(){
		let status = this.state
		localStorage.setItem('submittedData', JSON.stringify(status));
	}

	eraseStuff(){
		localStorage.clear();
	}

}

export default Parent;
