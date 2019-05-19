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
`;

const Box = styled.div`
	width: 150px;
`;

function getData(code, number){
	// let target = rooms[number];
	let checkBox = document.getElementById(code);

	// target.check=!target.check;

	let checkboxes = document.getElementsByTagName('input');
	let node = document.getElementsByName(code);
	// let s = document.getElementsByClassName(number);
    if (checkBox.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    } 
    else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }

    if(checkBox.checked) {
    	for (var i = 0; i < node.length; i++) {
    		console.log(node[i]);
    		node[i].disabled = false ;
        }
    } 
    else if(checkBox.checked===false) {
    	for (var i = 0; i < node.length; i++) {
    		console.log(node[i]);
    		node[i].disabled = true 
        }
    }
}


class Layout extends React.Component{

	state = {
		adults: 1,
		children: 0
	}

	render() {
		console.log(this.state);
		let select = '';

		if(this.props.room.code !== 'BAhvZrRwcfu'){
			select = <div>
				<input type='checkbox' id={this.props.room.code} onClick={getData.bind(null, this.props.room.code, this.props.number)}/>
				<p>Adults 18+</p>
				<select disabled name={this.props.room.code} onChange={e=>this.setState({adults: e.target.value})}>
					<option>1</option>
					<option>2</option>
				</select>
				<p>Children 0-17</p>
				<select disabled name={this.props.room.code} onChange={e=>this.setState({children: e.target.value})}>
					<option>0</option>
					<option>1</option>
					<option>2</option>
				</select>
			</div>
		}
		else{
			select = <div>
				<p>Adults 18+</p>
				<select className={this.props.number} onChange={e=>this.setState({adults: e.target.value})}>
					<option>1</option>
					<option>2</option>
				</select>
				<p>Children 0-17</p>
				<select className={this.props.number} onChange={e=>this.setState({children: e.target.value})}>
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