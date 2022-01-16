import React from "react";
import axios from "axios";
 class Signup extends React.Component
{
    state={
     username:null,
     email:null,
     password:null,
     confirmPassword:null,
    };
    onChange = event =>{
        const {name,value}=event.target;
        this.setState({
        [name]:value
        });
    };
   onClickSignup = event =>{
       //event.preventDefault();
       
       const { username,email,password } =this.state;

       const body ={
           username,
           email,
           password
          
       };
       axios.post('http://localhost:8080/api/v1/users',body);
   };
    render()
    {
        return(
           
              
            <form style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column"}}> 
           <div style={{margin:"10px"}}>
               <input name="username" placeholder="Username" style={{width:"15vw",height:"4vh"}} onChange={this.onChange}/>
            </div>
            <div style={{margin:"10px"}}>
               <input name="email" placeholder="Email"  style={{width:"15vw",height:"4vh"}} onChange={this.onChange}/>
            </div>
            <div style={{margin:"10px"}}>
               <input name="password" type="password" placeholder="Password" style={{width:"15vw",height:"4vh"}} onChange={this.onChange}/>
            </div>
            <div style={{margin:"10px"}}>
               <input name="confirmPassword" type="password" placeholder="Confirm Password"  style={{width:"15vw",height:"4vh"}} onChange={this.onChange}/>
            </div>
           <div style={{margin:"10px"}}>
              <button style={{width:"10vw",height:"4vh"}} onClick={this.onClickSignup}>
                  Signup
              </button>
           </div>
           </form>
          
      
        );
    }
}
export default Signup;