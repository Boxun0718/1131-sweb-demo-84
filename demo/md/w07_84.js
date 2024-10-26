const p = document.querySelector('.show-classdemo')
console.log('show-classdemo', p)

function showDemo(item) {
  switch (item) {
    case 'w02_intro_84':
      p.innerHTML = `<iframe src='./w02-intro-84' width="100%" height="100%" />`
      break
    case 'w03_card_84':
      p.innerHTML = `<iframe src='./w03_card_84' width="100%" height="100%" />`
      break
    case 'w06_blog_84':
      p.innerHTML = `<iframe src='./w06_blog_84' width="100%" height="100%" />`
      break
  }
}
