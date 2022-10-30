const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')


item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(e) {
    e.target.classList.add('hold')
    setTimeout(() => e.target.classList.add('hide'))

}
function dragend(e) {
    e.target.classList.remove('hold', 'hide')
}

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('drop', dragdrop)
}


function dragover(e) {
    e.target.classList.add('line')
    e.preventDefault()
}

function dragleave(e) {
    e.target.classList.remove('line')
}

function dragenter(e) {
}

function dragdrop(e) {
    e.target.append(item)
    e.target.classList.remove('line')
}