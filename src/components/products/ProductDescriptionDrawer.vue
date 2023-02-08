<template>
    <div class="drawer-background" :class="{show: active}" @click="$emit('close-product-drawer')"/>

    <div class="drawer" :class="{show: active}">
        <div class="drawer-close" @click="$emit('close-product-drawer')">
            X
        </div>

        <div v-if="product" class="product-details">
            <h3 class="text-center">{{ product.name }}</h3>
            <p class="description">{{ product.description }}</p>
            <h3 class="text-center">${{ product.price.toFixed(2) }}</h3>

            <div class="cart-total" v-if="product_total">
                <h3>In Cart</h3>
                <h4>{{ product_total }}</h4>
            </div>

            <div class="button-container">
                <button class="remove" @click="removeFromCart()">Remove</button>
                <button class="add" @click="addToCart()">Add</button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:['product', 'active'],
    methods:{
        addToCart() {
            this.$store.commit('addToCart', this.product)
        },
        removeFromCart(){
            this.$store.commit('removeFromCart', this.product)
        }
    },
    computed: {
        product_total(){
            return this.$store.getters.productQuantity(this.product)
        }
    }
}

</script>
