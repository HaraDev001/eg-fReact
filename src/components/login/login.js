import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class LoginForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: 'Login Form',
            username:'',
            password:'',
            message: '',
            flag: false
        }
    }

    //after mounting the login form, below funtion is called.
  
    
    onSubmit = (e) => {
        e.preventDefault();
        let {username, password} = this.state;
        //this.isValidity(username, password);

        axios.post('/api/auth/login', {username, password})
        .then((result)=>{
            localStorage.setItem('jwtToken', result.data.token);
            this.setState({message:''});
            this.props.history.push('/')
        })
        .catch((error)=>{
            if(error.response.status === 401){
                this.setState({message:  'Login failed. Username or password not match'});
            }
        })
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
        this.setState({message:`Login Successfully ${id}-${password}`, flag:true});
    }

  
    render(){
        const {title, message,phlder1,phlder2, flag} = this.state;
    
        return (
            <div className = 'container mt-5'>
               <h1 className = 'h1-reponsive text-center'> {title} </h1> 
               <form className = 'form' onSubmit={this.onSubmit}>
                    <input className = 'form-control mb-1'  name = 'username' type = 'email'  placeholder = "email"  onChange={this.onChange} /> 
                    <input className = 'form-control mb-1'  name = 'password' type = 'password'  placeholder = "password"  onChange={this.onChange} /> 
                 
                    <button className = 'form-control btn btn-primary' type='submit'> Login </button>
                
               </form> 
               
               <p className='text-center'>
                        Not a member? <Link to="/register"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
                    </p>
                    <p className='text-center'>
                        Not a member? <Link to="/shopsite"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> shop</Link>
                    </p>
                    <p className='text-center'>
                        Not a member? <Link to="/ex"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> ex</Link>
                    </p>
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
export default LoginForm;