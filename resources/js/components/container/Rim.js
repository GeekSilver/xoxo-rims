import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getOneRimAction } from '../../actions/rimAction';
import { addToCart } from '../../actions/cartAction';

class Rim extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getOneRimAction(this.props.match.params.id);
    }
    

    getRim (rim = {}) {
        return (
            <div 
            className="card col-md-4 offset-md-4"
            >
                <img
                src={`storage/${rim.image}`}
                alt="image of the rim"
                className="card-img-top"
                style={{
                    display:"block",
                    maxWidth:"100%",
                    width: "auto",
                    margin: "auto"}}
                />
                <div 
                className="card-body">
                    <h5 
                    className="card-title">
                        {rim.name}
                    </h5>
                    <p
                    className="card-text">
                        Price: {Number(rim.price).toLocaleString('en-KE', { style: 'currency', currency: 'KES' })}
                        Size: {rim.size}
                        Color: {rim.color}
                    </p>

                    <a 
                    href="#"
                    className="btn btn-primary"
                    onClick={() => this.props.addToCart(rim,this.props.cart)}
                    >
                        Add to Cart
                    </a>

                </div>
                
            </div>
        );  
    }

    render () {
        return this.getRim(this.props.rim);
        }
} 

const mapStateToProps = (state) => {
    return {
      rim: state.getRimsReducer.rim,
      cart: state.cartReducer.cart,
    }
};

const mapDispatchToProps = {
    getOneRimAction,
    addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Rim);