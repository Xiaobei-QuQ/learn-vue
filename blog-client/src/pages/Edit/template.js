import blog from  '@/api/blog'

export default {
  data () {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId : this.blogId}).then(res =>{
      this.title = res.data.title
      this.description = res.data.description
      this.content = res.data.content
      this.atIndex = res.data.atIndex
    })
  },
  methods: {
    onEdit() {
      blog.updateBlog({blogId},{ title: this.title, content: this.content, description: this.description})
        .then(res => {
          this.$message.success(res.msg)
          this.$router.push({ path: `/detail/${res.data.id}`})
        })
    }
  }
}
