<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AddView extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'image_id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unique' => true
            ],
            'view_count' => [
                'type' => 'INT',
                'constraint' => 11
            ]
        ]);
        $this->forge->addForeignKey('image_id', 'images', 'id');
        $this->forge->createTable('views');
    }

    public function down()
    {
        $this->forge->dropTable('views');
    }
}
