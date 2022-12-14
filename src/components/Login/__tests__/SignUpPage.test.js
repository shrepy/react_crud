// import { screen, render } from "../../../test-utils";
import { screen, render } from "@testing-library/react";
import SignUpPAge from "../SignUpPAge";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import user from "@testing-library/user-event";

describe("SignUpPage", ()=> {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;


    test('SignUpPage rendered correctly', () => {
        store = mockStore(initialState)
        render(<Provider store={store}><SignUpPAge/></Provider>)


        const divElement = screen.getByRole('heading', {  name: /bric/i})
        expect(divElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button', {  name: /get started/i})
        expect(buttonElement).toBeInTheDocument();
    })
    
    test('input element rendered', async() => {
        store = mockStore(initialState)
        render(<Provider store={store}><SignUpPAge/></Provider>)
        // user.setup()
        // const nameElement = screen.getByLabelText("Full name")
        // expect(nameElement).toHaveTextContent("");

        const fname = screen.getByTestId("fullName")
        await user.type(fname,"Shreyansh")
        expect(fname).toHaveValue("Shreyansh")
        
    })

    test('input element rendered', async() => {
        store = mockStore(initialState)
        // render(<SignUpPAge/>,{
        //     wrapper:Provider(store={store})
        // })
        render(<Provider store={store}><SignUpPAge/></Provider>)
        // user.setup()

        const fname = screen.getByTestId("fullName")
        const emailElement = screen.getByTestId("email")
        const passwordElement = screen.getByTestId("password")
        const confirmPassElement = screen.getByTestId("confirm-password")

        await user.tab()
        await user.tab()
        expect(fname).toHaveFocus()
        await user.tab()
        expect(emailElement).toHaveFocus()
        await user.tab()
        expect(passwordElement).toHaveFocus()
        await user.tab()
        expect(confirmPassElement).toHaveFocus()
    })
})