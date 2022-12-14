import { screen, render } from "@testing-library/react";
import SignUpPAge from "../SignUpPAge";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe("SignUpPage", ()=> {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;


    test('SignUpPage rendered correctly', () => {
        store = mockStore(initialState)
        render(<Provider store={store}><SignUpPAge/></Provider>)


        const divElement = screen.getByRole('heading', {  name: /bric/i})
        expect(divElement).toBeInTheDocument();
    })
})