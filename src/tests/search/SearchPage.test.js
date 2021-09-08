import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { SearchPage } from "../../components/search/SearchPage";

describe('Se llevará a cabo las pruebas del <SearchPage/>', () => {

    test('Debe de mostrarse de manera correcta con sus valores por default', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/Buscar']}>
                <Route path="/Buscar" component={SearchPage} />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Busca un heroe por favor!!')

    });

    test('Debe de mostrar a batman y el input con valor de query', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/Buscar?q=batman']}>
                <Route path="/Buscar" component={SearchPage} />
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar un error si no se encuetra el Heroe', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/Buscar?q=batman123']}>
                <Route path="/Buscar" component={SearchPage} />
            </MemoryRouter>
        );

        expect(wrapper.find('.alert-danger').prop('value')).toBe(`El nombre batman123 no es un superheroe!!`);
        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe de llamar el PUSH del history ', () => {
        
        const history = {
            push:jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/Buscar?q=batman123']}>
                <Route path="/Buscar" component={()=> <SearchPage history={history}/>} />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target:{
                name: 'Buscar',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect(history.push).toHaveBeenCalledWith(`?q=batman`);
        
    });
    
});
