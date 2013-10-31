
var db = window.openDatabase("movies","1.0","Prueba WebSQL",5+1024+1024);


function create_table (table_name, table_fields) {
	execute('CREATE TABLE IF NOT EXISTS ' + table_name + '(' + table_fields + ');');
	console.log('CREATE TABLE IF NOT EXISTS ' + table_name + '(' + table_fields + ');');
	console.log('Tabla creada')
}

function execute(sql){db.transaction(function(tx){tx.executeSql(sql)});};	


function onError(transaction,error){
	console.error(error.code, error.message);
}


function insert_value (table_name, items, values) {
	execute('INSERT INTO ' + table_name +' (' + items +') values ('+ values +');');
	console.log('Se ha insertado el valor ' + values +' en ' + table_name)
}

function select_values (table_name, item) {
		db.transaction(function(tx){
		tx.executeSql('select * from ' + table_name ,[],
		function(tx, result){
		
		//alert('Consulta exitosa\n '+result.rows.length + ' filas encontradas');
		 //var item = "IdMovies";
		
		for (i=0 ; i<result.rows.length; i++)

			console.log("El valor de " + item + " es " + result.rows.item(i)[item])

		},

		function(tx, error){
			alert('Se ha producido el siguiente error:\n' + error.message);
		}
		);

});


};

function delete_table(table_name) {
	execute('DROP TABLE ' + table_name + ';');	
	console.log('Tabla ' + table_name + ' eliminada');
}


var action = prompt("Indica una acción (borrar,crear,insertar,seleccionar)")
var table_name = prompt("Indica un nombre para la tabla");
var item = "";
var item_cls = "";
var value = "";

/*if (action == "borrar"){
	delete_table(table_name)
}
else if (action == "crear")
{	item = prompt("Indica un nombre para el campo");
	item_cls = prompt("Tipo de dato?");
	create_table(table_name, item + ' ' + item_cls);}
else if (action == "insertar")
{	item = prompt("Indica un nombre para el campo");
	value = prompt("Indica un valor para ese campo");
	insert_value(table_name, item, value);}
else if (action == "seleccionar")
{	item = prompt("Indica un nombre para el campo");
	select_values(table_name, item);}
else
{	console.log("Elige una accion correcta");}


*/

delete_table("movies")
create_table("movies", "IdMovies INT");
insert_value("movies", "IdMovies", 1);
select_values("movies","IdMovies");






