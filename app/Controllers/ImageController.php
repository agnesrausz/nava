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
     * Get all images
     */
    public function index()
    {
        $imageModel = new Image();
        $images = $imageModel->findAll();
        $viewModel = new View();
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
     * Create a new image
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
     * Get image with :id
     * view_count incremented by 1
     */
    public function show($imageID)
    {
        $imageModel = new Image();
        $image = $imageModel->find($imageID);
        $viewModel = new View();
        $view = $viewModel->find($imageID);

        try {
            if ($image) {
                if (!$view) {
                    $viewModel->insert([
                        'image_id' => $imageID,
                        'view_count' => 1
                    ]);
                    $view = $viewModel->find($imageID);
                }
                $input = [
                    'image_id' => $imageID,
                    'view_count' => ($view['view_count'] + 1),
                ];
                $viewModel->update($imageID, $input);

                $data = [
                    'image' => $image,
                    'view' => $view
                ];

                $responseData = [
                    'message' => 'Image retrieved successfully',
                    'data' => $data,
                    'status' => ResponseInterface::HTTP_OK
                ];
            } else {
                $responseData = [
                    'message' => 'That page/image can not be found',
                    'data' => [],
                    'status' => ResponseInterface::HTTP_NOT_FOUND
                ];
            }
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
     * Update image with :id
     */
    public function update($imageID)
    {
        $rules = [
            'name' => 'required|string',
            'creator' => 'required|string'
        ];

        $input = [
            'name' => $this->request->getRawInput()['name'],
            'creator' => $this->request->getRawInput()['creator'],
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
            $imageModel->update($imageID, $input);

            $viewModel = new View();

            $image = $imageModel->find($imageID);

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
     * Delete image with :id
     */
    public function destroy($imageID)
    {
        $imageModel = new Image();
        $viewModel = new View();
        try {
            $view = $viewModel->find($imageID);
            $image = $imageModel->find($imageID);

            if (!$image and !$view) {
                $responseData = [
                    'message' => 'That page/image can not be found',
                    'data' => [],
                    'status' => ResponseInterface::HTTP_NOT_FOUND
                ];
            }else {

                $deleteView = $viewModel->delete($imageID);
                $deleteImage = $imageModel->delete($imageID);

                $view = $viewModel->find($imageID);
                $image = $imageModel->find($imageID);

                $data = [
                    'image' => $image,
                    'view' => $view
                ];
                if ($deleteView and $deleteImage) {
                    $responseData = [
                        'message' => 'Image deleted successfully',
                        'data' => $data,
                        'status' => ResponseInterface::HTTP_NO_CONTENT
                    ];
                } else {

                    $responseData = [
                        'message' => 'Failed to delete image',
                        'data' => $data,
                        'status' => ResponseInterface::HTTP_CONFLICT
                    ];
                }
            }
        } catch (Exception $exception) {
            $responseData = [
                'message' => 'Failed to delete image',
                'data' => [],
                'status' => ResponseInterface::HTTP_BAD_REQUEST
            ];
        }

        return $this->response->setJSON($responseData);
    }
}
