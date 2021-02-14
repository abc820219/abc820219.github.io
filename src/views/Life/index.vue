<template>
    <div class="life d-flex justify-content-center">
        <div class="d-flex">
            <list-component
                :listData="listData"
                :currentIndex.sync="currentIndex"
            ></list-component>
            <list-content-component
                :currentListData="currentListData"
            ></list-content-component>
        </div>
    </div>
</template>

<script>
import List from '@/components/List'
import ListContent from '@/components/ListContent'
export default {
    name: 'life',
    components: {
        'list-component': List,
        'list-content-component': ListContent,
    },
    data() {
        return {
            currentIndex: 0,
        }
    },
    computed: {
        listData() {
            return this.$store.state.allData.listData
        },
        currentListData() {
            return this.listData[this.currentIndex]
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.life {
    > div {
        width: 1024px;
        padding-top: 60px;
        > div {
            flex: 1 1 50%;
        }
    }
    .listContent-component {
        padding-left: 60px;
        @include pad-width {
            padding-left: 0px;
        }
    }
    @include pad-width {
        > div {
            padding-top: 30px;
            flex-direction: column;
        }
    }
}
</style>
