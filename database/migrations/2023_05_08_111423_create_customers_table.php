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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('lastname')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->unique();
            $table->string('city')->nullable();
            $table->string('entity')->nullable();
            $table->string('Horario de disponibilidad')->nullable();
            $table->unsignedSmallInteger('service_types_id');
            $table->json('services');
            $table->unsignedBigInteger('seller_reference_id');
            $table->string('number_ss_ninf_credit')->nullable();
            $table->string('credit_score_credit_loans')->nullable();
            $table->string('purpose_credit')->nullable();
            $table->boolean('experian_account_credit')->nullable();
            $table->string('experian_account_credentials_credit')->nullable();
            $table->boolean('income_verification_loans')->nullable();
            $table->string('loan_amount_loans')->nullable();
            $table->unsignedSmallInteger('dependents_insurance')->nullable();
            $table->string('dependents_ages_insurance')->nullable();
            $table->string('inmigration_state_insurance')->nullable();
            $table->boolean('medical_id_insurance')->nullable();
            $table->boolean('smoke_insurance')->nullable();
            $table->string('actual_insurance_insurance')->nullable();
            $table->string('period_taxes')->nullable();
            $table->string('comentaries')->nullable();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
