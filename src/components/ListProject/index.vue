<template>
    <ul class="list-project-component">
        <li v-for="data in projectData" :key="data.id">
            <button-component
                propsWidth="350px"
                @click.native="data.isopen = !data.isopen"
            >
                <template v-slot:icon>
                    <i class="fas fa-minus" v-show="data.isopen"></i>
                    <i class="fas fa-plus" v-show="!data.isopen"></i>
                </template>
                <template v-slot:text>
                    {{ data.group }}
                </template>
            </button-component>
            <ul v-show="data.isopen">
                <li
                    v-for="list in data.list"
                    :key="list.id"
                    @click="contentHandler(data.id, list.id)"
                >
                    <button-component propsWidth="300px">
                        <template v-slot:text>{{ list.title }}</template>
                    </button-component>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
import Button from '@/components/Button'
export default {
    name: 'list-project-component',
    props: {
        projectData: {
            type: Array,
            default() {
                return []
            },
        },
    },
    components: {
        'button-component': Button,
    },
    data() {
        return {}
    },
    methods: {
        contentHandler(groupId, listId) {
            this.$emit('update:currentGroup', groupId)
            this.$emit('update:currentIndex', listId)
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.list-project-component {
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
