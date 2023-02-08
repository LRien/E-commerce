<template>
    <nav>
        <div class="nav_container">

            <!--Navigation Links-->
            
            <div class="navlinks">
                <ul>
                    <li>
                        <router-link to="ShopAll" class="right-links">Shop All</router-link>
                    </li>
                    <li>
                        <router-link to="NewCategory" class="right-links">New</router-link>
                    </li>
                    <li>
                        <router-link to="BestSellers" class="right-links">Best Sellers</router-link>
                    </li>
                    <li>
                        <router-link to="MenCategory" class="right-links">Men</router-link>
                    </li>
                    <li>
                        <router-link to="WomenCategory" class="right-links">Women</router-link>
                    </li>
                </ul>
            </div>         

            <div class="logo">
                <router-link to="/"><img class="Mil" src="@/assets/Images/Logo.png" alt=""></router-link>
            </div>
            
            <!--Carts and other icons-->

            <div class="utilities">
                <ul>
                    <li>
                        <a href="#" class="left-links">Search</a>
                    </li>
                    <li>
                        <router-link to="CartPage" class="left-links">Cart (0)</router-link>
                    </li>
                    <li>
                        <router-link to="WishList" class="left-links">Wishlist</router-link>
                    </li>
                    <li>
                        <router-link to="LoginSignUp" class="left-links">Login/SignUp</router-link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '@/assets/Styles/navigationstyles.scss';
</style>