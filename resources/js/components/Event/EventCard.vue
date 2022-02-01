<template>
    <div class="rounded overflow-hidden shadow-lg flex flex-col">
        <img class="w-full self-start" :src="`/storage/${event.posterPath}`" :alt="event.title">
        <div class="p-6 self-center">

            <!-- title -->
            <div class="font-bold text-xl mb-2">
                <router-link :to="{ name: 'event.show', params: { slug: event.slug }}" class="text-gray-900 hover:text-gray-600">
                    {{ trimTextContent(event.title, 100) }}
                </router-link>
            </div>

            <!-- description -->
            <p class="text-gray-700 text-sm">
                {{ trimTextContent(event.description, 200) }}
            </p>

            <!-- date -->
            <p class="mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 text-sm float-left mr-2 font-thin" fill="none" viewBox="0 0 24 20" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="text-gray-700 text-xs">{{ formatDate(event.startDate) }}</span>
            </p>

            <!-- time -->
            <p class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 text-sm float-left mr-2 font-thin" fill="none" viewBox="0 0 24 20" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-gray-700 text-xs">{{ formatTime(event.startTime) }} - {{ formatTime(event.endTime) }}</span>
            </p>

            <!-- venue -->
            <p class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 text-sm float-left mr-2 font-thin" fill="none" viewBox="0 0 24 20" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-gray-700 text-xs">{{ event.venue === null ? 'Online Event' : trimTextContent(event.venue, 50) }}</span>
            </p>

            <!-- price -->
            <p class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 text-sm float-left mr-2 font-thin" fill="none" viewBox="0 0 24 20" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span class="text-gray-700 text-sm">{{ formatCurrency(event.price) }}</span>
            </p>

        </div>
        <div class="p-6 self-stretch mt-auto">
            <span v-for="category in event.categories" :key="category.id" 
                class="inline-block hover:bg-gray-400 bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 mr-2 mb-2 cursor-pointer">
                <router-link :to="{ name: 'category.show', params: { slug: category.slug }}">{{ category.name }}</router-link>
            </span>
        </div>
    </div>
</template>

<script>

import moment from 'moment';

export default {
    name: 'event-card',
    props: ['event'],
    methods: {
        trimTextContent(str, maxLen, separator=' ', addEllipses='...') {
            if(str.length <= maxLen) return str;
            return (str.substr(0, str.lastIndexOf(separator, maxLen))) + addEllipses;
        },
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
        }
    }

}
</script>
