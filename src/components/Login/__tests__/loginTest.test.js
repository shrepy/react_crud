import { render, screen } from "@testing-library/react";
import Login from '../Login'
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


describe('Login',()=>{
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    test('Render',()=>{
        store = mockStore(initialState)
        render(<Provider store={store}><Login/></Provider>)
        
        const headingText = screen.getByRole('heading',{
            name:"Hello Again!"
        })
        expect(headingText).toBeInTheDocument();

        const headingText4 = screen.getByRole('heading',{
            level:4
        })
        expect(headingText4).toBeInTheDocument();


        const emailPlaceholder = screen.getByPlaceholderText("Enter Email")
        expect(emailPlaceholder).toBeInTheDocument();

        const passwordPalceholder = screen.getByPlaceholderText("Enter Password")
        expect(passwordPalceholder).toBeInTheDocument();
        

        const paragraphText = screen.getByText('Not a member?')
        expect(paragraphText).toBeInTheDocument();
        
        const otherText = screen.getByText('Please enter a valid email address.')
        expect(otherText).toBeInTheDocument();


        //To run this go to the email field and paste this (" defaultValue={"sv@sass.com"} ") and remove value={warnemail}
        // const displayValue = screen.getByDisplayValue("sv@sass.com")
        // expect(displayValue).toBeInTheDocument();



        // const lableText = screen.getByLabelText('Recovery Password', {
        //     selector:"input"
        // })
        // expect(lableText).toBeInTheDocument();


    })
})