import React from 'react';
import styled from 'styled-components';

const GridItem = styled.div`
	position: relative;
	display: inline-block;
  	}
`;

const Item = styled.div`	
	position: relative;
	display: flex;
	flex-basis: calc(15% - 4rem);
	flex-grow: 1;
	flex-shrink: 0;
	margin: 0 auto;
	background: white;
	padding-bottom: 11px;
	padding-left: 11px;
	padding-right: 11px;
	padding-top: 11px
`;


const ItemWrap = styled.div`	
	margin-left: 7px;
	padding-top: 3px;
	padding-bottom: 3px;
	padding-left: 3px;
	padding-right: 3px;
	background: #EAEAEA;
	max-width: 180px;
	max-height: 200px
	border-radius: 5px;
`;

const Box = styled.div`
	position: relative;
	display: inline-block;
`;

const Slot = styled.div`
	margin: 7px
`;
const Heading = styled.span`
	font-weight: bold;
	font-size: 15px;
	margin-left: 5px;
`;
const P = styled.p`
	margin: 1px 0;
	font-size: 12px;
`;

class Room1 extends React.Component{

	state = {
		room: 1,
		adults: 1,
		children: 0,
		check: false
	}

	render() {
		let select = '';

		select = 
			<ItemWrap>
				<Heading>Room {this.state.room}</Heading>
				<Item>
					<Slot>
						<P>Adults</P> 
						<P>(18+)</P>
						<Select onChange={e=>this.setState({adults: parseInt(e.target.value)}, function () {
							this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
	        			})}>
							<option>{1}</option>
							<option>{2}</option>
						</Select>
					</Slot>
					<Slot>
						<P>Children</P>
						<P>(0-17)</P>
						<Select onChange={e=>this.setState({children: parseInt(e.target.value)}, function () {
							this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
	        			})}>
							<option>{0}</option>
							<option>{1}</option>
							<option>{2}</option>
						</Select>
					</Slot>
				</Item>
			</ItemWrap>

		return (
			<GridItem>
				<Box>
					{select}
				</Box>
			</GridItem>
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