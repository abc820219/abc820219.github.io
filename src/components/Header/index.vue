<template>
    <div class="header-component d-flex justify-content-between">
        <div class="d-flex">
            <h2>
                助理工程師
                <span>
                    角色
                </span>
            </h2>
            <h2>
                劉瀚文
                <span>
                    姓名
                </span>
            </h2>
        </div>
        <nav-component></nav-component>
        <div class="money"><i class="fas fa-funnel-dollar"></i>000000</div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
    components: {
        'nav-component': Nav,
    },
    name: 'header-component',
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
        span {
            font-size: 16px;
        }
        @include com-width {
            font-size: 20px;
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
}
</style>
