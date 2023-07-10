<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class CustomerAssigned extends Mailable
{
    use Queueable, SerializesModels;
    public $customer;
    public $is_agency;
    /**
     * Create a new message instance.
     */
    public function __construct($customer, $agency = false)
    {
        $this->customer = $customer;
        $this->is_agency = $agency;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Cliente asignado a agencia',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $view = ($this->is_agency) ? 'customer_assigned_agency' : 'customer_assigned';
        return new Content(
            view: 'emails.' . $view,
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
