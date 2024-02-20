const version = document.querySelector('h1')
const body = document.querySelector('body')
const name = document.querySelector('#name')
const doc = document.querySelector('#doc')

version.textContent = 'Version 4'

const btn = document.querySelector('button')
btn.addEventListener('click', e => {
    const n = document.createElement('section')
    n.innerHTML = `
        ${name.value}
        ${doc.value}
    `
    body.appendChild(n)
})
