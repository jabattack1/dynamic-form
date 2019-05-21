import React from 'react';
import styled from 'styled-components';

import Parent from '../components/parent.js';
import Room1 from '../components/room1.js';
import Room2 from '../components/room2.js';
import Room3 from '../components/room3.js';
import Room4 from '../components/room4.js';

import parsedData from '../data/rooms.js';

const Wrap = styled.div`
	display: flex;
  	flex-wrap: wrap;
  	max-width: 1200px;
  	margin: 0 auto;
`


class Index extends React.Component {

  // static async getInitialProps () {
  // 	data = await Component.getInitialProps(parsedData);
  // 	return data;
  // }



  render (props) {
    return(
    	<Wrap>
			<Parent />
		</Wrap>
    )
  }

}

export default Index;