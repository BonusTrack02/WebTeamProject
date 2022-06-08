$(document).ready(function() {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (xhr.readyState==4 && xhr.status==200) {
            var fireData = JSON.parse(xhr.responseText)
            let accordion = ""
            let accordionIndex = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen"]
            for (let i = 0; i < fireData.response.body.totalCount; i++) {
                accordion += `<div class="accordion-item">
                <h2 class="accordion-header" id="heading${accordionIndex[i]}">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${accordionIndex[i]}" aria-expanded="true" aria-controls="collapse${accordionIndex[i]}">
                    전국 산불 위험 예보 ${fireData.response.body.items.item[i].analdate}시
                  </button>
                </h2>
                <div id="collapse${accordionIndex[i]}" class="accordion-collapse collapse" aria-labelledby="heading${accordionIndex[i]}" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    산불 위험 지수 최댓값 : ${fireData.response.body.items.item[i].maxi} <br>
                    산불 위험 지수 평균값 : ${fireData.response.body.items.item[i].meanavg} <br>
                    산불 위험 지수 최솟값 : ${fireData.response.body.items.item[i].mini}
                  </div>
                </div>
              </div>`
            }
            document.getElementsByClassName('accordion')[0].innerHTML = accordion
        }
    }

    xhr.open("GET", "../fireData.json", true)
    xhr.send()
})