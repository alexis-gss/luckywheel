<?php

if (isset($_GET['selection'])) {
    $entries = $pieces = explode(",", $_GET['selection']);
    include './wheel.html';
?>
    <script>
        var target = <?php echo json_encode($entries); ?>;
    </script>
    <script type="text/javascript" src="./js/main.js"></script>
<?php
}