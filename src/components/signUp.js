import React,{Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native'
import {InputType,MyButton} from './customComponents'
import {StackActions,NavigationActions} from 'react-navigation'
import {observer,inject} from 'mobx-react/native'
import hitApi from '../networkWrapper/hitApi'

@inject("store")
@observer
export class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            message:''
        }
    }
    static navigationOptions = {
        title: 'Sign Up',
      };
    render(){
        return (
            <View style={styles.container}>
                <Text style={{color:'red'}}>{this.state.message}</Text>
                <InputType placeholder="name" setField={(name)=>{this.setState({name:name})}}/>
                <InputType placeholder="E-mail" setField={(email)=>{this.setState({email:email})}}/>
                <InputType placeholder="Password" setField={(password)=>{this.setState({password:password})}}/>
                <MyButton buttonText="Sign Up" myFunction={()=>{
                    let emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    let passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/;
                  
                  if(!(passwordRegex.test(this.state.password) && emailRegex.test(this.state.email))){
                    
                    if(!emailRegex.test(this.state.email))
                  //  alert('wrong Email');
                    this.setState({message:'Email is not Valid'})
                    if(!passwordRegex.test(this.state.password))
                //    alert('wrong password');
                this.setState({message:'Password is not Valid'})
                  } 
                    else
                    {
                       // this.signUpApi();
                       this.props.store.name=this.state.name
                       this.props.store.email=this.state.email
                       this.props.store.password=this.state.password
                       this.props.store.signUpApi();
                    }
                //     {
                //     let resetAction= StackActions.reset({
                //         index:0,
                //         actions:[
                //             NavigationActions.navigate({
                //                 routeName:'SignIn',
                //                 params:{
                //                     name:this.state.name,
                //                     email:this.state.email,
                //                     password:this.state.password
                //                     }
                //              })],
                //     })
                //     this.props.navigation.dispatch(resetAction)
                // }
                    }}></MyButton> 
                
            </View>
          );
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
