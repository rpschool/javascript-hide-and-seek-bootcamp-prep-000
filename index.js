function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankItem = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = rankItem.length; i < l; i++) {
    rankItem[i].innerHTML = (parseInt(rankItem[i].innerHTML) + n);
   }
}

function deepestChild() {
  var nest = document.getElementById('grand-node');
  var nextNest = nest.children[0];
  while (nextNest) {
    nest = nextNest;
    nextNest = nest.children[0];
  }
  return nest;
}
