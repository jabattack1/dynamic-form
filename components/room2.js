import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
	display:inline-block;
	flex-basis:calc(15% - 4rem);
	flex-grow: 1;
	flex-shrink: 0;
	margin: 0 2rem 2rem 2rem;
	padding: 2rem;
	border: 2px solid black;
	background: #e2e2e2;
	box-shadow: 0 0 0 5px rgba(0,0,0,0.03);
	position: relative;
	max-width:200px;
`;

const Box = styled.div`
	width: 150px;
`;


class Room2 extends React.Component{

	constructor(props) {

	  	super(props);

	  	this.state = {
	    	check: this.props.check,
			room: 2,
	    	adults: this.state.adults || 0,
			children: this.state.children || 0
	  	};
	}

	state = {
	}


	render() {
		
		let select = '';

		if(this.state.check===true){
			select = 
			<div>
				<label><input type='checkbox' onClick={() => this.getStuff()} checked/></label>
				<p>Adults 18+</p>
					<select onChange={e=>this.setState({adults: parseInt(e.target.value)}, function () {
			this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        })}>
						<option>{1}</option>
						<option>{2}</option>
					</select>
				<p>Children 0-17</p>
					<select onChange={e=>this.setState({children: parseInt(e.target.value)}, function () {
			this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        })}>
						<option>{0}</option>
						<option>{1}</option>
						<option>{2}</option>
					</select>
			</div>
		}
		else{
			select = 
			<div>
				<label><input type='checkbox' onClick={() => this.getStuff()} /></label>
				<p>Adults 18+</p>
					<select disabled>
						<option>{1}</option>
						<option>{2}</option>
					</select>
				<p>Children 0-17</p>
					<select disabled>
						<option>{0}</option>
						<option>{1}</option>
						<option>{2}</option>
					</select>
					
			</div>
		}
		
		return (
			<Grid>
				<Box>
					{this.state.room}
					{select}
				</Box>
			</Grid>
		);
	}

	componentWillReceiveProps(nextProps) {
  		if(this.props != nextProps) {
    		this.setState({check: nextProps.check, adults: this.state.adults, children: this.state.children});
  		}
	}

	getStuff(){
		this.setState({check: !this.state.check, adults: this.state.adults || 1, children:this.state.children}, function () {
			this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        });
	}

}



export default Room2;