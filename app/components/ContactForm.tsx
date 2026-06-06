"use client";

import { useState } from "react";

// TODO: replace with the real Delta Grows / CSAEC contact inbox.
const CONTACT_EMAIL = "info@deltagrows.org";

/**
 * Contact form that opens the visitor's mail client with the message
 * pre-filled — works with no backend. Swap for a Formspree/Resend handler
 * later if you want submissions to post directly.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Delta Grows inquiry from ${name || "a visitor"}`,
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="dg-form" onSubmit={onSubmit}>
      <label className="dg-field">
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className="dg-field">
        <span>Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="dg-field">
        <span>Message</span>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="dg-btn dg-btn--primary">
        Send Message
      </button>
    </form>
  );
}
