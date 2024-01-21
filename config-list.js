const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [
  { 
    title: 'MOOC 分類編目（113年基礎）',
    feedID: 'MOOC_Classification_Cataloging',
    homepageURL: 'https://www.youtube.com/playlist?list=PLKnvkZ00-pHrtTn4Y9w9fgSvBsL9_K9kC',
    itemFilters: [],
  },
]

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    {
      title: '小宁子 3C',
      feedID: 'xnzxnz',
      homepageURL: 'https://www.youtube.com/channel/UCvUJ6BwgUGWBHuUd0cv546g',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
  ]
}


module.exports = feedList