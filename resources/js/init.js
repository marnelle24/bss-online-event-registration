export function initialize(store, router) {

	router.beforeEach((to, from, next) => {

		if(to.meta.middleware == "guest") 
		{
			if(store.state.auth.authenticated) {
				next({ name:"dashboard" })
			}
			next()
		}
		else
		{
			if(store.state.auth.authenticated){
				next()
			}
			else {
				next({ name:"login" })
			}
		}


	});

	axios.interceptors.response.use(null, (error) => {
		
		if(error.response.status === 401) {
			store.dispatch('auth/logout');
			router.push({ name:'login' });
		}
		return Promise.reject(error);

	});

	if (store.getters.user) {
        setAuthorization(store.getters.user.token);
    }
}

export function setAuthorization(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}