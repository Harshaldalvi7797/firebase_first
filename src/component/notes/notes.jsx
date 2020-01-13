import React,{Component} from "react";
import {connect } from "react-redux";
import { fetchNote } from "../../redux/action/index";
import _ from "lodash";


class Notes extends Component
{
    constructor()
    {
        super();
       

        
    }

    componentDidMount(){
        this.props.fetchNote();

    }
    render()
    {
        if(!this.props.notes) {return null;}
        console.log("Notes data", this.props.notes);
        return(
            <div className="container">
                <div className="row">
                    {/* <h1>Hello </h1> */}
                    {
                        _.map(this.props.notes ,(value,key)=>(
                        
                            <div className="col-md-12" key={key}>
                                <div className="card text-left">
                              
                                  <div className="card-body">
                        <h4 className="card-title">{value.title}</h4>
                        <p className="card-text"> 
                        {value.descriptrion}
                        </p>
                                  </div>
                                </div>
                            </div>
                        ) )
                    }
                </div>
            </div>

        );
    }
}

const maoStateToprops = state =>
{
    return {note: state.Notes}
}
export default connect (maoStateToprops,{fetchNote}) (Notes);
