<template>
    <div id="app">
        <header-component></header-component>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
        <contact-component></contact-component>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Contact from '@/components/Contact'
export default {
    components: {
        'header-component': Header,
        'contact-component': Contact
    },
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
@import '@/assets/scss/_utils.scss';
[v-cloak] {
    display: none;
}
#app {
    position: relative;
    overflow-x: hidden;
    width: 100vw;
    min-height: 100vh;
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
