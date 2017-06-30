<?php
   $q = trim(strip_tags($_GET['term']));;
   $db = pg_connect("host=localhost dbname=Xingfan.Xia user=Xingfan.Xia password=");
   $ret = pg_exec($db, "select video_title from videos where video_title like '%$q%' limit 20;");
   while($row = pg_fetch_row($ret)) {
      $data[] = array(
         'video' => $row[0]);
   }
   echo json_encode($data);
?>