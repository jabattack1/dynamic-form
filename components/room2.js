import React from 'react';
import styled from 'styled-components';

const GridItem = styled.div`
	position: relative;
	display:inline-block;
	margin-left:7px;
	padding-top:10px;
	padding-bottom:3px;
	padding-left: 3px;
	padding-right: 3px;
	background: #e2e2e2;
	max-width:180px;
	max-height:200px
	border-radius: 5px;
`;

const Item = styled.div`	
	position: relative;
	display: flex;
	flex-basis:calc(15% - 4rem);
	flex-grow: 1;
	flex-shrink: 0;
	margin: 0 auto;
	background: white;
	padding-bottom:11px;
	padding-left:11px;
	padding-right:11px;
`;

const Box = styled.div`
	position:relative;
	display: inline-block;
`;

const Slot = styled.div`
	margin:7px
`
const Heading2 = styled.span`
	font-weight:bold;
	font-size:15px;
	margin-left:20px;
`
const Lab = styled.label`
	position:absolute;
	top:-19px;
	left:0px;
`
const P = styled.p`
	margin:1px 0;
	font-size:12px;
`

const Select = styled.select`

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
			<Item>
					<Lab><input type='checkbox' onClick={() => this.getStuff()} checked/></Lab>
				<Slot>
					<P>Adults</P>
					<P>(18+)</P>
					<select onChange={e=>this.setState({adults: parseInt(e.target.value)}, function () {
						this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        			})}>
						<option>{1}</option>
						<option>{2}</option>
					</select>
				</Slot>
				<Slot>
					<P>Children</P>
					<P>(0-17)</P>
					<select onChange={e=>this.setState({children: parseInt(e.target.value)}, function () {
						this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        			})}>
						<option>{0}</option>
						<option>{1}</option>
						<option>{2}</option>
					</select>
				</Slot>
			</Item>
		}
		else{
			select = 
			<Item>
					<Lab><input type='checkbox' onClick={() => this.getStuff()} /></Lab>
				<Slot>
					<P>Adults</P>
					<P>(18+)</P>
					<select disabled>
						<option>{1}</option>
						<option>{2}</option>
					</select>
				</Slot>
				<Slot>	
					<P>Children</P>
					<P>(0-17)</P>
					<select disabled>
						<option>{0}</option>
						<option>{1}</option>
						<option>{2}</option>
					</select>
				</Slot>	
			</Item>
		}
		
		return (
			<GridItem>
				<Box>
					<Heading2>Room {this.state.room}</Heading2>
					{select}
				</Box>
			</GridItem>
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