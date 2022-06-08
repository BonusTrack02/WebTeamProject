
function aaa() {

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            var s = xhr.responseText
            var parse = JSON.parse(s)
            document.getElementById("card-title01").innerHTML = parse.fskname
            document.getElementById("card-text01").innerHTML = parse.fsguide

            var urlNum = parse.imgfilename
            var url= "https://www.forest.go.kr/images/data/down/story/" + urlNum
            var img= document.querySelector ('#tree01') 
            img.src= url

        }
    }


    xhr.open("GET", "./php/plantDictionary.php", true)
    xhr.send()


    
}










