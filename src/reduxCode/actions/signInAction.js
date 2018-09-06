import {AsyncStorage} from 'react-native'

const setLoginData = (data) => ({
    type: 'SET_LOGIN',
    data:{
        userData:data,
        isLoggedIn:true
    }
});
//baseurl='192.168.12.39:7000/api/'
export const signInApi=(email,password)=>async(dispatch)=>{
  //  alert("emasil passwoed"+email+password);
    try{
        let response = await fetch('http://192.168.12.39:7000/api/v1/user/authenticateUser',{
            method:'POST',
            headers:{
                Accept: 'application/json', 
                'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                email:email,
                password:password
              }),
            });
             let responseJson = await response.json();
         //     alert("my response"+responseJson.data.email)
              if(responseJson.success){
                  this.storeData(responseJson.token,responseJson.data.email)
                //  alert('done')
                  dispatch(setLoginData(responseJson.data))
                //  this.props.navigation.navigate('MidScreen');
              }
             
              return responseJson;
            }
    catch(err){
        alert("sign in err"+err);
    }
}

storeData= async(token,email)=>{
    try{
        await AsyncStorage.setItem('token',token);
        await AsyncStorage.setItem('email',email);
       
    //    alert('token stored in async storage'+token);
    }
    catch(error){
        alert('err'+ err)
    }

}