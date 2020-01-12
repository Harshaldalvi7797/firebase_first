import React,{Component} from "react";
import {connect} from "react-redux";
import {database} from "../../firebase";
import Notes from "../notes/notes";
import {createNote} from "../../redux/action/index"; 

class Home extends Component
{
    constructor()
    {
        super();
        this.state={
            title:"",
            description:"",
            notes:""
        }
    };

    componentDidMount()
    {
        database.on("value",(snapshot)=>{
            this.setState({notes: snapshot.val()});

        })
    }
    handleChange = e =>
    {
       this.setState({[e.target.name] : e.target.value })
    }
    handleForm = e=>
    {
        e.preventDefault();
        let data={
            title:this.state.title,
            descriptrion:this.state.description
        };
        // console.log(data);
        // database.push(data);
        this.props.createNote(data);
        this.setState({title:"" ,description:""});
    }
    render()
    {
        console.log(this.state.notes);
        // console.log(this.state.title, this.state.description);
        return(
            <div className ="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>User Form Details:</h1>
                        <form onSubmit={this.handleForm}>
                            <div className="form-group">
                            <input type="text" placeholder="Enter Title" name="title" className="form-control"
                            value={this.state.title}
                            onChange={this.handleChange} 
                            />

                            </div>
                            <div className="form-group">
                            <input type="text" placeholder="Enter Description" name="description" className="form-control"
                            value={this.state.description}
                                 onChange={this.handleChange}
                            />

                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                            
                        </form>

                    </div>
                </div>
                <Notes notes={this.state.notes}/>
            </div>

        );
    }

   
}
export default connect (null,{createNote}) (Home);