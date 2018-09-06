import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,AsyncStorage,TouchableOpacity} from 'react-native'
import {InputType,MyButton} from './customComponents'
import {observer,inject} from 'mobx-react/native'

@inject("store")
@observer
export class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            userDp:require('../images/user.png'),
        }
    }
    static navigationOptions = {
        title: 'Profile',       
      };
     
    
      //  alert("my email"+email);
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{alert('clicked')}}>
                    <Image style={styles.dp} source={this.state.userDp}></Image>
                </TouchableOpacity>
                {/* <Text>{this.state.avatarSource}</Text> */}
                <InputType placeholder={this.props.store.name}  setField={(name)=>{this.setState({name:name})}}/>
                <InputType placeholder={this.props.store.email} disabled/>
                <InputType placeholder="387459683"/>
                <MyButton buttonText="Update Info" myFunction={()=>{
                    this.props.store.name=this.state.name,
                     alert("store updated"+this.props.store.name)}}></MyButton>      
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