<template>
    <section class="px-5 mt-12">
        <div class="lg:ml-30 md:ml-0 sm:ml-0 w-100">
            <h4 class="text-gray-900 text-lg font-semibold">Checkout Orders</h4> 
        </div>
        <div class="lg:ml-30 md:ml-0 sm:ml-0 w-100 border-b-1 mt-5">
            <table class="rounded-lg bg-white divide-y divide-gray-300 overflow-hidden w-full" v-if="cart.length">
                <thead class="sm:text-sm">
                    <tr>
                        <th class="px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-left">Item</th>
                        <th class="px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-center">Quantity</th>
                        <th class="px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-left">Price</th>
                        <th class="px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-left">Total</th>
                        <th class="px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200">&nbsp;</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="(item, index) in cart" :key="item.id" class="border-b-1 border-gray-400">
                        <td class="p-4">
                            <router-link 
                                class="hover:text-gray-600 font-semibold text-gray-800"
                                :to="{ 
                                    name: 'event.show', 
                                    params: {'slug': item.slug} 
                                }">
                                {{item.event_name}}
                            </router-link>
                        </td>
                        <td class="p-4 text-center">{{ item.quantity }}</td>
                        <td class="p-4 text-left">{{ formatCurrency(item.amount) }}</td>
                        <td class="p-4 text-left">{{ cartLineTotal(item) }}</td>
                        <td class="p-4">
                            <button 
                                @click="removeFromCart(index)" 
                                class="flex ml-auto bg-none text-red-500 hover:text-red-700 font-normal">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-t-2 bg-gray-100">
                        <td class="p-4 font-bold">Total Amount</td>
                        <td class="p-4 font-bold text-center">{{ cartQuantity }}</td>
                        <td>&nbsp;</td>
                        <td class="p-4 font-bold text-left">{{ cartTotal }}</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
            <p v-else class="text-left italic text-lg text-gray-500">No items on the cart found.</p>
        </div>
        <div v-if="cart.length" class="lg:ml-30 md:ml-0 sm:ml-0 w-100 border-b-1 mt-5">
            <button
                @click="isProceedToPayment=true"
                class="flex ml-auto bg-green-500 hover:bg-green-600 font-semibold rounded-full py-2 px-3 text-white">
                PROCEED TO PAYMENT
            </button>
        </div>
        <PaymentForm v-if="isProceedToPayment"></PaymentForm>
    </section>
</template>
<script>
    import PaymentForm from './PaymentForm.vue';
    
    export default {
        components: {
            PaymentForm
        },
        data() {
            return {
                isProceedToPayment: false
            }
        },
        computed: {
            cart() {
                return this.$store.state.cart;
            },
            cartQuantity() {
                return this.$store.state.cart.reduce((acc, item) => acc + item.quantity, 0);
            },
            cartTotal() {
                let price = this.$store.state.cart.reduce((acc, item) => acc + (item.amount * item.quantity), 0);
                return this.formatCurrency(price);
            }
        },
        methods: {
            removeFromCart(index) {
                this.$store.commit('removeFromCart', index);
            },
            cartLineTotal(item) {
                let price  = (item.amount * item.quantity);
                return this.formatCurrency(price);
            },
            formatCurrency(price) {
                price = (price / 100);
                return price.toLocaleString('en-SG', {style: 'currency', currency: 'SGD'});
            },
        }
    }
</script>
<style scoped>

</style>