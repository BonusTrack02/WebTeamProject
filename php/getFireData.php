<?php

    $ch = curl_init();
    $url = 'http://apis.data.go.kr/1400377/forestPoint/forestPointListGeongugSearch';
    $queryParams = "?" . urlencode('ServiceKey') . "=1dVT1m51jPUXZOnZz7cqFYETI4KY%2F4xDFp%2Beka0CzkMkpa5LcWHP3Jy9LxSNufxccPj8AmmCckpS2wFEeWxn8A%3D%3D";
    $queryParams .= "&" . urlencode('pageNo') . "=" . urlencode("1");
    $queryParams .= "&" . urlencode('numOfRows') . "=" . urlencode("20");
    $queryParams .= "&" . urlencode('_type') . "=" . urlencode("json");
    $queryParams .= "&" . urlencode('excludeForecast') . "=" . urlencode("0");

    curl_setopt($ch, CURLOPT_URL, $url . $queryParams);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

    $response = curl_exec($ch);
    curl_close($ch);

    file_put_contents("../fireData.json", $response);

    $phpArray = json_decode($response, true);
    $res = $phpArray['response'];
    $result = $res['body']['items']['item'][0]['analdate'];

    file_put_contents("../lastDateTime.txt", $result);

    echo "결과 : " . $result;
?>