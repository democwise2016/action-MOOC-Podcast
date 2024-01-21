const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [
  { 
    title: 'MOOC 分類編目（113年基礎）',
    feedID: 'MOOC_Classification_Cataloging',
    homepageURL: [{"title":"1. 學校圖書館的分類編目基本原則和應用-影片 ewantvideo","url":"https://www.youtube.com/watch?v=Nan7f398sXI"},{"title":"2. 中文圖書分類編目的規則和實例-影片 ewantvideo","url":"https://www.youtube.com/watch?v=LGslaDP1rwk"},{"title":"3. 館藏資料的加工、排架、淘汰和報廢-影片 ewantvideo","url":"https://www.youtube.com/watch?v=JG6IEU0PGt4"},{"title":"4. 館藏資料的統計分析和應用-影片 ewantvideo","url":"https://www.youtube.com/watch?v=b8Hc8Nvf7cA"}],
    itemFilters: [],
  },
  { 
    title: '健身運動營養',
    feedID: 'Fitness_and_Sports_Nutrition.',
    homepageURL: [{"title":"1. 運動代謝與適應_1 ewantvideo","url":"https://youtu.be/kIiaefXJpw"},{"title":"2. 運動代謝與適應_2 ewantvideo","url":"https://youtu.be/hisvA3Coc5"},{"title":"3. 運動代謝與適應_3 ewantvideo","url":"https://youtu.be/2XuyEmVcNS"},{"title":"4. 運動代謝與適應_4 ewantvideo","url":"https://youtu.be/8JyMr8rBJi"},{"title":"5. 運動代謝與適應_5 ewantvideo","url":"https://youtu.be/7PZcku3l4H"},{"title":"6. 健身者的運動需求及評估_1 ewantvideo","url":"https://youtu.be/0zPByFPdvM"},{"title":"7. 健身者的運動需求及評估_2 ewantvideo","url":"https://youtu.be/oXhnEFbysh"},{"title":"8. 健身者的運動需求及評估_3 ewantvideo","url":"https://youtu.be/z42pLwhvWp"},{"title":"9. 健身者的運動需求及評估_4 ewantvideo","url":"https://youtu.be/76Gi40YQ3s"},{"title":"10. 營養補充方式與時機_1 ewantvideo","url":"https://youtu.be/o7P1mSUu_-"},{"title":"11. 營養補充方式與時機_2 ewantvideo","url":"https://youtu.be/50pRxH3jQT"},{"title":"12. 營養補充方式與時機_3 ewantvideo","url":"https://youtu.be/KShSqYBFAA"},{"title":"13. 營養補充方式與時機_4 ewantvideo","url":"https://youtu.be/EQtPUacZyK"},{"title":"14. 營養補充方式與時機_5 ewantvideo","url":"https://youtu.be/14AGkX7hoj"},{"title":"15. 營養補充方式與時機_6 ewantvideo","url":"https://youtu.be/mzq1YfTxvO"},{"title":"16. 運動營養增補劑_1 ewantvideo","url":"https://youtu.be/wEUH_xa6yl"},{"title":"17. 運動營養增補劑_2 ewantvideo","url":"https://youtu.be/lSfJSmQuZ9"},{"title":"18. 運動營養增補劑_3 ewantvideo","url":"https://youtu.be/T5ea8BnNoT"},{"title":"19. 運動營養增補劑_4 ewantvideo","url":"https://youtu.be/gWELEdJUCQ"}],
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