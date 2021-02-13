<template>
    <div id="app">
        <header-component></header-component>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>
<script>
import Header from '@/components/Header'
export default {
    components: {
        'header-component': Header,
    },
    mounted() {
        const BODY = document.querySelector('body')
        BODY.classList.add('dark')
    },
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
@import '@/assets/scss/_utils.scss';
[v-cloak] {
    display: none;
}
body {
    overflow-x: hidden;
}
#app {
    position: relative;
    width: 100vw;
    height: 100vh;
    padding: 10px;
}
#app::after {
    content: '';
    display: block;
    @include psa(0, 0, 0, 0);
    background-image: url('/dist/images/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
}
</style>
<style src="./dark.scss" lang="scss"></style>
<style src="./light.scss" lang="scss"></style>
