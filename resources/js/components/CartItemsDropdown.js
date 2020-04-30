import React from "react";
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartAction';

// render cart items iteratively
const CartItemsDropdown = (props) => {
    return (
        <ul className="dropdown-menu" style={{left: '50%', transform: 'translateX(-50%)', border: '1px solid orange'}}>
            {props.items.map(item => (
                <li key={item.id} className="dropdown-item">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                            <th className=""
                                toggle={`#tbody-${item.id}`}>
                                {item.name}
                            </th>
                            <th>
                                ({item.count})
                            </th>                                      
                            </tr>    
                        </thead>
                        <tbody
                            id={`tbody-${item.id}`}>
                            <tr>
                                <td>size</td>
                                <td>{item.size}</td>
                            </tr>
                            <tr>
                                <td>color</td>
                                <td>{item.color}</td>
                            </tr>
                            <tr>
                                <td>price</td>
                                <td>{item.price}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td onClick={() => props.removeFromCart(item, props.items)} className="d-flex align-items-center justify-content-around">
                                    <i className="fa fa-trash">
                                    </i>
                                        Remove
                                </td>
                                <td>
                                    {(item.count * item.price).toLocaleString(
                                        'en-KE', {
                                        style: 'currency',
                                        currency: 'KES'
                                    })}
                                </td>
                            </tr>
                        </tfoot>

                    </table>
                </li>)
            )}
            <span className="float-right mr-5 font-weight-bold">
                {props.total.toLocaleString('en-KE', {
                    style: 'currency',
                    currency: 'KES'
                })}
            </span>
        </ul>
    )
}

const mapDispatchToProps = {
    removeFromCart
}

export default connect( null, mapDispatchToProps ) (CartItemsDropdown)