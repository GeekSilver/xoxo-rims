<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Rim;

class ViewSpecificRimTest extends TestCase
{
    use RefreshDatabase;
    /** @test */
    public function test_a_user_can_view_a_specific_listed_rim()
    {
        //given 6 listed rims
        factory(Rim::class,6)->create();

        //when a user opts to see rim 4
        $rims = $this->getJson('/api/rims/4');

        //then rim 4 alone is returned
        $rims->assertJson(['id' => 4]);
    }
}
