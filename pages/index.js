import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';

import Parent from '../components/parent.js';
import Room1 from '../components/room1.js';
import Room2 from '../components/room2.js';
import Room3 from '../components/room3.js';
import Room4 from '../components/room4.js';
import Layout from '../components/layout.js';

import parsedData from '../data/rooms.js';


class Index extends React.Component {

  componentDidMount() {
    this.data = parsedData;
  }

  render () {
      return(
        <Layout> 
          <Parent peter={parsedData} />
        </Layout> 
      )
   }
}

export default Index;