const player = document.querySelector('.player')
console.log('player', player)

function changeTKU60(video) {
  switch (video) {
    case 1:
      player.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc?si=lANhu3SxZRv9xhU_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      break
    case 2:
      player.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew?si=FE_9adjYRZ_NScxK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      break
    case 3:
      player.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw?si=Ru1gC8ssXr3MDsUp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      break

    case 4:
      player.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo?si=PYRFHDyU6CEMOW8h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      break

    case 5:
      player.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA?si=BSdCQs_qqDVf5i8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      break
  }
}
