const baseUrl='http://192.168.12.39:7000/api/'

endPoints=[
{
    type:'SignIn',
    url:'v1/user/authenticateUser'
},
{
    type:'SignUp',
    url:'v1/user/createUser'
},
{
    type:'userList',
    url:'v1/user/getUserList/0/1/10'
},
]

export default getApi=(type)=>{
    const myEndPoint=this.endPoints.find(item => item.type == type)
    return (baseUrl+myEndPoint.url)
}