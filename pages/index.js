import 'style.css';
function home() {
    return 
	<html>
	<head>
<title>NewHorizon</title>
</head>
<body>
	<span id='topo'></span>
	<nav class="navbar" >
		<input type="checkbox" id="check"/>
		<label for="check" class="checkbtn">
			<i class="fas fa-bars" ></i>
		</label>
		<a href="index.php"><label class="logo" > NewHorizon</label></a>
		<ul>
			<li><a class="bt" href="contato.html">Contato</a></li>
			<li><a class="bt" href="loja.html">Loja</a></li>
		</ul>	
		</nav>
	<section>
		<center>
			
			<center><p>clique na imagem para ver o projeto</p></center>
			<a href="smartglass.html" class="cont"><img src="./img/smart.jpg" height="400" width="300" /></a>
</center>
	</section>
	<footer>
		
	</footer>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.j"></script>
	<div id="voltarTopo">
		<a href="#" id="subir"><img src="./img/vtopo.png" height="40" width="50" /></a>
	</div>
	<script src="index.js"></script>
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html> 

      
    
}
export default home