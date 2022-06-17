<?php

if (isset($_POST['names'])) {
    $entries = $pieces = explode(",", $_POST['names']);
    include './wheel.html';
?>
    <script>
        var target = <?php echo json_encode($entries); ?>;
    </script>
    <script type="text/javascript" src="./js/main.js"></script>
<?php
} else {
    $entries = [];
};
