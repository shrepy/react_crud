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
        expect(headingText).toBeInTheDocument()

        const headingText4 = screen.getByRole('heading',{
            level:4
        })
        expect(headingText4).toBeInTheDocument()
    })
})