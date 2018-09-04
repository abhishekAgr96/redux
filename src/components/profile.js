import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,AsyncStorage} from 'react-native'
import {InputType,MyButton} from './customComponents'

export class Profile extends Component{
    constructor(props){
        super(props);
        // this.state={
        //   avatarSource:require('../images/user.png')
        // }
    }
    static navigationOptions = {
        title: 'Profile',
        // avatarSource:require('./user.png'),
      };
     
    
      
    
      //  alert("my email"+email);


      
    render(){
        return (
            <View style={styles.container}>
                {/* <Image style={styles.dp} source={this.state.avatarSource}></Image> */}
                
                {/* <Text>{this.state.avatarSource}</Text> */}
                <InputType placeholder="name"/>
                <InputType placeholder="abhishek.agrawal@kelltontech.com"/>
                <InputType placeholder="387459683"/>
                <MyButton buttonText="Save" myFunction={()=>{alert('Saved')}}></MyButton> 
                
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
      dp:{
          height:100,
          width:100,
          marginBottom: 20,
      }
})