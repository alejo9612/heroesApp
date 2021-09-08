import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Se llevarán a cabo las pruebas en el authReducer', () => {

    const state = {
            name: 'Alejandro',
            logged: true
    }

    test('Debe de retornar el estado por defecto ', () => {

        const auth = authReducer({logged:false},{});
        expect(auth).toEqual(auth);
        //console.log(auth)

    });

    test('Debe de autenticar y colocar el nombre y estado true del usuario ', () => {

         const action ={
             type: types.login,
             payload: state
         };

        const auth = authReducer({},action);

        expect(auth).toEqual(state);
        // console.log(auth);

    });

    test('Debe de borrar el nombre del usuario y el logged en false', () => {

        const action ={
            type: types.logout,
            payload: {
                name: '',
                logged: false
            }
        };

       const auth = authReducer(state,action);

       expect(auth).toEqual({logged: false});
    //    console.log(auth);
    });


});
