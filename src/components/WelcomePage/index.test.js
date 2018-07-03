import renderer from 'react-test-renderer';
import React from 'react';
import Welcome from './index';


it('renders without crashing', () => {
  const rendered = renderer.create(<Welcome />).toJSON();
  expect(rendered).toBeTruthy();
});
