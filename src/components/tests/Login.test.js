import React from 'react'
import {render,shallow,mount} from '../../enzyme'

import Login from '../Login'

describe('login form',()=>{
    it('render form',()=>{
        const wrapper=shallow(<Login/>)

        expect(wrapper.find('form.login').exists()).toBe(true)
        expect(wrapper.find('#email').length).toBe(1)
        expect(wrapper.find('#password').length).toBe(1)
        expect(wrapper.find('select').childAt(0).type()).toEqual('option');
    })

    it('email test',()=>{
        const wrapper=shallow(<Login/>)

        wrapper.find('#email').simulate('change',
        {
            target:{name:'email',value:'sanjana@gmail.com'}
        })
        expect(wrapper.state().username).toBe('sanjana@gmail.com')
    })

    it('password test',()=>{
        const wrapper=mount(<Login/>)

        wrapper.find('#password').simulate('change',{
            target:{name:'password',value:'1234'}
        })
        expect(wrapper.state().password).toBe('1234')
    })
    it('color test',()=>{
        const wrapper=shallow(<Login/>)

        expect(wrapper.state().color).toBe('RED')

        wrapper.find('#color').simulate('blur',{
            target:{name:'color',value:'GREEN'}
        })
        expect(wrapper.state('color')).toBe('GREEN')
    })
    it('reset test',()=>{
        const wrapper=shallow(<Login/>)

        wrapper.find('button').simulate('click')

        expect(wrapper.state().username).toBe("")
    })
})