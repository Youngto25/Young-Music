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

app.use(cors())

app.get('/',async(req,res)=>{
  const url = `https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=${+ new Date()}&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1`
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


//http://localhost:4000/search?keyword=eason&page=2
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



app.get('/lyrics',async(req,res)=>{
  const { musicid=234824638 } = req.query
  const url = `https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&nobase64=1&musicid=${musicid}&songtype=0&_=${+ new Date()}&jsonpCallback=jsonp1`
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

app.get('/rank',async(req,res)=>{
  const url = `https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=${+ new Date()}`
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