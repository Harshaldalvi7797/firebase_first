import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";
import Navigation from "./component/navigation/navigation";
import Home from "./component/home/home";





class  App extends Component {

  render()
  {
    return (
      <React.Fragment>
        <Navigation />
        <div className="container">
          
          <Switch>
          <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />

            {/* <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} /> */}
          </Switch>
        

      </div>
      </React.Fragment>
      
    );
    
  }

}

export default App;
