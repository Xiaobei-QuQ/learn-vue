function friendlyDate(dataStr) {
  let dataObj = typeof dataStr === 'object' ? dataStr: new Date(dataStr)
  let time = dataObj.getTime()
  let now = Date.now()
  let space = now - time
  let str = ''
  switch (true) {
    case space < 60000:
      str = '刚刚'
          break
    case space < 1000*3600:
      str = Math.floor(space/6000)+ '分钟前'
          break
    case space < 1000*3600*24:
      str = Math.floor(space/(1000*3600)) + '小时前'
          break
    case space < 1000*3600*24*30:
      str = Math.floor(space/(1000*3600*24)) + '天前'
  }
  return str
}
export default {
  install (Vue,options) {
    Vue.prototype.friendlyDate = friendlyDate
  }
}
