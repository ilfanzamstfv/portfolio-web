"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = {
  state: "idle" | "sending" | "sent" | "error";
  message?: string;
};

const KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!KEY) {
      return setStatus({
        state: "error",
        message: "The form isn't set up yet. Please email me directly.",
      });
    }
    const form = e.currentTarget;
    setStatus({ state: "sending" });
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: KEY,
          ...Object.fromEntries(new FormData(form)),
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      form.reset();
      setStatus({ state: "sent", message: "Message sent. Thank you!" });
    } catch {
      setStatus({
        state: "error",
        message:
          "Couldn't send the message. Please try again or email me directly.",
      });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-lg border border-ink bg-paper p-5 text-ink"
    >
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-sm font-bold">
          Name
        </label>
        <Input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-bold">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-bold">
          Message
        </label>
        <Textarea id="message" name="message" rows={5} required />
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={status.state === "sending"}
      >
        {status.state === "sending" ? "Sending…" : "Send message"}
      </Button>
      <p
        role="status"
        aria-live="polite"
        className={
          status.state === "error"
            ? "text-sm text-red-700"
            : "text-sm text-ink-soft"
        }
      >
        {status.message}
      </p>
    </form>
  );
}
