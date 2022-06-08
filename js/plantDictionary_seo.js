
function aaa() {

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            var s = xhr.responseText
            var parse = JSON.parse(s)
            document.getElementById("card-title01").innerHTML = parse.fskname
            document.getElementById("card-text01").innerHTML = parse.fsguide
            document.getElementById("collapse01").innerHTML = parse.fskname +' : '+ parse.fslifetime

            var urlNum = parse.imgfilename
            var url= "https://www.forest.go.kr/images/data/down/story/" + urlNum
            var img= document.querySelector ('#tree01') 
            img.src= url

        }
    }


    xhr.open("GET", "./php/plantDictionary_seo01.php", true)
    xhr.send()
    
}

function bbb() {

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            var s = xhr.responseText
            var parse = JSON.parse(s)
            document.getElementById("card-title02").innerHTML = parse.fskname
            document.getElementById("card-text02").innerHTML = parse.fsguide

            var urlNum = parse.imgfilename
            var url= "https://www.forest.go.kr/images/data/down/story/" + urlNum
            var img= document.querySelector ('#tree02') 
            img.src= url

        }
    }


    xhr.open("GET", "./php/plantDictionary_seo02.php", true)
    xhr.send()
    
}

function ccc() {

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            var s = xhr.responseText
            var parse = JSON.parse(s)
            document.getElementById("card-title03").innerHTML = parse.fskname
            document.getElementById("card-text03").innerHTML = parse.fsguide

            var urlNum = parse.imgfilename
            var url= "https://www.forest.go.kr/images/data/down/story/" + urlNum
            var img= document.querySelector ('#tree03') 
            img.src= url

        }
    }


    xhr.open("GET", "./php/plantDictionary_seo03.php", true)
    xhr.send()
    
}

function ddd() {

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            var s = xhr.responseText
            var parse = JSON.parse(s)
            document.getElementById("card-title04").innerHTML = parse.fskname
            document.getElementById("card-text04").innerHTML = parse.fsguide

            var urlNum = parse.imgfilename
            var url= "https://www.forest.go.kr/images/data/down/story/" + urlNum
            var img= document.querySelector ('#tree04') 
            img.src= url

        }
    }


    xhr.open("GET", "./php/plantDictionary_seo04.php", true)
    xhr.send()
    
}

function eee() {

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            var s = xhr.responseText
            var parse = JSON.parse(s)
            document.getElementById("card-title05").innerHTML = parse.fskname
            document.getElementById("card-text05").innerHTML = parse.fsguide

            var urlNum = parse.imgfilename
            var url= "https://www.forest.go.kr/images/data/down/story/" + urlNum
            var img= document.querySelector ('#tree05') 
            img.src= url

        }
    }


    xhr.open("GET", "./php/plantDictionary_seo05.php", true)
    xhr.send()
    
}

function fff() {

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            var s = xhr.responseText
            var parse = JSON.parse(s)
            document.getElementById("card-title06").innerHTML = parse.fskname
            document.getElementById("card-text06").innerHTML = parse.fsguide

            var urlNum = parse.imgfilename
            var url= "https://www.forest.go.kr/images/data/down/story/" + urlNum
            var img= document.querySelector ('#tree06') 
            img.src= url

        }
    }


    xhr.open("GET", "./php/plantDictionary_seo06.php", true)
    xhr.send()
    
}










