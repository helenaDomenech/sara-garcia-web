
<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $para = 'elena.cabello.alba@gmail.com';
    $titulo = 'ASUNTO DEL MENSAJE';
    $header = 'From:'.$email;
    $msjCorreo = "Nombre: $name\n E-Mail: $email\n Mensaje:\n $mensaje";

    if ($_POST['submit']) {
        if (mail($para, $titulo, $msjCorreo, $header)) {
            echo "<script language='javascript'>
            alert('Mensaje enviado, muchas gracias.');
            window.location.href = 'index.html';
            </script>";
        } else {
            echo 'Falló el envio';
        }
    }

    if ($_POST['submit']) {
        if (mail ($to, $subject, $body, $from)) {
            echo '<p>Your message has been sent!</p>';
        } else {
            echo '<p>Something went wrong, go back and try again!</p>';
        }
    }
?>