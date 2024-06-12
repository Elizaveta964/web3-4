<?php
	require '../php/db.php';
	echo '<head><link rel="stylesheet" type="text/css" href="index.css"></head>';
	if(isset($_GET['id'])){ //DELETE
		$id = $_GET['id'];
		$conn->query("DELETE FROM items WHERE id='$id'");
	}
	if(isset($_POST['eBtn'])){ //EDIT
		$id = $_POST['eId'];
		$title = $_POST['eTitle'];
		$class = $_POST['eClass'];
		$price = $_POST['ePrice'];
		$oldPrice = $_POST['eOldPrice'];
		$img1 = $_POST['eImg1'];
		$img2 = $_POST['eImg2'];
		$date = $_POST['eDate'];
		if($date != ""){
			$conn->query("UPDATE items SET title='$title', class='$class', price='$price', oldPrice='$oldPrice', img1='$img1', img2='$img2', date='$date' WHERE id='$id'");
		}else{
			$conn->query("UPDATE items SET title='$title', class='$class', price='$price', oldPrice='$oldPrice', img1='$img1', img2='$img2', date=NOW() WHERE id='$id'");
		}
		
	}
	if(isset($_POST['cBtn'])){ //CREATE
		$title = $_POST['cTitle'];
		$class = $_POST['cClass'];
		$price = $_POST['cPrice'];
		$oldPrice = $_POST['cOldPrice'];
		$img1 = $_POST['cImg1'];
		$img2 = $_POST['cImg2'];
		$date = $_POST['cDate'];
		if($date != ""){
			$conn->query("INSERT INTO items SET title='$title', class='$class', price='$price', oldPrice='$oldPrice', img1='$img1', img2='$img2', date='$date'");
		}else{
			$conn->query("INSERT INTO items SET title='$title', class='$class', price='$price', oldPrice='$oldPrice', img1='$img1', img2='$img2', date=NOW()");
		}
	}
	echo '<div id="all">
	<table id="myTable">
	  <thead>
		<tr>
		  <th>id</th>
		  <th>title</th>
		  <th>class</th>
		  <th>price</th>
		  <th>oldPrice</th>
		  <th>img1</th>
		  <th>img2</th>
		  <th>date</th>
		  <th>edit</th>
		  <th>delete</th>
		</tr>
	  </thead>
	  <tbody>';
	  $result = $conn->query("SELECT * FROM items");
	   while($row = $result->fetch_assoc()){
		   echo '<tr>
		   <td>'. $row['id'] .'</td>
		   <td>'. $row['title'] .'</td>
		   <td>'. $row['class'] .'</td>
		   <td>'. $row['price'] .'</td>
		   <td>'. $row['oldPrice'] .'</td>
		   <td>'. $row['img1'] .'</td>
		   <td>'. $row['img2'] .'</td>
		   <td>'. $row['date'] .'</td>
		   <td><a class="eLink">Изменить</a></td>
		   <td><a href="index.php?id='. $row['id'].'">Удалить</a></td>
		   </tr>';
	   }
	  echo '</tbody>
	</table>
	<form id="create" action="index.php" method="post">
		<h3>Создание айтема</h3>
		<label for="cTitle">Title</label><input name="cTitle" id="cTitle">
		<label for="cClass">Classes</label><input name="cClass" id="cClass">
		<label for="cPrice">Price</label><input name="cPrice" id="cPrice">
		<label for="cOldPrice">Old Price</label><input name="cOldPrice" id="cOldPrice">
		<label for="cImg1">Img1</label><input name="cImg1" id="cImg1">
		<label for="cImg2">Img 2</label><input name="cImg2" id="cImg2">
		<label for="cDate">Date</label><input name="cDate" id="cDate" placeholder="Можно не заполнять">
		<button name="cBtn">Создать</button>
	</form>
	<form id="edit" action="index.php" method="post">
		<h3>Редактор айтема</h3>
		<label for="eId">id</label><input name="eId" id="eId">
		<label for="eTitle">Title</label><input name="eTitle" id="eTitle">
		<label for="eClass">Classes</label><input name="eClass" id="eClass">
		<label for="ePrice">Price</label><input name="ePrice" id="ePrice">
		<label for="eOldPrice">Old Price</label><input name="eOldPrice" id="eOldPrice">
		<label for="eImg1">Img1</label><input name="eImg1" id="eImg1">
		<label for="eImg2">Img 2</label><input name="eImg2" id="eImg2">
		<label for="eDate">Date</label><input name="eDate" id="eDate" placeholder="Можно не заполнять">
		<button name="eBtn">Редактировать</button>
	</form>
	
</div>';


echo '<script src="index.js"></script>';
?>