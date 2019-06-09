import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Index from '../pages/index.js'



const renderer = new ShallowRenderer();
renderer.render(<Index />);
const result = renderer.getRenderOutput();

expect(result.type).toBe('div');
