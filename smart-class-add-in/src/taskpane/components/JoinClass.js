import * as React from "react";
import Inputs from "./Inputs";

export default class JoinClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {textAreaValue:""};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event){
        this.setState({textAreaValue: event.target.value});
      }
    
      handleSubmit(event){
        alert('Question sent!');
        event.preventDefault();
      }
    
      render() {
        const {title,logo,message} = this.props;
        return (
            <section className="field">
                {/* <React.Fragment> */}
                <label>{message}</label>
                  <form onSubmit={this.handleSubmit}>
                    <Inputs className="inputs" message= 'Class Code:' holder ='Enter Class Code' length='16'/>
                    <Inputs className="inputs" message= 'Email:' holder ='Enter Email' length='24'/>
                    <Inputs className="inputs" message= 'Password:' holder ='Enter Password' length='24'/>
                    <br/>
                    <input className="enterButton" type='submit' value='Enter' onClick={this.handleValidity} />
                  </form>
            </section>
          );
        }
}