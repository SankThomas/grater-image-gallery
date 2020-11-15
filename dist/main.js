const header = document.getElementById('header')
const scrollButton = document.querySelector('.btn-top')

// Add background color to header on scroll
window.onscroll = function () {
  showHeader()
}

function showHeader() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.style.backgroundColor = '#fff'
    scrollButton.classList.add('show')
  } else {
    header.style.backgroundColor = 'transparent'
    scrollButton.classList.remove('show')
  }
}

scrollButton.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
