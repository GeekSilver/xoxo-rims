<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Rim;

class ViewListedRimsTest extends TestCase
{
 use RefreshDatabase;

 /** @test */
 public function test_a_user_can_view_listed_rims()
 {
    
    //given 4 rims exist in db
    $rims = factory(Rim::class,4)->create(); 
    
    //when you make a get request to /api/rims endpoint
    $visit = $this->getJson('/api/rims');

    //then you should get the 4 listed rims 
    //with ids 1,2,3,4
    $visit->assertJsonFragment(['id' => 1,'id' => 2,'id' => 3,'id' => 4,]);
 }
}
