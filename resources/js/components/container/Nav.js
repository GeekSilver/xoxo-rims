import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartItemsDropdown from '../CartItemsDropdown';
import {
    filterAsc,
    filterDesc,
    filterByValue,
    getAllRimsAction,
    } from '../../actions/rimAction';



class Nav extends Component {

    constructor(props){
        super(props)
        this.showSliderVal = this.showSliderVal.bind(this);
        this.cartTotal = this.cartTotal.bind(this);
        
    }

    /**
     * 
     * @param {*the id of the current slider[price,size]} id 
     * @param {*the attribute of rim which the slider tweaks[price,size]} attr 
     */ 
    showSliderVal (id,attr) {
        //selecting the appropriate slider and slider span to output slider value
        const slider =  document.querySelector(`#${id}`);
        const output = document.querySelector(`#${id}-value`); 
        //val variable to hold the value of slider
        let val;
        //determing the type of slider and updating appropriate span with slider value
        if(attr === "price"){
            output.innerHTML = Number(slider.value).toLocaleString('en-KE',{
                style:'currency',
                currency:'KES'
            }); 
            //get the value of size slider
            val = document.querySelector('#size-slider').value;
        }
        else if(attr === "size") {
            output.innerHTML = `${slider.value}"`;
            //get the value of price slider
            val = document.querySelector('#price-slider').value;
            
        }

        //calling redux action filterByValue to filter rims by both (price & size) sliders
        /**
         * @var sliderValue (the value of the active slider [price, size])
         * @var rimHistory (all rims obtained in GET_ALL action)
         * @var attr (the rim attribute to use to filter [size or price])
         * @var val (the value of the other slider apart from the parent slider to the attribute[price,size])
         */
        this.props.filterByValue(slider.value,this.props.rimsHist,attr,val);
    }

    // calculate cart total
    cartTotal(items){
        let total = 0;
        items.forEach(item => {
            total += parseInt(item.price); 
        })
        return total;
    }




    render () {
        return (
    <div className="navbar navbar-expand-lg navbar-light bg-primary">
        <Link className="navbar-brand" to="/">
            Rim
        </Link>
        <button 
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#options"
        type="button"
        aria-controls="options"
        aria-expanded="false"
        aria-label="Toggle Navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button> 

        <div className="collapse navbar-collapse" id="options">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a  
                    className="nav-link"
                    onClick={() => this.props.getAllRimsAction()}>
                    Refresh
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a 
                    className="nav-link dropdown-toggle"
                    id="dropdown-filter"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">
                        Filter
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdown-filter">
                        <p
                        className="dropdown-item"
                        >
                            by Price
                        <span
                        onClick={() => this.props.filterAsc(this.props.rims,"price")}
                        >
                             &#x25B2;
                        </span>

                        <span
                        onClick={() => this.props.filterDesc(this.props.rims,"price")}
                        >
                            &#x25BC;
                        </span>
                        <br/>
                        <input
                        type="range"
                        min="3000"
                        max="30000"
                        step="500"
                        defaultValue="6000"
                        id="price-slider"
                        key="price-slider"
                        onChange={() => this.showSliderVal("price-slider","price")}
                        />
                        <span
                        id="price-slider-value"
                        style={{
                            marginLeft:"12px"
                        }}>
                        </span>
                        </p>
                        <div 
                        className="dropdown-divider"
                        ></div>
                        <p
                        className="dropdown-item"
                        >
                        <span
                        onClick={() => this.props.filterAsc(this.props.rims,"size")}
                        >
                            by Size &#x25B2;
                        </span>
                        <span
                        onClick={() => this.props.filterDesc(this.props.rims,"size")}
                        >
                             &#x25BC;
                        </span>
                        <br/>
                        <input
                        type="range"
                        min="14"
                        max="20"
                        defaultValue="17"
                        step="1"
                        id="size-slider"
                        key="size-slider"
                        onChange={() => this.showSliderVal("size-slider","size")}
                        />
                        <span
                        id="size-slider-value"
                        style={{
                            marginLeft:"12px"
                        }}>
                        </span>                            
                        </p>

                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" 
                        data-toggle="dropdown"
                        data-target="#shopping-cart">
                        <i className="fas fa-shopping-cart"></i>
                        {this.cartTotal(this.props.cart)
                        .toLocaleString('en-KE',{
                        style:'currency',
                        currency:'KES'
                        }) }
                    </a>
                    <CartItemsDropdown total={this.cartTotal(this.props.cart)} items={this.props.cart}/>
                </li>
            </ul>
        </div>
    </div>            
        )
    }

} 




const mapStateToProps = (state) => {  

    return {
      rims: state.getRimsReducer.rims,
      rimsHist: state.getRimsReducer.rimsHist,
      cart: state.cartReducer.cart
    }
       
}

const mapDispatchToProps =  {
        filterAsc,
        filterDesc,
        filterByValue,
        getAllRimsAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);