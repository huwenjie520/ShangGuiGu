<template>
    <div>
        <TypeNav/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor/>
        <Floor/>
        <Brand/>
    </div>
  </template>
  
  <script>
  import ListContainer from '@p/Home/ListContainer'
  import Recommend from '@p/Home/TodayRecommend'
  import Rank from '@p/Home/Rank'
  import Like from '@p/Home/Like'
  import Floor from '@p/Home/Floor'
  import Brand from '@p/Home/Brand'
  
  export default {
    name: 'Home',
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    computed: {
    },
    mounted() {
    },
    methods: {
    }
  }
  </script>
  
  <style>
  </style>
  