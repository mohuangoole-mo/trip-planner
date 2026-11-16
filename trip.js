/* 旅程資料（與元件分開）。改行程只要改這個檔，或在網站上編輯後匯出 JSON。
   category: sight 景點｜food 餐飲｜stay 住宿｜transit 交通｜flight 航班
   cost.per: person 每人｜car 每車｜group 全團；cost 為 null 代表未填
   estimated: true 代表估算；verify: true 代表營業時間／票價／班次待確認

   資料來源：Funliday 公開行程
   https://www.funliday.com/m_NjVlOWJmYzAzZmFkYzhjNWY5YWYxNWQ30/trips/6a521a879c310366b611b82b
   地址、經緯度為依地名查找的概略值，未逐一人工核對，verify 全部設 true。
   花費與人數未在 Funliday 頁面提供，依規則不自行編造，cost 全部留 null、
   實際花費由 Muse 依分帳紀錄每晚 00:00 同步寫入（cost.per 一律為 group，
   即該筆實際支付總額；時間為估計的新增項目標 verify: true）。
   travelers 先用「2 位大人」佔位，請使用者確認後再改。
   Funliday 原頁面也標註「望遠市場」「奉恩寺」「樂天超市」三處描述誤植縣市，地址本身仍可用。
   所有地名、地址已全部改成中文，不保留韓文原文，方便使用者直接閱讀。 */
