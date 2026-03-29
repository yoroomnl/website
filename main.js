document.addEventListener('DOMContentLoaded', function() {
    const texttitle = "Yo Room"
    let i = 0
    setInterval(function() {
        if (i < texttitle.length){
            document.getElementById('title').innerHTML += texttitle[i]
            i += 1
        } else{
            stop()
        }


    }, 100)

    // Policy button opens modal
    document.getElementById('policy-btn').addEventListener('click', function() {
        document.getElementById('policy-modal').classList.add('show')
    })
    // Close button hides modal and shows main content
    document.getElementById('policy-modal').addEventListener('click', function (){
        document.getElementById('policy-modal').classList.remove('show')
        document.getElementById('main-content').classList.remove('hidden')
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
