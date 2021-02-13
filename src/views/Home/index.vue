<template>
    <div class="home">
        <welcome-component></welcome-component>
        <div
            class="main d-flex justify-content-between flex-wrap align-items-center m-auto"
        >
            <button-component
                @click.native="routerHandler('info')"
                propsWidth="250px"
            >
                <template v-slot:icon>
                    <i class="fas fa-portrait"></i>
                </template>
                <template v-slot:text>
                    <div>角色簡介</div>
                </template>
            </button-component>
            <button-component
                propsWidth="250px"
                @click.native="routerHandler('project')"
            >
                <template v-slot:icon>
                    <i class="fas fa-list"></i>
                </template>
                <template v-slot:text>
                    <div>作品清單</div>
                </template>
            </button-component>
            <button-component
                @click.native="routerHandler('life')"
                propsWidth="250px"
            >
                <template v-slot:icon>
                    <i class="fas fa-male"></i>
                </template>
                <template v-slot:text>
                    <div>生涯日誌</div>
                </template>
            </button-component>
            <button-component
                propsWidth="250px"
                @click.native="routerHandler('skill')"
            >
                <template v-slot:icon>
                    <i class="fas fa-bible"></i>
                </template>
                <template v-slot:text>
                    <div>技能列表</div>
                </template>
            </button-component>
        </div>
        <timer-component></timer-component>
    </div>
</template>

<script>
import Button from '@/components/Button'
import Welcome from '@/components/Welcome'
import Timer from '@/components/Timer'
export default {
    name: 'home',
    components: {
        'button-component': Button,
        'welcome-component': Welcome,
        'timer-component': Timer,
    },
    methods: {
        routerHandler(routeName) {
            this.$router.push(`${routeName}`)
        },
    },
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/_utils';
.main {
    min-height: 30vh;
    max-width: 1024px;
    @include pad-width {
        flex-direction: column;
    }
}
</style>
