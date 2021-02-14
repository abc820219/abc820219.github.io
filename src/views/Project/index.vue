<template>
    <div class="project d-flex justify-content-center">
        <div class="d-flex">
            <list-project-component
                :projectData="projectData"
                :currentIndex.sync="currentIndex"
                :currentGroup.sync="currentGroup"
            ></list-project-component>
            <list-content-component
                :currentListData="currentListData"
            ></list-content-component>
        </div>
    </div>
</template>

<script>
import ListProject from '@/components/ListProject'
import ListContent from '@/components/ListContent'
export default {
    name: 'project',
    data() {
        return {
            currentGroup: 0,
            currentIndex: 0,
        }
    },
    components: {
        'list-project-component': ListProject,
        'list-content-component': ListContent,
    },
    computed: {
        projectData: {
            get() {
                return this.$store.state.allData.projectData
            },
            set(v){
                this.$store.state.allData.projectData = v
            }
        },
        currentListData() {
            return this.projectData[this.currentGroup].list[this.currentIndex]
        },
    },
    watch: {
        currentIndex() {
            this.projectData = this.projectData.slice()
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.project {
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
