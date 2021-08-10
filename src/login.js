import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

let phlder1 = 'ID';
let phlder2 = 'Password';
let msg = '';

var insert = () => {
    let id = document.getElementById('id').value;
    let password = document.getElementById('pwd').value;
    isValidity(id, password);
}

var isValidity = (id, password) => {
    console.log(`here ${id}`);
    if (!id) {
        alert('Id field is required to Login');
        return false;
    }
    if (!password) {
        alert('Password field is required to Login');
        return false;
    }
   msg=`Welcome ${id}`;
}

function Message({ text }) {
    return <h4 className = 'lead lead-info' > { text } </h4>;
}

function LoginForm (props) {
    
    return (
         <div className = 'container mt-5'>
            <h1 className = 'h1-reponsive text-center'> { props.title } </h1> 
            <form className = 'form'>
                <input className = 'form-control mb-1'  id = 'id' type = 'text'  placeholder = { phlder1 }/> 
                <input className = 'form-control mb-1'  id = 'pwd' type = 'password'  placeholder = { phlder2 }/> 
                <div className = 'row mb-2' >
                    <div className = 'col-md-6 pr-md-1 pb-1'>
                        <button className = 'form-control btn btn-primary' > Login </button>
                    </div> 
                    <div className = 'col-md-6 pl-md-1' >
                        <button className = 'form-control btn btn-danger' onClick = { insert } > Registry </button> 
                    </div> 
                </div> 
            </form> 
            <Message text={msg}/>
        </div>
    );
}
export default LoginForm;