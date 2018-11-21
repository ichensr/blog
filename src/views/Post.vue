<template>
  <div>
    <Tinymce ref="editor" :height="400" v-model="postForm.content" />
  </div>
</template>

<script>
import '../../static/tinymce4.7.5/tinymce.min'
import Tinymce from '@/components/Tinymce'
export default {
  name: "Post",
  components: {
    Tinymce
  },
  data () {
    return {
      postForm: {
        content: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
