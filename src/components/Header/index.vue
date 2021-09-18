<template>
    <div class="header-component d-flex justify-content-between">
        <div class="d-flex">
            <h2>
                <span>
                    角色
                </span>
                前端工程師
            </h2>
            <h2>
                <span>
                    姓名
                </span>
                劉瀚文
            </h2>
            <h2 class="mode" @click="modeHandler">
                <i class="fas fa-moon" v-show="mode == 'dark'"></i>
                <i class="fas fa-sun" v-show="mode == 'light'"></i>
            </h2>
        </div>
        <nav-component></nav-component>
        <div class="money"><i class="fas fa-funnel-dollar"></i>{{ money }}</div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
    data() {
        return {
            mode: 'light',
            money: '0',
        }
    },
    components: {
        'nav-component': Nav,
    },
    name: 'header-component',
    mounted() {
        this.modeHandler()
        for (let i = 0; i <= 999; i++) {
            setTimeout(() => {
                this.money = parseInt(this.money) + 1
            }, i)
        }
    },
    methods: {
        modeHandler() {
            const BODY = document.querySelector('body')
            if (this.mode == 'light') {
                this.mode = 'dark'
                BODY.classList.remove('light')
                BODY.classList.add('dark')
                return
            }
            if (this.mode == 'dark') {
                this.mode = 'light'
                BODY.classList.remove('dark')
                BODY.classList.add('light')
                return
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.header-component {
    border-bottom: 2px solid $primary;
    box-shadow: 0px 1px 0px 0px lighten($primary, 15%);
    @include font(26px);
    padding-right: 1em;
    @include pad-width {
        justify-content: center;
    }
    h2 {
        color: $font-color-blue;
        text-shadow: 0 0 5px $font-color-blue, 0 0 8px $font-color-blue;
        text-indent: 1em;
        &.mode {
            text-indent: none;
        }
        span {
            font-size: 16px;
        }
        @include com-width {
            font-size: 18px;
        }
    }
    .money {
        font-size: 26px;
        letter-spacing: 1.5px;
        @include light-primary;
        i {
            font-size: 18px;
            color: yellow;
            line-height: 32px;
            text-shadow: none;
            margin-right: 0.5em;
            vertical-align: text-bottom;
        }
        @include com-width {
            display: none;
        }
    }
    .mode {
        cursor: pointer;
    }
}
</style>
