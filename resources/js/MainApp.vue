<template>
    <section>
        <Navigation></Navigation>
        <router-view></router-view>
    </section>
</template>
<script>
import Navigation from './layouts/Navigation.vue';

export default {
    components: {
        Navigation
    },
    name: 'main-app',

    created() {
        this.$store.dispatch('getEvents')
             .then(_ => {})
             .catch( (error) => console.log(error))
    }
}
</script>