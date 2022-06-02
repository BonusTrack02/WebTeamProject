/* Javascript 샘플 코드 */

function loadDoc(){
    var xhr = new XMLHttpRequest();
    xhr.setRequestHeader("Access-Control-Allow-Origin", '*')

    var searchWrd="광대싸리"
    var serviceKey='nBR4XWlO18qVaMdp7DKDosaixxVayXRO6J6S7ZoFT8INdCLInf2cx%2BepbR1RJ%2FHBDIumg8qDmHDiuSFjCPF2Lg%3D%3D'

    var url = 'http://openapi.forest.go.kr/openapi/service/cultureInfoService/fStoryOpenAPI?searchWrd=' +
            + searchWrd + '&ServiceKey=' + serviceKey
    
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { 
            // var xmlDoc=$.parseXML(xhr.responseText)  
            // var fskname =$(xmlDoc).find('fskname').text()
            // document.getElementById("card-title").innerHTML =fskname
            alert(xhr.responseText)

        }
    };


    xhr.open('GET',url,true);

    xhr.send(); 
}

// function myFunction(String){
//     var xmlDoc = xhr.responseXML

//     var fskname = xmlDoc.getElementsByTagName('fskname')
//     document.getElementById("card-title").innerHTML = fskname

//     var fsguide= xmlDoc.getElementsByTagName("fsguide")
//     document.getElementById("card-text").innerHTML = fsguide

// }










