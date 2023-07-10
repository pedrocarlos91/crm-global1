<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewSellerRegistered extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $seller;
    public $destination;

    public function __construct($seller, $destination)
    {
        $this->seller = $seller;
        $this->destination = $destination;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Agente registrado',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $view_name = ($this->destination === 'admin') ? 'seller_registered_admin' : 'thanks_registered_seller';

        return new Content(
            view: 'emails.' . $view_name
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
