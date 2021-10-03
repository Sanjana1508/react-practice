import React from 'react'
import PropTypes from 'prop-types'


function OrderedListItem(props) {
    const {value}=props
    return (
        <li className="value">
            {value}
        </li>
    )
}

OrderedListItem.propTypes={
    value:PropTypes.string
}

export default OrderedListItem
