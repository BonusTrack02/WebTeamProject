$(document).ready(function() {
    let xhr = new XMLHttpRequest()
    var lastDateTime
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            lastDateTime = xhr.responseText + ":00:00"
            let lastObj = new Date(lastDateTime)

            let now = new Date()
            if (now - lastObj > (1000*60*60*3)) {
                console.log("update")
                $.ajax({
                    url : "../php/getFireData.php",
                    async : "true",
                    success : console.log("executed php")
                })
            } else {
                console.log("DIDN'T UPDATE DATA")
            }
        }
    }

    xhr.open("GET", "../lastDateTime.txt", true)
    xhr.send()
})