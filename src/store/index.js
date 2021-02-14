import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allData: {
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
                            imgs: {
                                link: '',
                                imgList: [
                                    'https://picsum.photos/id/1/600/400',
                                    'https://picsum.photos/id/2/600/400',
                                ],
                            },
                        },
                        {
                            id: 1,
                            title: '接單系統',
                            content: '處理B2B的操作使用介面。',
                            imgs: {
                                link: '',
                                imgList: [
                                    'https://picsum.photos/id/3/600/400',
                                    'https://picsum.photos/id/4/600/400',
                                ],
                            },
                        },
                        {
                            id: 2,
                            title: '報表訂閱',
                            content: '處理B2B的操作使用介面。',
                            imgs: {
                                link: '',
                                imgList: [
                                    'https://picsum.photos/id/5/600/400',
                                    'https://picsum.photos/id/6/600/400',
                                ],
                            },
                        },
                        {
                            id: 3,
                            title: '預約報到系統',
                            content: '處理B2C的操作使用介面。',
                            imgs: {
                                link: '',
                                imgList: [
                                    'https://picsum.photos/id/7/600/400',
                                    'https://picsum.photos/id/8/600/400',
                                ],
                            },
                        },
                        {
                            id: 4,
                            title: 'LandingPage',
                            content: '一頁式廣告型網站。',
                            imgs: {
                                link: '',
                                imgList: [
                                    'https://picsum.photos/id/9/600/400',
                                    'https://picsum.photos/id/10/600/400',
                                ],
                            },
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
                            imgs: {
                                link: '',
                                imgList: [
                                    'https://picsum.photos/id/5/600/400',
                                    'https://picsum.photos/id/3/600/400',
                                ],
                            },
                        },
                        {
                            id: 1,
                            title: '工作室網站',
                            content:
                                '夢想有一間工作室當作設計發想，使用vue框架開發，並且有撰寫後台。',
                            imgs: {
                                link: '',
                                imgList: [
                                    'https://picsum.photos/id/5/600/400',
                                    'https://picsum.photos/id/3/600/400',
                                ],
                            },
                        },
                        {
                            id: 2,
                            title: 'landingPage',
                            content:
                                '使用大量jquery製作大量特效的一頁式個人介紹網站。',
                            imgs: {
                                link: '',
                                imgList: [
                                    'https://picsum.photos/id/5/600/400',
                                    'https://picsum.photos/id/3/600/400',
                                ],
                            },
                        },
                        {
                            id: 3,
                            title: '烘焙電商平台',
                            content:
                                '團隊作品，撰寫會員系統與第三方API串接，並且擔任整合角色。',
                            imgs: {
                                link: '',
                                imgList: [
                                    'https://picsum.photos/id/5/600/400',
                                    'https://picsum.photos/id/3/600/400',
                                ],
                            },
                        },
                    ],
                },
            ],
            skillData: [
                {
                    id: 1,
                    skillName: 'CSS/SCSS',
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
                    skillList: ['Potoshop', 'Illustrator', '日文'],
                },
            ],
        },
    },
    mutations: {},
    actions: {},
    modules: {},
})
// CWB-E0868EAC-4F39-4666-98D5-35722CDE9F24
