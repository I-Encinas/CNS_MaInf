<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Supply>
 */
class SupplyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category_id' =>fake()->randomDigitNotNull,
            'management_unit_id' =>fake()->randomDigitNotNull,
            'code' =>fake()->unique()->word,
            'paternal_surname' =>fake()->word,
            'maternal_surname' =>fake()->word,
            'address' =>fake()->word,
            'phone' =>fake()->word,
            // 'created_at' =>fake()->date('Y-m-d H:i:s'),
            // 'updated_at' =>fake()->date('Y-m-d H:i:s')

        ];
    }
}
