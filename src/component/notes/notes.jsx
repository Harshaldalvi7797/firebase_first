import React,{Component} from "react";
import _ from "lodash";


class Notes extends Component
{
    constructor()
    {
        super();
       

        
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
export default Notes;
