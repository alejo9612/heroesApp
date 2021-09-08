import React from "react";
import { mount } from "enzyme";
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from "../../auth/AuthContext";


describe('Se levarán a cabo lass ruebass del AppRouter', () => {

    //Creamos la simulación del context para que se pueda llevar a cabo la prueba
    const contextValue = {
        dispatch : jest.fn(),
        user: {
            logged: false
        }
    }

    test('Debe de mostrar el login si no se encuentra autenticado', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el componente de marvel si está autenticado', () => {

        const contextValue = {
            dispatch : jest.fn(),
            user: {
                logged: true,
                name:'Carnaval'
            }
        }
       
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        //console.log(wrapper.html());
        expect(wrapper.find('.container').exists()).toBe(true);
    });

});
