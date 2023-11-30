<?php
header('Content-Type: application/json'); 

$conn = Conectar2("ajax", "root", "");
$datos = file_get_contents('php://input');  
$objeto=json_decode($datos);
if($objeto != null) {
    switch($objeto->servicio) {
			case "facturas":
        listadoFacturas();
        break;
			case "detalle":
				listadoDetalle($objeto->idFactura);
        break;
			case "anade":
				anadeDetalle($objeto);
				listadoDetalle($objeto->idFactura);
        break;
			case "borra":
				borraDetalle($objeto->id);
				listadoDetalle($objeto->idFactura);
        break;
			case "modificarDetalle":
				modificarDetalle($objeto);
				listadoDetalle($objeto->idFactura);
				break;
			case "selDetalleID":
				print json_encode(selDetalleID($objeto->id));
		}
}


function listadoFacturas() {
	global $conn;
	$rs = Consulta($conn, "Select * From facturas");
	//  Devolvemos la filas del cuerpo de la tabla:
	print json_encode($rs->fetchAll(PDO::FETCH_ASSOC));
}

function listadoDetalle($id) {
	global $conn;
	$sc = "Select * From detalle_facturas Where ID_FACTURA = $id";
	$rs = Consulta($conn, $sc);
	//  Devolvemos la filas del cuerpo de la tabla:
	print json_encode($rs->fetchAll(PDO::FETCH_ASSOC));
}

function anadeDetalle($objeto){
	global $conn;
	$sc = "Insert into detalle_facturas(ID_FACTURA, CANTIDAD, CONCEPTO, PRECIO, TIPO_IVA) " .
				"values($objeto->idFactura, $objeto->cantidad, '$objeto->concepto', $objeto->precio, $objeto->tipo_iva)";
	Consulta($conn, $sc);
}

function borraDetalle($id){
	global $conn;
	$sc = "Delete From detalle_facturas Where ID = $id";
	Consulta($conn, $sc);
}



function selDetalleID($id) {
	global $conn;
	try {
		$sc = "Select * From detalle_facturas Where ID = ?";
		$stm = $conn->prepare($sc);
		$stm->execute(array($id));
		return ($stm->fetch(PDO::FETCH_ASSOC));
	} catch(Exception $e) {
		die($e->getMessage());
	}	
}


function modificarDetalle($objeto) {
	global $conn;
	try {
		$sql = "UPDATE detalle_facturas SET 
							CANTIDAD	= ?,
							CONCEPTO	= ?, 
							PRECIO		= ?,
							TIPO_IVA	= ?
						WHERE ID = ?";
		$conn->prepare($sql)->execute(
		array(
			$objeto->cantidad,
			$objeto->concepto, 
			$objeto->precio, 
			$objeto->tipo_iva, 
			$objeto->id
			) 
		);
		return true;
	} catch (Exception $e) {
		die($e->getMessage());
		return false;
	}
}




function conectar2($bd, $usuario, $clave) {
  try {
		$opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
		@$bd = new PDO('mysql:host=localhost;dbname='. $bd, $usuario, $clave, $opciones);
		$bd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //aquí le digo que voy a utilizar excepciones
		return $bd;
  } catch (PDOException $e) {
    echo("No se ha podido conectar a la base de datos. Código de error: " . $e->getMessage());
  }
}

function Consulta($conn, $sc) {
	$rs = null;
	try {
		$rs = $conn->query($sc);
	} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
	}
	return $rs;
}


?>
