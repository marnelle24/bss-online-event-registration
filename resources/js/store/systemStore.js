import axios from "axios"

export default {
    namespaced: true,
    state: {
        events: [],
        departments: [],
        categories: [],
        cart: [],
        order: {}
    },

    mutations: {

        updateEvents( state, events ) {
            state.events = events;
        },

        addToCart( state, event ) {

            // check if the selected event is already in the cart
            let eventInCartIndex = state.cart.findIndex( item => item.slug === event.slug);
            
            // check if the item is already in the cart
            if(eventInCartIndex !== -1) {
                state.cart[eventInCartIndex].quantity++;
                return;
            }
            
            event.quantity = 1;
            state.cart.push(event);
        },

        removeFromCart( state, index ) {
            state.cart.splice( index, 1 );
        },

        updateCart( state, cart ) {
            state.cart = cart;
        },

        updateOrder(state, order) {
            state.order = order;
        }

    },

    actions: {
       
        getEvents({ commit }) {
            axios.get('/api/events')
                .then((response) => {
                    commit('updateEvents', response.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        clearCart({ commit }) {
            commit('updateCart', []);
        }

    }

}