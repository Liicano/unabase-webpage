/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        sectionState: 0
    },


    mutations: {
        changeSectionState(state, payload) {
            state.sectionState = payload;
        }
    },
    getters: {
        getSectionState: state => state.sectionState
    }
});