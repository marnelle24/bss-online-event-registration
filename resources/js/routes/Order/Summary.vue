<template>
    <div class="w-full">
        <div v-if="this.$store.state.order.length" class="lg:w-2/3 w-full mx-auto mt-8 overflow-auto">
            <h2 class="text-sm title-font text-gray-500 tracking-widest my-10" v-text="'Transaction ID: ' + order.transaction_id"></h2>
            <h4 class="text-gray-900 text-2xl title-font font-medium mb-4">Thank you for your purchase</h4>
            <table class="rounded-lg bg-white divide-y divide-gray-300 overflow-hidden w-full">
                <thead>
                    <tr>
                        <th class="px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-left">Item</th>
                        <th class="px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-left">Quantity</th>
                        <th class="px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-left">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in order.events" :key="item.id" class="border-b-2 border-gray-200">
                        <td class="p-4" v-text="item.title"></td>
                        <td class="p-4" v-text="item.pivot.quantity"></td>
                        <td class="p-4" v-text="cartLineTotal(item)"></td>
                    </tr>
                    <tr class="border-t-2 bg-gray-100">
                        <td class="p-4 font-bold text-left">Total Amount</td>
                        <td class="p-4 font-bold text-left" v-text="orderQuantity"></td>
                        <td class="p-4 font-bold text-left" v-text="orderTotal"></td>
                    </tr>
                </tbody>
            </table>
            <button class="rounded-full bg-green-600 text-white py-2 px-4 mt-8 hover:bg-green-700">Print Receipt</button>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            if(!this.$store.state.order.length)
                this.$router.push({ name: 'order.checkout' });
        },
        methods: {
            cartLineTotal(item) {
                let amount = item.price * item.pivot.quantity;
                amount = (amount / 100);

                return amount.toLocaleString('en-SG', { style: 'currency', currency: 'SGD' });
            }
        },
        computed: {
            order() {
                return this.$store.state.order;
            },
            orderQuantity() {
                return this.$store.state.order.events.reduce((acc, item) => acc + item.pivot.quantity, 0);
            },
            orderTotal() {
                let amount = this.$store.state.order.events.reduce((acc, item) => acc + (item.price * item.pivot.quantity), 0);
                amount = (amount / 100);

                return amount.toLocaleString('en-SG', { style: 'currency', currency: 'SGD' });
            }
        }
    }
</script>