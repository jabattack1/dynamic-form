import React from 'react';
import styled from 'styled-components';

import Parent from '../components/parent.js';

import rooms from '../data/rooms.js';

const Wrap = styled.div`
	display: flex;
  	flex-wrap: wrap;
  	max-width: 1200px;
  	margin: 0 auto;
`
const Index = (props) => (
	<Wrap>
		<Parent {...props} />
	</Wrap>

);


Index.getInitialProps = async function() {

	const data= {
		rooms
	};

	return data
}

export default Index;