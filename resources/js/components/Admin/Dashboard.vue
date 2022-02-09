<template>
    <div>
       <h3>{{user }}</h3>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"admin-dashboard",
    data(){
        return {
            user:this.$store.state.auth.user
        }
    },
   
}
</script>