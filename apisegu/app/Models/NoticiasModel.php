<?php

namespace App\Models;

use CodeIgniter\Model;
use Exception;

class NoticiasModel extends Model
{
    protected $table = 'noticia';
    
    public function returnAllNoticias()
    {
        $db = \Config\Database::connect();
        $query = $db->table('noticia')->get();
        $retNoticias = [];

        foreach ($query->getResult() as $row)
        {
            // echo $row;
            array_push($retNoticias,$row);
        }

        return $retNoticias;

    }
}