<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AddRimTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function test_a_user_can_add_a_rim()
    {
        //given a rim

            //creating a fake public disk instance
            Storage::fake('public');
            //generating dummy image for testing
            $file = UploadedFile::fake()->image('rim.jpg');
        
            //the rim
            $rim = [
                'name' => 'chrome',
                'size' => 16,
                'color' => 'silver',
                'price' => 13000,
                'image' => $file,
            ];

        //when you hit the endpoint /api/rims
        $response = $this->post('/api/rims',$rim);

        //then the rim should be added

            //asserting that the rim image was successfully uploaded
            Storage::disk('public')->assertExists('rims/'.$file->hashName());
            //asseting the rim was added to db
            $response->assertJson(['created' => true ]); 
    }
}
