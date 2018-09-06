import {connect} from 'react-redux'
import {signInApi} from '../actions/signInAction'
import {SignIn} from '/home/user/Desktop/reduxProfile/src/components/signIn.js'

const mapStateToProps =(state)=>{
    return {
        profileReducer:state.profileReducer.data
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signIn:(email,password)=>{ dispatch(signInApi(email,password)) }
    }
}

const SignInContainer=connect(mapStateToProps,mapDispatchToProps)(SignIn);
export default SignInContainer