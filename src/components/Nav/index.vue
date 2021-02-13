<template>
    <div class="nav-component">
        <ul class="d-flex justify-content-between">
            <li @click="indexHandler(-1)">LR</li>
            <li
                @click="currentIndexHandler(index)"
                v-for="(list, index) in navList"
                :key="index"
                :class="{ active: $route.name === list.routeName }"
            >
                <i :class="list.icon"></i>
                {{ list.name }}
            </li>
            <li @click="indexHandler(1)">RR</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'nav-component',
    data() {
        return {
            navList: [
                {
                    icon: 'fas fa-house-user',
                    name: '首頁',
                    routeName: 'Home',
                },
                {
                    icon: 'fas fa-portrait',
                    name: '角色',
                    routeName: 'Info',
                },
                {
                    icon: 'fas fa-male',
                    name: '生涯',
                    routeName: 'Life',
                },
                {
                    icon: 'fas fa-list',
                    name: '作品',
                    routeName: 'Project',
                },
                {
                    icon: 'fas fa-bible',
                    name: '技能',
                    routeName: 'Skill',
                },
            ],
            currentIndex: null,
        }
    },
    methods: {
        currentIndexHandler(index) {
            if (
                this.navList[index].routeName.toLowerCase() ===
                this.$route.name.toLowerCase()
            )
                return
            this.$router.push(`${this.navList[index].routeName.toLowerCase()}`)
        },
        indexHandler(num) {
            this.currentIndex = (this.currentIndex + num) % this.navList.length
            if (this.currentIndex < 0) {
                this.$router.push(
                    `${this.navList[
                        this.currentIndex * -1
                    ].routeName.toLowerCase()}`
                )
                return
            }
            this.$router.push(
                `${this.navList[this.currentIndex].routeName.toLowerCase()}`
            )
        },
    },
    watch: {
        $route: {
            immediate: true,
            handler: function() {
                let currentIndex = this.navList.findIndex((item) => {
                    return item.routeName === this.$route.name
                })
                this.currentIndex = currentIndex
                let obj = this.navList.splice(currentIndex, 1)
                this.navList.splice(2, 0, ...obj)
                if (this.currentIndex === 3) {
                    this.navList.unshift(...this.navList.splice(3, 1))
                    this.navList.push(...this.navList.splice(2, 1))
                } else {
                    this.navList.push(...this.navList.splice(1, 1))
                    this.navList.unshift(...this.navList.splice(2, 1))
                }
                this.currentIndex = 2
            },
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.nav-component {
    position: absolute;
    width: 768px;
    left: 50%;
    transform: translateX(-50%);
    @include font(16px, 32px);
    > ul li {
        color: lighten($primary, 15%);
        cursor: pointer;
        @include pad-width {
           color: lighten($primary, 30%);
        }
    }
    > ul li.active {
        color: $font-color-blue;
    }
    > ul li:first-child,
    ul li:last-child {
        background-color: darken($font-color-blue, 30%);
        font-size: 12px;
    }
    > ul li:first-child:hover,
    ul li:last-child:hover {
        background-color: $font-color-blue;
        font-size: 12px;
    }
    > ul li:first-child {
        width: 35px;
        text-align: center;
        clip-path: polygon(
            100% 0%,
            84% 51%,
            100% 100%,
            25% 100%,
            0% 50%,
            25% 0%
        );
    }
    > ul li:last-child {
        width: 35px;
        text-align: center;
        clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 14% 49%, 0% 0%);
    }
    @include com-width {
        right: 30px;
        left: initial;
        transform: none;
        width: 600px;
    }
    @include pad-width {
        background-color: rgba($primary, 0.9);
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        transform: none;
        width: initial;
        font-size: 18px;
        @include font(18px,36px)
    }
}
</style>
