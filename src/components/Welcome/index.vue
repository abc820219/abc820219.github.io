<template>
    <div class="welcome-component" ref="welcome"></div>
</template>

<script>
export default {
    name: 'welcome-component',
    data() {
        return {
            text: [
                'welcome to my project ',
                '歡迎來到我的專案 ',
                '夢想成為專業錢端工程師 ',
                'ようこそ 私のプロジェクト ',
            ],
            timer: null,
            currentIndex: 0,
        }
    },
    mounted() {
        let _this = this
        this.timer = setTimeout(() => {
            this.timerHandler(_this.currentIndex).then(() => {
                _this.currentIndex++
            })
        }, 500)
    },
    watch: {
        currentIndex() {
            let _this = this
            let length = _this.text.length
            this.timerHandler(_this.currentIndex).then(() => {
                _this.currentIndex++
                _this.currentIndex = _this.currentIndex % length
            })
        },
    },
    methods: {
        timerHandler(index) {
            let length = this.text[index].length
            let str = this.text[index]
            const WELCOMEDOM = this.$refs.welcome
            return new Promise((resolve) => {
                for (let i = 0; i < length; i++) {
                    setTimeout(() => {
                        WELCOMEDOM.innerHTML = WELCOMEDOM.innerHTML + str[i]
                        if (i === length - 1) {
                            for (let j = 0; j < length; j++) {
                                setTimeout(() => {
                                    WELCOMEDOM.innerHTML = WELCOMEDOM.innerHTML.substring(
                                        0,
                                        WELCOMEDOM.innerHTML.length - 1
                                    )
                                    if (j === length - 1) {
                                        resolve('over')
                                    }
                                }, 100 * j)
                            }
                        }
                    }, 150 * i)
                }
            })
        },
    },
    destroyed() {
        clearTimeout(this.timer)
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.welcome-component {
    height: 30vh;
    @include font(60px);
    color: $font-color-blue;
    text-shadow: 0 0 3px $font-color-blue, 0 0 6px $font-color-blue;
    text-indent: 1em;
    line-height: 30vh;
    text-align: center;
    @include pad-width {
        font-size: 26px;
    }
}
</style>
