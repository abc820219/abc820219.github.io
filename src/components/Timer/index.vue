<template>
    <div class="timer-component d-flex align-items-center">
        <span>
            {{ content }}
        </span>
        <button-component>
            <template v-slot:text>
                <h1>台北 : 晴天多雲</h1>
            </template>
        </button-component>
    </div>
</template>

<script>
import Button from '@/components/Button'
export default {
    name: 'timer-component',
    components: {
        'button-component': Button,
    },
    data() {
        return {
            timer: null,
            content: '',
        }
    },
    mounted() {
        let _this = this
        _this.nowTimeHandler()
        this.timer = setInterval(() => {
            _this.nowTimeHandler()
        }, 1000)
    },
    methods: {
        nowTimeHandler() {
            let nowTimer = new Date()
            let hour =
                nowTimer.getHours() < 10
                    ? '0' + nowTimer.getHours()
                    : nowTimer.getHours()
            let minutes =
                nowTimer.getMinutes() < 10
                    ? '0' + nowTimer.getMinutes()
                    : nowTimer.getMinutes()
            let seconds =
                nowTimer.getSeconds() < 10
                    ? '0' + nowTimer.getSeconds()
                    : nowTimer.getSeconds()
            this.content = hour + ':' + minutes + ':' + seconds
        },
    },
    destroyed() {
        clearInterval(this.timer)
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.timer-component {
    position: fixed;
    left: 30px;
    bottom: 30px;
}
.timer-component > span {
    padding: 10px 20px;
    margin-right: 10px;
    border-radius: 3px;
    background-color: rgba($primary, 0.8);
    color: lighten($font-color-blue, 15%);
    letter-spacing: 3px;
    @include font(20px);
}
</style>
