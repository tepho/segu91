# segu91
Teste 91 Seguros

## Clonar o repositório 

### Dentro do folder apisegu executar os comandos:

colocar as credenciais para conectar com o banco mysql
Path do file de config: apisegu/Config/Database.php

Ex:{
		'hostname' => 'localhost',
		'username' => 'root',
		'password' => '',
		'database' => 'segu91',
		'DBDriver' => 'MySQLi',
}
Instalar dependencias:

composer update

php spark migrate

php spark db:seed NoticiasSeeder

### por ultimo rodar:

php spark serve --host 192.168.10.106 --port 8082

## Dentro do folder seguapp executar:

yarn

npx react-native run-android
