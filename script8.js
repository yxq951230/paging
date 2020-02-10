var pageNumInput = document.getElementById("pageNumInput");
var sure = document.getElementById("sure");
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");


function changeCur(pageNum) {
    var iPageNum = parseInt(pageNum);
    if (iPageNum === 1) {
        page1.className = "curr";
        page2.className = "";
        page3.className = "";
    } else if (iPageNum === 2) {
        page1.className = "";
        page2.className = "curr";
        page3.className = "";
    } else if (iPageNum === 3) {
        page1.className = "";
        page2.className = "";
        page3.className = "curr";
    }
}
//input确认按钮跳转
sure.onclick = function() {
    loadData(pageNumInput.value);
    changeCur(pageNumInput.value)
};

function getItem(itemData) {
    return `<li class="gl-item">
          <div class="haier-sea">
              <div class="h-img">
                  <a href="#" title="${itemData.title}">
                      <img src="${itemData.imgUrl}">
                  </a>
              </div>
              <div class="h-money">
                  <strong class="jiage">
                      <em>¥</em>
                      <i class="jiage-a">${itemData.price}</i>
                  </strong>
              </div>
              <div class="h-name p-name-type-1">
                  <a href="#" title="${itemData.title}">
                      <em>
                          <span class="skcolor_ljg">${itemData.explain}
                          <span class="Hai"></span>
                          </span>
                      </em>
                      <i></i>
                  </a>
              </div>
              <div class="h-commit">
                  <strong>
                      <a href="#">${itemData.commentCount}</a>
                      <i class="pingjia-a">条评价</i>
                  </strong>
              </div>
              <div class="h-shop">
                  <span class="qjd">
                      <a href="#" title="${itemData.titlem}">${itemData.store}</a>
                      <b class="im-02" style="background: url(img/5bc4255bN0776eea6.png)no-repeat;"
                          title="联系客服"></b>
                  </span>
              </div>
              <div class="h-icons">
                  <i class="self-support">自营
                      <div class="tooltip1"><span class="ziti1">京东自营，品质保障</span></div>
                  </i>
                  <i class="buy-at-ease" style="border-color:#4d88ff;color: #4d88ff;">放心购
                      <div class="tooltip2"><span class="ziti2">品质服务，放心购物</span></div>
                  </i>
              </div>
              <div class="h-operate">
                  <a href="#" class="h-o-btn contrast">
                      <i></i>
                      对比
                  </a>
                  <a href="#" class="h-o-btn follow">
                      <i class="kongxin"></i>
                      关注
                  </a>
                  <a href="#" class="h-o-btn shopping-cart">
                      <i></i>
                      加入购物车
                  </a>
              </div>
          </div>
      </li>`;
}
var globalPageIndex = 1;
var pageSize = 5;

