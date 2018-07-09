import marked from 'marked'
import blog from '@/api/blog'
export default {
  data () {
    return {
      title: '',
      rawContent: '',
      user: {},
      createdAt: '',
      content: ''
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId: this.blogId}).then(res => {
      this.title = res.data.title
      this.rawContent = res.data.description
      this.content = res.data.content
      this.createdAt = res.data.createdAt
      this.user = res.data.user
    })
  },
  computed: {
    markdown() {
      var string = marked(this.rawContent)
      string += marked(this.content)
      return string
    }
  }
}
