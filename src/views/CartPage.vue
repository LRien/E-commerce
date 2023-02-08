<template>
    <div>
        This is cart page

        <CartItemCard
        v-for="product in products"
        :key="product.id"
        :product="product"/>
    </div>
</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue'

export default{
    props:['product'],
    components:{
        CartItemCard
    },
    computed:{
        products(){
            return this.$store.getters.cartItems
        }
    },
}

</script>
