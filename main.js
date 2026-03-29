document.addEventListener('DOMContentLoaded', function() {

    // Policy button opens modal
    document.getElementById('policy-btn').addEventListener('click', function() {
        document.getElementById('policy-modal').classList.add('show')
    })
    // Close button hides modal and shows main content
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('main-content').classList.remove('hidden')
        document.getElementById('policy-modal').classList.remove('show')
    })

})

document.addEventListener('mousemove', function(e) {
    console.log(e.clientX, e.clientY)
    var mouse = document.getElementById('cursor')
    mouse.style.left = `${e.clientX - 20}px`
    mouse.style.top = `${e.clientY - 20}px`
})

document.addEventListener('mousedown', function (){
    document.getElementById('cursor').classList.add('scale-50')
})
document.addEventListener('mouseup', function (){
    document.getElementById('cursor').classList.remove('scale-50')
})