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
            $table->string('service');
            $table->string('name');
            $table->string('lastname');
            $table->string('phone')->nullable();
            $table->string('businessPhone')->nullable();
            $table->string('email')->nullable();
            $table->string('businessEmail')->nullable();
            $table->string('company_name')->nullable();
            $table->string('city')->nullable();
            $table->string('regions_state_province')->nullable();
            $table->string('like_be_contacted')->nullable();
            $table->string('address')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('house_hold_income')->nullable();
            $table->string('how_many_dependents')->nullable();
            $table->string('ages_dependents')->nullable();
            $table->string('have_medicaid')->nullable();
            $table->string('immigration_status')->nullable();
            $table->string('approximate_credit_score')->nullable();
            $table->string('personal_or_business_credit')->nullable();
            $table->string('purpose_of_credit')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('do_you_smoke')->nullable();
            $table->string('purpose')->nullable();
            $table->json('type_of_services')->nullable();
            $table->string('vin')->nullable();
            $table->string('driver_licence')->nullable();
            $table->string('interested_in')->nullable();
            $table->string('year_of_vehicle')->nullable();
            $table->string('monthly_premium')->nullable();
            $table->string('insurance_for_six_months')->nullable();
            $table->string('moving_violations')->nullable();
            $table->string('accidents_five_years')->nullable();
            $table->string('loan_amount_requesting')->nullable();
            $table->string('type_of_loan')->nullable();
            $table->string('type_of_taxes_service')->nullable();
            $table->string('roof_age')->nullable();
            $table->string('residence_home_status')->nullable();
            $table->unsignedBigInteger('seller_id');
            $table->unsignedSmallInteger('customer_status_id');
            $table->unsignedBigInteger('agency_id')->nullable();
            $table->string('verification')->nullable();
            $table->string('comments')->nullable();
            $table->string('locale')->nullable();
            $table->timestamps();

            $table->foreign('seller_id')->references('id')->on('users');
            $table->foreign('customer_status_id')->references('id')->on('customer_statuses');
            $table->foreign('agency_id')->references('id')->on('users');
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
