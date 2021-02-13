<template>
    <div class="table-component">
        <h2>人格特質</h2>
        <table>
            <thead>
                <th>特質</th>
                <th>描述</th>
                <th>評價</th>
            </thead>
            <tbody>
                <tr>
                    <td>好奇心</td>
                    <td>看到一些特別的網站都會去研究看看。</td>
                    <td>4星</td>
                </tr>
                <tr>
                    <td>同理心</td>
                    <td>不至於牽老奶奶過馬路，但是一定會讓座位給有需要的人</td>
                    <td>3星</td>
                </tr>
                    <tr>
                    <td>責任感</td>
                    <td>對於自己的責任一定會負責並且完美交接。</td>
                    <td>4星</td>
                </tr>
                <tr>
                    <td>懶惰度</td>
                    <td>遇到需要手動的東西都會想要程式化自動化。</td>
                    <td>5星</td>
                </tr>
                <tr>
                    <td>溝通能力</td>
                    <td>參與過各種社團與活動。</td>
                    <td>4星</td>
                </tr>
                <tr>
                    <td>細心度</td>
                    <td>有空就會回去看自己的專案並檢查哪裡可以優化。</td>
                    <td>4星</td>
                </tr>
                
                <tr>
                    <td>穩重度</td>
                    <td>地震時依舊可以繼續手邊工作，有臨危不亂的能力。</td>
                    <td>4星</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'table-component',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_utils';
.table-component {
    width: 100%;
    > table {
        width: 100%;
        th,
        td {
            line-height: 2;
            border: 1px solid $primary;
            text-indent: 1em;
        }
    }
}
</style>
