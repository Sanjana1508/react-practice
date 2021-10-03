import React from 'react'
import {render,shallow,mount} from '../../enzyme'

import OrderedList from '../OrderedList'

describe('rendering types',()=>{
    it('render',()=>{
        const list=['React','Jest','Enzyme']
        const wrapper=render(<OrderedList options={list}/>)

        expect(wrapper.find('.options')).toBeDefined();
        expect(wrapper.find('.value')).toHaveLength(list.length);
        expect(wrapper.find('.value').parent().is('ol')).toBe(true)
    })

    it('shallow',()=>{
        const list=[];
        const wrapper=shallow(<OrderedList options={list}/>)

        expect(wrapper.find('.empty').exists()).toBe(true)
    })
    it('mount',()=>{
        const list=['React','Jest','Enzyme']
        const wrapper=mount(<OrderedList options={list}/>)

        expect(wrapper.contains(<li key='React' className="value">React</li>)).toBeTruthy()
        expect(wrapper.find('.value').get(0).props.children).toEqual('React')
        expect(wrapper.find('.value').last().props().children).toEqual('Enzyme')

    })
})