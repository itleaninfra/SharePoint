# 11/05/2020 20:49 executed at Leão prd #
foreach($item in $lista.Items){
    if($item["CodigoSAP"].Length -lt 5){
        $item["CodigoSAP"] = $item["CodigoSAP"].insert(0,'000000');
        $item.Update();
        Write-Host $item["CodigoSAP"];
    }
}