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

	constructor(props) {

	  	super(props);

	  	if(this.props.data !== undefined){
		  	this.state = {
				room: 1,
		    	adults: this.props.data.adults1,
				children: this.props.data.children1
		  	};
		}
		else{	
		console.log('tot1');		
			this.state = {
				room: 1,
			    adults: 1,
				children: 0
			};
		}
	}

	state = {
	}

	render() {
		
		let select = '';
		let optionsAdults = '';
		let optionsChildren = '';

		
		if(this.props.data !== undefined){
			if(this.props.data.adults1 === 2){
				console.log('game');
				optionsAdults=
					<React.Fragment>
					<option>{1}</option>
					<option selected>{2}</option>
					</React.Fragment>
			}
			else{
				optionsAdults=
					<React.Fragment>
					<option selected>{1}</option>
					<option>{2}</option>
					</React.Fragment>
			}

			if(this.props.data.children1 === 0){
				optionsChildren =
					<React.Fragment>
					<option selected>{0}</option>
					<option>{1}</option>
					<option>{2}</option>
					</React.Fragment>
			}
			else if(this.props.data.children1 === 1){
				optionsChildren =
					<React.Fragment>
					<option>{0}</option>
					<option selected>{1}</option>
					<option>{2}</option>
					</React.Fragment>
			}
			else if(this.props.data.children1 === 2){
				optionsChildren =
					<React.Fragment>
					<option>{0}</option>
					<option>{1}</option>
					<option selected>{2}</option>
					</React.Fragment>
			}
			else{
				optionsChildren =
					<React.Fragment>
					<option>{0}</option>
					<option>{1}</option>
					<option>{2}</option>
					</React.Fragment>
			}
		}	
		else{
			console.log('molly');
				optionsAdults =
					<React.Fragment>
					<option>{1}</option>
					<option>{2}</option>
					</React.Fragment>

				optionsChildren =
					<React.Fragment>
					<option>{0}</option>
					<option>{1}</option>
					<option>{2}</option>
					</React.Fragment>
		}

			select = 
				<ItemWrap>
					<Heading>Room {this.state.room}</Heading>
						<Item>
							<Slot>
								<P>Adults</P>
								<P>(18+)</P>
								<div>
								<select id='selection' onChange={e=>this.setState({adults: parseInt(e.target.value)}, function () {this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
								})}>
								{optionsAdults}
								</select>
								</div>
							</Slot>
							<Slot>
								<P>Children</P>
								<P>(0-17)</P>
								<select onChange={e=>this.setState({children: parseInt(e.target.value)}, function () {
										this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
				        		})}>
								{optionsChildren}
								</select>
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

	componentWillReceiveProps(nextProps) {
  		if(this.props != nextProps) {
  			if(this.props.data!==undefined){
    			this.setState({check: nextProps.check, adults: this.props.data.adults1, children: this.props.data.children1});
    		}
    		else{
    			this.setState({check: nextProps.check, adults: this.state.adults, children: this.state.children});
    		}
  		}
	}

	getStuff(){
		this.setState({check: !this.state.check, adults: this.state.adults || 1, children:this.state.children}, function () {
			if(this.props.data!==undefined){
				console.log('titan');
				this.props.fromChildToParentCallback([this.state.check, this.state.room, this.props.data.adults1, this.props.data.children1]);
			}
			else{
				console.log('eh');
				this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
			}
        });
	}

}


export default Room1;