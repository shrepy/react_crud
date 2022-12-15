import { createTheme } from "@mui/system";
import { Provider } from "react-redux";
import store from "../store";
const theme = createTheme({
    palette:{
        mode:'dark',
    },
})
export const AllTheProviders = ({children}) => {
    return (
      <Provider store={store}>
        {children}
      </Provider>
        
    )
  }