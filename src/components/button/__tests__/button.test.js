import React from 'react';
import ReactDOM from 'react-dom'
import Button from '../button'
import {isTSAnyKeyword} from '@babel/types'
import {render,cleanup} from '@testing-library/react'
import * as renderer from 'react-test-renderer'

beforeEach(()=>{
    console.log('before each test')
})

afterEach(()=>{
    cleanup()
});

beforeAll(()=>{
    console.log('before all tests')
})

afterAll(()=>{
    console.log("after all tests")
})

it('renders without crashing',()=>{
    const div=document.createElement("div");
    ReactDOM.render(<Button/>,div);
})

it('renders button',()=>{
    const {getByTestId}=render(<Button label="click me"/>);
    expect(getByTestId("button")).toHaveTextContent('click me');
})

it('renders button correctly',()=>{
    const {getByTestId}=render(<Button label="save"/>);
    expect(getByTestId("button")).toHaveTextContent('save');
})

it('matches snapshot',()=>{
    const tree=renderer.create(<Button label="click"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

