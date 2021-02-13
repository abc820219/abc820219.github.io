<template>
    <div
        class="button-component"
        :style="{ width: propsWidth, height: propsHeight }"
    >
        <slot name="icon"> </slot>
        <div class="content d-flex justify-content-between">
            <slot name="text"> </slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        propsWidth: {
            type: String,
            default: '200px',
        },
        propsHeight: {
            type: String,
            default: '40px',
        },
    },
    name: 'button-component',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.button-component {
    position: relative;
    display: inline-block;
    height: 40px;
    color: lighten($font-color-blue, 12%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 96% 100%, 0 100%);
    cursor: pointer;
    > i {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        font-size: 12px;
    }
    .content {
        position: absolute;
        left: 1px;
        right: 1px;
        top: 1px;
        bottom: 1px;
        padding-right: 10px;
        @include font(16px, 38px);
        text-indent: 2em;
        background-color: rgba($dark, 0.8);
        clip-path: polygon(0 0, 100% 0, 100% 85%, 96% 100%, 0 100%);
    }
    &::after {
        content: '';
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        background-color: $primary;
        z-index: -1;
    }
    &:hover {
        .content {
            background-color: rgba($dark, 0.5);
        }
    }
}
</style>
