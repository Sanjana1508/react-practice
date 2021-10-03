import {render,screen,cleanup} from '@testing-library/react'
import Todo from '../Todo'
import * as renderer from 'react-test-renderer'
afterEach(()=>{
    cleanup();
})

test('should render non-completed todo',()=>{
    const todo={ id:1,title:'Buy milk',completed:false }
    render(<Todo todo={todo}/>)
    const todoElement=screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Buy milk');
    expect(todoElement).not.toContainHTML('<strike>');
})

test('should render completed todo',()=>{
    const todo={ id:2,title:'Buy coffee',completed:true }
    render(<Todo todo={todo}/>)
    const todoElement=screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Buy coffee');
   
})

test('matches snapshot',()=>{
    const todo={ id:1,title:'Buy milk',completed:false }
    const tree=renderer.create(<Todo todo={todo}/>).toJSON();
    expect(tree).toMatchSnapshot();
})