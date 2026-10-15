<h1>New portfolio message</h1>

<p>
    You received a new message through your portfolio.
</p>

<hr>

<p>
    <strong>Name:</strong>
    {{ $contact['name'] }}
</p>

<p>
    <strong>Email:</strong>
    {{ $contact['email'] }}
</p>

<p>
    <strong>Message:</strong>
</p>

<p>
    {!! nl2br(e($contact['message'])) !!}
</p>