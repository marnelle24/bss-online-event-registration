<template>
    <div>
        <navigation></navigation>
        <div class="masthead">
            <div class="container px-5">
                <router-view></router-view>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Navigation from './layouts/Navigation.vue';
import Footer from './layouts/Footer.vue';

export default {
    components: {
        Navigation,
        Footer
    },
    name: 'main-app',
}
</script>