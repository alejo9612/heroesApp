import React from 'react';
import { mount } from "enzyme";
import { PrivateRouter } from '../../routers/PrivateRouter';
import {MemoryRouter} from 'react-router-dom';

describe('Se llevarán a cabo las pruebas en el <PrivateRouter />', () => {

    const props = {
        location: {
            pathname: '/DC'
        }
    }

    //De esta manera llamamos lo que sea del localStorage
    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componenete si esta autenticado y guardar en el localStorage ', () => {

        const wrapper = mount( //el shallow solo renderiza mis componenete pero no de desde adentro, es decir sus funciones y demás
            <MemoryRouter>
                <PrivateRouter
                    isAuthenticated={true}
                    component={() => <span>Carnaval Te Amo!!</span>}
                    {...props}
                />
            </MemoryRouter>
        )

        //console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(true);

        //de esta menra podemos hacer las pruebas con los argumentos del localStorage
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/DC');
    });

    test('Debe de bloquear el componente si no se encuentra autenticado', () => {

        const wrapper = mount( //el shallow solo renderiza mis componenete pero no de desde adentro, es decir sus funciones y demás
            <MemoryRouter>
                <PrivateRouter
                    isAuthenticated={false}
                    component={() => <span>Carnaval Te Amo!!</span>}
                    {...props}
                />
            </MemoryRouter>
        )

        // console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(false);
        //de esta menra podemos hacer las pruebas con los argumentos del localStorage
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/DC');
    })
    

});

