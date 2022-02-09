<template>
    <section v-if="event" class="p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- <pre>{{ event }} </pre> -->
        <div class="col-span-2">
            <img class="w-full" :src="`/storage/${event.posterPath}`" :alt="event.title">
            <p class="text-gray-800 text-4xl font-semibold pt-5 pb-3">{{ event.title }}</p>
            <div class="pb-6 mt-auto">
                <span v-for="department in event.departments" :key="department.id" 
                    class="inline-block hover:bg-yellow-600 bg-yellow-800 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2 cursor-pointer">
                    <router-link :to="{ name: 'department.show', params: { slug: department.slug }}">{{ department.name }}</router-link>
                </span>
            </div>
            <p class="text-sm font-thin italic text-gray-800 mb-1">Published on: {{ formatDate(event.created_at) }}</p>
            <p class="text-gray-600 text-md">{{ event.description }}</p>
            <div class="py-6 mt-auto">
                <p class="text-sm font-thin italic text-gray-800">Category:</p>
                <span v-for="category in event.categories" :key="category.id" 
                    class="inline-block hover:bg-gray-400 bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 mr-2 mb-2 cursor-pointer">
                    <router-link :to="{ name: 'category.show', params: { slug: category.slug }}">{{ category.name }}</router-link>
                </span>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="shadow-lg p-5 mb-10 border-t-2 border-gray-50">
                <!-- price -->
                <span class="font-normal text-sm mb-4 text-gray-600">Price: </span>
                <p class="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-700 text-2xl float-left mr-2 font-semibold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span class="text-gray-700 text-2xl font-semibold">{{ event.price === 0 ? 'FREE' : formatCurrency(event.price) }}</span>
                </p>
                <!-- date -->
                <span class="font-normal text-sm mt-4 text-gray-600">Date: </span>
                <p class="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 text-lg float-left mr-2 font-thin" fill="none" viewBox="0 0 24 20" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="text-gray-700 text-lg">{{ formatDate(event.startDate) }}</span>
                </p>
                <!-- time -->
                <span class="font-normal text-sm mb-4 text-gray-600">Time: </span>
                <p class="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 text-lg float-left mr-2 font-thin" fill="none" viewBox="0 0 24 20" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-gray-700 text-lg">{{ formatTime(event.startTime) }} - {{ formatTime(event.endTime) }}</span>
                </p>
                <!-- venue -->
                <span class="font-normal text-sm mb-4 text-gray-600">Venue: </span>
                <p class="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 text-lg float-left mr-2 font-thin" fill="none" viewBox="0 0 24 20" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    <template v-if="event.eventType === 'online'">
                        <img src="https://img.icons8.com/color/25/000000/zoom.png" class="float-left mr-2"/>
                        <span class="text-gray-700 text-lg font-font-semibold">
                            {{ parsingJSONData(event.onlineEventDetails).platform }}
                        </span>
                    </template>
                    <span v-else class="text-gray-700 text-lg">{{ event.venue }}</span>
                </p>
            </div>
            <div class="cursor-pointer text-center hover:bg-blue-500 bg-blue-600 text-md text-white font-bold shadow-lg p-3 w-full" 
                    @click="addToCart(event)">ADD TO CART
            </div>
            <div v-if="this.$store.state.cart.length > 0" class="mt-3 cursor-pointer hover:bg-green-500 bg-green-600 text-md text-white font-bold shadow-lg p-3 text-center">
                <router-link :to="{ name: 'order.checkout'}" >PROCEED TO CHECKOUT</router-link>
            </div>
        </div>
    </section>
</template>


<script>
import moment from 'moment';

export default {
    computed: {
        events() {
            return this.$store.state.events;
        },
        event() {
            return this.events.find( event => event.slug === this.$route.params.slug);
        }
    },
    methods: {
        formatCurrency(price) {
            price = (price / 100);
            return price.toLocaleString('en-SG', {style: 'currency', currency: 'SGD'});
        },
        formatDate(theDate) {
            return moment(theDate).format('MMMM DD, YYYY');
        },
        formatTime(theTime) {
            let time        = moment.duration(theTime);
            let isMorning   = (time.hours() > 12) ? 'PM' : 'AM';
            let morningHour = (time.hours() > 12) ? (time.hours() - 12) : time.hours();
            let timeMinutes = (time.minutes() < 10 ? '0'+time.minutes() : time.minutes());
            return morningHour + ':' + timeMinutes + ' ' + isMorning;
        },
        parsingJSONData(theJson) {
            return JSON.parse(theJson);
        },
        addToCart(event) {

            let addtocart = {
                'event_id'  : event.id,
                'event_name': event.title,
                'slug'   : event.slug,
                'amount' : event.price
            };
            this.$store.commit('addToCart', addtocart);
        }
    }
}
</script>
