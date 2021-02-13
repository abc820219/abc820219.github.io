<template>
    <div class="skill">
        <div class="main">
            <div
                class="center-point d-flex flex-column justify-content-center"
                @click="currentIndex = 0"
            >
                <p>{{ pointData.skillValue }}</p>
                <p>point</p>
            </div>
            <div class="d-flex flex-wrap clip-wrap">
                <div
                    class="clip-box"
                    v-for="data in skillData"
                    :key="data.id"
                    @click="currentIndex = data.id"
                >
                    <div class="content">
                        <h2>
                            {{ data.skillName }}
                        </h2>
                        <p>{{ data.skillValue }} value</p>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="skill-detail"
            :class="{ active: isactive }"
            @click="isactive = !isactive"
        >
            <div class="detail">
                <h2>{{ detailData.skillName }}</h2>
                <p class="lv">-lv {{ detailData.skillValue }}</p>
                <p class="des">{{ detailData.skillDes }}</p>
                <ul class="list">
                    <li v-show="currentIndex !== 0">基本掌握</li>
                    <li
                        v-for="(list, index) in detailData.skillList"
                        :key="index"
                    >
                        - {{ list }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        skillData: {
            type: Array,
            default() {
                return [
                    {
                        id: 1,
                        skillName: 'CSS / SCSS',
                        skillValue: 7,
                        skillDes:
                            '掌握基本排版技巧，理解背後原理，可以適當的對當前畫面做出規劃與優化，並且使用各式奇淫技巧達成畫面需求。',
                        skillList: [
                            'block',
                            'inline-block',
                            'flex',
                            'float',
                            'table',
                            'position',
                            '文字屬性',
                            'BFC知識',
                            '盒子模型',
                            '選擇器',
                            '權重計算',
                            '瀏覽器渲染過程',
                            '基本規範',
                            'SCSS的變數,mixin,function',
                        ],
                    },
                    {
                        id: 2,
                        skillName: 'HTML',
                        skillValue: 7,
                        skillDes:
                            '會參考w3c上的內容，並且使用正確的tag來進行版面布局，同時也掌握部分html5的功能。',
                        skillList: ['html基本標籤', '標籤語意化', '瀏覽器儲存'],
                    },
                    {
                        id: 3,
                        skillName: 'JS',
                        skillValue: 6,
                        skillDes:
                            '能夠使用基本數學加減乘除餘撰寫程式，對於字串陣列物件迴圈數值有一定的掌握程度並對JS特性知識點有重點訓練，也時常研究新的api。',
                        skillList: [
                            '基礎資料型別,判斷式,運算子,迴圈',
                            'event queue',
                            'closure',
                            'promise',
                            '作用域',
                            '變量提升',
                            'this指向',
                            '參照問題',
                            '隱式轉型',
                            '原型鍊',
                            '部分dom / bom',
                            '大部分es5 / es6',
                        ],
                    },
                    {
                        id: 4,
                        skillName: 'VUE',
                        skillValue: 6,
                        skillDes:
                            '最欣賞與最擅長的框架，對於vue document有一定的掌握程度，推崇從document找解決辦法，會切分component，有多個專案使用vue開發。',
                        skillList: [
                            'vue-flow',
                            'cdn-vue',
                            'vuex',
                            'vue-router',
                            'vue-cli',
                            'vue-config優化',
                            'vue-component',
                            'vue-transition',
                            'vue-slot',
                            '元件化開發',
                            '雙向綁定',
                        ],
                    },
                    {
                        id: 5,
                        skillName: 'Animation',
                        skillValue: 5,
                        skillDes:
                            '喜歡特效與動畫，能夠運用目前所掌握的css與js或第三方庫來達成想要的效果。',
                        skillList: [
                            '@keyframe',
                            'js搭配css特效',
                            'svg控制',
                            '簡易3d',
                        ],
                    },
                    {
                        id: 6,
                        skillName: 'GIT',
                        skillValue: 7,
                        skillDes:
                            '習慣於terminal操作，使用GUI圖像軟體做輔助，能夠理解常使用的指令背後原理，不會造成他人困擾。',
                        skillList: [
                            'git pull/fetch',
                            'git add/commit',
                            'git reset/checkout',
                            'git rebase/merge',
                            'git branch',
                            'git stash',
                            'git push',
                            'git reflog',
                            'git diff',
                        ],
                    },
                    {
                        id: 7,
                        skillName: 'Tools',
                        skillValue: 6,
                        skillDes: '工欲善其事，必先利其器，常使用的工具。',
                        skillList: [
                            'Vscode',
                            'Source tree',
                            'Webpack /Babel',
                            '瀏覽器開發工具',
                            'Adobe XD',
                        ],
                    },
                    {
                        id: 8,
                        skillName: 'Others',
                        skillValue: 5,
                        skillDes: '一些其他技能。',
                        skillList: ['Potoshop', 'Illustrator','日文'],
                    },
                ]
            },
        },
    },
    name: 'skill',
    data() {
        return {
            isactive: true,
            pointData: {
                skillName: '總評分計算',
                skillValue: '',
                skillDes: '此分數以本人認知為主，實際情況請與本人面談。',
            },
            currentIndex: 0,
        }
    },
    mounted() {
        let total = 0
        this.skillData.forEach((value) => {
            total += value.skillValue
        })
        this.pointData.skillValue = `${total} / 80`
    },
    computed: {
        detailData() {
            if (this.currentIndex === 0) return this.pointData
            return this.skillData[this.currentIndex - 1]
        },
    },
    watch: {
        currentIndex() {
            this.isactive = true
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.skill {
    .main {
        color: $font-color-blue;
        text-shadow: 0 0 5px $font-color-blue, 0 0 8px $font-color-blue;
        text-align: center;
    }
    .skill-detail {
        width: 400px;
        @include psa(50%, -360px, initial, initial);
        z-index: 3;
        transform: translateY(-50%);
        min-height: calc(70vh - 70px);
        background-color: rgba(#0b1221, 0.8);
        border-top: 1px solid $primary;
        border-bottom: 1px solid $primary;
        clip-path: polygon(3% 0, 100% 0, 100% 100%, 3% 100%, 0 97%, 0 3%);
        transition: right 1s;
        cursor: pointer;
        .detail {
            position: absolute;
            left: 40px;
            right: 0;
            top: 0;
            bottom: 0;
            border-left: 1px solid rgba($primary, 0.5);
            h2,
            .lv {
                border-bottom: 1px solid rgba($primary, 0.5);
                padding-left: 10px;
            }
            h2 {
                @include font(20px, 35px);
                color: rgb(209, 209, 58);
            }
            .lv {
                @include font(18px, 60px);
                @include light-primary;
            }
            .des,
            .list {
                padding-left: 10px;
                padding-top: 20px;
                color: $font-color-blue;
                line-height: 1.5;
                text-shadow: 0 0 5px $font-color-blue, 0 0 8px $font-color-blue;
            }
        }
        &.active {
            @include psa(50%, 0px, initial, initial);
        }
        &:after,
        &:before {
            content: '';
            @include psa(initial, initial, initial, 0);
            width: 30px;
            height: 5px;
            border: 1px solid rgba($primary, 0.5);
            border-left: none;
        }
        &:before {
            top: 50%;
            transform: translateY(-50%);
        }
        &:after {
            top: 30px;
        }
    }
}
.center-point {
    @include psa(50%, initial, initial, 50%);
    z-index: 2;
    transform: translate(-50%, -50%);
    background-color: rgba($primary, 0.5);
    width: 150px;
    height: 150px;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    cursor: pointer;
    &:hover {
        background: linear-gradient(
            135deg,
            rgba($primary, 0.5) 0%,
            rgba($primary, 0.5) 60%,
            darken($font-color-blue, 40%) 100%
        );
    }
}
.clip-wrap {
    @include psa(50%, initial, initial, 50%);
    transform: translate(-50%, -50%);
    width: 400px;
    .clip-box:nth-child(4) ~ .clip-box {
        margin-top: 100px;
    }
}
.clip-box {
    position: relative;
    width: 100px;
    height: 100px;
    clip-path: polygon(
        30% 0%,
        70% 0%,
        100% 30%,
        100% 70%,
        70% 100%,
        30% 100%,
        0% 70%,
        0% 30%
    );
    cursor: pointer;
    .content {
        @include psa(1.5px, 1.5px, 1.5px, 1.5px);
        line-height: 80px;
        background-color: rgba($primary, 0.5);
        clip-path: polygon(
            30% 0%,
            70% 0%,
            100% 30%,
            100% 70%,
            70% 100%,
            30% 100%,
            0% 70%,
            0% 30%
        );
        background-color: rgba($primary, 0.5);
        z-index: 1;
        p {
            font-size: 10px;
            line-height: 10px;
        }
    }
    &:after {
        content: '';
        @include psa(0, 0, 0, 0);
        clip-path: polygon(
            30% 0%,
            70% 0%,
            100% 30%,
            100% 70%,
            70% 100%,
            30% 100%,
            0% 70%,
            0% 30%
        );
        background: linear-gradient(
            135deg,
            darken(red, 30%) 5%,
            transparent 25%,
            transparent 90%,
            darken(red, 30%) 100%
        );
    }
    &:hover .content {
        background-color: rgba($primary, 0.5);
    }
    &:hover::after {
        background: linear-gradient(
            135deg,
            $font-color-blue 5%,
            transparent 25%,
            transparent 60%,
            $font-color-blue 90%,
            $font-color-blue 100%
        );
    }
}
</style>