function loadData(pageIndex) {
    // 当点击1，2，3分页时，需要更新globalPageIndex
    globalPageIndex = pageIndex;
    pageNumInput.value = globalPageIndex;
    changeCur(pageNumInput.value);

/*    pageNumInput.value = globalPageIndex;
    if (globalPageIndex === 1) {
        page1.className = "curr";
        page2.className = "";
        page3.className = "";
    } else if (globalPageIndex === 2) {
        page1.className = "";
        page2.className = "curr";
        page3.className = "";
    } else if (globalPageIndex === 3) {
        page1.className = "";
        page2.className = "";
        page3.className = "curr";
    }*/

    var array = [
        {
            title:
                "LINK年货节，换个好路由，过年不断网！1900M易展mesh分布路由，新品上市！点此查看更多",
            titlem:"TP-LINK京东自营旗舰店",
            imgUrl: "img/bfcd6ba86e8544ac.jpg",
            price: "199.00",
            commentCount: "185万+",
            explain:"TP-LINK双千兆路由器1900M无线家用 5G双频 WDR7661千兆版 千兆端口 高速",
            store:"TP-LINK京东自营旗舰店"
        },
        {
            title:
                "LINK年货节，换个好路由，过年不断网！1900M易展mesh分布路由，新品上市！点此查看更多",
            titlem:"TP-LINK京东自营旗舰店",
            imgUrl: "img/d59bd88f0d960c5d.jpg",
            price: "98.00",
            commentCount: "186万+",
            explain:"TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙",
            store:"TP-LINK京东自营旗舰店"
        },
        {
            title:
                "LINK年货节，换个好路由，过年不断网！1900M易展mesh分布路由，新品上市！点此查看更多",
            titlem:"TP-LINK京东自营旗舰店",
            imgUrl: "img/d0282c9e9b231c14.jpg",
            price: "199.00",
            commentCount: "187万+",
            explain:"【配千兆网线】TP-LINK双千兆路由器 1900M无线家用 5G双频",
            store:"TP-LINK京东自营旗舰店"
        },
        {
            title:
                "LINK年货节，换个好路由，过年不断网！1900M易展mesh分布路由，新品上市！点此查看更多",
            titlem:"TP-LINK京东自营旗舰店",
            imgUrl: "img/4db2e687370002ce.jpg",
            price: "349.00",
            commentCount: "187万+",
            explain:"【配千兆网线】TP-LINK 易展mesh分布路由器1900M全千兆 WDR765千兆智能",
            store:"TP-LINK京东自营旗舰店"
        },
        {
            title:
                "LINK年货节，换个好路由，过年不断网！1900M易展mesh分布路由，新品上市！点此查看更多",
            titlem:"TP-LINK京东自营旗舰店",
            imgUrl: "img/6c755dd01ebf8713.jpg",
            price: "399.00",
            commentCount: "187万+",
            explain:"【WIFI 6新一代WiFi】TP-LINK TL-XDR3020 A3000双频全千兆无线路由器",
            store:"TP-LINK京东自营旗舰店"
        },
        {
            title:
                "小米路由器4A千兆版 双核CPU 双千兆 1200M双频无线速率 5G 家用智能路由器 四天线穿墙 双频合一 光纤适用",
            titlem:"小米京东自营旗舰店",
            imgUrl: "img/2cb8409991b38af5.jpg",
            price: "129.00",
            commentCount: "185万+",
            explain:"小米路由器4A千兆版 双核CPU 双千兆 1200M双频无线速率 5G 家用智能路由器",
            explain:"小米路由器4A千兆版 双核CPU 双千兆 1200M双频无线速率 5G 家用智能路由器",
            store:"小米京东自营旗舰店"
        },
        {
            title:
                "小米路由器AC2100 双频路由器 2100M无线家用 5G双频 电竞路由 双千兆 光纤宽带WIFI穿墙 内配千兆网线",
            titlem:"小米京东自营旗舰店",
            imgUrl: "img/0e741b5c4358dbea.jpg",
            price: "229.00",
            commentCount: "185万+",
            explain:"小米路由器AC2100 双频路由器 2100M无线家用 5G双频 电竞路由 双千兆 光纤",
            store:"小米京东自营旗舰店"
        },
        {
            title:
                "【小米开工大吉！采购有礼（限产品）！】【京仓速发，自营同款放心选购】【小米品牌授权，品质保证】欢迎咨询客服哦！",
            titlem:"小米京东自营旗舰店",
            imgUrl: "img/1a4383145b2e96fe.jpg",
            price: "169.00",
            commentCount: "100+",
            explain:"小米（MI）Redmi路由器AC2100全千兆网口双频并发路由信号放大器128M内存",
            store:"小米京东自营旗舰店"
        },
        {
            title:
                "小米路由器4A 无线双频 四天线稳定穿墙 防蹭网 5G 双频合一 稳定高速 家用路由器 智能APP远程控制",
            titlem:"小米京东自营旗舰店",
            imgUrl: "img/f478a156e8301a9a.jpg",
            price: "95.00",
            commentCount: "185万+",
            explain:"小米路由器4A 无线双频 四天线稳定穿墙 防蹭网 5G 双频合一 稳定高速 家用路由",
            store:"小米京东自营旗舰店"
        },
        {
            title:
                "小米路由器4C(白色) 300M无线速率 智能家用路由器 四天线 安全稳定 WiFi无线穿墙",
            titlem:"小米京东自营旗舰店",
            imgUrl: "img/26e87c16af99b884.jpg",
            price: "57.00",
            commentCount: "185万+",
            explain:"小米路由器4C(白色) 300M无线速率 智能家用路由器 四天线 安全稳定 WiFi无线穿",
            store:"小米京东自营旗舰店"
        },
        {
            title:
                "【支持IPv6、爆款双核双千兆】】\n" +
                "华为爆款四核路由，点击抢购",
            titlem:"华为京东自营旗舰店",
            imgUrl: "img/ab7aa65938523ca3.jpg",
            price: "229.00",
            commentCount: "117万+",
            explain:"华为 WS5200 四核版 凌霄四核CPU 5G双频双千兆智能路由器 无线家用穿墙",
            store:"华为京东自营旗舰店"
        },
        {
            title:
                "支持IPv6、爆款双核双千兆】】\n" +
                "华为爆款四核路由，点击抢购",
            titlem:"华为京东自营旗舰店",
            imgUrl: "img/8a575f6e9c08eeed.jpg",
            price: "159.00",
            commentCount: "117万+",
            explain:"华为 (HUAWEI) WS5200 增强版双千兆路由器 1200M双频wifi 无线家用穿墙 5G",
            store:"华为京东自营旗舰店"
        },
        {
            title:
                "【华为新品百元路由，真双频，加宽四天线】更多华为爆款路由，点击抢购",
            titlem:"华为京东自营旗舰店",
            imgUrl: "img/d25d36fdb5487242.jpg",
            price: "109.00",
            commentCount: "117万+",
            explain:"华为（HUAWEI）WS5106 1200M真双频路由器 5G双频 四加天线 穿墙强 信号",
            store:"华为京东自营旗舰店"
        },
        {
            title:
                "华为新品路由，凌霄四核三频，一碰连网】】\n" +
                "更多华为爆款路由，点击抢购",
            titlem:"华为京东自营旗舰店",
            imgUrl: "img/6d2fd80312c4b2c0.jpg",
            price: "379.00",
            commentCount: "117万+",
            explain:"华为（HUAWEI）路由器A2 双千兆/ 一碰连2200M三频四核/高速路由/wifi穿墙",
            store:"华为京东自营旗舰店"
        },
        {
            title:
                "【支持IPv6、无处不快，覆盖无忧，哪里信号不好插哪里】】\n" +
                "华为爆款四核路由，点击抢购",
            titlem:"华为京东自营旗舰店",
            imgUrl: "img/f4551dc6b3950154.jpg",
            price: "929.00",
            commentCount: "117万+",
            explain:"华为路由器Q2 Pro（1母2子）分布式子母路由/全千兆/自研凌霄芯片/5G智能",
            store:"华为京东自营旗舰店"
        }
    ];

    //  页码开始的索引
    var startIndex = (pageIndex - 1) * pageSize;

    //  页码结束的索引
    var endIndex = pageIndex * pageSize;

    var newItems = [];
    for (var i = 0; i < array.length; i++) {
        //   把数组中要显示的范围取出来
        if (i >= startIndex && i < endIndex) {
            var itemWithHtml = getItem(array[i]);
            newItems.push(itemWithHtml);
        }
    }
    document.getElementById("gl-warp").innerHTML = newItems.join("");
}

// 上一页
function prevPage() {
    if (globalPageIndex > 1) {
        globalPageIndex = globalPageIndex - 1;
        loadData(globalPageIndex);
    }
}

// 下一页
function nextPage() {
    if (globalPageIndex < 3) {
        globalPageIndex = globalPageIndex + 1;
        loadData(globalPageIndex);

    }
}

/*
function changepage() {
    let element_1 = document.getElementById('page').children;
}
*/

/*page.addEventListener('click', () => {
    // console.log(NUM)

    if (NUM === 1) {
        homepage.disabled = true;
        prevpage.disabled = true;
        lastpage.disabled = false;
        nextpage.disabled = false;
    }else if (NUM > 1 && NUM < 3 ) {
        homepage.disabled = false;
        prevpage.disabled = false;
        lastpage.disabled = false;
        nextpage.disabled = false;
    }else{
        homepage.disabled = false;
        prevpage.disabled = false;
        lastpage.disabled = true;
        nextpage.disabled = true;
    }
    document.getElementById('tiaozhuan').children[2].innerText = NUM;
    /!*document.getElementById('word').innerText = 'Now it is the ' + NUM + ' Element';*!/
});*/



loadData(globalPageIndex);
