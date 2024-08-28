import { createSlice } from "@reduxjs/toolkit";










const fetchData = () => {
    const data = localStorage.getItem('appwriteauthProject');
  
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        if (
          parsedData &&
          typeof parsedData.name === 'string' &&
          typeof parsedData.email === 'string'
        ) {
          return {
            name: parsedData.name || "",
            email: parsedData.email || "",
            loginStatus: parsedData.name.trim() !== "" && parsedData.email.trim() !== ""
          };
        }
      } catch (error) {
        console.error('Error parsing data from localStorage:', error);
      }
    }
  
    // Return default user object if no valid data found
    return {
      name: "",
      email: "",
      loginStatus: false
    };
  };
  

const initialState = {
    // user: {
    //         name: "",
    //         email: "",
    //         loginStatus: false
    //     }

    user : fetchData()
};


export const AppwriteSlice = createSlice({
    name: "appwriteAuth",
    initialState,
    reducers: {
        login: (state, action) => {
            // console.log(action.payload);
            state.user.name = action.payload.name;
            state.user.loginStatus = true;
            state.user.email = action.payload.email;
            localStorage.setItem("appwriteauthProject", JSON.stringify(state.user));
        },
        logout: (state) => {
            state.user.name = "";
            state.user.email = ""
            state.user.loginStatus = false;
            localStorage.setItem("appwriteauthProject", JSON.stringify(state.user));
        }
    }
});

export const { login, logout } = AppwriteSlice.actions;
const AppwriteSliceReducers = AppwriteSlice.reducer;

export default AppwriteSliceReducers;