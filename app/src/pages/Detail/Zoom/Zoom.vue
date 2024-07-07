<template>
  <div class="spec-preview">
    <img :src="skuObj.imgUrl" />
    <!-- 遮罩在此移动，和图片一样大小 -->
    <div class="event" @mousemove="handler" ref="small"></div>
    <!-- 放大的图 -->
    <div class="big">
      <img :src="skuObj.imgUrl"  ref="big"/>
    </div>
    <!-- 遮罩，即那个绿色的小方块 -->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ['skuImageList'],
  data() {
    return {
      imageIndex: 0
    }
  },
  computed: {
    skuObj() {
      // 必须有异常情兜底
      return this.skuImageList[this.imageIndex] || []
    }
  },
  mounted() {
    this.$bus.$on('getImageIndex', (index) => {
      this.imageIndex = index
    })
  },
  methods: {
    handler(event) {
      let mask = this.$refs.mask
      // 获取mask应距盒子左边的距离 = 鼠标距盒子左边的距离 - mask宽度的一半
      let left = event.offsetX - mask.offsetWidth / 2
      let top = event.offsetY - mask.offsetHeight / 2
      // 约束范围，防止mask移出盒子
      if (left <= 0) left = 0
      if (top <= 0) top = 0
      // 但我觉得这里用mask.offsetWidth约束超过盒子的范围不合理
      // 比如event 的宽度为600 mask 的宽度为400
      // 那left应该在超过200时，不动，而不是mask的宽度400
      if (left >= mask.offsetWidth) left = mask.offsetWidth
      if (top >= mask.offsetHeight) top = mask.offsetHeight
      mask.style.left = left + 'px'
      mask.style.top = top + 'px'

      // 对应修改大图的位置
      let big = this.$refs.big
      big.style.left = -2 * left + 'px'
      big.style.top = -2 * top + 'px'
    }
  }
}
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover~.mask,
  .event:hover~.big {
    display: block;
  }
}
</style>