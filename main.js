document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a')

    navLinks.forEach(function(link) {
        if (window.location.pathname.includes(link.getAttribute('href'))) {
            link.classList.add('bg-black', 'bg-opacity-20')
        }
    })

    console.log(window.location.pathname)
    function typeText(elementId, text) {
        let i = 0
         setInterval(function() {
            if (i < text.length) {
                document.getElementById(elementId).innerHTML += text[i]
                i += 1
            } else {
                stop()
            }
        }, 150)
    }
    typeText('title', 'Yo Room')
    if (document.getElementById('aboutmetitle')) {
        typeText('aboutmetitle', 'About Me')
    }



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
