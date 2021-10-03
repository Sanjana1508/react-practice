import React from 'react'
import PropTypes from 'prop-types'
import OrderedListItem from './OrderedListItem'

function OrderedList(props) {
    const {options} = props
    if(!options.length){
        return <span className="empty">No options</span>
    }
    console.log(options.length)
    return (
        <ol className="options">
           {
               options.map(option=><OrderedListItem key={option} value={option}/>)
           }
        </ol>
    )
}

OrderedList.propTypes={
    option:PropTypes.array
}

OrderedList.defaultProps={
    options:[]
}

export default OrderedList
