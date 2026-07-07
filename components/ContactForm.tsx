'use client';

import { useState } from 'react';
import Button from './Button';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setStatus('error');
      return;
    }
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', ACCESS_KEY);
    formData.append('subject', 'New enquiry from shonie.dev');

    setStatus('sending');
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'ok') {
    return (
      <div className="w-form">
        <div className="w-form__done">
          <p className="w-h3">Thanks — your message is on its way.</p>
          <p className="w-lead">
            I&apos;ll get back to you shortly. For anything urgent, reach me directly.
          </p>
          <Button variant="outline" onClick={() => setStatus('idle')}>
            Send another
          </Button>
        </div>
      </div>
    );
  }

  const sending = status === 'sending';

  return (
    <form className="w-form" onSubmit={onSubmit}>
      {/* Honeypot — Web3Forms silently drops submissions where this is set. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
        aria-hidden="true"
      />
      <label className="w-field">
        <span>Name</span>
        <input name="name" required placeholder="Your name" />
      </label>
      <label className="w-field">
        <span>Email</span>
        <input type="email" name="email" required placeholder="you@company.com" />
      </label>
      <label className="w-field">
        <span>Project</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="A few lines about your project and engagement requirements."
        />
      </label>
      {status === 'error' && (
        <p className="w-form__error" role="alert">
          Something went wrong sending your message. Please try again, or email me directly.
        </p>
      )}
      <Button variant="solid" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Send enquiry'}
      </Button>
    </form>
  );
}
