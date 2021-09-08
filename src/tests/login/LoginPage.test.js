import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { LoginPage } from "../../components/login/LoginPage";
import { types } from "../../types/types";

describe('Se llevarán a cabo las pruebas de <LoginPage/>', () => {

    const history = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Carnaval',
            logged: true
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginPage history={history} />
        </AuthContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de realizar el dispatch y la navegación', () => {
        
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload:{name:'Carnaval'}
        });

        expect(history.replace).toHaveBeenCalledWith('/');

    });

});
