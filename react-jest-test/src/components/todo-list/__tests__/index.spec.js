import React from 'react';
import { shallow, render, mount} from 'enzyme';
import { TodoList } from "../index";

const props = {
  list: ['first', 'second'],
  deleteTodo: jest.fn(),
};

const setup = () => {
  const wrapper = shallow(<TodoList {...props} />);
  return {
    props,
    wrapper,
  };
};

const setupByRender = () => {
  const wrapper = render(<TodoList {...props} />);
  return {
    props,
    wrapper,
  };
};

const setupByMount = () => {
  const wrapper = mount(<TodoList {...props} />);
  return {
    props,
    wrapper,
  };
};

describe("todo-list", () => {

  it('renders correctly', () => {
    const wrapper = shallow(<TodoList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should has Button', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Button').length).toBe(2);
  });

  it('should render 2 item', () => {
    const { wrapper } = setupByRender();
    expect(wrapper.find('button').length).toBe(2);
  });

  it('should render item equal', () => {
    const { wrapper } = setupByMount();
    wrapper.find('.item-text').forEach((node, index) => {
      expect(node.text()).toBe(wrapper.props().list[index])
    });
  });

  it('click item to be done', () => {
    const { wrapper } = setupByMount();
    wrapper.find('Button').at(0).simulate('click');
    expect(props.deleteTodo).toBeCalled();
  });

  //使用spy替身的时候，在测试用例结束后，要对spy进行restore，不然这个spy会一直存在，并且无法对相同的方法再次进行spy。
  it('calls componentDidMount', () => {
    const componentDidMountSpy = jest.spyOn(TodoList.prototype, 'componentDidMount');
    const { wrapper } = setup();
    expect(componentDidMountSpy).toHaveBeenCalled();
    componentDidMountSpy.mockRestore();
  });

  it('calls component handleTest', () => { // class中使用箭头函数来定义方法
    const { wrapper } = setup();
    const spyFunction = jest.spyOn(wrapper.instance(), 'handleTest');
    wrapper.instance().handleTest();
    expect(spyFunction).toHaveBeenCalled();
    spyFunction.mockRestore();
  });

  it('calls component handleTest2', () => { //在constructor使用bind来定义方法
    const spyFunction = jest.spyOn(TodoList.prototype, 'handleTest2');
    const { wrapper } = setup();
    wrapper.instance().handleTest2();
    expect(spyFunction).toHaveBeenCalled();
    spyFunction.mockRestore();
  });

  it('test sum', () => {
    const { wrapper } = setup();
    expect(wrapper.instance().sum(2,3)).toEqual(5);
  });

});
