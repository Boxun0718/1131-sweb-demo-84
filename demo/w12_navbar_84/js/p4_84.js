const p = document.querySelector('.show-midterm-answer')
console.log('p', p)

function showMidtermPage(item) {
  switch (item) {
    case 'P1_84':
      p.innerHTML = `<iframe src='./p1_84/p1_84.html' width='100%' height='100%' />`
      break
    case 'P2_84':
      p.innerHTML = `<iframe src='./p2_84/p2_84.html' width='100%' height='100%' />`
      break
    case 'P3_84':
      p.innerHTML = `<iframe src='./p3_84/p3_84.html' width='100%' height='100%' />`
      break
  }
}
