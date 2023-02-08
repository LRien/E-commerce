<template>
    <div class="products">

        <ProductDescriptionDrawer 
        :product="product"
        :active="active.product_drawer"
        v-on:close-product-drawer="closeProductDrawer"/>

        <!--Products Card Container-->
        <div class="products-cards-containers">
            <!--Render the items itself-->
            <ProductSummaryCard
                v-for="product in items"
                :key="product.id"
                :product="product"
                v-on:view-product="viewProduct($event)"/>
        </div>
    </div>
</template>

<script>
// Importing Item Data
import items from '../assets/data/items.js'
import ProductSummaryCard from './products/ProductSummaryCard.vue'
import ProductDescriptionDrawer from '../components/products/ProductDescriptionDrawer.vue'
export default{
    name:'product-display',
    components:{
        ProductSummaryCard, ProductDescriptionDrawer
    },
// Data Implementation
    data(){
        return{
            items:items,
            product:null,
            active:{
                product_drawer:false
            }
        }
    },
    methods:{
        viewProduct(product){
            this.product =product
            this.active.product_drawer = true
            console.log(this.product)
        },
        closeProductDrawer(){
            this.active.product_drawer = false
        }
    }
}

</script>

<Style lang="scss" scoped>
    @import '../assets/Styles/product.scss';
</Style>