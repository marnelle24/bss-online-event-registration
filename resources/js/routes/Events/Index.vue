<template>
    <div>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div v-for="event in events" :key="event.id" class="rounded overflow-hidden shadow-lg">
                <img class="w-full" :src="`/storage/${event.posterPath}`" alt="Forest">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        <router-link :to="{ name: 'event.show', params: { slug: event.slug }}">
                            {{ trimTextContent(event.title, 100) }}
                        </router-link>
                    </div>
                    <p class="text-gray-700 text-base">{{ trimTextContent(event.description, 200) }}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span v-for="category in event.categories" :key="category.id" 
                        class="inline-block hover:bg-gray-400 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                        <router-link :to="{ name: 'category.show', params: { slug: category.slug }}">{{ category.slug }}</router-link>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    computed: {
        
        events() {
            return this.$store.state.events;
        }
        
    },

    methods: {

        trimTextContent(str, maxLen, separator=' ', addEllipses='...') {
            if(str.length <= maxLen) return str;
            return (str.substr(0, str.lastIndexOf(separator, maxLen))) + addEllipses;
        }

    }

}
</script>
