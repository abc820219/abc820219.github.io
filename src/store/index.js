import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allData: {
            listData: [
                {
                    id: 0,
                    title: '前端工程師',
                    content:
                        '在一零四資訊科技擔任資深前端工程師，主要負責專案管理平台前後端與協助其他同仁程式問題。',
                    status: '中等',
                    isFinished: false,
                },
                {
                    id: 1,
                    title: '初心者工程師',
                    content:
                        '在科技廠擔任前端工程師，主要負責內部系統與AORUS官方網站，並且使用Vue框架進行重構與開發。',
                    status: '基礎',
                    isFinished: true,
                },
                {
                    id: 2,
                    title: '漫長旅途',
                    content:
                        '補習期間在團體中也算是主力，可是找工作上並不如預期的順利，並且遇上CoV的影響，工作機會也不如預期的多，這段期間邊讀書邊找工作邊接一些簡單的網頁與設計案子來渡過，最後於一間科技廠擔任助理工程師一職。',
                    status: '困難',
                    isFinished: true,
                },
                {
                    id: 3,
                    title: '初嚐程式',
                    content:
                        '留學歸國後，深思自己未來想要從事的工作，因為表弟是前端工程師，所以去詢問過意見後覺得有趣，開始自學，沒想到越學越有興趣，最後決定去上課並且開始自己的程式之旅，在此期間與隊員們一起合作開發專案，常常日以繼夜的學習程式知識。',
                    status: '基礎',
                    isFinished: true,
                },
                {
                    id: 4,
                    title: '旅人',
                    content:
                        '退伍後萌生了去日本打工留學的念頭，最後於東京的JPT語言學校最高級班就學，在日本的一年期間結識了各方好友，也考到日文N1證照，並且在法式甜點店擔任廚房一職。',
                    status: '基礎',
                    isFinished: true,
                },
                {
                    id: 5,
                    title: '805醫院',
                    content:
                        '當兵一年在花蓮805醫院擔任文書職，協助裡面的各種疑難雜事，在此期間更加掌握了excel的使用能力，並且利用空暇之餘，苦讀日文退伍前考上日文檢定N2證照為日後日本留學打工打下基礎。',
                    status: '基礎',
                    isFinished: true,
                },
                {
                    id: 6,
                    title: '設計助理',
                    content:
                        '在一間名為Taioz的經銷商擔任設計助理，使用Wix軟體開發當時公司的靜態網站，設計平面與3D的圖，並且有參加過世貿展覽的經驗。',
                    status: '基礎',
                    isFinished: true,
                },
                {
                    id: 7,
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
                    group: '專案經歷',
                    isopen: true,
                    list: [
                        {
                            id:0,
                            title: '行銷網站',
                            content:
                                '大大小小一頁式，人力招募行銷網站(政府案，企業案)。',
                            links:[
                                {
                                title:'AWS',
                                href:'https://events.104.com.tw/aws/20221201/'
                                },
                                {
                                title:'台美檢驗',
                                href:'https://kad.events.104.com.tw/superlab_20220310/'
                                },
                                {
                                title:'全家',
                                href:'https://events.104.com.tw/711/20220331/'
                                },
                                {
                                title:'台積電',
                                href:'https://events.104.com.tw/tsmcchf/20221011/'
                                },
                                {
                                title:'高雄市政府青年局',
                                href:'https://kad.events.104.com.tw/kyb_20220411/'
                                },
                                {
                                title:'桃園市政府青年局',
                                href:'https://kad.events.104.com.tw/tycg_20220613/'
                                },
                                {
                                 title:'tel簡歷平台',
                                 href:'https://kad.events.104-dev.com.tw/tel_20220322_resume/'
                                },
                                {
                                 title:'asml簡歷平台',
                                 href:'https://kad.events.104-dev.com.tw/asml_20220214_resume/'
                                }
                            ]
                        },
                        {
                            id:1,
                            title: '網站管理平台',
                            content:
                                '整合行銷網頁上線流程與專案管理的服務平台。',
                            links:[{
                                title:'',
                                href:''
                            }]
                        },
                        {
                            id:2,
                            title: 'AORUS國際官方網站',
                            content: '協助現有國際官網開發與優化。',
                            links:[{title:'aorus 官網',href:'https://www.aorus.com/'}]
                        },
                        {
                            id:3,
                            title: 'PLM專案管理系統',
                            content:
                                '專案進度的申請與排程視覺化。',
                            links:[{
                                title:'',
                                href:''
                            }]
                        },
                        {
                            id:4,
                            title: '中國接單系統',
                            content: '中國地區的接單系統支援多國語系。',
                            links:[{
                                title:'',
                                href:''
                            }]
                        },
                        {
                            id:5,
                            title: '內部微服務平台',
                            content: '集合各種微服務開發，公告系統，台灣接單，簽呈等等。',
                            links:[{
                                title:'',
                                href:''
                            }]
                        },
                        {
                            id:6,
                            title: '報表訂閱',
                            content: '處理B2B的操作使用介面。',
                            links:[{
                                title:'',
                                href:''
                            }]
                        },
                        {
                            id:7,
                            title: '預約報到系統',
                            content: '處理B2C的操作使用介面。',
                            links:[{
                                title:'',
                                href:''
                            }]
                        }
                    ],
                }
            ],
            skillData: [
                {
                    id: 1,
                    skillName: 'CSS/SCSS',
                    skillValue: 8,
                    skillDes:
                        '掌握基本排版技巧，理解背後原理，可以適當的對當前畫面做出規劃與優化，並且使用各式奇淫技巧達成畫面需求。',
                    skillList: [
                        'block',
                        'inline-block',
                        'flex',
                        'float',
                        'table',
                        'grid',
                        'position',
                        '文字屬性',
                        'BFC知識',
                        '盒子模型',
                        '選擇器',
                        '權重計算',
                        '瀏覽器渲染過程',
                        '基本規範',
                        'SCSS的變數,mixin,function',
                        'RWD'
                    ],
                },
                {
                    id: 2,
                    skillName: 'HTML',
                    skillValue: 8,
                    skillDes:
                        '會參考w3c上的內容，並且使用正確的tag來進行版面布局，同時也掌握部分html5的功能。',
                    skillList: ['html基本標籤', '標籤語意化', '瀏覽器儲存'],
                },
                {
                    id: 3,
                    skillName: 'JS',
                    skillValue: 8,
                    skillDes:
                        '能夠使用基本數學加減乘除餘撰寫程式，對於字串陣列物件迴圈數值有一定的掌握程度並對JS特性知識點有重點訓練，也時常研究新的api。',
                    skillList: [
                        '基礎資料型別,判斷式,運算子,迴圈',
                        'event loop',
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
                    skillName: 'VUE/React',
                    skillValue: 7,
                    skillDes:
                        '公司專案開發主要使用 vue 框架，學習過 react 完成作品。',
                    skillList: [
                        'vue2 / vue3',
                        'react hook'
                    ],
                },
                {
                    id: 5,
                    skillName: 'Animation',
                    skillValue: 6,
                    skillDes:
                        '喜歡特效與動畫，能夠運用目前所掌握的css與js或第三方庫來達成想要的效果。',
                    skillList: [
                        '@keyframe',
                        'js搭配css特效',
                        'svg控制',
                    ],
                },
                {
                    id: 6,
                    skillName: 'GIT',
                    skillValue: 8,
                    skillDes:
                        '習慣於terminal操作，使用GUI圖像軟體做輔助，能夠理解常使用的指令背後原理，不會造成他人困擾。',
                    skillList: [
                        'git pull/fetch',
                        'git add/commit',
                        'git reset/checkout/revert',
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
                    skillName: 'Others',
                    skillValue: 6,
                    skillDes: '工欲善其事，必先利其器。',
                    skillList: [
                        'Docker',
                        'Nginx',
                        '打包工具 Webpack / Vite',
                        '基本 SEO',
                        '基礎 linux 指令',
                        'WEB 瀏覽器效能調校技術',
                        '網頁應用的安全性知識',
                    ],
                },
                {
                    id: 8,
                    skillName: 'BackEnd',
                    skillValue: 5,
                    skillDes: '後端技能。',
                    skillList: ['Node.js', 'MySQL', 'Redis','API 整合開發','AWS'],
                },
            ],
        },
    },
    mutations: {},
    actions: {},
    modules: {},
})
// CWB-E0868EAC-4F39-4666-98D5-35722CDE9F24
