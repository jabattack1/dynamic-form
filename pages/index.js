import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

import rooms from '../data/rooms.js';


const Wrap = styled.div`
	display: flex;
  	flex-wrap: wrap;
  	max-width: 1200px;
  	margin: 0 auto;
`
const Index = (props) => (

	<Wrap>
		{props.rooms.map((room, i) => <Layout {...props} key={i} number={i} room={room} />)}
	</Wrap>

);


Index.getInitialProps = async function() {

	const data= {
		rooms
	};

	return data
}

export default Index;