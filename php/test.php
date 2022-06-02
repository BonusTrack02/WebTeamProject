<?php

    $ch = curl_init();
    $url = 'http://openapi.forest.go.kr/openapi/service/cultureInfoService/fStoryOpenAPI?searchWrd=%EA%B4%91%EB%8C%80%EC%8B%B8%EB%A6%AC&ServiceKey=nBR4XWlO18qVaMdp7DKDosaixxVayXRO6J6S7ZoFT8INdCLInf2cx%2BepbR1RJ%2FHBDIumg8qDmHDiuSFjCPF2Lg%3D%3D';
    $queryParams = "?" . urlencode('searchWrd') . urlencode('광대싸리');
    $queryParams = "&" . urlencode('ServiceKey') . '=nBR4XWlO18qVaMdp7DKDosaixxVayXRO6J6S7ZoFT8INdCLInf2cx%2BepbR1RJ%2FHBDIumg8qDmHDiuSFjCPF2Lg%3D%3D';

    curl_setopt($ch, CURLOPT_URL, $url . $queryParams);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

    $response = curl_exec($ch);
    curl_close($ch);

    echo "$response";
?>