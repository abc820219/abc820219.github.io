<template>
    <div class="timer-component d-flex align-items-center">
        <span>
            {{ content }}
        </span>
        <button-component class="weather">
            <template v-slot:text>
                <h1>台北 : {{ weather }}</h1>
            </template>
        </button-component>
    </div>
</template>

<script>
import axios from 'axios'
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
            weather: null,
        }
    },
    mounted() {
        let _this = this
        _this.nowTimeHandler()
        this.timer = setInterval(() => {
            _this.nowTimeHandler()
        }, 1000)
        axios
            .get(
                'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-E0868EAC-4F39-4666-98D5-35722CDE9F24&limit=1&offset=0&format=JSON&locationName=%E8%87%BA%E5%8C%97%E5%B8%82&elementName=Wx'
            )
            .then((res) => {
                this.weather =
                    res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName
            })
            .catch((err) => {
                console.log(err)
            })
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
    @include pad-width {
        bottom: 60px;
    }
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
.weather {
    @include pad-width {
        display: none;
    }
}
</style>
