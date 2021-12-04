<?php

namespace App\Models;

use CodeIgniter\Model;

class Image extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'images';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $insertID         = 0;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [
        'name',
        'creator'
    ];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = '';
    protected $updatedField  = '';
    protected $deletedField  = '';

    // Validation
    protected $validationRules      = [
        'name' => 'required|string',
        'creator' => 'required|string'
    ];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];

    public function findAllImageWithView(){
        $db = db_connect();
        $builder = $db
            ->table('images')
            ->select('images.*,views.view_count')
            ->join('views', 'images.id = views.image_id','LEFT')
            ->get()
            ->getResult();
        return $builder;
    }

    public function findImageWithView($id){
        $db = db_connect();
        $builder = $db
            ->table('images')
            ->select('images.*,views.view_count')
            ->join('views', 'images.id = views.image_id','LEFT')
            ->where('id', $id)
            ->get()
            ->getResult();
        return $builder;
    }
}
