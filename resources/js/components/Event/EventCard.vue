<template>
    <div class="rounded overflow-hidden shadow-lg flex flex-col">
        <img class="w-full self-start" :src="`/storage/${event.posterPath}`" alt="Forest">
        <div class="p-6 self-center">
            <div class="font-bold text-xl mb-2">
                <router-link :to="{ name: 'event.show', params: { slug: event.slug }}">
                    {{ trimTextContent(event.title, 100) }}
                </router-link>
            </div>
            <p class="text-gray-700 text-base">
                {{ trimTextContent(event.description, 200) }}
            </p>
        </div>
        <div class="p-6 self-stretch mt-auto">
            <span v-for="category in event.categories" :key="category.id" 
                class="inline-block hover:bg-gray-400 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                <router-link :to="{ name: 'category.show', params: { slug: category.slug }}">{{ category.name }}</router-link>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'event-card',
    props: ['event'],
    methods: {
        trimTextContent(str, maxLen, separator=' ', addEllipses='...') {
            if(str.length <= maxLen) return str;
            return (str.substr(0, str.lastIndexOf(separator, maxLen))) + addEllipses;
        }
    }

}
</script>
