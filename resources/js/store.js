export default {

    state: {

        events: [],
        departments: [],
        categories: [],
        cart: []

    },

    mutations: {

        updateEvents( state, events ) {
            state.events = events;
        },

        addToCart( state, event ) {

            // check if the selected event is already in the cart
            let eventInCartIndex = state.cart.findIndex( item => item.slug === event.slug);

            // if the event is already selected
            if(eventInCartIndex !== -1) {
                alert('Selected item already in the cart.');
                return;
            }
            state.cart.push( event );
        },

        removeFromCart( state, index ) {
            state.cart.splice( index, 1 );
        },

        updateCart( state, cart ) {
            state.cart = cart;
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