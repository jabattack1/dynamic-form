import Head from 'next/head';
import Link from 'next/link';

import styled from 'styled-components';

const Sandwich = styled.div`
	background: black;
	  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const Sand = styled.div`
  	margin: 0 auto;
	display: flex;
  	flex-wrap: wrap;
  	width: 650px;
  	display: table-cell;
  	vertical-align: middle;
  	margin-left: auto;
  	margin-right: auto;
  	background: white;
`

const Top = styled.div`
  	margin: 0 auto;
  	text-align:center;
  	display:block;
  	font-family:'verdana';
	font-size:90px;
	color: white;
	display: table-cell;
  	vertical-align: middle;
`


const Layout = (props) => (
	<div>
	<Head>
		<title>Hotel App</title>
		<link rel='icon' type='image/png' href='https://i.imgur.com/f0vIMQs.png' />

	</Head>

		<Sandwich>
			<Top>HOTEL APP</Top>
			<Sand>
				{props.children}
			</Sand>
		</Sandwich>

	</div>
);

export default Layout;