import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import ColorList from "./ColorList";
import Color from './Color';
import Form from './Form';
import { useEffect, useState } from "react";

const Routes = () => {
    //get initial colors from local storage otherwise set initial colors
    const [colors, setColors] = useState(JSON.parse(localStorage.getItem('colors')) || {red:'red', green:'green', blue:'blue'});

    //on first render of this component this function will set our 
    //colors to local storage and will run any time colors changes
    useEffect(
        () => localStorage.setItem('colors', JSON.stringify(colors)),[colors]
    );

    //add function to pass to our form component
    //take previous colors, spread them on a new obj and add values
    //of new color obj
    const add = (newColorObj) => {
        setColors((colors) => {
           return {...colors, newColorObj}
        });
    }
    //this function returns a Color component. we will use this as a callback
    //in a Route prop so the route can directly render Color when it is 
    //called. it inherits props from Route that uses it.
    const renderColor = (props) => {
        const { color } = props.match.params;
        return <Color {...props} color={color} />
    }
    return(
        <div>
         <BrowserRouter>
          <Switch>
            <Route exact path="/colors">
              <ColorList colors={colors} />
            </Route>
            <Route path="/colors/:color" render={renderColor}/>
            <Route exact path="/colors/new">
            <Form />
            </Route>
          </Switch>
         </BrowserRouter>
        </div>
    )
}

export default Routes;