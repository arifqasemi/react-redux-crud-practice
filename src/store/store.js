import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
    users:[]
}

const crud = createSlice({
    name: 'crud',
    initialState:initialState,
    reducers:{
        add:(state,actions)=>{
            state.users= [
                ...state.users,{
                    id : actions.payload.id ,
                    name  : actions.payload.name,
                    email : actions.payload.email
                    }
                    ]
            console.log(state.users)

        },
        update:(state,action)=>{
               const {id, name, email} = action.payload;
                const index = state.users.filter((user) => user.id == id);
                const userId = id -1;
                if (index != undefined){
                    state.users[userId] = {
                        ...state.users[userId],
                        name: name,
                        email: email,
                      };

                }            
            },
        delete:(state,action)=>{
            const  {id} = action.payload;
            state.users = state.users.filter((user) => user.id !== id);

        }
    }
    
})

export const crudAction = crud.actions;
export const store = configureStore({
    reducer :{user: crud.reducer}
});
