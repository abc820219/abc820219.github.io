<template>
    <div class="listContent-component">
        <h2>{{ currentListData.title }}</h2>
        <p class="content">
            {{ currentListData.content }}
        </p>
        <div
            class="imgBox"
            v-if="currentListData.imgs && currentListData.imgs.length"
        >
            <img :src="currentListData.imgs[0]" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentListData: {
            type: Object,
            default() {
                return {}
            },
        },
    },
    name: 'listContent-component',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.listContent-component {
    @include light-primary;
    h2 {
        @include font(26px);
        border-bottom: 1px solid lighten($primary, 15%);
    }
    .imgBox {
        margin: 10px 0;
    }
    .content {
        @include font(20px);
    }
}
</style>
