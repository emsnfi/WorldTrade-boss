<template>
<div>
  <h1>商品區</h1>
    <div class ="item_list"
         v-for="(item,index) in itemList"
         :key = index
         v-bind:href="item.itemImg"
    >{{item.itemName}} 價錢 ： {{item.itemPrice}}
    </div>
</div>
</template>


<script>

  export default {
    name: 'Product',
    data(){
    return {itemList : [
   {
      "id": 0,
      "itemName": "台灣現貨 智能掃地機 掃地機 升級版USB充電 吸塵器 電動掃地機 自動掃地機 ",
      "itemPrice": "450.0",
      "itemImg": "https://cf.shopee.tw/file/20b46911daaff57f84f71b2ff7da5322_tn"
   },
   {
      "id": 1,
      "itemName": "【輸碼現折】Roborock E201-02 小瓦掃地機器人規劃版 (石頭科技小米生態鍊)【公司貨】【石頭超",
      "itemPrice": "7499.0",
      "itemImg": "https://cf.shopee.tw/file/cac5257129957042da1e04db7a4da8e8_tn"
   },
   {
      "id": 2,
      "itemName": "限量輸碼: M5M49VHX再折250～《24H發貨/免運》米家掃拖機器人 1C 2500Pa超大吸力 小米",
      "itemPrice": "5980.0",
      "itemImg": "https://cf.shopee.tw/file/671f4f2b4edaef0a2e1f4311b6623503_tn"
   },
   {
      "id": 3,
      "itemName": "現貨-萊爾富免運-趴趴走 增強鋰電版 T270 智慧型掃地機器人 吸塵器 充電式 掃地 吸地 自動避開障礙",
      "itemPrice": "120.0",
      "itemImg": "https://cf.shopee.tw/file/d3e460d03de07b49eb8ed201790b158c_tn"
   },
   {
      "id": 4,
      "itemName": "【限時促銷】Roborock S6 石頭掃地機器人二代 (石頭科技小米生態鍊)【公司貨】【石頭超",
      "itemPrice": "14999.0",
      "itemImg": "https://cf.shopee.tw/file/ff3a8abdb428b72f9107a15c04407804_tn"
   },
   {
      "id": 5,
      "itemName": "【實體門市】智慧型掃地機器人 吸塵器 掃地機 自動掃地機 充電式掃地機 掃地 吸地 擦地 拖地 ",
      "itemPrice": "545.0",
      "itemImg": "https://cf.shopee.tw/file/cad32271d2c2e37a04bbfc8a4a39a10c_tn"
   },
   {
      "id": 6,
      "itemName": "【限時促銷】Roborock 石頭掃地機器人二代 S5 Max",
      "itemPrice": "16999.0",
      "itemImg": "https://cf.shopee.tw/file/bbded9dd739214fce816be2fe7e2969e_tn"
   },
   {
      "id": 7,
      "itemName": "🎉現貨 當天出貨Sweeper s3智慧掃地機器人  USB充電 明星曾亞蘭 柔媽咪推薦 自動避開障礙",
      "itemPrice": "40.0",
      "itemImg": "https://cf.shopee.tw/file/422aac8b13bce28392941c13a2e087e7_tn"
   },
   {
      "id": 8,
      "itemName": "【Blade】米家掃地機器人 現貨 當天出貨 小米 掃地機 吸塵器 APP控制 智慧掃地機 智能路徑規劃 持久",
      "itemPrice": "6800.0",
      "itemImg": "https://cf.shopee.tw/file/5359137f810620d7393f3e29a3413ae2_tn"
   },
   {
      "id": 9,
      "itemName": "【限時促銷】Roborock 石頭掃地機器人二代 S5 Max",
      "itemPrice": "16999.0",
      "itemImg": "https://cf.shopee.tw/file/bbded9dd739214fce816be2fe7e2969e_tn"
   },
   {
      "id": 10,
      "itemName": "✨台灣現貨 當日出貨✨ 小米 米家 德爾瑪 手持無線吸塵器 米家無線吸塵器 小米無線手持吸塵器 掃地機器人 ",
      "itemPrice": "1550.0",
      "itemImg": "https://cf.shopee.tw/file/7869a92ff0ecd451ca879fa49e95ba78_tn"
   },
   {
      "id": 11,
      "itemName": "AOC艾德蒙掃地 拖地 吸塵 三合一數位智能 迷你 掃地機器人",
      "itemPrice": "855.0",
      "itemImg": "https://cf.shopee.tw/file/16b346eea76029a35fb5b4a6ec9b2d05_tn"
   },
   {
      "id": 12,
      "itemName": "【買就送水箱】Mr.Smart  9S全新再進化 高速氣旋吸塵掃地機器",
      "itemPrice": "5980.0",
      "itemImg": "https://cf.shopee.tw/file/2a374633bef1fcf863683b2a05bc5514_tn"
   },
   {
      "id": 13,
      "itemName": "現貨-萊爾富免運-趴趴走 增強鋰電版 T270 智慧型掃地機器人 吸塵器 充電式 掃地 吸地 自動避開障礙",
      "itemPrice": "120.0",
      "itemImg": "https://cf.shopee.tw/file/d3e460d03de07b49eb8ed201790b158c_tn"
   },
   {
      "id": 14,
      "itemName": "送豪華擦地組+免運+24H出貨【智慧偵測超薄型吸塵器機器人】掃地機器人 充電式自動掃地機 無線吸塵器 掃",
      "itemPrice": "4399.0",
      "itemImg": "https://cf.shopee.tw/file/a172325d36477d2b9e4881cb8ea821dd_tn"
   },
   {
      "id": 15,
      "itemName": "【Blade】米家掃地機器人主刷 現貨 當天出貨 小米掃拖機器人1C 石頭掃地機器",
      "itemPrice": "160.0",
      "itemImg": "https://cf.shopee.tw/file/a72ebb7b49e1eb0322a392c707dd85b0_tn"
   },
   {
      "id": 16,
      "itemName": "玻妞HOBOT 雷姬吸擦噴拖4合1機器人 智能掃地機器人 LEGEE-688【出價",
      "itemPrice": "150.0",
      "itemImg": "https://cf.shopee.tw/file/157c0b95552cf78df3c81419347866ac_tn"
   },
   {
      "id": 17,
      "itemName": "玻妞HOBOT 雷姬吸擦噴拖4合1機器人 智能掃地機器人 LEGEE-688【出價",
      "itemPrice": "150.0",
      "itemImg": "https://cf.shopee.tw/file/157c0b95552cf78df3c81419347866ac_tn"
   },
   {
      "id": 18,
      "itemName": "HERAN禾聯 超薄型高效能智慧掃地機器人301E",
      "itemPrice": "3392.0",
      "itemImg": "https://cf.shopee.tw/file/c83aa3fe65d0f30294848b45fe1c4ced_tn"
   },
   {
      "id": 19,
      "itemName": "HERAN禾聯 雙核心智能掃地機器人HVR-",
      "itemPrice": "3480.0",
      "itemImg": "https://cf.shopee.tw/file/e521ec5dae00b28b5485c28187085738_tn"
   },
   {
      "id": 20,
      "itemName": "Mr.Smart 7S/Zero-S/Zero-Z 智慧型掃地機器人專用 刷頭",
      "itemPrice": "318.0",
      "itemImg": "https://cf.shopee.tw/file/613ea4487dca025df6e178dec1d19f63_tn"
   },
   {
      "id": 21,
      "itemName": "【免運●台灣現貨】三合一智慧型掃地機器人 充電 吸塵器 智能 掃地機 自動掃地機 家用清潔器 掃地 吸地 擦地",
      "itemPrice": "549.0",
      "itemImg": "https://cf.shopee.tw/file/198ec6c5de17f2dbee657fe9b469f764_tn"
   },
   {
      "id": 22,
      "itemName": "松騰 MIT掃地機器人285G 掃地機器人 趴趴走 papago  宜家寶 台灣製 外銷德國 掃地吸塵擦地【",
      "itemPrice": "2580.0",
      "itemImg": "https://cf.shopee.tw/file/988edd2f61943da182cb73cdc034b8b9_tn"
   },
   {
      "id": 23,
      "itemName": "【coni shop】米家掃地機器人主刷 現貨 當天出貨 小米掃拖機器人1C 石頭掃地機器",
      "itemPrice": "160.0",
      "itemImg": "https://cf.shopee.tw/file/55aa6b88d0af9171731864eb47f4b74b_tn"
   },
   {
      "id": 24,
      "itemName": "【蝦皮最便宜】趴趴走 增強鋰電版 T270 智慧型 掃地機器人  掃地 吸地 避開障礙",
      "itemPrice": "790.0",
      "itemImg": "https://cf.shopee.tw/file/04aaa9557d0cd73f5b6696545866ec63_tn"
   },
   {
      "id": 25,
      "itemName": "【24H出貨附手開發票】掃地機器人 掃地機 拖地 歌林掃地機",
      "itemPrice": "990.0",
      "itemImg": "https://cf.shopee.tw/file/99cf098a731344092ff08c1cc263d36f_tn"
   },
   {
      "id": 26,
      "itemName": "美國iRobot Roomba 960掃地機器人 保固15個月再",
      "itemPrice": "18399.0",
      "itemImg": "https://cf.shopee.tw/file/0658bc60d9c47dec431b3604c985a829_tn"
   },
   {
      "id": 27,
      "itemName": "ECOVACS  DEEBOT OZMO 900 掃地機器人 抗菌  掃吸拖三合一 ",
      "itemPrice": "9850.0",
      "itemImg": "https://cf.shopee.tw/file/020f28e765da0a3238ec1b6b180e49f4_tn"
   },
   {
      "id": 28,
      "itemName": "美國iRobot Roomba 690掃地機器人 總代理保固1+1年 買就送Braava Jet 240",
      "itemPrice": "12999.0",
      "itemImg": "https://cf.shopee.tw/file/66c5885a7f8f03c6c4e570eb2863b744_tn"
   },
   {
      "id": 29,
      "itemName": "【限時促銷】Roborock S6 石頭掃地機器人二代 (石頭科技小米生態鍊)【公司貨】【石頭超",
      "itemPrice": "14999.0",
      "itemImg": "https://cf.shopee.tw/file/ff3a8abdb428b72f9107a15c04407804_tn"
   },
   {
      "id": 30,
      "itemName": "【玄安】小米/石頭/小瓦 掃地機器人6腳長邊刷1入 米家掃地機 ",
      "itemPrice": "119.0",
      "itemImg": "https://cf.shopee.tw/file/77760860e837d87ac510fcfc6eb0f59d_tn"
   },
   {
      "id": 31,
      "itemName": "美國 iRobot Roomba 980 掃地機器人 保固15個月再送多樣好禮 4/30-5/",
      "itemPrice": "23880.0",
      "itemImg": "https://cf.shopee.tw/file/9e4bd9a1e72ee473f7f83ab3fe13f68b_tn"
   },
   {
      "id": 32,
      "itemName": "松騰 掃地機器人285G 掃地機器人 趴趴走 Papago MIT 台灣製 掃地吸塵擦地 蝦皮團購【MM-",
      "itemPrice": "2690.0",
      "itemImg": "https://cf.shopee.tw/file/4655d7a158088c364b26aafc338fb3f9_tn"
   },
   {
      "id": 33,
      "itemName": "【限時促銷】Roborock S6 石頭掃地機器人二代 曜石黑 (石頭科技小米生態鍊)【公司貨】【石頭超",
      "itemPrice": "14999.0",
      "itemImg": "https://cf.shopee.tw/file/4cadd86fdde2afa4c5b2bb90fff353a5_tn"
   },
   {
      "id": 34,
      "itemName": "免運 Ecovacs科沃斯 掃地機器人 掃地機 夢淨/靈動/靈犀/朵朵S/傾城/魔鏡S/DD35  分享",
      "itemPrice": "3000.0",
      "itemImg": "https://cf.shopee.tw/file/eeaaa4f3c68242e6f4cad739e6f0de93_tn"
   },
   {
      "id": 35,
      "itemName": "【副廠現貨】小米 石頭 小瓦 掃地機器人 米家掃地機 Ml  石頭 機器人【邊刷一",
      "itemPrice": "45.0",
      "itemImg": "https://cf.shopee.tw/file/5c3600c5fe7913aca14d03b778e7e3e8_tn"
   },
   {
      "id": 36,
      "itemName": "【副廠現貨】小米 石頭 小瓦 掃地機器人 米家掃地機 Ml小米 石頭 機器人【主刷一支】適用小米 ",
      "itemPrice": "155.0",
      "itemImg": "https://cf.shopee.tw/file/bd191374044a942864b63e557ebc6c80_tn"
   },
   {
      "id": 37,
      "itemName": "智慧掃地機器人 充電懶人吸塵器 小家電清",
      "itemPrice": "899.0",
      "itemImg": "https://cf.shopee.tw/file/9a6021913f3ab224b18f209b7e17df46_tn"
   },
   {
      "id": 38,
      "itemName": "iRobot Roomba 690掃地機器人 總代理保固1+1年 買就送Braava 380t",
      "itemPrice": "13999.0",
      "itemImg": "https://cf.shopee.tw/file/fe87e13f558cea1269369b651737a9de_tn"
   },
   {
      "id": 39,
      "itemName": "我超安晴..山水掃地機器人SW",
      "itemPrice": "199.0",
      "itemImg": "https://cf.shopee.tw/file/23e9af890b1c688a32eaf21b080f4282_tn"
   },
   {
      "id": 40,
      "itemName": "『免運』旗艦店 T270升級版T271趴趴走智能掃地機器人 超薄 乾濕兩拖 智能防跌落 清潔無死角 掃地吸地擦",
      "itemPrice": "100.0",
      "itemImg": "https://cf.shopee.tw/file/4bab5e34bdf7a87ebe79310b9eb34ee2_tn"
   },
   {
      "id": 41,
      "itemName": "[領券現折] HERAN 禾聯無線除塵蹣吸塵器 HVC-23E1 手持無線吸塵器 除塵蹣吸塵器",
      "itemPrice": "3990.0",
      "itemImg": "https://cf.shopee.tw/file/65bcad9acddaf7b9502f5ef8a4b1d2ee_tn"
   },
   {
      "id": 42,
      "itemName": "台灣版6550含運 台灣保固一年 米家掃地機器人  全新盒裝 米家掃地機器人 台版 台灣保固一年 小米掃地機 ",
      "itemPrice": "5550.0",
      "itemImg": "https://cf.shopee.tw/file/01aa1bc621b2af1b644e7f116886cb3d_tn"
   },
   {
      "id": 43,
      "itemName": "米家掃地機器人 現貨 台灣賣家 當天出貨 通過NCC認證 小米掃地機器人  吸塵器 吸塵機 APP控制 i",
      "itemPrice": "6650.0",
      "itemImg": "https://cf.shopee.tw/file/ff5f3f24c0291c0891b9fe613847cc68_tn"
   },
   {
      "id": 44,
      "itemName": "【台灣現貨】小米掃地機器人/米家掃地",
      "itemPrice": "199.0",
      "itemImg": "https://cf.shopee.tw/file/9fa76b65859c568a71148d40ac4518e6_tn"
   },
   {
      "id": 45,
      "itemName": "歐堡智慧型掃地機器人 自動掃地機 充電式掃地機 吸塵器 掃地機 掃地 吸地 擦地 智能 打掃幫手 居家生活",
      "itemPrice": "779.0",
      "itemImg": "https://cf.shopee.tw/file/d71396a7f8e9b0c8f8d0d461ea747bc0_tn"
   },
   {
      "id": 46,
      "itemName": "SWEEPER數位智能加強版二合一充電掃地機器人/3色E",
      "itemPrice": "680.0",
      "itemImg": "https://cf.shopee.tw/file/dfba471d323a9fb3176abb6ef3da49cf_tn"
   },
   {
      "id": 47,
      "itemName": "MI 小米 原裝正品 全新原廠盒裝 米家掃地機器人 掃地機周邊商品 小米",
      "itemPrice": "169.0",
      "itemImg": "https://cf.shopee.tw/file/4dd51e002e2cd31ba64cdebc13305d04_tn"
   },
   {
      "id": 48,
      "itemName": "Thomson 第三代路徑導航 掃地機器人 TM-SAV22DS",
      "itemPrice": "8300.0",
      "itemImg": "https://cf.shopee.tw/file/5bd5da079da07065c11b8970b4b7fb96_tn"
   },
   {
      "id": 49,
      "itemName": "吸掃拖3合1掃地機器人 吸塵器掃地機 自動掃地機 掃地機 智能打掃幫手 智能機器人 家居用品 居家生活",
      "itemPrice": "759.0",
      "itemImg": "https://cf.shopee.tw/file/bdd51ea9c8b08fd804599c6df59bc9ea_tn"
   }
]
    
    }
    }
  }
    
</script>

