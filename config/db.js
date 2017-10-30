let mysql=require('mysql');

module.exports=mysql.createConnection({

	host:'localhost',
	user:'root',
	password:'061013',
	database:'wish'
});