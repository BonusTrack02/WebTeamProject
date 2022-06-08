<?php

header('Content-Type=application/json; charset=utf-8');

$treename = '철쭉';

$ch = curl_init();
$url = "http://openapi.forest.go.kr/openapi/service/cultureInfoService/fStoryOpenAPI";
$queryParams = '?'. urldecode('searchWrd').'='.urlencode($treename);
$queryParams .= '&'. urldecode('ServiceKey').'=nBR4XWlO18qVaMdp7DKDosaixxVayXRO6J6S7ZoFT8INdCLInf2cx%2BepbR1RJ%2FHBDIumg8qDmHDiuSFjCPF2Lg%3D%3D';

curl_setopt($ch, CURLOPT_URL, $url . $queryParams);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
$response = curl_exec($ch);
curl_close($ch);
 
$xml = simplexml_load_string($response);

$num = $xml -> body -> items -> item -> fslistno."";

$ch2 = curl_init();
$url2 = "http://openapi.forest.go.kr/openapi/service/cultureInfoService/fStoryImgOpenAPI";
$queryParams2 = '?'. urldecode('searchWrd').'='.urlencode($num);
$queryParams2 .= '&'. urldecode('ServiceKey').'=nBR4XWlO18qVaMdp7DKDosaixxVayXRO6J6S7ZoFT8INdCLInf2cx%2BepbR1RJ%2FHBDIumg8qDmHDiuSFjCPF2Lg%3D%3D';

curl_setopt($ch2, CURLOPT_URL, $url2 . $queryParams2);
curl_setopt($ch2, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch2, CURLOPT_HEADER, FALSE);
curl_setopt($ch2, CURLOPT_CUSTOMREQUEST, 'GET');
$response2 = curl_exec($ch2);
curl_close($ch2);
 
$xml2 = simplexml_load_string($response2);

$a = array();
$a['fskname']= $xml -> body -> items -> item -> fskname."";
$a['fsguide']= $xml -> body -> items -> item -> fsguide."";
$a['imgfilename']= $xml2 -> body -> items -> item -> imgfilename."";

//타입확인
//var_dump($xml -> body -> items -> item -> fskname."");


$b2=json_encode($a, JSON_UNESCAPED_UNICODE);

echo($b2);

?>





