import classes from './OrderItemDetail.module.css';

const orderItemDetail = (props) => {
    return (<div classes='order-item-detail'>
        <p>name: {props.name}</p>
        <p>price: {props.price}</p>
    </div>)
}


export default orderItemDetail;