<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CustomerMovement extends Model
{
    use HasFactory;
    protected $fillable = [
        'customer_id',
        'customer_status_id',
        'comments'
    ];

    public function status(): BelongsTo
    {
        return $this->belongsTo(CustomerStatus::class, 'customer_status_id');
    }
}
