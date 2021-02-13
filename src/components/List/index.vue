<template>
    <ul class="list-component">
        <li
            v-for="list in listData"
            :key="list.id"
            @click="changeContentHandler(list.id)"
        >
            <button-component propsWidth="300px">
                <template v-slot:text>
                    {{ list.title }}
                    <span> </span>
                    <span class="sub-text">
                        <span
                            :style="{
                                color: list.status === '困難' ? 'red' : '',
                            }"
                        >
                            難度:{{ list.status }}
                        </span>
                        <span :style="{ color: list.isFinished ? 'gray' : '' }">
                            {{ list.isFinished ? '(已完成)' : '(進行中)' }}
                        </span>
                    </span>
                </template>
            </button-component>
        </li>
    </ul>
</template>

<script>
import Button from '@/components/Button'
export default {
    props: {
        currentIndex: {
            type: Number,
            default: null,
        },
        listData: {
            type: Array,
            default() {
                return []
            },
        },
    },
    name: 'list-component',
    components: {
        'button-component': Button,
    },
    data() {
        return {}
    },
    methods: {
        changeContentHandler(id) {
            console.log(id)
            this.$emit('update:currentIndex', id)
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.list-component {
    padding: 0 20px;
    min-height: 80vh;
    max-height: 80vh;
    overflow-y: scroll;
    li + li {
        margin-top: 3px;
    }
    .sub-text {
        font-size: 12px;
    }
}
</style>
