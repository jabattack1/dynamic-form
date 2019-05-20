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

class Room1 extends React.Component{

	state = {
		room:1,
		adults:1,
		children:0,
		check: false
	}

	render() {
		let select = '';

		select = 
			<div>
				<p>Adults 18+</p>
					<select onChange={e=>this.setState({adults: e.target.value})}>
						<option>1</option>
						<option>2</option>
					</select>
				<p>Children 0-17</p>
					<select onChange={e=>this.setState({children: e.target.value})}>
						<option>0</option>
						<option>1</option>
						<option>2</option>
					</select>
			</div>
		
		return (
			<Grid>
				<Box>
					{this.state.room}
					{select}
				</Box>
			</Grid>
		);
	}

	componentDidMount(){
		this.getStuff();
	}

	getStuff(){
		this.setState({check: !this.state.check}, function () {
			this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        });
	}

}


export default Room1;