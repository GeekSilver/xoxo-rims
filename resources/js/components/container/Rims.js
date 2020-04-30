import React,{ Component } from 'react';
import { connect } from 'react-redux';

import {getAllRimsAction} from '../../actions/rimAction';


import RimPrice from '../RimPrice';
import RimSize from '../RimSize';
import RimImage from '../RimImage';

class Rims extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getAllRimsAction();       
    }


    renderRims (rims) {
        return (
            <div className="row">
                {rims.map(rim => 
                    <a 
                    className="card col-md-2"
                    key={rim.id}
                    href={`/${rim.id}`}
                     >
                        <div 
                        className="card-body">
                            <RimImage src={rim.image} />
                            <RimSize size={rim.size}/>
                            <div
                            className="card-footer"
                            style={{zIndex:2}}
                            >  
                                <RimPrice detail={rim.price} />                 
                            </div>
                        </div>
                    </a>               
                )
                   
                }
             
                
            </div>
            );
    }

    render () {
        return this.renderRims(this.props.rims);
    } 
}

const mapStateToProps = (state) => {  

    return {
      rims: state.getRimsReducer.rims
    }
       
}

const mapDispatchToProps =  {
        getAllRimsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Rims);
 