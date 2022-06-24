import { useState } from 'react';

import { createAuthUserWithEmailAndPassword } from '../../utils/Firebase/firebase.utils';
//create user object
const defaultFormFields = {
  displayName:'',
  email:'',
  password:'',
  confirmPassword:''
} 
//set form object
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  
  console.log(formFields);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      console.log('user encountered an error', error);
    }}

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormFields({
    ...formFields,
    [name]: value
  });
}


  return (
 <div>
   <h1>
     Sign Up with email and password
     <form onSubmit = {handleSubmit}>
     <label> Display Name</label>
       <input type="text" 
       required onChange={handleChange} 
       name='displayName' 
       value={displayName}/>
       <label> Email</label>
        <input type="email" 
        required onChange={handleChange} 
        name='email'
        value={email}/>
        <label> Password</label>
        <input type="password" 
        required onChange={handleChange} 
        name='password' 
        value={password} />
        <label> Confirm Password</label>
        <input type="password" 
        required onChange={handleChange}
        name='confirmPassword' 
        value={confirmPassword} />
        <button type='submit'>Sign Up</button>

     </form>
   </h1>
 </div>
    );
};

export default SignUpForm;

