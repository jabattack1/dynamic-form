import React from 'react';
import ReactDOM from 'react-dom'

import Parent from './components/parent.js';

import Enzyme, { shallow } from 'enzyme';
import {configure} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const data = {
	checked: '',
	adults1: 1,
	children1: 0,
	adults2: 1,
	children2: 0,
	adults3: 1,
	children3: 0,
	adults4: 1,
	children4: 0
}

// in your test:
const renderer = new ShallowRenderer();
renderer.render(<Parent Peter={data} />);
const result = renderer.getRenderOutput();

expect(result.type).toBe('div');
expect(result.props.children).toEqual([
	{children},
	<Submit type='button' onClick={() => this.storeStuff()}>Submit</Submit>,
	<Clear type='button' onClick={() => this.eraseStuff()}>Clear</Clear>
]);

// describe('AddToOrder component', () => {
//   it('should be handling checkboxChecked', () => {
//     const wrapper = shallow(<Parent Peter={data} />);
//     expect(wrapper.checkBoxChecked()).equals(true); //error appears here
//   });
// });
