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
            projectData: [
                {
                    id: 0,
                    group: '工作專案',
                    isopen: true,
                    list: [
                        {
                            id: 0,
                            title: '監控網站',
                            content:
                                '配合後端排程，監控目前所擁有的網站定時打API檢查查看是否出問題。',
                            imgs: [],
                        },
                        {
                            id: 1,
                            title: '接單系統',
                            content: '處理B2B的操作使用介面。',
                            imgs: [],
                        },
                        {
                            id: 2,
                            title: '報表訂閱',
                            content: '處理B2B的操作使用介面。',
                            imgs: [],
                        },
                        {
                            id: 3,
                            title: '預約報到系統',
                            content: '處理B2C的操作使用介面。',
                            imgs: [],
                        },
                        {
                            id: 4,
                            title: 'LandingPage',
                            content: '一頁式廣告型網站。',
                            imgs: [],
                        },
                    ],
                },
                {
                    id: 1,
                    group: '網頁作品',
                    isopen: true,
                    list: [
                        {
                            id: 0,
                            title: '賽德龐克網站',
                            content:
                                '以遊戲2077為設計發想，並且用vue框架開發各種組件，使用到各式排版技巧與簡單特效，用scss來加速開發速度，同時也兼容手機畫面。',
                            imgs: [],
                        },
                        {
                            id: 1,
                            title: '工作室網站',
                            content:
                                '夢想有一間工作室當作設計發想，使用vue框架開發，並且有撰寫後台。',
                            imgs: [],
                        },
                        {
                            id: 2,
                            title: 'landingPage',
                            content:
                                '使用大量jquery製作大量特效的一頁式個人介紹網站。',
                            imgs: [],
                        },
                        {
                            id: 3,
                            title: '烘焙電商平台',
                            content:
                                '團隊作品，撰寫會員系統與第三方API串接，並且擔任整合角色。',
                            imgs: [],
                        },
                    ],
                },
            ],
        }
    },
    components: {
        'list-project-component': ListProject,
        'list-content-component': ListContent,
    },
    computed: {
        currentListData() {
            return this.projectData[this.currentGroup].list[this.currentIndex]
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
