import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,Button,AsyncStorage} from 'react-native'
import {InputType,MyButton} from './customComponents'


export class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            message:'',
        }
    }
    static navigationOptions = {
        title: 'Sign In',
      };
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../images/logo.png')}></Image>
                <Text style={{color:'red'}}>{this.state.message}</Text>
                <InputType placeholder="E-mail" setField={(email)=>{this.setState({email:email})}}/>
                <InputType placeholder="Password" setField={(password)=>{this.setState({password:password})}}/>
                <MyButton buttonText="Sign In" myFunction={()=>{this.props.signIn(this.state.email,this.state.password)}}/>
                <Text style={{marginTop:10}}>Forget your details?</Text>
                <Button onPress={()=>{this.props.navigation.navigate('SignUp')}} title='Create a new account'></Button>
                {/* <Text>email:{this.props.navigation.state.params.email}</Text>
                <Text>Password:{this.props.navigation.state.params.password}</Text> */}
                
            </View>
          );
    }  
    componentWillReceiveProps=(nextProps)=>{
      //  alert('componentWillReceiveProps called')
         if(nextProps.profileReducer.isLoggedIn){
           //  alert('navigation')
              this.props.navigation.navigate('Profile')
         }   //navigation
    }
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      logo:{
          height:100,
          width:100,
          marginBottom: 20,
      }
})
