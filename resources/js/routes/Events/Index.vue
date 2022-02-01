<template>
    <section class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <p v-if="!events.length">Loading....</p>
        <EventCard v-else v-for="event in events" :key="event.id" :event=event></EventCard>
    </section>
</template>

<script>
import EventCard from '../../components/Event/EventCard.vue';

export default {
    components: {
        EventCard
    },
    computed: {
        events() {
            return this.$store.state.events;
        }
    }
}
</script>
