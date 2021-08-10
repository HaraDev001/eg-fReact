import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class RegisterForm extends Component {
    
    constructor(props){
        super();
        this.state = {
            title: 'Register Form',
            username:'',
            password:'',
            phlder1: 'Username',
            phlder2: 'Password',
            message: '',
            flag: false
        }
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        let {username, password} = this.state;
        this.isValidity(username, password);
    }

    onChange = (e)=>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    
    isValidity = (id, password) => {
        if (!id) {
            this.setState({message:'Input ID', flag:false});
            return false;
        }
        if (!password) {
            this.setState({message:'Input Password', flag:false});
            return false;
        }
        this.setState({message:`Registry Successfully ${id}-${password}`, flag:true});
    }

  
    render(){
        const {title, message,phlder1,phlder2, flag} = this.state;
    
        return (
            <div className = 'container mt-5'>
               <h1 className = 'h1-reponsive text-center'> {title} </h1> 
               <form className = 'form'>
                    <input className = 'form-control mb-1'  name = 'username' type = 'email'  placeholder = {phlder1}  onChange={this.onChange} /> 
                    <input className = 'form-control mb-1'  name = 'password' type = 'password'  placeholder = {phlder2}  onChange={this.onChange} /> 
                 
                    <button className = 'form-control btn btn-primary' onClick={this.onSubmit} > Register </button>
                  
               </form> 
               {
                   message!==''&&(
                       flag === false ?
                       <div className = 'alert alert-danger'><h4>{message}</h4> </div>
                       :<div className = 'alert alert-success'><h4>{message}</h4> </div>)
               }
               
           </div>
       );
    }
}
export default RegisterForm;