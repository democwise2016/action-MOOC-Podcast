const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [
  { 
    title: 'MOOC 分類編目（113年基礎）',
    feedID: 'MOOC_Classification_Cataloging',
    homepageURL: [{"title":"1. 學校圖書館的分類編目基本原則和應用-影片 ewantvideo","url":"https://www.youtube.com/watch?v=Nan7f398sXI"},{"title":"2. 中文圖書分類編目的規則和實例-影片 ewantvideo","url":"https://www.youtube.com/watch?v=LGslaDP1rwk"},{"title":"3. 館藏資料的加工、排架、淘汰和報廢-影片 ewantvideo","url":"https://www.youtube.com/watch?v=JG6IEU0PGt4"},{"title":"4. 館藏資料的統計分析和應用-影片 ewantvideo","url":"https://www.youtube.com/watch?v=b8Hc8Nvf7cA"}],
    itemFilters: [],
  },
]

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    { 
      title: 'MOOC 分類編目（113年基礎）',
      feedID: 'MOOC_Classification_Cataloging',
      homepageURL: [{"title":"1. 學校圖書館的分類編目基本原則和應用-影片 ewantvideo","url":"https://www.youtube.com/watch?v=Nan7f398sXI"},{"title":"2. 中文圖書分類編目的規則和實例-影片 ewantvideo","url":"https://www.youtube.com/watch?v=LGslaDP1rwk"},{"title":"3. 館藏資料的加工、排架、淘汰和報廢-影片 ewantvideo","url":"https://www.youtube.com/watch?v=JG6IEU0PGt4"},{"title":"4. 館藏資料的統計分析和應用-影片 ewantvideo","url":"https://www.youtube.com/watch?v=b8Hc8Nvf7cA"}],
      itemFilters: [],
    },
  ]
}


module.exports = feedList