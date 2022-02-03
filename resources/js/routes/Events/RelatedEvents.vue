<template>
    <section class="border-3 border-green-400">
        <h3>Related Events</h3>
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
        }
    }
}
</script>
