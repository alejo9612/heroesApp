import React from "react";
import { mount } from "enzyme";
import { HeroesPage } from "../../components/heroes/HeroesPage";
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en el <HeroesPage/>', () => {

    //simulamo el hisory con sus funcines y demás
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroesPage history={history} />
        </MemoryRouter>
    );

    test('Debe de mostrar el componenete con la redirección  en caso de no haber argumentos en la URL ', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Redirect').exists()).toBe(true);

    });

    test('Debe de mostrar un heroe si el parametro exite y se encuentra', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                {/* validamos los parametros */}
                <Route path="/heroe/:heroeId" component={HeroesPage} />
            </MemoryRouter>
        );
        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('Debe de regresar a la pantalla anterior con el PUSH', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        //* validamos los parametros */}
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Route path="/heroe/:heroeId"
                    component={() => <HeroesPage history={history} />}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();


        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalledWith();
    });

    test('Debe de regresar a la pantalla anterior', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                {/* validamos los parametros */}
                <Route path="/heroe/:heroeId"
                    component={(props) => <HeroesPage history={history} />} />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledTimes(0)
        expect(history.goBack).toHaveBeenCalledWith();
    });

});

