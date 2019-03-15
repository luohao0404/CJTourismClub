<html>
 <head>
 <meta charset="utf-8" />
 </head>
 <body>
 <?php
 mb_language("Japanese");
 mb_internal_encoding("UTF-8");

 $to = "cjts.info@gmail.com";
 $title = "contact from website www.cjtc-club.com";
 $from = $_POST['email'];
 $headers = "From: $from";

 $content = "";

 $content .= "\n";
 $content .= " **************************************** ";
 $content .= "\n";
 $content .= " contact from website www.cjtc-club.com";
 $content .= "\n";
 $content .= " **************************************** ";
 $content .= "\n";

 $content .= "\n";
 $content .= " **** お問い合わせ種別 **** ";
 $content .= "\n";
 $content .= $_POST['type'];
  $content .= "\n";

 $content .= "\n";
 $content .= " ******* 氏名・漢字 ******* ";
 $content .= "\n";
 $content .= $_POST['name_k'];
  $content .= "\n";

 $content .= "\n";
 $content .= " ****** 氏名・ひらがな ***** ";
 $content .= "\n";
 $content .= $_POST['name_h'];
  $content .= "\n";

 $content .= "\n";
 $content .= " ****** 会社名・団体名 ***** ";
 $content .= "\n";
 $content .= $_POST['company'];
  $content .= "\n";

 $content .= "\n";
 $content .= " ******* ご所属部署 ******** ";
 $content .= "\n";
 $content .= $_POST['department'];
  $content .= "\n";

 $content .= "\n";
 $content .= " ********** 住所 ********** ";
 $content .= "\n";
 $content .= $_POST['address'];
  $content .= "\n";

 $content .= "\n";
 $content .= " ******** 電話番号 ******** ";
 $content .= "\n";
 $content .= $_POST['tel'];
  $content .= "\n";

 $content .= "\n";
 $content .= " ****** メールアドレス ***** ";
 $content .= "\n";
 $content .= $_POST['email'];
  $content .= "\n";

 $content .= "\n";
 $content .= " ***** お問い合わせ内容 ***** ";
 $content .= "\n";
 $content .= $_POST['info'];
  $content .= "\n";

 mb_send_mail($to, $title, $content, $headers);
 ?>
 </body>
</html>
