toggleThemeBtn = document.getElementById('theme-button')

if (!localStorage.theme) localStorage.theme = 'dark'
document.body.className = localStorage.theme
toggleThemeBtn.innerText = document.body.classList.contains('light') ? 'W' : 'D'

toggleThemeBtn.onclick = () => {
   document.body.classList.toggle('light')
   toggleThemeBtn.innerText = document.body.classList.contains('light') ? 'W' : 'D'
   localStorage.theme = document.body.className || 'dark'
}

toggleThemeBtn.onmouseover = () => {
   console.log('cursor')
}

toggleThemeBtn.onmouseout = () => {
   console.log('no cursor')
}