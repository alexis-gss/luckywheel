<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lucky wheel</title>
  <link rel="icon" href="./data/icon.png">
  <link href="./css/app.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body>
  <section class="position-absolute">
    <form action="./index.php" method="post" class="form d-flex flex-row justify-content-center align-items-center">
      <input type="text" name="names" class="form-control" placeholder="name1,name2,name3..." required>
      <div class="input-group-append">
        <input type="submit" value="→" class="btn btn-outline-secondary">
      </div>
    </form>
    <div class="legend"></div>
  </section>

  <?php include './php/main.php'; ?>

</body>

</html>