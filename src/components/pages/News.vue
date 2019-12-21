<template>
  <div class="container-fluid bg-dark-cust">
    <Navbar />
    <div class="row justify-content-center mt-5 line-height-cus" >
      <div class="row col-12 justify-content-center mt-3" v-for="(item,index) in Newslist" :key="index" >
        <div class="col-lg-3 col-md-5 col-sm-12 mb-3">
         <img :src="item.img" class="w-100 img-border-cust" alt=""  height="200px" >
     </div>
     <div class="col-lg-4 col-md-6 col-sm-12 " >
        <span class="badge badge-warning ">{{item.header}}</span>
         <span v-if="item.device == 'ETC'  " class="badge badge-warning ">{{item.device}}</span>
         <span v-if="item.device == 'PC'  " class="badge badge-warning ">{{item.device}}</span>
         <span v-if="item.device == 'Xbox One'  " class="badge badge-success ">{{item.device}}</span>
         <span v-if="item.device == 'PS4'  " class="badge badge-primary ">{{item.device}}</span>
         <span v-if="item.device == 'Switch'  " class="badge badge-danger ">{{item.device}}</span>
         <p class="text-info mt-3">{{forMatDate(item.date)}}</p>
         <h5 class="h5  mb-3 mt-2 "><a href="#" class="text-white text-decoration-none">{{item.title}}</a></h5>
         <p class="text-white mt-3">{{item.content}}</p>
         <div class="mt-2 text-right"><a href="#" class="btn btn-outline-danger btn-sm">查看全文</a></div>
     </div>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../Navbar";
import Footer from "../Footer"


export default {
  components: {
    Navbar,
    Footer,
  },
  data(){
   return {
    Newslist:[{
        header: '最新消息',
        device:'ETC',
        img: 'http://down1.sucaitianxia.net/psd02/psd255/psds88472.jpg',
        date: 1573344000000,
        title:'賀！慶開幕滿一個禮拜，全館限時限量折扣優惠券發放中！',
        content: '全宇宙的玩家有福啦！玩家共和國歡慶開幕一星期，即日起在結帳頁面優惠券欄，輸入7個7，即可享有全品項7折優惠！這麼佛心的活動，還不用新台幣讓遊戲全部下架！'
        },
        {
        header: '最新消息',
        device:'PC',
        img: 'https://p2.bahamut.com.tw/M/2KU/03/61d95f463539334824931b12ab164fr5.JPG',
        date: 1573603200000,
        title:'《天涯明月刀》滄海雲帆篇最終章登場 推出全新 T5 裝備、新主線與見聞',
        content: 'NEXON TAIWAN 宣布，旗下多人武俠線上遊戲《天涯明月刀》推出新內容，除了開封會八荒的韓瑩瑩之約外，曾與各位少俠應許回歸的藍錚同步登場。而為了因應接下來的江湖之路，本次改版不僅提升玩家最高等級至 95 級外，更開放新 T5 裝備以及新見聞等內容。'
        },
        {
        header: '最新消息',
        device:'ETC',
        img: 'https://upload.wikimedia.org/wikipedia/zh/5/53/%E8%BF%94%E6%A0%A1.jpg',
        date: 1573776000000,
        title:'知名遊戲改編同名電影《返校》今日試片 導演強調忠於遊戲精神與核心價值',
        content: '由赤燭遊戲研發遊戲改編同名電影《返校》今日在西門町國賓大戲院舉辦試片，《返校》電影導演徐漢強表示，這是非常非常專屬於台灣人的故事，「不要忘記過去發生過的一切，更要珍惜現在所擁有的自由，這就是《返校》核心價值，從遊戲到電影都是。」'
        },
        {
        header: '最新消息',
        device:'Xbox One',
        img: 'https://4.bp.blogspot.com/-ybC97U_e2aA/WrpVuXVADxI/AAAAAAAAADc/LYjvAVgVY5gUlG4k7YweXC5WowChlyqbwCLcBGAs/s1600/pubg-mobile-01.jpg',
        date: 1574208000000,
        title:'《絕地求生1.0》已經可以購買啦!',
        content: '《絕地求生》，也常被稱為吃雞，是一款由韓國電子遊戲開發商藍洞旗下的PUBG公司所開發及發行的多人制大逃殺遊戲。遊戲首發於Microsoft Windows平台'
        },
        {
        header: '最新消息',
        device:'PS4',
        img: 'https://www.gamerwater.com/data/post/201911/29/4093/x/1575020225786487.jpg',
        date: 1574380800000,
        title:'《SD 鋼彈 G 世代 火線縱橫》公布新系統「團隊派遣」及 TGS 參展情報',
        content: 'BANDAI NAMCO Entertainment 預定 11 月 28 日發售的《SD 鋼彈 G 世代 火線縱橫（SD ガンダム ジージェネレーション クロスレイズ）》，近（28）日公布了最新情報。'
        },
        {
        header: '最新消息',
        device:'Switch',
        img: 'https://img.technews.tw/wp-content/uploads/2019/11/25172948/14f7f5d155dbdc22.jpg',
        date: 1574640000000,
        title:'《寶可夢 劍 / 盾》直播發表會 6 月 5 日登場！',
        content: '任天堂今（27）日宣布，將於台灣時間 6 月 5 日（三）晚間 9:00 與全世界同步舉辦線上直播發表會「Pokémon Direct 2019.6.5」，帶來開發中的《精靈寶可夢》系列 Nintendo Switch 最新作《寶可夢 劍 / 寶可夢 盾》的最新資訊。播映內容為事先錄製好的影片，時間約 15 分鐘。'
        },
        ]
   }
  },
  methods:{
   forMatDate(sec){
    const xx  = new Date(sec).getFullYear()
    const yy  = new Date(sec).getMonth()
    const zz  = new Date(sec).getDate()
    return  `${xx}-${yy}-${zz}`
   }
 }
};
</script>
<style scoped>
img{
    cursor: pointer;
}
img:hover{
    box-shadow: 12px 12px 7px rgba(0, 0, 0, 0.7);
    transition: all 0.3s;
    transform:translateY(-3px) 
}
.img-border-cust{
  border-radius:16px;
}
.line-height-cus{
  line-height:20px;
}
</style>