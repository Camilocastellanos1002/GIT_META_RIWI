const version = document.querySelector('h1')
const body = document.querySelector('body')
const name = document.querySelector('#name')
const doc = document.querySelector('#doc')

version.textContent = 'Version 1'

const btn = document.querySelector('button')
btn.addEventListener('click', e => {
    const n = document.createElement('section')
    n.innerHTML = `
        ${name}
        ${doc}
    `
    body.appendChild(n)
})
