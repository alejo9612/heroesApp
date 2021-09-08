import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe('Se llevarán a caabo las pruebas del <DashboardRoutes/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Alejandro',
            logged:true
        }
    }

    test('Debe de mostrarse de manera correcta', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Alejandro');
    });

});
