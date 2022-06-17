<?php

$ch = curl_init();
$url = 'http://openapi.forest.go.kr/openapi/service/cultureInfoService/gdTrailInfoOpenAPI';
$queryParms = '?' . urlencode('serviceKey') . '=' . 'ewK4EYfQE5AsAzS9DUENl4EAc48L6O0sdUEbV6rc9mVZsOwZYpG3PcJEY8h3iawR6zPsJ70Wms4QxT8kbUGpFw%3D%3D';
$queryParms .= '&' . urlencode('numOfRows') . '=' . urlencode('10');
$queryParms .= '&' . urlencode('pageNo') . '=' . urlencode('1');

curl_setopt($ch, CURLOPT_URL, $url . $queryParms);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$headers = array(
    
)

$response = curl_exec($ch);
curl_close($ch);

echo "$response";

?>