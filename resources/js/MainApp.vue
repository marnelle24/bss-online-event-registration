<template>
    <div>
        <!-- <h2 class="text-xl">Hello World. Main App vue here</h2> -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
    name: 'main-app',

    created() {
        this.$store.dispatch('getEvents')
             .then(_ => {})
             .catch( (error) => console.log(error))
    }

}
</script>