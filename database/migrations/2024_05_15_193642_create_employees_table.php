<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_id')->nullable(false)->constrained()-> onUpdate('cascade')->onDelete('cascade');
            $table->string('ci',10)->nullable(false)->unique();
            $table->string('name',20)->nullable(false);
            $table->string('paternal_surname',20)->nullable(false);
            $table->string('maternal_surname',20)->nullable(true);
            $table->string('address',45)->nullable(true);
            $table->string('phone',15)->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
