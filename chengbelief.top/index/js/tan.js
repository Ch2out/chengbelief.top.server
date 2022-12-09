new Vue({
  el: '#exampleModal',
  data() {
    return {
      messageDao: {
        name: '',
        phone: '',
        message: ''
      }
    };
  },
  methods: {
    FbtnAdd() {
      axios({
        method: 'post',
        url: 'https://chengbelief.top/message/meassageServlet?',
        data: Qs.stringify(this.messageDao)
      })
        .then(function (response) {
          if(response.data.isSuccessful){
            alert('留言成功');
          }else{
            alert('留言失败 可能是因为某值为空');
          }
        })
        .catch(function (error) {
          console.log(error);
          alert('出现异常');
        });
    }
  }
});
