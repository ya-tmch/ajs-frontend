<template>
    <div>
        <header class="header p-4">
            <p style="color: white">Тут будет новая шапка</p>
            <a href="#/cart" class="btn btn-light mr-2">Корзина</a>
            <a href="#/product" class="btn btn-light">Продукт</a>
        </header>

        <router-view></router-view>

        <footer class="footer"></footer>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="scss">
    @import "scss/main";
</style>
