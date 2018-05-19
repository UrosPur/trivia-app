import {TriviaService} from "../services/TriviaService";
import {ChuckService} from "../services/ChuckService";

export const TriviaModule = {

    state:{

        trivias: null

    },
    getters:{

        getTrivias(state) {

            return state.trivias

        },

    },
    mutations:{

        setTrivias(state, trivias){


            state.trivias = trivias

        }


    },
    actions:{

        fetchTrivias(store, next) {

            TriviaService.getRandomeTrivias()
                .then(({ data }) => {

                    store.commit('setTrivias', data);

                    // next();

                })

        },

    },

}