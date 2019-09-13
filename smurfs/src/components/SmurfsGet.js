  
import React from "react";
import { connect, } from "react-redux";
import { getData } from "../actions";


const SmurfsGet = props => {
  console.log("Smurfs in my Village(State) right now : ", props.smurfs);

    
  return (
    
    <div>
      
      <button onClick={() => props.getData()}>
        Click here to get some Smurfs
      </button>
     
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(SmurfsGet);
