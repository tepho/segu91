<?php

namespace App\Controllers;

use App\Models\NoticiasModel;
use CodeIgniter\HTTP\Response;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\HTTP\Request;
use Exception;
use CodeIgniter\API\ResponseTrait;
class Noticias extends BaseController
{
    use ResponseTrait;
    /**
     * Get all Clients
     * @return Response
     */
    public function index()
    {
        $model = new NoticiasModel();
        return $this->respondCreated(
            [
                'message' => 'Noticias retrieved successfully',
                'clients' => $model->returnAllNoticias()
            ]
        );
        // return $this->getResponse(

        // );
    }

}
