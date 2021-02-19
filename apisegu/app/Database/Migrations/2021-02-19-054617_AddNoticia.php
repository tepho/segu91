<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AddNoticia extends Migration
{
	public function up()
	{
		$this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 5,
                'unsigned' => true,
                'auto_increment' => true,
            ],
            'titulo' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
                'null' => false
            ],
			'noticiabody' => [
                'type' => 'text',
                'constraint' => 100,
                'null' => false,
            ],
            'uri' => [
                'type' => 'text',
                'null' => false,
            ],
            'tag1' => [
                'type' => 'VARCHAR',
                'constraint' => 100,
                'null' => false,
            ],
			'tag2' => [
                'type' => 'VARCHAR',
                'constraint' => 100,
                'null' => false,
            ],
            'updated_at' => [
                'type' => 'datetime',
                'null' => true,
            ],
        'created_at datetime default current_timestamp',
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('noticia');
		//
	}

	public function down()
	{
		$this->forge->dropTable('noticia');

		//
	}
}
