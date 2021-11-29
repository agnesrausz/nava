<?php

namespace App\Controllers;

use App\Models\Image;
use App\Models\View;
use CodeIgniter\HTTP\Response;
use CodeIgniter\HTTP\ResponseInterface;
use Exception;

class ImageController extends BaseController
{
    /**
     * Get all Images
     */
    public function index()
    {
        $imageModel = new Image();
        $images = $imageModel->findAll();
        $viewModel = new Image();
        $views = $viewModel->findAll();

        try {
            $data = [
                'images' => $images,
                'views' => $views
            ];

            $responseData = [
                'message' => 'Images retrieved successfully',
                'data' => $data,
                'status' => ResponseInterface::HTTP_OK
            ];
        } catch (Exception $exception) {
            $responseData = [
                'message' => 'Failed to retrieve images',
                'data' => [],
                'status' => ResponseInterface::HTTP_BAD_REQUEST
            ];
        }

        return $this->response->setJSON($responseData);
    }

    /**
     * Create a new Image
     */
    public function create()
    {
        $rules = [
            'name' => 'required|string',
            'creator' => 'required|string'
        ];

        $input = [
            'name' => $this->request->getVar('name'),
            'creator' => $this->request->getVar('creator'),
        ];

        if (!$this->validate($rules)) {
            $responseData = [
                'message' => 'Input validation failed',
                'data' => [],
                'status' => ResponseInterface::HTTP_BAD_REQUEST
            ];
            return $this->response->setJSON($responseData);
        }

        try {
            $imageModel = new Image();
            $imageModel->insert($input);

            $viewModel = new View();

            $imageID = $imageModel->getInsertID();
            $image = $imageModel->find($imageID);

            $viewModel->insert([
                'image_id' => $imageID,
                'view_count' => 0
            ]);
            $view = $viewModel->find($imageID);

            $data = [
                'image' => $image,
                'view' => $view
            ];

            $responseData = [
                'message' => 'Image retrieved successfully',
                'data' => $data,
                'status' => ResponseInterface::HTTP_CREATED
            ];
        } catch (Exception $exception) {
            $responseData = [
                'message' => 'Failed to retrieve image',
                'data' => [],
                'status' => ResponseInterface::HTTP_BAD_REQUEST
            ];
        }

        return $this->response->setJSON($responseData);
    }

        /**
         * Get Images
         */
    public function show()
    {
    }

    public function update()
    {
    }

    public function destroy()
    {
    }
}
