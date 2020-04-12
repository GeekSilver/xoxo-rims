import React from "react";

// render cart items iteratively
const CartItemsDropdown = (props) => {
    return (
        <ul className="dropdown-menu">
            {props.items.map(item => (
                <li key={item.id} className="dropdown-item">
                        <table className="table">
                            <th className="table"
                             toggle={`#tbody-${item.id}`}>
                                {item.name}
                            </th>
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

                        </table>
                </li>)
                    )}   
            <span className="float-right">
                {props.total.toLocaleString('en-KE',{
                    style:'currency',
                    currency:'KES'
                })}
            </span>                          
        </ul>
        )      
}

export default CartItemsDropdown;