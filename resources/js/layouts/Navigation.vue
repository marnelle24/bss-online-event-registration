<template>
    <nav class="bg-white shadow-lg px-4">
			<div class="max-w-8xl mx-auto">
				<div class="flex justify-between">
					<div class="flex space-x-7">
						<div>
							<!-- Website Logo -->
							<a href="#" class="flex items-center p-2">
								<img :src="logo" alt="Logo" class="h-12 w-12 mr-2">
							</a>
						</div>
						<!-- Primary Navbar items -->
						<div class="hidden md:flex items-center space-x-1">
							<a href="" class="border-b-4 border-green-500 p-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300">EVENTS</a>
							<a href="" class="p-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300">COURSES</a>
							<a href="" class="p-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300">CATEGORIES</a>
							<a href="" class="p-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300">ABOUT US</a>
							<a href="" class="p-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300">CONTACT US</a>
						</div>
					</div>
					<!-- Secondary Navbar items -->
					<div class="hidden md:flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <div style="padding-block: 0px; position: relative; top: 8px; left: 7px;" class="text-xs font-semibold p-1 bg-green-300 bg-opacity-50 text-green-800 rounded-full">9</div>
                        <a href="#" class="mr-7">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </a>
                        <a href="#" class="p-2 rounded-full bg-blue-50 hover:bg-blue-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </a>
						<!-- <a href="" class="p-2 font-semibold text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">LOGIN</a> -->
					</div>
					<!-- Mobile menu button -->
					<div class="md:hidden flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<!-- mobile menu -->
			<div class="hidden mobile-menu">
				<ul class="">
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">EVENTS</a></li>
					<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">COURSES</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">CATEGORIES</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">ABOUT US</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">CONTACT US</a></li>
                    <li>
                        <a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                            CART
                            <span style="padding-block: 0px;" class="text-xs font-semibold p-1 bg-green-300 bg-opacity-50 text-green-800 rounded-full">9</span>
                        </a>
                    </li>
				</ul>
			</div>
		</nav>
</template>
<script>
export default {
    name: 'navigation',
    data() {
        return {
            logo: '../storage/bss-logo.png'
        }
    }
}
</script>