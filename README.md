# Young music

## 描述
适用于手机端的一款自制音乐播放器。集音乐推荐、排行榜、搜索、播放于一体。

技术栈: HTML5 + ES6 + 懒加载 + 节流 + 防抖 + 手势库 + Webpack + Scss + Express + require + cors

## 效果图
![推荐页](https://github.com/Youngto25/Young-Music/blob/master/src/imgs/FirstPage.png)

![排行榜](https://github.com/Youngto25/Young-Music/blob/master/src/imgs/RankPage.png)

![搜索页](https://github.com/Youngto25/Young-Music/blob/master/src/imgs/SearchPage.png)

![播放页](https://github.com/Youngto25/Young-Music/blob/master/src/imgs/PlayPage.png)

![歌词页](https://github.com/Youngto25/Young-Music/blob/master/src/imgs/LyricsPage.png)

## 准备工作
本项目的所有数据都是通过QQ音乐获得，而因为跨越问题，不能直接获取到QQ音乐的数据。所以只能伪造请求，以QQ音乐所指定的域名获得数据再传到指定网址，由指定的网址获得数据。
需要工具，express require cors
npm init,npm install webpack等初始化完成之后，
再npm install express require require-promise cors
新建文件server.js
```
const express = require('express')
const request = require('request-promise')
const cors = require('cors')

const app = express()

const HEADERS = {
  'accept': 'application/json',
  'authority': 'c.y.qq.com',
  'referer': 'https://m.y.qq.com/',
  'origin': 'https://m.y.qq.com',
  'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
}

app.use(cors())   //跨域

//部分请求代码
//http://localhost:4000/search?keyword=eason&page=2
//搜索歌曲  只需要输入一个参数keyword即可（songname），page表示第几页，每页有20首歌
app.get('/search',async(req,res)=>{
  const { keyword,page=1 } = req.query
  const url = `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?_=${+ new Date()}&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=${encodeURIComponent(keyword)}&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=${page}&remoteplace=txt.mqq.all`
  try{
    res.json(await request({
      uri: url,
      json: true,
      headers: HEADERS
    }))
  }catch(e){
    res.json({ error: e.message })
  }
})

app.listen(4000)
```
开启服务器 nodemon server.js

若需要搜索歌曲，只要
```
fetch('http://localhost:400/search?keyword=eason&page=1')
  .then(res=>res.json())
```
即可

## 各页功能分析
### 推荐页
包括顶部的轮播，及下面的电台、歌单
这些都是通过(https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=${+ new Date()}&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1)接口获取到的

在图片的加载上面使用到了懒加载。只有当图片接近视口时才会发送请求，获取图片。

懒加载的实现。通过推荐页的接口，我们已经获得了图片的链接，但是此时并不将其直接赋值给每个img标签的src，而是单独设置一个属性，比如data-src，将链接赋值给data-src。同时在每个需要懒加载的img标签上为它们加上一个独特的class，例如mark。在页面滚动时监听页面上所有含有mark class的元素，判断它们是否达到可以加载的要求。加载时只需要将data-src的值传给src，并且remove 之前的class mark即可。

### 排行榜页
在图片的加载上面使用到了懒加载。

### 搜索页
监听input框的input事件，待搜索条件触发(即搜索按钮被点击)之后，new Search(输入的内容,要渲染的元素)。在Search 内fetch到从接口拿到的数据，并且渲染的相应的元素内部。同时监听音乐是否被点击了，若被点击则传出相应歌曲的详细内容，并且进行播放。

### 歌词页
思路
- 红色容器：表示包裹所有歌词的父容器，用lyrics表示。绿色容器表示歌词所展示的范围大小，用wrapper表示
- 规定歌词到达绿色容器中间之后设置样式
- 当某条歌词el到达绿色容器高度的一半时，更改它的样式。则此时这条歌词距离绿色容器的顶点距离为x = wrapper.offsetHeight/2
- 这条歌词距离父容器lyrics的距离为y = el.offsetTop
- 这时整个lyrics的偏移应该为offset = y-x，若y小于x，则offset为0
