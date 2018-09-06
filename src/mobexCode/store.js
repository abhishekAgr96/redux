import {observable,action} from 'mobx'

 export default class Store{
    @observable userDataArray=[]
    pageNO=1;

    @action
    userListApi= async (token)=>{
        try { 
            let response = await fetch("http://192.168.12.39:7000/api/v1/user/getUserList/0/"+this.pageNO+"/10",{
                 method: 'GET', 
                 headers: { 
                    'x-access-token':token
                 },   
                } );
                 let responseJson = await response.json();
            //     alert("my response"+JSON.stringify(responseJson))
               this.userDataArray=this.userDataArray.concat(responseJson.message.results)
              //  this.state.myNewArr.push(this.state.myJson); 
              //  
         //   this.state.myJson=responseJson.message.results;
                  this.pageNo++;
                // this.setState({pageNo:this.state.pageNo+1});  
         //       alert('page'+this.state.pageNo+'  response'+JSON.stringify(responseJson));
                  return responseJson;
                 } catch (error) {
                      alert("api hit "+error);}
      
      }

}

// const storeObj = new Store();
// export default storeObj; 