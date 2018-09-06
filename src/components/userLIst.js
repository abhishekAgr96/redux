import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,ScrollView,FlatList,AsyncStorage} from 'react-native';
import {observer,inject} from 'mobx-react/native'
// import {storeObj} from '../mobexCode/store'


 @inject("store")
 @observer
export class UserList extends Component {
  constructor(props){
    super(props);
   // this.Array_Items=require('./content.json');
    
  }

componentWillMount(){
   this.getToken();
 
  }
  getToken= async()=>{
    //   alert('will mount')
          try{
       const token=await AsyncStorage.getItem('token');
       if(token!==null){
        this.props.store.userListApi(token);
      //  alert('token '+token)
       }
        
    }
    catch(error){
        alert('err'+ error)
    }
}

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={{backgroundColor:'#FF6D3E',flexDirection:'row'}}>
          <Text style={{fontSize:40,marginLeft:4}}>=</Text>
          <Text style={styles.title}>Trending</Text>
          <Image source={{uri:'https://www.pngarts.com/files/1/Globe-PNG-Photo.png'}} style={{height:40,width:40,marginLeft:100,marginTop:5}}></Image>
        </View> */}
        <View>
        <FlatList
              
              data= {this.props.store.userDataArray}  //{this.myNewArr}    //{this.state.myJson}
              onEndReachedThreshold={.8}
              onEndReached={()=>{this.getToken()}}  
              renderItem={({item})=>{
              //     myString=JSON.stringify(item);
                  return(
                  <View style={styles.user}>
                       {/* <Text>Item No: {this.state.pageNo}</Text>  */}
                      <Text>Name:{item.name.title} {item.name.first} {item.name.last}</Text>
                      <Text>Email:{item.email}</Text>
                      <Text>Gender: {item.gender}</Text>
                      <Text>Location:{item.location.city}</Text>  
                      <Text>Age:{item.dob.age}</Text>
                  </View>
              )}}
            />
           {/* <Text>{this.state.token}</Text> */}
            {/* <Text>{this.state.myJson}</Text> */}
             
            
          </View>
          </View>  
    );
  }
}
const styles = StyleSheet.create({
   user:{
       borderBottomWidth: 1,
   }
  })
  