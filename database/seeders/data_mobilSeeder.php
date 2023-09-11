<?php

namespace Database\Seeders;

use App\Models\datamobil;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class data_mobilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 20; $i++) {
            DB::table('data_mobils')->insert([
                'namaMobil' => fake()->title(),
                'deskripsi' => fake()->paragraph(2, true),

            ]);
        }
    }
}