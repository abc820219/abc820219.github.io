<template>
    <div class="listContent-component">
        <h2>{{ currentListData.title }}</h2>
        <p class="content">
            {{ currentListData.content }}
        </p>
        <div class="imgBox">
            <carousell-component
                :imgs="currentListData.imgs"
            ></carousell-component>
        </div>
    </div>
</template>

<script>
import Carousell from '@/components/Carousell'
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
    components: {
        'carousell-component': Carousell,
    },
    watch: {},
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
    @include pad-width {
        h2 {
            font-size: 20px;
        }
        .content {
            font-size: 16px;
        }
    }
}
</style>
