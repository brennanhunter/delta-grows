"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/**
 * PayPal "hosted button" donate widget.
 *
 * ⚠️ ACCOUNT OWNERSHIP: the client ID and hosted-button ID below belong to
 * whichever PayPal account created the button — donations route THERE. Before
 * going live, run one small test donation and confirm the PayPal popup shows
 * the CSAEC / Delta Grows nonprofit as the recipient (not a personal or other
 * account). The client ID is publishable and safe in frontend code; it is not
 * a secret.
 */
const PAYPAL_CLIENT_ID =
  "BAAHipN2rBjsvJYcPTfJgKahze_FcB8ZtnYsWkpRes6WCWzwuX6UXcY9vBgCjXXVhKyj4_qliWeIPSgWMw";
const HOSTED_BUTTON_ID = "VP7C6VWAALDSU";

const SDK_SRC =
  `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}` +
  "&components=hosted-buttons&enable-funding=venmo&currency=USD";

const CONTAINER_ID = `paypal-container-${HOSTED_BUTTON_ID}`;

// Standalone PayPal payment page for the same hosted button — fallback for
// when the SDK is blocked (ad blockers) or fails to load.
const FALLBACK_URL = `https://www.paypal.com/ncp/payment/${HOSTED_BUTTON_ID}`;

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (opts: { hostedButtonId: string }) => {
        render: (selector: string) => unknown;
      };
    };
  }
}

export default function PayPalDonateButton() {
  // `ready` is flipped by <Script>'s onReady, which fires on first load AND on
  // every re-mount (e.g. after a client-side navigation) — so the button gets
  // re-rendered into the fresh container each time the page is shown.
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    if (!ready) return;
    const el = document.getElementById(CONTAINER_ID);
    if (!el || !window.paypal?.HostedButtons) return;

    el.innerHTML = ""; // guard against a double render (StrictMode / re-mount)
    Promise.resolve(
      window.paypal
        .HostedButtons({ hostedButtonId: HOSTED_BUTTON_ID })
        .render(`#${CONTAINER_ID}`),
    )
      .then(() => setStatus("ready"))
      .catch(() => setStatus("error"));

    return () => {
      el.innerHTML = "";
    };
  }, [ready]);

  return (
    <div className="dg-donate__widget">
      <Script
        id="paypal-hosted-buttons-sdk"
        src={SDK_SRC}
        strategy="afterInteractive"
        onReady={() => setReady(true)}
        onError={() => setStatus("error")}
      />

      <div
        id={CONTAINER_ID}
        className="dg-donate__paypal"
        aria-busy={status === "loading"}
      />

      {status === "loading" && (
        <p className="dg-donate__note">Loading secure PayPal checkout&hellip;</p>
      )}

      {status === "error" && (
        <p className="dg-donate__note">
          Having trouble with the donate button?{" "}
          <a href={FALLBACK_URL} target="_blank" rel="noopener noreferrer">
            Donate securely on PayPal&rsquo;s site
          </a>
          .
        </p>
      )}
    </div>
  );
}
