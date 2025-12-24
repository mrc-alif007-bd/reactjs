<?php
include_once("../db_config.php");

$awData = $db->query("SELECT * FROM blog");
$output=[];
while($row = $rawData->fetch_object()){
$output[]=$row;
}

print_r($output);


?>