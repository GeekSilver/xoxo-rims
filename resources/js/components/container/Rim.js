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
            className="card col-md-4 offset-md-4 mt-1"
            >
                <img
                src={rim.image}
                alt="image of the rim"
                className="card-img-top mt-1"
                style={{
                    display:"block",
                    maxWidth:"100%",
                    width: "auto",
                    margin: "auto"}}
                />
                <div 
                className="card-body">
                    <h5 
                    className="card-title font-weight-bolder">
                        {rim.name}
                    </h5>
                    <div
                    className="card-text">
                        <p><span className="font-weight-bold">Price: </span>{Number(rim.price).toLocaleString('en-KE', { style: 'currency', currency: 'KES' })}</p>
                        <p><span className="font-weight-bold">Size: </span>{rim.size}</p>
                        <p><span className="font-weight-bold">Color:  </span>{rim.color}</p>
                    </div>

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
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Rim);