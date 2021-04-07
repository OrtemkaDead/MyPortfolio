toggleThemeBtn = document.getElementById('theme-button')

if (!localStorage.theme) localStorage.theme = 'dark'
document.body.className = localStorage.theme
toggleThemeBtn.innerHTML = document.body.classList.contains('light') ? 'W<span class="text-hide">hite</span>' : 'D<span class="text-hide">ark</span>'

toggleThemeBtn.onclick = () => {
   //TODO: сделать нормальное переключение + чтобы значение сохронялось
   // document.getElementById('imgRadial').classList.toggle('radial')
   // document.title = document.body.classList.contains('light') ? `ACode &#127773;` : `ACode &#127770;`

   document.body.classList.toggle('light')
   toggleThemeBtn.innerHTML = document.body.classList.contains('light') ? 'W<span class="text-hide">hite</span>' : 'D<span class="text-hide">ark</span>'
   localStorage.theme = document.body.className || 'dark'
}