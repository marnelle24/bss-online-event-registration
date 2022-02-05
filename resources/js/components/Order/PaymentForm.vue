<template>
    <section>
        <div class="lg:ml-30 md:ml-0 sm:ml-0 w-100 mt-10">
            <hr class="mb-10" />
            <h4 class="text-gray-900 font-semibold text-2xl">Payment Details</h4> 
        </div>
        <div class="lg:ml-30 md:ml-0 sm:ml-0 w-100 mt-10">
            <div class="flex flex-wrap -mx-2 mt-4">
                <div class="p-2 w-full">
                    <div class="relative">
                        <label for="card_element" class="leading-7 text-sm text-gray-40">Credit Card Information</label>
                        <div id="card-element"></div>
                    </div>
                </div>
                <div class="p-2 mb-24 w-full">
                    <button 
                        class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:ountline-none"
                        @click="processPayment()"
                        :disabled="paymentProcessing"
                        v-text="paymentProcessing ? 'Processing' : 'Pay Now' ">
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { loadStripe } from '@stripe/stripe-js';

    export default {
        props: [],
        name: 'PaymentForm',
        data() {
            return {
                stripe: {},
                cardElement: {},
                paymentProcessing: false,
                user: {
                    title: 'Mr',
                    givenName: 'Marnelle',
                    familyName: 'Apat',
                    email: 'marnelle24@gmail.com',
                    contactNo: 'marnelle24@gmail.com',
                    address1: 'Arcenas St, Sta Ana',
                    address2: 'Labango',
                    city: 'Cebu City',
                    country: 'SG',
                    postcode: '6000'
                }
            }
        },
        async mounted() {
            const stripe_apiKey = 'pk_test_51KPSpAGYOLqshLvifq7OcpiqvhGn1AZislKKhYBXA90Tk7vcvJ1hkXX93m86Tp1wJWhp8Ohfml6GzXzCo1PKjuSo005hWihw5c';

            this.stripe = await loadStripe(stripe_apiKey);

            const elements = this.stripe.elements();

            this.cardElement = elements.create('card', {
                classes: {
                    base: 'bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out'
                }
            });

            this.cardElement.mount('#card-element');
        },
        methods: {
            async processPayment() {

                // send the payment information to Laravel + Stripe
                this.paymentProcessing = true;

                const { paymentMethod, error } = await this.stripe.createPaymentMethod(
                    'card', 
                    this.cardElement, 
                    {
                        billing_details: {
                                name: this.user.title + ' ' + this.user.givenName + ' ' + this.user.familyName,
                                email: this.user.email,
                                address: {
                                    line1: this.user.address1,
                                    line2: this.user.address2,
                                    city: this.user.city,
                                    country: this.user.country,
                                    postal_code: this.user.postcode
                                }
                        },
                    }
                );
                
                // error processing the payment
                if(error) {
                    this.paymentProcessing = false;
                    alert(error);
                }
                // no error during the payment processing
                else {
                    this.user.payment_method_id = paymentMethod.id;
                    this.user.amount = this.$store.state.cart.reduce((acc, item) => acc + (item.amount * item.quantity), 0);
                    this.user.cart = JSON.stringify(this.$store.state.cart);

                    // store in the database after payment processing
                    axios.post('/api/purchase', this.user)
                        .then((response) => {
                            this.paymentProcessing = false;
                            // console.log(response);

                            this.$store.commit('updateOrder', response.data);
                            this.$store.dispatch('clearCart');

                            this.$router.push({ name: 'order.summary' });

                        })
                        .catch((error) => {
                            this.paymentProcessing = false;
                            alert(error);
                        });
                }

            }


        }
    }
</script>