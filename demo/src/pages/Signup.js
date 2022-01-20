import React from "react";
import { signup } from "../api/apiCall";
 class Signup extends React.Component
{
    state={
     username:null,
     email:null,
     password:null,
     confirmPassword:null,
     apiCall:false
    };
    onChange = event =>{
        const {name,value}=event.target;
        this.setState({
        [name]:value
        });
    };
   onClickSignup = async event =>{
       event.preventDefault();
       
       const { username,email,password } =this.state;

       const body ={
           username,
           email,
           password
          
       };
       this.setState({apiCall:true});
      try
      {
       const response=await signup(body);
      }
      catch(error)
      {
      }
      this.setState({apiCall:false});
   };
    render()
    {
        const {apiCall}=this.state;
        return(
       <div className={"container"} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
         <form> 
             <h2 className="text-center">Sign up</h2>
           <div className="form-group">
               <input name="username" className="form-control"  placeholder="Username"  onChange={this.onChange} style={{margin:10}} />
            </div>
            <div className="form-group">
               <input name="email" className="form-control" placeholder="Email" onChange={this.onChange} style={{margin:10}}/>
            </div>
            <div className="form-group">
               <input name="password" className="form-control" type="password" placeholder="Password"  onChange={this.onChange} style={{margin:10}}/>
            </div>
            <div className="form-group">
               <input name="confirmPassword" className="form-control" type="password" placeholder="Confirm Password"  onChange={this.onChange} style={{margin:10}}/>
            </div>

          <div className="text-center"> 
          <button className="btn btn-primary" disabled={apiCall} onClick={this.onClickSignup} style={{margin:10}}>
              {apiCall && <span className="spinner-border spinner-border-sm"></span>}
                  Signup
              </button>
          </div>
          
          
           </form>
              </div>
           
          
      
        );
    }
}
export default Signup;