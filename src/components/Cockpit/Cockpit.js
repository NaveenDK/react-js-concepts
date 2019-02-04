import React from 'react';
import classes from './Cockpit.css';
import Auxiliary from '../../hoc/Auxiliary';

const cockpit = (props) => {
    const assignedClasses=[]; // we use classes.join(' ') in the clssname as now it needs to be a string 
  
   let btnClass=classes.Button;

    if(props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    if(props.persons.length <=2){
       assignedClasses.push(classes.red);
    }  
    if (props.persons.length <=1){
      assignedClasses.push(classes.bold);
    }
    return (
              <Auxiliary>
                     <h1>{props.apptitle}</h1>
                        <p className={classes.Cockpit}> I see me there!</p>
                                  {/* <button onClick={this.switchNameHandler.bind(this,'Maxmillian')}> Switch Name</button>*/  }
                                  { /*the below method is a bit inefficient and above bind method is recommended */}
                         <button  className={btnClass}
                        onClick={props.clicked}> Switch Name</button>
             </Auxiliary>

    );
}

export default cockpit;