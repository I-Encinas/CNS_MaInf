<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'order_type_id' =>fake()->randomDigitNotNull,
            'status' =>fake()->boolean,
            'date_o' =>fake()->dateTimeBetween('now','+1 year'),
        ];
    }
}
