<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

// Instância da classe
$mail = new PHPMailer(true);
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    try
    {
        // Configurações do servidor
        $mail->isSMTP();        //Devine o uso de SMTP no envio
        $mail->SMTPAuth = true; //Habilita a autenticação SMTP
        $mail->Username   = '511bb32d8c264c';
        $mail->Password   = 'ebd6ca2b6d117b';
        // Criptografia do envio SSL também é aceito
        $mail->SMTPSecure = 'tls';
        // Informações específicadas pelo Google
        $mail->Host = 'sandbox.smtp.mailtrap.io';
        $mail->Port = 2525;
        // Define o remetente
        $mail->CharSet = 'UTF-8';
        $mail->setFrom('davimichaelsenm@gmail.com', 'Simoni Gestora Ambiental');
        // Define o destinatário
        $mail->addAddress($_POST['email'], $_POST['nome']);
        // Conteúdo da mensagem
        $mail->isHTML(true);  // Seta o formato do e-mail para aceitar conteúdo HTML
        $mail->Subject = $_POST['titulo'];
        $mail->Body    = $_POST['mensagem'];
        $mail->AltBody = $_POST['mensagem'];//Menssagem para emails que não reconhecem html
        // Enviar
        $mail->send();
        //echo 'A mensagem foi enviada!';
        header("Location: ../index.php");
    }
    catch (Exception $e)
    {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}else {
    header("Location: ../index.php");
}

?>