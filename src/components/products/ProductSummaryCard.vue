<template>
    <div class="card" @click="$emit('view-product', product) ">
        <!--Render The Items-->
        <h3 class="product-name">{{ product.name }}</h3>
        <h5 class="price"><span class="price-text">Price: </span>${{ product.price.toFixed(2) }}</h5>
        <p class="description">Description: {{ description }}</p>
        <button class="vue-product-button">Add To Cart</button>
    </div>
</template>
<script>
export default{
    props:['product'],
    computed:{
        description(){
            return this.product.description.substring(0, 150)
        }
    }
}
</script>
