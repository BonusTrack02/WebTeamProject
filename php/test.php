<?php

    $ch = curl_init();
    $url = 'http://openapi.forest.go.kr/openapi/service/cultureInfoService/fStoryOpenAPI';
    $queryParams = "?" . urlencode('searchWrd') . urlencode('광대싸리');
    $queryParams .= "&" . urlencode('ServiceKey') . '=nBR4XWlO18qVaMdp7DKDosaixxVayXRO6J6S7ZoFT8INdCLInf2cx%2BepbR1RJ%2FHBDIumg8qDmHDiuSFjCPF2Lg%3D%3D';

    curl_setopt($ch, CURLOPT_URL, $url . $queryParams);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

    $response = curl_exec($ch);
    curl_close($ch);

    echo "결과 : $response";
?>