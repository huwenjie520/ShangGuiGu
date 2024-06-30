<template>
    <div class="swiper-container" ref="curSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(banner, index) in list" :key="banner.id">
                <img :src="banner.imgUrl" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
    name: 'Carousel',
    components: {},
    props: ['list'],
    data() {
        return {
        };
    },
    watch: {
        // 初始化swiper的前提是，有完整的组件结构
        // 因为bannerList的获取是异步的，所以需要等到bannerList的值更新后，再初始化swiper
        list: {
            // 立即监听：不管数据有无变化，都会监听，即执行此回调函数
            immediate: true,
            handler(newVal, oldVal) {
                // 因为轮播图的图片使用v-for，所以需要等到dom更新完再初始化swiper
                // nextTick：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM
                this.$nextTick(() => {
                    // 使用Swiper插件，初始化swiper
                    var mySwiper = new Swiper(this.$refs.curSwiper, {
                        autoplay: true, // 自动切换
                        loop: true, // 循环模式选项
                        // 如果需要分页器
                        pagination: {
                            el: ".swiper-pagination",
                            // 点击圆点切换图片
                            clickable: true,
                        },
                        // 如果需要前进后退按钮
                        navigation: {
                            prevEl: ".swiper-button-prev",
                            nextEl: ".swiper-button-next",
                        },
                    });
                })
            }
        }
    },
    computed: {},
    methods: {},
    created() { },
    mounted() { }
};
</script>
<style lang="scss" scoped></style>