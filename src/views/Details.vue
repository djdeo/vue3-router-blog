<template>
  <div class="details">
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else>
      <spinner />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router"
import getPost from '../composables/getPost'
import Spinner from "../components/Spinner.vue"

export default {
  components: { Spinner },
  setup() {
    const route = useRoute()
    console.log(route.params.id)
    const { error, post, load } = getPost(route.params.id)
    load()

    return {
      error,
      post,
    }
  },
}
</script>

<style></style>
