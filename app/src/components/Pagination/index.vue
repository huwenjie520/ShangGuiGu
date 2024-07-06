<template>
    <div class="pagination">
        <button  v-if="startAndEndPage.start > 1" @click="$emit('getPageNo', pageNo-1)">«上一页</button>
        <button v-if="startAndEndPage.start > 1" @click="$emit('getPageNo', 1)" :class="{active: pageNo===1}">1</button>
        <button v-if="startAndEndPage.start > 2"><span>...</span></button>

        <button v-for="(page, index) in startAndEndPage.end" :key="index" v-if="page >= startAndEndPage.start"  @click="$emit('getPageNo', page)" :class="{active: pageNo===page}">{{page}}</button>
        
        <button v-if="startAndEndPage.end < totalPage - 1"><span>...</span></button>
        <button v-if="startAndEndPage.end < totalPage"  @click="$emit('getPageNo', totalPage)" :class="{active: pageNo===totalPage}">{{totalPage}}</button>
        <button v-if="startAndEndPage.end < totalPage"  @click="$emit('getPageNo', pageNo-1)">下一页»</button>
        <div><span>共{{total}}条&nbsp;</span></div>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    components: {},
    props: ['pageNo', 'pageSize', 'total', 'continues'],
    data() {
        return {

        };
    },
    watch: {},
    computed: {
        totalPage() {
            return Math.ceil(this.total/this.pageSize)
        },
        startAndEndPage() {
            // pageNo - continues/2 pageNo pageNo + continues/2
            const {pageNo, continues} = this
            let start = 1
            let end = 1
            // 总页数 < 连续页码
            if (continues >= this.totalPage) {
                end=this.totalPage
            } else {
                start = pageNo - Math.floor(continues/2)
                end = pageNo + Math.floor(continues/2)
            }
            // -1 0 1 2 3
            if (start < 1) {
                start = 1
                end = continues
            }
            // 总页数：10  8 9 10 11 12
            if (end > this.totalPage) {
                end = this.totalPage
                start = end - continues + 1
            }
            return {start, end}
        }
    },
    methods: {},
    created() { },
    mounted() { }
};
</script>
<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
  .active {
    background-color: skyblue;
  }
}
</style>