<template>
    <div class="container h-100 mt-5">
        <div class="row h-100 align-items-center">
            <div class="col-12 col-md-4 offset-md-4 col-sm-8 offset-sm-2">
                <div class="card shadow sm">
                    <div class="card-body">
                        <h1 class="text-center">Login</h1>
                        <hr class="my-4"/>
                        <!-- <p v-if="!isActiveUser" class="text-danger">Your account is not yet approved. Please contact administration for inquiries.</p> -->
                        <p v-if="loginFailed.error.response ? (loginFailed.error.response.status==401 ? true : false) : ''" class="text-danger">Opps. you are aunthorized to login in the system.</p>
                        <form action="javascript:void(0)" class="row" method="post">
                            <div class="form-group col-12">
                                <label for="email" class="font-weight-bold">Email</label>
                                <input type="text" v-model="auth.email" name="email" id="email" class="form-control">
                            </div>
                            <div class="form-group col-12 mt-4">
                                <label for="password" class="font-weight-bold">Password</label>
                                <input type="password" v-model="auth.password" name="password" id="password" class="form-control">
                            </div>
                            <div class="col-12 my-4">
                                <button type="submit" :disabled="processing" @click="login" class="btn btn-primary btn-block">
                                    {{ processing ? "Please wait" : "Login" }}
                                </button>
                            </div>
                            <!-- <div class="col-12 text-center">
                                <label>Don't have an account? <router-link :to="{name:'register'}">Register Now!</router-link></label>
                            </div> -->
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name:"login",
    data(){
        return {
            auth:{
                email:"marnelle24@gmail.com",
                password:"1231"
            },
            processing: false,
        }
    },
    computed: {
        ...mapGetters({
            loginFailed: 'auth/invalidLoggedIn',
            isActiveUser: 'auth/isActiveUser'
        })
    },
    created() {
    },
    methods:{

        ...mapActions({
            signIn:'auth/login'
        }),

        async login() {
            this.processing = true

            await axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    this.signIn(this.auth)
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    this.processing = false
                })
        },
    }
}
</script>