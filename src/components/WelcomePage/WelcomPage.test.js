import { render, screen } from "../../test-utils";
import WelcomePage from "./WelcomePage";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";

describe.skip("WelcomePage", ()=>{
    // const initialState = {full_name:"shreyansh", email:"sv@sass.com",uid:"sv@sass.com" };
    // const mockStore = configureStore();
    // let store;


    test("Renders Correctly", () => {
        render(<WelcomePage/>)
        // const data = mockStore(initialState)
        // render(<Provider store={data}><WelcomePage/> </Provider>)
        const listComponent = screen.getByRole('list')
        expect(listComponent).toBeInTheDocument()
    });

    test("Renders Correctly", () => {
        render(<WelcomePage/>)
        // const data = mockStore(initialState)
        // render(<Provider store={data}><WelcomePage/> </Provider>)
        const listElements = screen.getAllByRole("listitem")
        expect(listElements).toHaveLength(3)
    });

})