window.DEFAULT_TRIP = {
  version: 1,
  sample: false,
  name: "首爾賞楓 7 日",
  destination: "南韓・首爾",
  timezone: "Asia/Seoul",
  startDate: "2026-11-11",
  endDate: "2026-11-17",
  travelers: { adults: 2, children: 0, childAges: "" },
  currency: { local: "KRW", settle: "TWD", rate: 0.023 },
  items: [
    { id: "d1-depart", date: "2026-11-11", start: "18:00", duration: 5, category: "flight", name: "桃園機場第一航廈 出境", address: "台灣 33758 桃園市大園區第一航廈出境道路", lat: 25.0797, lng: 121.2321, cost: null, note: "航班資訊待補", locked: true, verify: true },
    { id: "d1-incheon", date: "2026-11-11", start: "23:30", duration: 60, category: "transit", name: "仁川國際機場 第一交通中心", address: "南韓 仁川 中區 機場路 271 機場鐵道地下1樓", lat: 37.4489, lng: 126.4505, cost: null, note: "仁川機場交通中心", locked: false, verify: true },
    { id: "exp-3", date: "2026-11-11", start: "23:35", duration: 15, category: "food", name: "機場宵夜快餐", address: "南韓 仁川 中區 機場路 271", lat: 37.4489, lng: 126.4505, cost: { amount: 14600, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；時間為估計", locked: false, verify: true },
    { id: "exp-4", date: "2026-11-11", start: "23:55", duration: 60, category: "transit", name: "夜間巴士", address: "仁川國際機場 → 新村站", lat: 37.4489, lng: 126.4505, cost: { amount: 34000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分，每人 ₩17,000；時間為估計", locked: false, verify: true },
    { id: "d1-sinchon", date: "2026-11-12", start: "01:18", duration: 60, category: "stay", name: "新村站", address: "南韓 首爾", lat: 37.5559, lng: 126.9368, cost: null, note: "抵達住宿區域", locked: false, verify: true },

    { id: "d2-start", date: "2026-11-12", start: "10:00", duration: 0, category: "transit", name: "新村站 出發", address: "南韓 首爾", lat: 37.5559, lng: 126.9368, cost: null, note: "", locked: false, verify: false },
    { id: "exp-5", date: "2026-11-12", start: "10:00", duration: 30, category: "food", name: "早餐 辣年糕跟飯卷", address: "南韓 首爾", lat: 37.5559, lng: 126.9368, cost: { amount: 9000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；時間為估計", locked: false, verify: true },
    { id: "d2-mangwon", date: "2026-11-12", start: "10:15", duration: 60, category: "sight", name: "望遠市場", address: "南韓 首爾 麻浦區 望遠路8街7號", lat: 37.5563, lng: 126.9029, cost: null, note: "電話 +8223353591；Funliday 原頁面誤植為台北市", locked: false, verify: true },
    { id: "exp-6", date: "2026-11-12", start: "11:30", duration: 15, category: "transit", name: "儲值地鐵卡", address: "南韓 首爾 新村站", lat: 37.5559, lng: 126.9368, cost: { amount: 20000, currency: "KRW", per: "group", estimated: false }, note: "多多代付，我的地鐵卡；時間為估計", locked: false, verify: true },
    { id: "d2-gangnam", date: "2026-11-12", start: "11:55", duration: 120, category: "sight", name: "江南站", address: "南韓 首爾 德黑蘭路", lat: 37.4979, lng: 127.0276, cost: null, note: "", locked: false, verify: true },
    { id: "d2-lotte-museum", date: "2026-11-12", start: "14:10", duration: 60, category: "sight", name: "樂天美術館", address: "南韓 首爾 松坡區 奧林匹克路300號 樂天世界大廈7樓", lat: 37.5125, lng: 127.1025, cost: null, note: "電話 +8215447744", locked: false, verify: true },
    { id: "exp-7", date: "2026-11-12", start: "14:27", duration: 30, category: "food", name: "三松麵包店 麵包咖啡", address: "南韓 首爾 江南區 永東大路513號 COEX Mall B1", lat: 37.5126, lng: 127.0590, cost: { amount: 14300, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分", locked: false, verify: true },
    { id: "d2-bongeunsa", date: "2026-11-12", start: "15:20", duration: 60, category: "sight", name: "奉恩寺", address: "南韓 首爾 江南區 奉恩寺路531號", lat: 37.5149, lng: 127.0582, cost: null, note: "電話 +82232184800；網站 bongeunsa.org；Funliday 原頁面誤植為新北市", locked: false, verify: true },
    { id: "exp-9", date: "2026-11-12", start: "16:00", duration: 15, category: "food", name: "GS25 便利商店 飲料", address: "南韓 首爾 江南區 永東大路513號 COEX", lat: 37.5126, lng: 127.0590, cost: { amount: 5100, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；時間為估計", locked: false, verify: true },
    { id: "d2-coex", date: "2026-11-12", start: "16:34", duration: 90, category: "sight", name: "COEX Mall 星際城購物中心", address: "南韓 首爾 江南區 永東大路513號", lat: 37.5126, lng: 127.0590, cost: null, note: "電話 +82260025300；網站 coex.co.kr", locked: false, verify: true },
    { id: "d2-outlet", date: "2026-11-12", start: "18:14", duration: 60, category: "sight", name: "現代City Outlet 東大門店", address: "南韓 首爾 清溪川路", lat: 37.5663, lng: 127.0094, cost: null, note: "", locked: false, verify: true },
    { id: "exp-8", date: "2026-11-12", start: "19:00", duration: 30, category: "food", name: "弘大超市 優格、麝香葡萄", address: "南韓 首爾 麻浦區 弘大", lat: 37.5520, lng: 126.9238, cost: { amount: 7480, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；時間為估計", locked: false, verify: true },
    { id: "d2-dinner", date: "2026-11-12", start: "19:40", duration: 75, category: "food", name: "Musso 弘大店", address: "南韓 首爾 麻浦區 於乙馬堂路131號", lat: 37.5520, lng: 126.9238, cost: { amount: 105400, currency: "KRW", per: "group", estimated: false }, note: "電話 +8223363994；三人用餐，我負擔兩人份（多多付）", locked: false, verify: true },
    { id: "exp-11", date: "2026-11-12", start: "22:19", duration: 15, category: "food", name: "弘大超市 水梨", address: "南韓 首爾 麻浦區 弘大", lat: 37.5520, lng: 126.9238, cost: { amount: 2500, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分", locked: false, verify: true },
    { id: "exp-12", date: "2026-11-12", start: "22:42", duration: 15, category: "food", name: "GS25 咖啡糖零食", address: "南韓 首爾 麻浦區 新村路12街15號", lat: 37.5520, lng: 126.9238, cost: { amount: 16400, currency: "KRW", per: "group", estimated: false }, note: "多多私人消費", locked: false, verify: true },

    { id: "exp-15", date: "2026-11-13", start: "09:00", duration: 30, category: "food", name: "早餐", address: "南韓 首爾", lat: 37.5559, lng: 126.9368, cost: { amount: 4000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；時間為估計", locked: false, verify: true },
    { id: "d3-start", date: "2026-11-13", start: "09:30", duration: 0, category: "transit", name: "新村站 出發", address: "南韓 首爾", lat: 37.5559, lng: 126.9368, cost: null, note: "", locked: false, verify: false },
    { id: "d3-mmca", date: "2026-11-13", start: "09:55", duration: 120, category: "sight", name: "國立現代美術館 首爾館", address: "南韓 首爾 鍾路區 三清洞 三清路30號", lat: 37.5796, lng: 126.9800, cost: null, note: "電話 +82237019500", locked: false, verify: true },
    { id: "exp-16", date: "2026-11-13", start: "10:30", duration: 15, category: "food", name: "甜甜圈", address: "南韓 首爾", lat: 37.5559, lng: 126.9368, cost: { amount: 1000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；時間為估計", locked: false, verify: true },
    { id: "d3-gyeongbokgung", date: "2026-11-13", start: "12:10", duration: 180, category: "sight", name: "景福宮", address: "南韓 首爾", lat: 37.5796, lng: 126.9770, cost: null, note: "網站 royalpalace.go.kr；電話 +822370039001", locked: false, verify: true },
    { id: "exp-14", date: "2026-11-13", start: "12:30", duration: 15, category: "food", name: "韓服帽子", address: "南韓 首爾 鍾路區 景福宮附近", lat: 37.5796, lng: 126.9770, cost: { amount: 6000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；時間為估計", locked: false, verify: true },
    { id: "d3-aquafield", date: "2026-11-13", start: "15:35", duration: 120, category: "sight", name: "AQUAFIELD 高陽溫泉水世界", address: "南韓 京畿道 高陽市", lat: 37.6384, lng: 126.7739, cost: null, note: "電話 +823151734500", locked: false, verify: true },
    { id: "d3-akplaza", date: "2026-11-13", start: "18:15", duration: 120, category: "sight", name: "AK PLAZA 弘大店", address: "南韓 首爾特別市 楊花路", lat: 37.5519, lng: 126.9254, cost: null, note: "電話 +8227899800", locked: false, verify: true },
    { id: "exp-13", date: "2026-11-13", start: "19:00", duration: 30, category: "food", name: "晚餐自助餐", address: "南韓 首爾 麻浦區 弘大", lat: 37.5520, lng: 126.9238, cost: { amount: 20000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；時間為估計", locked: false, verify: true },
    { id: "d3-dinner", date: "2026-11-13", start: "20:24", duration: 90, category: "food", name: "荒謬的生肉 弘大店", address: "南韓 首爾 麻浦區 於乙馬堂路118號", lat: 37.5520, lng: 126.9240, cost: null, note: "電話 +8223249588", locked: false, verify: true },

    { id: "exp-17", date: "2026-11-13", start: "20:44", duration: 30, category: "food", name: "Shake Shack 晚餐", address: "南韓 首爾 麻浦區 弘大", lat: 37.5520, lng: 126.9238, cost: { amount: 27500, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；쉑마이스터버거套餐＋SHBBQ버거套餐，已折 ₩3,000", locked: false, verify: true },
    { id: "exp-18", date: "2026-11-13", start: "22:04", duration: 15, category: "food", name: "백다방 奶茶", address: "南韓 首爾 麻浦區 弘大", lat: 37.5520, lng: 126.9238, cost: { amount: 3500, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；백다방 홍대거리점，熱奶茶 1 杯", locked: false, verify: true },
    { id: "exp-19", date: "2026-11-13", start: "22:52", duration: 15, category: "food", name: "Olive Young 面膜", address: "南韓 首爾 麻浦區 弘大", lat: 37.5520, lng: 126.9238, cost: { amount: 7000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；7 片 Mediheal 面膜，LINE PAY 付款；時間為估計", locked: false, verify: true },
    { id: "exp-20", date: "2026-11-13", start: "23:06", duration: 30, category: "food", name: "半半炸雞", address: "南韓 首爾 麻浦區 弘大", lat: 37.5520, lng: 126.9238, cost: { amount: 25000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；맵싸한 반반 치킨 순살（原味炸雞＋辣味調味），宵夜", locked: false, verify: true },
    { id: "exp-21", date: "2026-11-13", start: "23:35", duration: 15, category: "food", name: "便利商店 飲料", address: "南韓 首爾 麻浦區 弘大", lat: 37.5520, lng: 126.9238, cost: { amount: 6000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；칠성 大麥茶＋玉米鬚茶 500ml 各 1（1+1）＋卡布魯 Real Orange Highball 355ml 1 罐；時間為估計", locked: false, verify: true },
    { id: "d4-start", date: "2026-11-14", start: "09:30", duration: 0, category: "transit", name: "新村站 出發", address: "南韓 首爾", lat: 37.5559, lng: 126.9368, cost: null, note: "", locked: false, verify: false },
    { id: "d4-itaewon1", date: "2026-11-14", start: "09:57", duration: 10, category: "sight", name: "梨泰院", address: "南韓 首爾 龍山區 綠莎坪大路46街16號", lat: 37.5349, lng: 126.9947, cost: null, note: "電話 +821029465452", locked: false, verify: true },
    { id: "d4-leeum", date: "2026-11-14", start: "10:14", duration: 120, category: "sight", name: "Leeum美術館", address: "南韓 首爾 龍山區 梨泰院路55街60-16號", lat: 37.5384, lng: 126.9995, cost: null, note: "電話 +82220146901", locked: false, verify: true },
    { id: "exp-22", date: "2026-11-14", start: "10:59", duration: 30, category: "food", name: "早餐", address: "南韓 首爾 龍山區 梨泰院附近", lat: 37.5349, lng: 126.9947, cost: { amount: 9000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；時間為估計", locked: false, verify: true },
    { id: "exp-23", date: "2026-11-14", start: "12:07", duration: 30, category: "food", name: "大創 Daiso 購物", address: "南韓 首爾 麻浦區 新村路 Daiso 新村本店", lat: 37.5575, lng: 126.9360, cost: { amount: 18500, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；手機保護貼、迪士尼米奇商品、膠原蛋白噴霧等，LINE Pay 付款；時間為估計", locked: false, verify: true },
    { id: "d4-hangang1", date: "2026-11-14", start: "12:39", duration: 10, category: "sight", name: "汝矣島漢江公園", address: "南韓 首爾特別市 汝矣島洞 07337", lat: 37.5283, lng: 126.9335, cost: null, note: "", locked: false, verify: true },
    { id: "d4-ydp-underground", date: "2026-11-14", start: "13:14", duration: 90, category: "sight", name: "永登浦地下街", address: "南韓 首爾 永登浦區 永登浦本洞489-13號", lat: 37.5156, lng: 126.9079, cost: null, note: "", locked: false, verify: true },
    { id: "d4-zoolung", date: "2026-11-14", start: "14:59", duration: 90, category: "sight", name: "Zoolung Zoolung 永登浦店", address: "南韓 首爾 永登浦區 永中路15號 5樓", lat: 37.5172, lng: 126.9083, cost: null, note: "室內萌寵樂園", locked: false, verify: true },
    { id: "exp-24", date: "2026-11-14", start: "16:10", duration: 15, category: "food", name: "Compose Coffee 咖啡", address: "南韓 首爾特別市 汝矣島洞 汝矣島漢江公園", lat: 37.5283, lng: 126.9335, cost: { amount: 6400, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；美式 ₩2,500＋拿鐵 ₩3,900，外帶，海外 Visa 卡付款；時間為估計", locked: false, verify: true },
    { id: "exp-25", date: "2026-11-14", start: "16:49", duration: 15, category: "food", name: "漢江 Mart 炸醬麵", address: "南韓 首爾特別市 汝矣島洞 汝矣島漢江公園", lat: 37.5283, lng: 126.9335, cost: { amount: 4500, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；올리브 짜파게티 멀티팩，海外 Visa 卡付款；時間為估計", locked: false, verify: true },
    { id: "d4-hyundai-seoul", date: "2026-11-14", start: "16:49", duration: 120, category: "sight", name: "The Hyundai Seoul 百貨", address: "南韓 首爾 永登浦區 汝矣大路108號", lat: 37.5250, lng: 126.9290, cost: null, note: "電話 +8227672233", locked: false, verify: true },
    { id: "d4-hangang2", date: "2026-11-14", start: "18:50", duration: 70, category: "sight", name: "汝矣島漢江公園", address: "南韓 首爾特別市 汝矣島洞 07337", lat: 37.5283, lng: 126.9335, cost: null, note: "", locked: false, verify: true },
    { id: "exp-26", date: "2026-11-14", start: "20:11", duration: 60, category: "food", name: "晚餐 清雲刀削麵", address: "南韓 首爾 永登浦區", lat: 37.5156, lng: 126.9079, cost: { amount: 22000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；닭곰탕 ₩11,000＋얼큰해장칼국수 ₩11,000，海外 Visa 卡付款", locked: false, verify: true },
    { id: "exp-27", date: "2026-11-14", start: "20:18", duration: 15, category: "food", name: "糖餅", address: "南韓 首爾 永登浦區", lat: 37.5156, lng: 126.9079, cost: { amount: 2000, currency: "KRW", per: "group", estimated: false }, note: "多多付，我的個人點心；호떡 糖餅 1 個；時間為估計", locked: false, verify: true },
    { id: "d4-goodmorning-city", date: "2026-11-14", start: "20:27", duration: 150, category: "sight", name: "早安城", address: "南韓 首爾 中區 奬忠壇路247號", lat: 37.5663, lng: 127.0094, cost: null, note: "電話 +82221188700", locked: false, verify: true },
    { id: "d4-itaewon2", date: "2026-11-14", start: "23:15", duration: 10, category: "sight", name: "梨泰院", address: "南韓 首爾 龍山區 綠莎坪大路46街16號", lat: 37.5349, lng: 126.9947, cost: null, note: "", locked: false, verify: true },

    { id: "exp-28", date: "2026-11-15", start: "00:15", duration: 15, category: "food", name: "高蛋白", address: "南韓 首爾 龍山區 梨泰院附近", lat: 37.5349, lng: 126.9947, cost: { amount: 2900, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；高蛋白飲料 2 杯；時間為估計", locked: false, verify: true },
    { id: "exp-29", date: "2026-11-15", start: "01:00", duration: 15, category: "food", name: "GYM 酒", address: "南韓 首爾 龍山區 梨泰院附近", lat: 37.5349, lng: 126.9947, cost: { amount: 12000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；GYM 夜店飲料；時間為估計", locked: false, verify: true },
    { id: "exp-30", date: "2026-11-15", start: "01:00", duration: 60, category: "sight", name: "GYM 入場費", address: "南韓 首爾 龍山區 梨泰院附近", lat: 37.5349, lng: 126.9947, cost: { amount: 40000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；GYM 五週年 CIRCUIT SPECIAL NIGHT，兩人入場；時間為估計", locked: false, verify: true },
    { id: "exp-31", date: "2026-11-15", start: "01:46", duration: 15, category: "food", name: "CU 酒", address: "南韓 首爾 龍山區 梨泰院附近", lat: 37.5349, lng: 126.9947, cost: { amount: 2800, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；CU 便利商店買酒；時間為估計", locked: false, verify: true },
    { id: "exp-32", date: "2026-11-15", start: "02:44", duration: 30, category: "food", name: "排骨湯", address: "南韓 首爾 龍山區 梨泰院附近", lat: 37.5349, lng: 126.9947, cost: { amount: 11000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；時間為估計", locked: false, verify: true },
    { id: "exp-33", date: "2026-11-15", start: "02:45", duration: 30, category: "food", name: "宵夜", address: "南韓 首爾 龍山區 梨泰院附近", lat: 37.5349, lng: 126.9947, cost: { amount: 8400, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；時間為估計", locked: false, verify: true },
    { id: "exp-34", date: "2026-11-15", start: "02:45", duration: 60, category: "sight", name: "PUBLIC 入場費", address: "南韓 首爾 龍山區 梨泰院附近", lat: 37.5349, lng: 126.9947, cost: { amount: 30000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；PUBLIC × KIMYO 派對，入場費每人 ₩15,000 × 2 人；時間為估計", locked: false, verify: true },
    { id: "exp-35", date: "2026-11-15", start: "02:58", duration: 15, category: "food", name: "精胺酸提神飲", address: "南韓 首爾 龍山區 梨泰院附近", lat: 37.5349, lng: 126.9947, cost: { amount: 7800, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；紅色 비컴플 아르기닌精胺酸提神飲，買二送一；時間為估計", locked: false, verify: true },
    { id: "d5-itaewon", date: "2026-11-15", start: "11:00", duration: 50, category: "sight", name: "梨泰院", address: "南韓 首爾 龍山區 綠莎坪大路46街16號", lat: 37.5349, lng: 126.9947, cost: null, note: "電話 +821029465452", locked: false, verify: true },
    { id: "d5-ddp", date: "2026-11-15", start: "12:05", duration: 10, category: "sight", name: "東大門設計廣場 DDP", address: "南韓 首爾 中區 乙支路281號", lat: 37.5663, lng: 127.0094, cost: null, note: "電話 +82221530000", locked: false, verify: true },
    { id: "d5-jamsil", date: "2026-11-15", start: "12:41", duration: 60, category: "sight", name: "蠶室站", address: "南韓 首爾 松坡大路", lat: 37.5133, lng: 127.1001, cost: null, note: "", locked: false, verify: true },
    { id: "d5-lotteworld", date: "2026-11-15", start: "14:01", duration: 300, category: "sight", name: "樂天世界", address: "南韓 首爾 蠶室洞 奧林匹克路240號", lat: 37.5111, lng: 127.0981, cost: null, note: "網站 lotteworld.com；電話 +8224112000", locked: false, verify: true },
    { id: "exp-36", date: "2026-11-15", start: "14:29", duration: 15, category: "food", name: "樂天世界 Cafe Ariana 咖啡", address: "南韓 首爾 蠶室洞 奧林匹克路240號 樂天世界", lat: 37.5111, lng: 127.0981, cost: { amount: 11100, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；樂天世界內 Cafe Ariana（투썸），冰拿鐵 L ₩5,800＋冰美式 L ₩5,300；LinePay 付款；時間為估計", locked: false, verify: true },
    { id: "d5-gwangjang", date: "2026-11-15", start: "19:26", duration: 120, category: "food", name: "廣藏市場", address: "南韓 首爾 鍾路區 鍾路4街 昌慶宮路88號", lat: 37.5701, lng: 126.9996, cost: null, note: "網站 kwangjangmarket.co.kr；電話 +82222670291", locked: false, verify: true },
    { id: "exp-37", date: "2026-11-15", start: "20:18", duration: 30, category: "food", name: "樂天世界 진지한국밥 晚餐", address: "南韓 首爾 蠶室洞 奧林匹克路240號 樂天世界", lat: 37.5111, lng: 127.0981, cost: { amount: 26000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；樂天世界內 진지한국밥，豬肉湯飯 ₩11,000＋白切肉（小）₩15,000；LinePay 付款；時間為估計", locked: false, verify: true },
    { id: "exp-38", date: "2026-11-15", start: "21:17", duration: 15, category: "food", name: "Peria Mart 水果", address: "南韓 首爾 鍾路區 廣藏市場附近", lat: 37.5701, lng: 126.9996, cost: { amount: 8000, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；麝香葡萄 ₩6,000＋草莓小包裝 ₩2,000；海外 Visa 卡付款；時間為估計", locked: false, verify: true },
    { id: "exp-39", date: "2026-11-15", start: "21:35", duration: 30, category: "food", name: "宵夜", address: "南韓 首爾 鍾路區 廣藏市場附近", lat: 37.5701, lng: 126.9996, cost: { amount: 20200, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；時間為估計", locked: false, verify: true },
    { id: "exp-40", date: "2026-11-15", start: "22:46", duration: 15, category: "food", name: "CU 便利商店", address: "南韓 首爾 麻浦區 新村附近", lat: 37.5559, lng: 126.9368, cost: { amount: 6700, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；時間為估計", locked: false, verify: true },
    { id: "exp-41", date: "2026-11-15", start: "22:52", duration: 15, category: "food", name: "餃子套餐", address: "南韓 首爾 麻浦區 新村附近", lat: 37.5559, lng: 126.9368, cost: { amount: 11200, currency: "KRW", per: "group", estimated: false }, note: "多多付，兩人平分；餃子套餐 ₩11,200，外帶；海外 Visa 卡付款", locked: false, verify: true },

    { id: "d6-ddp", date: "2026-11-16", start: "09:00", duration: 10, category: "sight", name: "東大門設計廣場 DDP", address: "南韓 首爾 中區 乙支路281號", lat: 37.5663, lng: 127.0094, cost: null, note: "電話 +82221530000", locked: false, verify: true },
    { id: "d6-morningcalm", date: "2026-11-16", start: "10:14", duration: 90, category: "sight", name: "晨靜樹木園", address: "南韓 京畿道 加平郡 上面 樹木園路432號", lat: 37.7956, lng: 127.3454, cost: null, note: "網站 morningcalm.co.kr；電話 +8215446703", locked: false, verify: true },
    { id: "d6-namiseom", date: "2026-11-16", start: "12:20", duration: 240, category: "sight", name: "南怡島", address: "南韓 江原道 春川市 南山面 南怡島街1號", lat: 37.7903, lng: 127.5262, cost: null, note: "電話 +82315808114", locked: false, verify: true },
    { id: "d6-ddp2", date: "2026-11-16", start: "18:40", duration: 60, category: "sight", name: "東大門設計廣場 DDP", address: "南韓 首爾 中區 乙支路281號", lat: 37.5663, lng: 127.0094, cost: null, note: "", locked: false, verify: true },
    { id: "d6-lottemart", date: "2026-11-16", start: "19:57", duration: 120, category: "sight", name: "樂天超市 首爾站店", address: "南韓 首爾 中區 漢江大路405號", lat: 37.5547, lng: 126.9706, cost: null, note: "電話 +8223902500；Funliday 原頁面誤植為明洞區", locked: false, verify: true },
    { id: "d6-incheon-terminal", date: "2026-11-16", start: "22:57", duration: 60, category: "transit", name: "仁川國際機場 第一交通中心", address: "南韓 仁川 中區 機場路271號 機場鐵道地下1樓", lat: 37.4489, lng: 126.4505, cost: null, note: "", locked: false, verify: true },

    { id: "d7-arrival", date: "2026-11-17", start: "02:30", duration: 5, category: "flight", name: "桃園機場第一航廈 入境", address: "台灣 33758 桃園市大園區第一航廈出境道路", lat: 25.0797, lng: 121.2321, cost: null, note: "返程", locked: true, verify: true }
  ],
  /* 手動確認過的交通寫在這裡，key 為「前一站 id>後一站 id」；沒寫的由網站依距離估算 */
  legs: {},
  packing: [
    { id: "g1", name: "證件與金錢", items: [
      { id: "p1", name: "護照", qty: 2, note: "效期 6 個月以上", done: false },
      { id: "p2", name: "韓元現金", qty: 1, note: "", done: false },
      { id: "p3", name: "信用卡", qty: 2, note: "", done: false } ] },
    { id: "g2", name: "電子用品", items: [
      { id: "p4", name: "手機與充電線", qty: 2, note: "", done: false },
      { id: "p5", name: "行動電源", qty: 1, note: "隨身行李", done: false },
      { id: "p6", name: "網卡或 eSIM", qty: 2, note: "", done: false } ] },
    { id: "g3", name: "衣物", items: [
      { id: "p7", name: "換洗衣物", qty: 7, note: "每人；11 月首爾偏冷", done: false },
      { id: "p8", name: "厚外套", qty: 2, note: "", done: false } ] },
    { id: "g4", name: "盥洗與保養", items: [
      { id: "p9", name: "牙刷牙膏", qty: 2, note: "", done: false },
      { id: "p10", name: "護唇膏／乳液", qty: 1, note: "", done: false } ] },
    { id: "g5", name: "藥品與健康", items: [
      { id: "p11", name: "常備藥", qty: 1, note: "退燒、腸胃、暈車", done: false },
      { id: "p12", name: "OK 繃", qty: 1, note: "", done: false } ] },
    { id: "g6", name: "其他", items: [
      { id: "p13", name: "折疊購物袋", qty: 1, note: "廣藏市場、望遠市場採買用", done: false },
      { id: "p14", name: "摺疊雨傘", qty: 2, note: "", done: false } ] }
  ]
};
