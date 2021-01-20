<template>
  <div class="home">
      <PostList v-if="posts.length" :posts="posts" class="layout"/>
      <Spinner v-else/>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'

import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'

export default {
    components:{PostList, Spinner},
    setup() {
        const {posts, error, load} = getPosts()
        load()

        return {
            posts, error
        }
    }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>