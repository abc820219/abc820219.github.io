<template>
    <div class="carousell-component d-flex justify-content-center">
        <a href="javascript:;" v-if="currenImg && currenImg.length">
            <img :src="currenImg" alt="" />
        </a>
    </div>
</template>

<script>
export default {
    props: {
        imgs: {
            type: Object,
            default() {
                return {}
            },
        },
    },
    data() {
        return {
            currentIndex: 0,
            timer: null,
        }
    },
    name: 'carousell-component',
    mounted() {
        this.carousellHandler()
    },
    computed: {
        currenImg() {
            return this.imgs.imgList ? this.imgs.imgList[this.currentIndex] : []
        },
    },
    methods: {
        carousellHandler() {
            if (this.imgs.imgList) {
                this.timer = setInterval(() => {
                    this.currentIndex += 1
                    if (this.currentIndex >= this.imgs.imgList.length)
                        this.currentIndex =
                            this.currentIndex % this.imgs.imgList.length
                }, 2000)
            }
        },
    },
    watch: {
        imgs() {
            clearInterval(this.timer)
            this.carousellHandler()
        },
    },
    destroyed() {
        clearInterval(this.timer)
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.carousell-component {
    cursor: pointer;
    a {
        background-color: $primary;
        clip-path: polygon(
            5% 0%,
            95% 0%,
            100% 10%,
            100% 90%,
            95% 100%,
            5% 100%,
            0% 90%,
            0% 10%
        );
    }
    img {
        width: calc(100% - 8px);
        margin: 4px;
        clip-path: polygon(
            5% 0%,
            95% 0%,
            100% 10%,
            100% 90%,
            95% 100%,
            5% 100%,
            0% 90%,
            0% 10%
        );
    }
}
</style>
