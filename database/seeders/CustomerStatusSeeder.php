<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomerStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('customer_statuses')->insert([
        [
            'id' => 1,
            'name' => 'registered',
            'label_es' => 'Cliente registrado',
            'label_en' => 'Registered customer'
        ],[
            'id' => 2,
            'name' => 'assigned',
            'label_es' => 'Asignado a agencia',
            'label_en' => 'Assigned to agency'
        ],[
            'id' => 3,
            'name' => 'does_not_answer',
            'label_es' => 'El cliente no responde',
            'label_en' => 'Customer does not respond'
        ],[
            'id' => 4,
            'name' => 'contacted',
            'label_es' => 'Cliente contactado',
            'label_en' => 'Customer contacted'
        ],[
            'id' => 5,
            'name' => 'managing',
            'label_es' => 'En gestión con la agencia',
            'label_en' => 'In negotiation with the agency'
        ],[
            'id' => 6,
            'name' => 'sold',
            'label_es' => 'Vendido',
            'label_en' => 'Sold'
        ],[
            'id' => 7,
            'name' => 'unsold',
            'label_es' => 'No vendido',
            'label_en' => 'Unsold'
        ]
        ]);
    }
}
