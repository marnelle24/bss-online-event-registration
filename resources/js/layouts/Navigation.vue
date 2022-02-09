<template>
	<!-- Navigation-->
	<nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm py-1" id="mainNav">
		<div class="container px-5">
			<a class="navbar-brand fw-bold" href="/">
				<img :src="logo" alt="Logo" class="mr-2 nav_logo">
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				Menu
				<i class="bi-list"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
					<li class="nav-item">
						<router-link 
							:to="{ name: 'events.index'}" 
							:class="[($route.fullPath=='/events' || $route.fullPath=='/event/'+ $route.params.slug) ? 'activeMenu' : '']"
							class="nav-link me-lg-3">
							EVENTS
						</router-link>
					</li>
					<li class="nav-item">
						<router-link 
							:to="{ name: 'categories.index'}" 
							:class="[($route.fullPath=='/categories' || $route.fullPath=='/category/'+ $route.params.slug) ? 'activeMenu' : '']"
							class="nav-link me-lg-3">
							COURSES
						</router-link>
					</li>
					<li class="nav-item">
						<router-link 
							:to="{ name: 'categories.index'}" 
							:class="[($route.fullPath=='/categories' || $route.fullPath=='/category/'+ $route.params.slug) ? 'activeMenu' : '']"
							class="nav-link me-lg-3">
							CATEGORIES
						</router-link>
					</li>
					<li class="nav-item">
						<router-link 
							:to="{ name: 'categories.index'}" 
							:class="[($route.fullPath=='/categories' || $route.fullPath=='/category/'+ $route.params.slug) ? 'activeMenu' : '']"
							class="nav-link me-lg-3">
							ABOUT US
						</router-link>
					</li>
					<li class="nav-item">
						<router-link 
							:to="{ name: 'categories.index'}" 
							:class="[($route.fullPath=='/categories' || $route.fullPath=='/category/'+ $route.params.slug) ? 'activeMenu' : '']"
							class="nav-link me-lg-3">
							CONTACT US
						</router-link>
					</li>
					<!-- cart -->
					<li class="nav-item pt-2">
						<router-link 
							class="rounded-circle bg-primary p-1"
							:class="[this.$store.state.systemStore.cart.length > 0 ? '' : 'me-lg-3']"
							:to="{ name: 'order.checkout' } ">
							<svg xmlns="http://www.w3.org/2000/svg" 
								class="navIcon text-white" 
								fill="none" 
								viewBox="0 0 24 29" 
								stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
							
						</router-link>
						<span v-if="this.$store.state.systemStore.cart.length > 0" class="small cartCounter">
							{{ getTotalItems() }}
						</span>
					</li>
					<!-- profile photo -->
					<li class="nav-item pt-2">
						<a href="#" class="rounded-circle bg-primary p-1">
							<svg xmlns="http://www.w3.org/2000/svg" 
								class="navIcon text-white" 
								fill="none" 
								viewBox="0 0 24 29" 
								stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'navigation',
    data() {
        return {
            logo: '../storage/bss-logo.png',
        }
    },
	methods: {
		...mapActions({
            signOut:"auth/logout"
        }),
		getTotalItems() {
			let getCartTotalItem = 0;
			if(this.$store.state.systemStore.cart.length <= 0)
				return getCartTotalItem;

			this.$store.state.cart.forEach((value) => {
				getCartTotalItem = getCartTotalItem + value.quantity; 
			});

			return getCartTotalItem;
		},
        async logout(){
            await axios.post('/logout').then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        }

	}
}
</script>
<style scoped>
	.nav_logo {
		width: 30%;
	}

	.activeMenu {
		font-weight: bold;
		color: #2937f0 !important;
		border-bottom: 3px solid #2937f0
	}
	.nav-link:hover {
		color: #2734ec;
	}
	.navIcon {
		width: 20px;
	}
	.cartCounter {
		padding-block: 0px;
		position: relative;
		top: -18px;
		right: 14px;
		color: #2734ec;
		font-weight: bolder;
		text-shadow: 1px 1px 10px #444;
	}
</style>