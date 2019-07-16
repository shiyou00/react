import React from 'react';
import { mount } from 'enzyme';

import H2 from 'components/H2';

describe('H2 component', function () {
  it('should render with no errors', function () {
    const wrapper = mount(<H2>Hello world!</H2>);
  });

  it('should contains .h2', function () {
    const wrapper = mount(<H2>Hello world!</H2>);
    expect(wrapper.contains('<h2 class="h2">Hello world!</h2>'));
  });
});