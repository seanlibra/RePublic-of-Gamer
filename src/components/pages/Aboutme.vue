<template>
    <div class="container-fluid bg-dark-cust">
      <Navbar />
      <div class="row justify-content-center text-center">
        <div class="col-md-8 col-sm-10 text-white mt-5">
          <a class="text-white mr-3 font-en text-decoration-none" href="#" style="font-size:16px">
            <a class="font-weight-bold">
              ROG
              <i class="fas fa-gamepad"></i> 玩家共和國
            </a>
            <p>
              <span style="color:#3d8cd1;">RePublic</span> of
              <span style="color:#e8636a;">Gamers</span>
            </p>
          </a>
          <p class="my-3 line-height-cus">
            是由一群遊戲愛好者以及收藏家成立的網站。
            <br />目的在於提供個人電腦(PC)，Play Station 4(PS4)、Xbox One、Nintendo Switch等主機遊戲的第一手資訊。
            <br />
          </p>
          <div class="my-3">
            <img
              src="@/assets/image/about_us/about_us-1.jpg"
              class="d-md-inline-block d-none"
              alt="..."
              width="400px"
              height="200px"
              style="border-radius:16px"
            />
            <img
              src="@/assets/image/about_us/about_us-2.jpg"
              class="d-md-inline-block d-none"
              alt="..."
              width="400px"
              height="200px"
              style="border-radius:16px"
            />
            <img
              src="@/assets/image/about_us/about_us-3.jpg"
              class="img-fluid"
              alt
              height="200px"
              width="400px"
              style="border-radius:16px"
            />
          </div>
        </div>
        <div class="col-sm-8 col-md-6 justify-content-center text-left text-white line-height-cus">
          <div class="qa_bottom pb-3">
            <h6 class="h3 text-center pb-3" style="border-bottom:2px solid #FFFFFF">Q&A</h6>
            <p class>
              <span class="h5">Q1:請問你們與【巴哈姆特電玩資訊站】或是【遊戲基地Gamebase】等遊戲資訊站的差別在哪呢？</span>
              <br />
              <br />A:我們提供的資訊雖然與上述的網站並無太大的缺別，但提供的資訊是有篩選過的。何謂篩選過的呢?
              <br />簡單說就是盡量會以
              <span class="text-danger font-weight-bold text-content-span">非手遊</span>等
              <span class="text-warning font-weight-bold text-content-span">家用主機遊戲</span>或是
              <span class="text-warning font-weight-bold text-content-span">PC Online Game</span>為主。
            </p>
          </div>

          <div class="mt-3 qa_bottom pb-3">
            <p>
              <span class="h5">Q2:為什麼要特別區分「手遊」，「家用主機遊戲」，「Online Game」呢? 不是都一樣是遊戲嗎？</span>
              <br />
              <br />A:我們並沒有特別排斥手機遊戲或是手遊玩家。只是遊戲市場近年充斥著大量惡劣遊戲廠商生產的 "免洗手遊"，
              <br />現階段的手遊因為開發成本低廉，市場廣大，獲利豐碩但卻沒有一個統一的規範。而成為不肖廠商斂財但卻無法可管的灰色地帶。
              <br />這些 "免洗手遊" 奪走了擁有熱情的遊戲開發者的成果，讓真正願意花大錢製作好遊戲的廠商沒有了生存的空間。
              <br />手遊將會是未來遊戲的一塊新地圖，但在真正有統一的規範前，我們的資訊盡量還是會以非手遊為優先。
            </p>
            <h6 class="text-info">參考文章:</h6>
            <ul class="pl-0" style="list-style:none;">
              <li>
                <a
                  class="text-danger"
                  href="https://www.mirrormedia.mg/story/20170731soc011/"
                >【手遊收攤擺爛】吸金上億停止營運 遊戲代理商惹怒50萬玩家</a>
              </li>
              <li>
                <a
                  class="text-danger"
                  href="https://castnet.nctu.edu.tw/castnet/article/12670?issueID=690"
                >【手機遊戲】為何要被鄙視？</a>
              </li>
              <li>
                <a
                  class="text-danger"
                  href="https://game.ettoday.net/article/1297177.htm"
                >暴雪史上最尷尬發表！《暗黑破壞神》手遊遭12萬玩家噓爆</a>
              </li>
            </ul>
          </div>
          <div class="my-3 qa_bottom pb-3">
            <p>
              <span class="h5">Q3:你們有實體店面嗎？要怎麼跟你們購買遊戲呢？</span>
              <br />
              <br />A:因為玩家共和國主要是由一群業餘玩家所經營，所以我們並沒有實體的店面。
              <br />如要購買遊戲的話請直接進入商品頁面購買唷。另外我們之後也會在各大網路賣場商城擺設賣場，
              <br />如有進一步的資訊會在最新消息上面公布，近請期待！
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
</template>

<script>
import Navbar from "../Navbar";
import Footer from "../Footer";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
<style scoped>
.line-height-cus {
  line-height: 30px;
}
.qa_bottom {
  border-bottom: 3px dotted #ffffff;
}
img:hover {
  box-shadow: 12px 12px 7px rgba(0, 0, 0, 0.7);
  transition: all 0.3s;
  transform: translateY(-3px);
  cursor: pointer;
}
.text-content-span {
  font-size: 20px;
}
</style>
