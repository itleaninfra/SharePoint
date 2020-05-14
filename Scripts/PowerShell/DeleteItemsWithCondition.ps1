# 13/05/2020 14:02 executed at Leão prd #
$site = Get-SPSite http://sharepoint.leaoab.com.br/sites/edme
$web = $site.OpenWeb()
$lista = $web.Lists["Vendedores"]
# Loga quantidade de itens #
Write-Host "Lista $($lista.Title) tem $($lista.Items.Count) itens"
$items = $lista.Items
foreach($item in $items)
{
    # Loga quantidade de itens #
    Write-Host "Lista $($lista.Title) tem $($lista.Items.Count) itens"    
    # Conditions to not delete #
    if($item.id -ne 71 -and $item.id -ne 25659 -and $item.id -ne 72227 -and $item.id -ne 73611) 
    {
        $lista.GetItemById($item.id).Delete()
    }
}