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
            listData: [
                {
                    id: 0,
                    title: '初心者工程師',
                    content:
                        '在科技廠擔任助理工程師，負責系統案子前端部分為主，並且把一些手動問題進行優化，加速大家整體作業，目前正在進行監控網站與接單系統的開發，有時候會去支援一些舊有案子的畫面優化，因為喜歡與人交流，身兼部門福委，常常會跨部門開會與討論。',
                    status: '基礎',
                    isFinished: false,
                },
                {
                    id: 1,
                    title: '漫長旅途',
                    content:
                        '補習期間在團體中也算是主力，可是找工作上並不如預期的順利，並且遇上CoV的影響，工作機會也不如預期的多，這段期間邊讀書邊找工作邊接一些簡單的網頁與設計案子來渡過，最後於一間科技廠擔任助理工程師一職。',
                    status: '困難',
                    isFinished: true,
                },
                {
                    id: 2,
                    title: '初嚐程式',
                    content:
                        '留學歸國後，深思自己未來想要從事的工作，因為表弟是前端工程師，所以去詢問過意見後覺得有趣，開始自學，沒想到越學越有興趣，最後決定去上課並且開始自己的程式之旅，在此期間與隊員們一起合作開發專案，常常日以繼夜的學習程式知識。',
                    status: '基礎',
                    isFinished: true,
                },
                {
                    id: 3,
                    title: '旅人',
                    content:
                        '退伍後萌生了去日本打工留學的念頭，最後於東京的JPT語言學校最高級班就學，在日本的一年期間結識了各方好友，也考到日文N1證照，並且在法式甜點店擔任廚房一職。',
                    status: '基礎',
                    isFinished: true,
                },
                {
                    id: 4,
                    title: '805醫院',
                    content:
                        '當兵一年在花蓮805醫院擔任文書職，協助裡面的各種疑難雜事，在此期間更加掌握了excel的使用能力，並且利用空暇之餘，苦讀日文退伍前考上日文檢定N2證照為日後日本留學打工打下基礎。',
                    status: '基礎',
                    isFinished: true,
                },
                {
                    id: 5,
                    title: '設計助理',
                    content:
                        '在一間名為Taioz的經銷商擔任設計助理，使用Wix軟體開發當時公司的靜態網站，設計平面與3D的圖，並且有參加過世貿展覽的經驗。',
                    status: '基礎',
                    isFinished: true,
                },
                {
                    id: 6,
                    title: '學涯',
                    content:
                        '在學習的過程中，熱衷於社團參加過棋藝社，熱音社，吉他社也擔任過班級幹部，大學畢業前在財團法人工業局擔任實習生並且拿到最優秀的實習成績。',
                    status: '簡單',
                    isFinished: true,
                },
            ],
        }
    },
    computed: {
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
