document.addEventListener('DOMContentLoaded', function() {

    // Policy button opens modal
    document.getElementById('policy-btn').addEventListener('click', function() {
        document.getElementById('policy-modal').classList.remove('hidden')
    })
    document.getElementById('policy-btn').addEventListener('click', function() {

    })
    // Close button hides modal and shows main content
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('policy-modal').classList.add('hidden')
        document.getElementById('main-content').classList.remove('hidden')
    })

})
