import React from 'react';
import FormInput from '../form-input.component';
import CustomButton from '../custom-button/custom-button.component';
//creating and identificating new user
import{auth,createUserProfileDocument} from '../..firebase/firebase.utils';
//bring in stylesheet
//import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
        }
    }

    handleSubmit = async event => {
        //prevent default form submit action 
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword){
            alert("password don't match");
            return;
        }
        try{
            const{user}=await auth.createUserWithEmailAndPassword(
                email,
                password
                );
            await createUserProfileDocument(user,{displayName});
            
            //set to initial state
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:'',

            });
        }catch(error){
            console.error(error);
        }
    };

    handleChange = event => {
        const{name,value}=event.target;
        this.setState({[name]:value});
    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>    
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Dispaly Name'
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword
                    onChange={this.handleChange}
                    label='Comfirm Password'
                    required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>           
            </div>
        )
    }
}
export default SighUp;