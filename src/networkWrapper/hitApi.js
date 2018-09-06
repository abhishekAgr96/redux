import getApi from './getApi'
import {AsyncStorage} from 'react-native'


class HitApi{
    post=async(type,myBody)=>{
      //  alert(typeof(getApi(type)));
   //   alert("body"+JSON.stringify(myBody[0]))
     try{
        let response = await fetch(getApi(type),{
            method:'POST',
            headers:{
                Accept: 'application/json', 
                'Content-Type': 'application/json',
             },
             body: JSON.stringify(myBody[0]),
            });
             let responseJson = await response.json();

          //    alert("my response"+responseJson.data.email)
              if(responseJson.success){
                  
              //    this.storeData(responseJson.token,responseJson.data.email)
       //          alert("json by api"+JSON.stringify(responseJson))
            //  if(responseJson.token)
                 this.storeData(responseJson.token)
                
              //    dispatch(setLoginData(responseJson.data))
        //          this.props.navigation.navigate('Profile');
              }
              else {alert('else')}
             
              return responseJson;
            }
    catch(err){
        alert("sign in err"+err);
    }
    }
    storeData= async(token)=>{
        // alert("store data"+(token));
        try{
            
             AsyncStorage.setItem('token',token);    
            // alert('token stored in async storage'+token);
        }
        catch(error){
            alert('err'+ error)
        }
    
    }
}


const hitApi=new HitApi();
export default hitApi;