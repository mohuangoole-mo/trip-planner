/* 旅程資料（與元件分開）。改行程只要改這個檔，或在網站上編輯後匯出 JSON。
   category: sight 景點｜food 餐飲｜stay 住宿｜transit 交通｜flight 航班
   cost.per: person 每人｜car 每車｜group 全團；cost 為 null 代表未填
   estimated: true 代表估算；verify: true 代表營業時間／票價／班次待確認

   資料來源：Funliday 公開行程
   https://www.funliday.com/m_NjVlOWJmYzAzZmFkYzhjNWY5YWYxNWQ30/trips/6a521a879c310366b611b82b
   地址、經緯度為依地名查找的概略值，未逐一人工核對，verify 全部設 true。
   花費與人數未在 Funliday 頁面提供，依規則不自行編造，cost 全部留 null、
   travelers 先用「2 位大人」佔位，請使用者確認後再改。
   Funliday 原頁面也標註「望遠市場」「봉은사」「樂天超市」三處描述誤植縣市，地址本身仍可用。 */
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
    { id: "d1-incheon", date: "2026-11-11", start: "23:30", duration: 60, category: "transit", name: "인천국제공항 제1교통센터", address: "Incheon, Jung-gu, Gonghang-ro, 271 공항철도 지하 1층", lat: 37.4489, lng: 126.4505, cost: null, note: "仁川機場交通中心", locked: false, verify: true },
    { id: "d1-sinchon", date: "2026-11-12", start: "01:18", duration: 60, category: "stay", name: "신촌역 Sinchon Station", address: "Seoul, 南韓", lat: 37.5559, lng: 126.9368, cost: null, note: "抵達住宿區域", locked: false, verify: true },

    { id: "d2-start", date: "2026-11-12", start: "10:00", duration: 0, category: "transit", name: "신촌역 出發", address: "Seoul, 南韓", lat: 37.5559, lng: 126.9368, cost: null, note: "", locked: false, verify: false },
    { id: "d2-mangwon", date: "2026-11-12", start: "10:15", duration: 60, category: "sight", name: "望遠市場（망원시장）", address: "7 Mangwon-ro 8-gil, Mangwon 1(il)-dong, Mapo-gu, Seoul", lat: 37.5563, lng: 126.9029, cost: null, note: "電話 +8223353591；Funliday 原頁面誤植為台北市", locked: false, verify: true },
    { id: "d2-gangnam", date: "2026-11-12", start: "11:55", duration: 120, category: "sight", name: "江南站（강남역）", address: "南韓 首爾 테헤란로", lat: 37.4979, lng: 127.0276, cost: null, note: "", locked: false, verify: true },
    { id: "d2-lotte-museum", date: "2026-11-12", start: "14:10", duration: 60, category: "sight", name: "Lotte Museum of Art（롯데뮤지엄）", address: "Olympic-ro, 300, LOTTE WORLD TOWER 7층, Songpa District, Seoul", lat: 37.5125, lng: 127.1025, cost: null, note: "電話 +8215447744", locked: false, verify: true },
    { id: "d2-bongeunsa", date: "2026-11-12", start: "15:20", duration: 60, category: "sight", name: "奉恩寺（대한불교조계종 봉은사）", address: "531 Bongeunsa-ro, Gangnam District, Seoul", lat: 37.5149, lng: 127.0582, cost: null, note: "電話 +82232184800；網站 bongeunsa.org；Funliday 原頁面誤植為新北市", locked: false, verify: true },
    { id: "d2-coex", date: "2026-11-12", start: "16:34", duration: 90, category: "sight", name: "Starfield Coex Mall（스타필드 코엑스몰）", address: "513 Yeongdong-daero, Gangnam-gu, Seoul", lat: 37.5126, lng: 127.0590, cost: null, note: "電話 +82260025300；網站 coex.co.kr", locked: false, verify: true },
    { id: "d2-outlet", date: "2026-11-12", start: "18:14", duration: 60, category: "sight", name: "現代City Outlet 東大門店（현대시티아울렛 동대문점）", address: "南韓 首爾 청계천로", lat: 37.5663, lng: 127.0094, cost: null, note: "", locked: false, verify: true },
    { id: "d2-dinner", date: "2026-11-12", start: "19:40", duration: 75, category: "food", name: "Musso 弘大店（무쏘 홍대입구역점）", address: "131 Eoulmadang-ro, Mapo-gu, Seoul", lat: 37.5520, lng: 126.9238, cost: null, note: "電話 +8223363994", locked: false, verify: true },

    { id: "d3-start", date: "2026-11-13", start: "09:30", duration: 0, category: "transit", name: "신촌역 出發", address: "Seoul, 南韓", lat: 37.5559, lng: 126.9368, cost: null, note: "", locked: false, verify: false },
    { id: "d3-mmca", date: "2026-11-13", start: "09:55", duration: 120, category: "sight", name: "國立現代美術館（국립현대미술관 서울）", address: "30 Samcheong-ro, Samcheong-dong, Jongno-gu, Seoul", lat: 37.5796, lng: 126.9800, cost: null, note: "電話 +82237019500", locked: false, verify: true },
    { id: "d3-gyeongbokgung", date: "2026-11-13", start: "12:10", duration: 180, category: "sight", name: "景福宮（경복궁）", address: "南韓 首爾", lat: 37.5796, lng: 126.9770, cost: null, note: "網站 royalpalace.go.kr；電話 +822370039001", locked: false, verify: true },
    { id: "d3-aquafield", date: "2026-11-13", start: "15:35", duration: 120, category: "sight", name: "AQUAFIELD Sauna and Spa（아쿠아필드 고양）", address: "南韓 京畿道", lat: 37.6384, lng: 126.7739, cost: null, note: "電話 +823151734500", locked: false, verify: true },
    { id: "d3-akplaza", date: "2026-11-13", start: "18:15", duration: 120, category: "sight", name: "AK PLAZA 弘大店（AK플라자 홍대점）", address: "南韓 首爾特別市 양화로", lat: 37.5519, lng: 126.9254, cost: null, note: "電話 +8227899800", locked: false, verify: true },
    { id: "d3-dinner", date: "2026-11-13", start: "20:24", duration: 90, category: "food", name: "荒謬的生肉 弘大店（엉터리생고기 홍대점）", address: "118 Eoulmadang-ro, Mapo-gu, Seoul", lat: 37.5520, lng: 126.9240, cost: null, note: "電話 +8223249588", locked: false, verify: true },

    { id: "d4-start", date: "2026-11-14", start: "09:30", duration: 0, category: "transit", name: "신촌역 出發", address: "Seoul, 南韓", lat: 37.5559, lng: 126.9368, cost: null, note: "", locked: false, verify: false },
    { id: "d4-itaewon1", date: "2026-11-14", start: "09:57", duration: 10, category: "sight", name: "梨泰院（이태원）", address: "16 Noksapyeong-daero 46-gil, Yongsan-gu, Seoul", lat: 37.5349, lng: 126.9947, cost: null, note: "電話 +821029465452", locked: false, verify: true },
    { id: "d4-leeum", date: "2026-11-14", start: "10:14", duration: 120, category: "sight", name: "리움미술관（Leeum Museum of Art）", address: "60-16 Itaewon-ro 55-gil, Yongsan-gu, Seoul", lat: 37.5384, lng: 126.9995, cost: null, note: "電話 +82220146901", locked: false, verify: true },
    { id: "d4-hangang1", date: "2026-11-14", start: "12:39", duration: 10, category: "sight", name: "汝矣島漢江公園（여의도 한강공원）", address: "대한민국 서울특별시 여의도동 07337", lat: 37.5283, lng: 126.9335, cost: null, note: "", locked: false, verify: true },
    { id: "d4-ydp-underground", date: "2026-11-14", start: "13:14", duration: 90, category: "sight", name: "永登浦地下街（영등포 지하상가）", address: "489-13 Yeongdeungpobon-dong, Yeongdeungpo-gu, Seoul", lat: 37.5156, lng: 126.9079, cost: null, note: "", locked: false, verify: true },
    { id: "d4-zoolung", date: "2026-11-14", start: "14:59", duration: 90, category: "sight", name: "주렁주렁 永登浦店（Zoolung Zoolung）", address: "15 Yeongjung-ro, 5층, Yeongdeungpo-gu, Seoul", lat: 37.5172, lng: 126.9083, cost: null, note: "室內萌寵樂園", locked: false, verify: true },
    { id: "d4-hyundai-seoul", date: "2026-11-14", start: "16:49", duration: 120, category: "sight", name: "The Hyundai Seoul（더현대 서울）", address: "108 Yeoui-daero, Yeongdeungpo-gu, Seoul", lat: 37.5250, lng: 126.9290, cost: null, note: "電話 +8227672233", locked: false, verify: true },
    { id: "d4-hangang2", date: "2026-11-14", start: "18:50", duration: 70, category: "sight", name: "汝矣島漢江公園（여의도 한강공원）", address: "대한민국 서울특별시 여의도동 07337", lat: 37.5283, lng: 126.9335, cost: null, note: "", locked: false, verify: true },
    { id: "d4-goodmorning-city", date: "2026-11-14", start: "20:27", duration: 150, category: "sight", name: "早安城（굿모닝시티）", address: "247 Jangchungdan-ro, Jung-gu, Seoul", lat: 37.5663, lng: 127.0094, cost: null, note: "電話 +82221188700", locked: false, verify: true },
    { id: "d4-itaewon2", date: "2026-11-14", start: "23:15", duration: 10, category: "sight", name: "梨泰院（이태원）", address: "16 Noksapyeong-daero 46-gil, Yongsan-gu, Seoul", lat: 37.5349, lng: 126.9947, cost: null, note: "", locked: false, verify: true },

    { id: "d5-itaewon", date: "2026-11-15", start: "11:00", duration: 50, category: "sight", name: "梨泰院（이태원）", address: "16 Noksapyeong-daero 46-gil, Yongsan-gu, Seoul", lat: 37.5349, lng: 126.9947, cost: null, note: "電話 +821029465452", locked: false, verify: true },
    { id: "d5-ddp", date: "2026-11-15", start: "12:05", duration: 10, category: "sight", name: "東大門設計廣場 DDP（동대문디자인플라자）", address: "281 Eulji-ro, Jung District, Seoul", lat: 37.5663, lng: 127.0094, cost: null, note: "電話 +82221530000", locked: false, verify: true },
    { id: "d5-jamsil", date: "2026-11-15", start: "12:41", duration: 60, category: "sight", name: "蠶室站（잠실역）", address: "南韓 首爾 Songpa-daero", lat: 37.5133, lng: 127.1001, cost: null, note: "", locked: false, verify: true },
    { id: "d5-lotteworld", date: "2026-11-15", start: "14:01", duration: 300, category: "sight", name: "樂天世界（롯데월드）", address: "240 Olympic-ro, Jamsil-dong", lat: 37.5111, lng: 127.0981, cost: null, note: "網站 lotteworld.com；電話 +8224112000", locked: false, verify: true },
    { id: "d5-gwangjang", date: "2026-11-15", start: "19:26", duration: 120, category: "food", name: "廣藏市場（광장시장）", address: "88 Changgyeonggung-ro, Jongno 4(sa)-ga, Jongno-gu, Seoul", lat: 37.5701, lng: 126.9996, cost: null, note: "網站 kwangjangmarket.co.kr；電話 +82222670291", locked: false, verify: true },

    { id: "d6-ddp", date: "2026-11-16", start: "09:00", duration: 10, category: "sight", name: "東大門設計廣場 DDP（동대문디자인플라자）", address: "281 Eulji-ro, Jung District, Seoul", lat: 37.5663, lng: 127.0094, cost: null, note: "電話 +82221530000", locked: false, verify: true },
    { id: "d6-morningcalm", date: "2026-11-16", start: "10:14", duration: 90, category: "sight", name: "晨靜樹木園（아침고요수목원）", address: "432 Sumogwon-ro, Sang-myeon, Gapyeong-gun, Gyeonggi-do", lat: 37.7956, lng: 127.3454, cost: null, note: "網站 morningcalm.co.kr；電話 +8215446703", locked: false, verify: true },
    { id: "d6-namiseom", date: "2026-11-16", start: "12:20", duration: 240, category: "sight", name: "南怡島（남이섬）", address: "1 Namiseom-gil, Namsan-myeon, Chuncheon-si, Gangwon-do", lat: 37.7903, lng: 127.5262, cost: null, note: "電話 +82315808114", locked: false, verify: true },
    { id: "d6-ddp2", date: "2026-11-16", start: "18:40", duration: 60, category: "sight", name: "東大門設計廣場 DDP（동대문디자인플라자）", address: "281 Eulji-ro, Jung District, Seoul", lat: 37.5663, lng: 127.0094, cost: null, note: "", locked: false, verify: true },
    { id: "d6-lottemart", date: "2026-11-16", start: "19:57", duration: 120, category: "sight", name: "樂天超市 首爾站店（롯데마트 제타플렉스 서울역점）", address: "405 Hangang-daero, Jung District, Seoul", lat: 37.5547, lng: 126.9706, cost: null, note: "電話 +8223902500；Funliday 原頁面誤植為明洞區", locked: false, verify: true },
    { id: "d6-incheon-terminal", date: "2026-11-16", start: "22:57", duration: 60, category: "transit", name: "인천국제공항 제1교통센터", address: "南韓 Incheon, Jung-gu, Gonghang-ro, 271 공항철도 지하 1층", lat: 37.4489, lng: 126.4505, cost: null, note: "", locked: false, verify: true },

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
