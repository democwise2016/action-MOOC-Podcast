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
    feedID: 'Fitness_and_Sports_Nutrition',
    homepageURL: [{"title":"1. 運動代謝與適應_1 ewantvideo","url":"https://youtu.be/kIiaefXJpw"},{"title":"2. 運動代謝與適應_2 ewantvideo","url":"https://youtu.be/hisvA3Coc5"},{"title":"3. 運動代謝與適應_3 ewantvideo","url":"https://youtu.be/2XuyEmVcNS"},{"title":"4. 運動代謝與適應_4 ewantvideo","url":"https://youtu.be/8JyMr8rBJi"},{"title":"5. 運動代謝與適應_5 ewantvideo","url":"https://youtu.be/7PZcku3l4H"},{"title":"6. 健身者的運動需求及評估_1 ewantvideo","url":"https://youtu.be/0zPByFPdvM"},{"title":"7. 健身者的運動需求及評估_2 ewantvideo","url":"https://youtu.be/oXhnEFbysh"},{"title":"8. 健身者的運動需求及評估_3 ewantvideo","url":"https://youtu.be/z42pLwhvWp"},{"title":"9. 健身者的運動需求及評估_4 ewantvideo","url":"https://youtu.be/76Gi40YQ3s"},{"title":"10. 營養補充方式與時機_1 ewantvideo","url":"https://youtu.be/o7P1mSUu_-"},{"title":"11. 營養補充方式與時機_2 ewantvideo","url":"https://youtu.be/50pRxH3jQT"},{"title":"12. 營養補充方式與時機_3 ewantvideo","url":"https://youtu.be/KShSqYBFAA"},{"title":"13. 營養補充方式與時機_4 ewantvideo","url":"https://youtu.be/EQtPUacZyK"},{"title":"14. 營養補充方式與時機_5 ewantvideo","url":"https://youtu.be/14AGkX7hoj"},{"title":"15. 營養補充方式與時機_6 ewantvideo","url":"https://youtu.be/mzq1YfTxvO"},{"title":"16. 運動營養增補劑_1 ewantvideo","url":"https://youtu.be/wEUH_xa6yl"},{"title":"17. 運動營養增補劑_2 ewantvideo","url":"https://youtu.be/lSfJSmQuZ9"},{"title":"18. 運動營養增補劑_3 ewantvideo","url":"https://youtu.be/T5ea8BnNoT"},{"title":"19. 運動營養增補劑_4 ewantvideo","url":"https://youtu.be/gWELEdJUCQ"}],
    itemFilters: [],
  },
  {"title":"生活應用統計","feedID":"life-application-statistics","homepageURL":[{"title":"1. 0101統計不是數學前導片 12:39 ewantvideo","url":"https://www.youtube.com/watch?v=E3CK_zuo044"},{"title":"2. 0102統計不是數學課程片 16:39 ewantvideo","url":"https://www.youtube.com/watch?v=gXX12e1r0Xs"},{"title":"3. 0103統計不是數學EXCEL資料說明 12:15 ewantvideo","url":"https://www.youtube.com/watch?v=0rnjP_lAXdg"},{"title":"4. 0104R軟體安裝 16:06 ewantvideo","url":"https://www.youtube.com/watch?v=9u3AC0w_iZU"},{"title":"5. 0104R軟體安裝 16:06","url":"https://www.youtube.com/watch?v=9u3AC0w_iZU"},{"title":"6. 0201統計量數前導片 12:21 ewantvideo","url":"https://www.youtube.com/watch?v=Is_a5Hgw_0s"},{"title":"7. 0202統計量數集中量數課程片 13:26 ewantvideo","url":"https://www.youtube.com/watch?v=LdiCIFnWROU"},{"title":"8. 0203統計量數變異量數前導片_課程片 12:00 ewantvideo","url":"https://www.youtube.com/watch?v=w-FBVVXdX44"},{"title":"9. 0204集中量數EXCEL函數說明 13:43 ewantvideo","url":"https://www.youtube.com/watch?v=IP3JIiDyz-4"},{"title":"10. 0204集中量數EXCEL函數說明 13:43","url":"https://www.youtube.com/watch?v=IP3JIiDyz-4"},{"title":"11. 0301相對地位量數前導片 07:10 ewantvideo","url":"https://www.youtube.com/watch?v=lQ_QbJm3eMs"},{"title":"12. 0302相對地位量數課程片1 21:46 ewantvideo","url":"https://www.youtube.com/watch?v=v6D2OAkH09g"},{"title":"13. 0303相對地位量數課程片2 16:47 ewantvideo","url":"https://www.youtube.com/watch?v=A_CNGSRAJFg"},{"title":"14. 0304相對地位量數R語法說明 14:55 ewantvideo","url":"https://www.youtube.com/watch?v=UphYJgNt0Qs"},{"title":"15. 0401統計圖前導片_課程片 12:59 ewantvideo","url":"https://www.youtube.com/watch?v=eFLLMXnanH0"},{"title":"16. 0402統計圖EXCEL函數說明1 10:06 ewantvideo","url":"https://www.youtube.com/watch?v=A8J0uEXr-zs"},{"title":"17. 0403統計圖EXCEL函數說明2 15:52 ewantvideo","url":"https://www.youtube.com/watch?v=XDDeT6r7gf4"},{"title":"18. 0404統計圖R語法說明1 20:39 ewantvideo","url":"https://www.youtube.com/watch?v=ABqt1ckSysw"},{"title":"19. 0404統計圖R語法說明1 20:39","url":"https://www.youtube.com/watch?v=ABqt1ckSysw"},{"title":"20. 0501區間估計前導片 07:22 ewantvideo","url":"https://www.youtube.com/watch?v=EERZQMr-lyM"},{"title":"21. 0502區間估計課程片 14:16 ewantvideo","url":"https://www.youtube.com/watch?v=cBoAiNaN1wI"},{"title":"22. 0503區間估計EXCEL函數說明 20:10 ewantvideo","url":"https://www.youtube.com/watch?v=-FQJ50HzyGk"},{"title":"23. 0504區間估計R語法說明 15:32 ewantvideo","url":"https://www.youtube.com/watch?v=JsoTYC8ThC4"},{"title":"24. 0601相關前導片_課程片 14:39 ewantvideo","url":"https://www.youtube.com/watch?v=yJwbDhu8KIQ"},{"title":"25. 0602相關EXCEL函數說明 20:25 ewantvideo","url":"https://www.youtube.com/watch?v=FGrurm8FcvU"},{"title":"26. 0603相關R語法說明 08:54 ewantvideo","url":"https://www.youtube.com/watch?v=LeKpLW0_L50"},{"title":"27. 0701迴歸前導片_課程片 13:34 ewantvideo","url":"https://www.youtube.com/watch?v=pwOl84MqE0M"},{"title":"28. 0701迴歸前導片_課程片 13:34","url":"https://www.youtube.com/watch?v=pwOl84MqE0M"}],"itemFilters":[]},
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