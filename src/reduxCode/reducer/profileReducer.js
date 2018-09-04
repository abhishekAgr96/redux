const initialState ={
    data:[]
}

export const profileReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_LOGIN':
        return{
            ...state,
            data:action.data
        }
        default:
        return state
    }
}