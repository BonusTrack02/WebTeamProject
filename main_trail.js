
let xmlHttp;

function createHttpRequest(){
   xmlHttp = new XMLHttpRequest();

}

function loadXml(){
    createHttpRequest();
    xmlHttp.onreadystatechange = callFuntion;
    xmlHttp.open("GET", "trail_file.xml", true)
    xmlHttp.send(null)
}

function callFuntion(){
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            var responseData = xmlHttp.responseXML;
            var  
        }
    }
}