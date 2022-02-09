<template>
    <section class="row">
        <template v-if="events.length">
            <EventCard v-for="event in events" :key="event.id" :event='event'></EventCard>
        </template>
        <p v-else>Loading....</p>
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import EventCard from './EventCard.vue';

export default {
    components: {
        EventCard
    },
    computed: {

      events() {
          return this.$store.state.systemStore.events;
      }
        
    },
    mounted() {
        this.getEvents()
    },

    methods: {
        ...mapActions({
            getEvents: 'systemStore/getEvents'
        })
    }
}
</script>
