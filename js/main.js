


function selected(city) {

    document.querySelectorAll('#mountain li').forEach(function (e) {
        if(e.classList.contains(city))  e.classList.remove('itemHide')
        else e.classList.add('itemHide')
        
    })
}




