<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Customer extends Model
{
    use HasFactory;
    protected $fillable = [
        'service',
        'name',
        'lastname',
        'phone',
        'businessPhone',
        'email',
        'businessEmail',
        'company_name',
        'city',
        'regions_state_province',
        'like_be_contacted',
        'address',
        'zip_code',
        'house_hold_income',
        'how_many_dependents',
        'ages_dependents',
        'have_medicaid',
        'immigration_status',
        'approximate_credit_score',
        'personal_or_business_credit',
        'purpose_of_credit',
        'date_of_birth',
        'do_you_smoke',
        'purpose',
        'type_of_services',
        'vin',
        'driver_licence',
        'interested_in',
        'year_of_vehicle',
        'monthly_premium',
        'insurance_for_six_months',
        'moving_violations',
        'accidents_five_years',
        'loan_amount_requesting',
        'type_of_loan',
        'type_of_taxes_service',
        'roof_age',
        'residence_home_status',
        'seller_id',
        'customer_status_id',
        'agency_id',
        'verification',
        'comments',
        'locale'
    ];

    protected $casts = [
        'updates_at' => 'datetime',
        'created_at' => 'datetime',
    ];

    public function seller(): BelongsTo
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function agency(): BelongsTo
    {
        return $this->belongsTo(User::class, 'agency_id');
    }
    public function status(): BelongsTo
    {
        return $this->belongsTo(CustomerStatus::class, 'customer_status_id');
    }
    public function history(): HasMany
    {
        return $this->hasMany(CustomerMovement::class, 'customer_id', 'id');
    }
}
