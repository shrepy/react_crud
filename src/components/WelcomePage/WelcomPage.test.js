import configureStore from 'redux-mock-store';
// import { logRoles, render, screen } from "../../test-utils";
import { render,screen } from "@testing-library/react";
import WelcomePage from "./WelcomePage";
import  {Provider}  from 'react-redux';



describe.skip("WelcomePage", ()=>{
    const initialState = { "data": {
                "data": {
                "id": 3,
                "email": "sv@sass.com",
                "provider": "email",
                "uid": "sv@sass.com",
                "full_name": "sv",
                "nick_name": "S"
                    }}}

    const mockStore = configureStore();
    let store;
    // const newData = jest.mock(initialState)
    // jest.mock('react-router-dom', () => ({
    //     ...jest.requireActual('react-router-dom'),
    //     useNavigate : () => (jest.fn())
    // }))
    test("Renders Correctly", async() => {
        // render(<WelcomePage/>)
        const data = mockStore(initialState)
        render(<Provider store={newData}><WelcomePage/> </Provider>)
        screen.debug()
        const listComponent =await screen.findByRole('list')
        screen.debug()
        expect(listComponent).toBeInTheDocument()

    });

    // test("Renders Correctly", async() => {
    //     render(<WelcomePage props={initialState}/>)
        // const data = mockStore(initialState)
        // render(<Provider store={data}><WelcomePage/> </Provider>)
    //     const listElements =await screen.findByRole("listitem")
    //     expect(listElements).toHaveLength(0)
    // });

    // test('NAvigate on Button Click', async()=>{
    //     // const view = render(<WelcomePage/>)
    //     render(<WelcomePage/>)
    //     // logRoles(view.container)
    //     screen.debug()
    //     const buttonElement = screen.getByRole('button', {  name: /go to counter page/i})
    //     await user.click(buttonElement)
    //     render(<Counter/>)
    //     const headingElement = screen.getByRole('heading')
    //     expect(headingElement).toBeInTheDocument()
    // })



})