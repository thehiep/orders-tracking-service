import React from 'react';
import classes from './OrderItem.module.css';

const OrderItem = (props) => {
    return <li>
        <div>
            <h1>ID:{props.id}</h1>
            <p>Status: {props.status}</p>
        </div>
    </li>
}

export default OrderItem;