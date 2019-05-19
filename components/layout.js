import React from 'react';
import styled from 'styled-components';

import Select from './select.js';

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
	`
	const Box = styled.div`
		width: 150px;
	`;


class Layout extends React.Component{

	render() {

		let select = '';

		if(this.props.room.check === false){
			select = <div>
				<p>Adults 18+</p>
				<select disabled>
					<option>1</option>
					<option>2</option>
				</select>
				<p>Children 0-17</p>
				<select disabled>
					<option>0</option>
					<option>1</option>
					<option>2</option>
				</select>
			</div>
		}
		else{
			select = <div>
				<p>Adults 18+</p>
				<select>
					<option>1</option>
					<option>2</option>
				</select>
				<p>Children 0-17</p>
				<select>
					<option>0</option>
					<option>1</option>
					<option>2</option>
				</select>
			</div>
		}

		return (
			<Grid>
				<Box>
					{this.props.room.room}
					{select}
				</Box>
			</Grid>
		);
	}
}


export default Layout;