"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const upd = (k) => (e) => setF({ ...f, [k]: e.target.value });

  return (
    <form className="w-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      {sent ? (
        <div className="w-form__done">
          <p className="w-h3">Thanks — message noted.</p>
          <p className="w-lead">This is a demo form. In production it would reach recruit@shonie.dev.</p>
          <Button variant="outline" onClick={() => { setSent(false); setF({ name: "", email: "", msg: "" }); }}>Send another</Button>
        </div>
      ) : (
        <>
          <label className="w-field"><span>Name</span>
            <input value={f.name} onChange={upd("name")} required placeholder="Your name" /></label>
          <label className="w-field"><span>Email</span>
            <input type="email" value={f.email} onChange={upd("email")} required placeholder="you@company.com" /></label>
          <label className="w-field"><span>Project</span>
            <textarea value={f.msg} onChange={upd("msg")} rows="4" placeholder="A few lines about your project and engagement requirements." /></label>
          <Button variant="solid" type="submit">Send enquiry</Button>
        </>
      )}
    </form>
  );
}
