
<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $para = 'sarah.acupuntura@gmail.com';
    $titulo = 'ASUNTO DEL MENSAJE';
    $header = 'From: '.$email;
    $msjCorreo = "Nombre: $name\n E-Mail: $email\n Mensaje:\n $mensaje";

    if ($_POST['submit']) {
        if (mail ($para, $titulo, $msjCorreo, $header) ) {
            echo "<script language='javascript'>
            alert('Mensaje enviado, muchas gracias.');
            window.location.href = 'http://www.saragarciaterapeuta.es';
            </script>";
        } else {
            echo 'Falló el envio';
        }
    }
?>

