import { useState } from "react";

const steps = [
  {
    id: 1,
    icon: "🛒",
    title: "Customer purchases insurance",
    subtitle: "premium goes to merchant",
    color: "from-blue-400 to-indigo-500",
    accentColor: "#6366f1",
    lightBg: "#eef2ff",
    detail: {
      headline: "You collect the premium at checkout",
      description:
        "When a customer places an order, they're offered the option to insure it through ShipInsure. The insurance premium is paid directly to you — the merchant — as part of the checkout transaction. ShipInsure never touches this money at point of sale.",
      points: [
        "Premium is collected by you alongside the order payment",
        "No extra steps or redirects for the customer",
        "ShipInsure is 100% free for merchants — you're not paying anything here",
      ],
      visual: "checkout",
    },
  },
  {
    id: 2,
    icon: "📄",
    title: "Merchant sends the premiums over to Shipinsure weekly",
    subtitle: "premium goes to Shipinsure",
    color: "from-violet-400 to-purple-500",
    accentColor: "#8b5cf6",
    lightBg: "#f5f3ff",
    detail: {
      headline: "Every Monday, ShipInsure invoices you for last week's premiums",
      description:
        "Every Monday, ShipInsure sends you an invoice for the total premium amount collected during the previous week. Two credits are settled right on that same invoice — your claim reimbursements and your revenue share — so everything nets out to a single number.",
      points: [
        "Invoice covers Mon–Sun of the prior week",
        "Line items show each order and premium collected",
        "Two credits are applied here — reimbursements and your revenue share (steps 4 & 5)",
      ],
      visual: "invoice",
    },
  },
  {
    id: 3,
    icon: "📦",
    title: "Shipinsure approves claims and sends them to the merchant to fulfill",
    subtitle: "reorder goes to merchant",
    color: "from-teal-400 to-emerald-500",
    accentColor: "#14b8a6",
    lightBg: "#f0fdfa",
    detail: {
      headline: "ShipInsure handles the claim — you handle the fulfillment",
      description:
        "When a customer reports a lost, damaged, or stolen package, ShipInsure reviews and approves the claim. Once approved, a reorder or refund instruction is sent back to you to fulfill — just like a normal order. You're not making any coverage decisions.",
      points: [
        "Customer files claim directly with ShipInsure",
        "ShipInsure reviews and approves (typically within 24 hrs)",
        "Approved claims arrive in your dashboard as a reorder or refund action",
        "You fulfill it — ShipInsure reimburses you for the cost (see step 4)",
      ],
      visual: "claims",
    },
  },
  {
    id: 4,
    icon: "💰",
    title: "Shipinsure reimburses merchant for refunds & reorders weekly",
    subtitle: "reimbursement goes to merchant",
    color: "from-green-400 to-teal-500",
    accentColor: "#22c55e",
    lightBg: "#f0fdf4",
    detail: {
      headline: "Reimbursements are credited on the same weekly invoice",
      description:
        "At the same time ShipInsure invoices you for collected premiums, they credit you back for any replacement orders or refunds you covered that week. It's applied as a line-item credit — so you're never out of pocket for covered claims.",
      points: [
        "Reimbursements appear as a 'Refund/Reship Credit' line on the weekly invoice",
        "Applied as a credit — no separate payout to chase",
        "Combined with your revenue share to reach the net you owe (see step 5)",
      ],
      visual: "settlement",
    },
  },
  {
    id: 5,
    icon: "🤝",
    title: "You earn a revenue share — credited on the same invoice",
    subtitle: "revenue share goes to merchant",
    color: "from-fuchsia-400 to-pink-500",
    accentColor: "#d946ef",
    lightBg: "#fdf4ff",
    detail: {
      headline: "Your revenue share settles inside the same invoice",
      description:
        "You earn a share of the protection revenue. Instead of paying it out separately, ShipInsure applies it as its own line-item credit on the very invoice it's earned on — reducing what you owe. One number, one transaction, nothing to reconcile.",
      points: [
        "Revenue share appears as its own credit line on the weekly invoice",
        "Settled on the same invoice it's earned on — no separate payout to wait for",
        "Net due = premiums − reimbursements − revenue share",
        "Nothing to track, deposit, or reconcile on your end",
      ],
      visual: "revshare",
    },
  },
];

function CheckoutVisual() {
  return (
    <div className="bg-white rounded-xl border-2 border-indigo-200 shadow-sm w-full max-w-xs overflow-hidden">
      {/* Shopify-style order summary header */}
      <div className="px-4 pt-4 pb-2">
        <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">Order Summary</div>

        {/* ShipInsure line item */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="11" width="18" height="11" rx="2" stroke="#6366f1" strokeWidth="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-gray-800 leading-tight">ShipInsure Package Protection</div>
          </div>
          <div className="text-xs font-semibold text-gray-800 shrink-0">$0.98</div>
        </div>

        {/* Ceramic Planter line item */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-md bg-green-50 border border-green-100 flex items-center justify-center shrink-0 text-lg">
            🪴
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-gray-800 leading-tight">Ceramic Planter</div>
          </div>
          <div className="text-xs font-semibold text-gray-800 shrink-0">$48.00</div>
        </div>

        {/* Discount code field */}
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Discount code or gift card"
            className="flex-1 text-xs border border-gray-300 rounded-md px-3 py-2 text-gray-500 bg-white outline-none"
            readOnly
          />
          <button className="text-xs font-semibold text-gray-500 border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            Apply
          </button>
        </div>

        {/* Shipping & Total */}
        <div className="border-t border-gray-100 pt-2 space-y-1.5">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Shipping</span>
            <span>$7.99</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-gray-900 pt-1">
            <span>Total</span>
            <span>$56.97</span>
          </div>
        </div>
      </div>

      {/* Blue callout */}
      <div className="mx-3 mb-3 mt-2 rounded-lg bg-indigo-50 border border-indigo-100 px-3 py-2 text-xs text-indigo-700 leading-snug">
        <span className="font-semibold">$0.98 premium goes to you, the merchant</span> — not to ShipInsure.
      </div>
    </div>
  );
}

function InvoiceVisual() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-xs overflow-hidden">
      {/* Invoice header */}
      <div className="bg-violet-600 text-white px-4 py-3">
        <div className="text-[10px] font-semibold uppercase tracking-widest opacity-70 mb-0.5">ShipInsure Invoice</div>
        <div className="text-sm font-bold">#DD30015A-0238</div>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-[10px] bg-red-400 text-white font-semibold px-2 py-0.5 rounded-full">Unpaid</span>
          <span className="text-[10px] opacity-70">Due 10/16/2023</span>
        </div>
      </div>
      {/* Invoice body */}
      <div className="p-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wider">
          <span>Description</span><span>Amount</span>
        </div>
        <div className="flex justify-between text-sm py-1.5 border-b border-gray-100">
          <span className="text-gray-700">48 orders (premiums)</span>
          <span className="font-semibold text-gray-900">$563.16</span>
        </div>
        <div className="flex justify-between text-sm py-1.5 border-b border-gray-100">
          <span className="text-green-600 font-medium">Refund/Reship Credit</span>
          <span className="font-semibold text-green-600">−$69.54</span>
        </div>
        <div className="flex justify-between text-sm py-1.5 border-b border-gray-100">
          <span className="text-green-600 font-medium">Revenue share</span>
          <span className="font-semibold text-green-600">−$84.47</span>
        </div>
        <div className="mt-3 space-y-1">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Total Due</span><span className="font-semibold text-gray-800">$409.15</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Amount Paid</span><span>$0.00</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-gray-900 pt-1 border-t border-gray-200 mt-1">
            <span>Amount Remaining</span><span className="text-violet-600">$409.15</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClaimsVisual() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm w-full max-w-xs">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Claim #48291 · Lost Package</div>
      <div className="space-y-2 mb-3">
        {[
          { step: "Customer files claim", done: true, note: "via ShipInsure portal" },
          { step: "ShipInsure reviews", done: true, note: "~24hr turnaround" },
          { step: "Claim approved", done: true, note: "decision made by ShipInsure" },
          { step: "Reorder sent to merchant", done: false, note: "lands in your dashboard" },
        ].map((s, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${s.done ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-400"}`}>
              {s.done ? "✓" : i + 1}
            </div>
            <div>
              <div className={`text-xs font-semibold ${s.done ? "text-gray-800" : "text-gray-400"}`}>{s.step}</div>
              <div className="text-[10px] text-gray-400">{s.note}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-teal-50 border border-teal-200 px-3 py-2 text-xs">
        <div className="text-teal-700 font-semibold">You never decide on coverage.</div>
        <div className="text-teal-600 mt-0.5">ShipInsure handles all claim adjudication.</div>
      </div>
    </div>
  );
}

function SettlementVisual() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm w-full max-w-xs">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Weekly Net Settlement</div>
      <div className="flex justify-between items-center py-2 border-b border-gray-100">
        <div>
          <div className="text-sm text-gray-800 font-medium">Premiums collected</div>
          <div className="text-xs text-gray-400">48 orders this week</div>
        </div>
        <div className="text-sm font-bold text-gray-800">$563.16</div>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-gray-100 -mx-1 px-1 rounded bg-green-50/60">
        <div>
          <div className="text-sm text-green-600 font-medium">Refund/Reship Credit</div>
          <div className="text-xs text-gray-400">applied to this invoice</div>
        </div>
        <div className="text-sm font-bold text-green-600">−$69.54</div>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-gray-100">
        <div>
          <div className="text-sm text-fuchsia-600 font-medium">Revenue share</div>
          <div className="text-xs text-gray-400">also credited here (step 5)</div>
        </div>
        <div className="text-sm font-bold text-fuchsia-600">−$84.47</div>
      </div>
      <div className="flex justify-between items-center pt-2.5 pb-1">
        <div>
          <div className="text-sm font-bold text-gray-900">Net amount due</div>
          <div className="text-xs text-gray-400">you owe this, not the full premiums</div>
        </div>
        <div className="text-xl font-black text-gray-900">$409.15</div>
      </div>
      <div className="mt-3 rounded-lg bg-green-50 border border-green-100 px-3 py-2 text-xs text-green-700">
        <span className="font-semibold">You're never out of pocket.</span> Claims are credited before you pay.
      </div>
    </div>
  );
}

function RevShareVisual() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm w-full max-w-xs">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Revenue Share · This Week</div>
      <div className="flex justify-between items-center py-2 border-b border-gray-100">
        <div className="text-sm text-gray-800 font-medium">Premiums collected</div>
        <div className="text-sm font-bold text-gray-800">$563.16</div>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-gray-100">
        <div className="text-sm text-green-600 font-medium">Refund/Reship Credit</div>
        <div className="text-sm font-bold text-green-600">−$69.54</div>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-gray-100 -mx-1 px-1 rounded bg-fuchsia-50 border border-fuchsia-100">
        <div>
          <div className="text-sm text-fuchsia-600 font-semibold">Revenue share</div>
          <div className="text-xs text-fuchsia-400">your share, credited right here</div>
        </div>
        <div className="text-sm font-black text-fuchsia-600">−$84.47</div>
      </div>
      <div className="flex justify-between items-center pt-2.5 pb-1">
        <div>
          <div className="text-sm font-bold text-gray-900">Net amount due</div>
          <div className="text-xs text-gray-400">one number, already settled</div>
        </div>
        <div className="text-xl font-black text-gray-900">$409.15</div>
      </div>
      <div className="mt-3 rounded-lg bg-fuchsia-50 border border-fuchsia-100 px-3 py-2 text-xs text-fuchsia-700">
        <span className="font-semibold">Earned and settled on the same invoice.</span> No separate payout to wait for.
      </div>
    </div>
  );
}

function DetailVisual({ visual }: { visual: string }) {
  if (visual === "checkout") return <CheckoutVisual />;
  if (visual === "invoice") return <InvoiceVisual />;
  if (visual === "claims") return <ClaimsVisual />;
  if (visual === "settlement") return <SettlementVisual />;
  if (visual === "revshare") return <RevShareVisual />;
  return null;
}

export default function App() {
  const [active, setActive] = useState<number | null>(null);
  const activeStep = steps.find((s) => s.id === active);

  return (
    <div className="min-h-screen bg-[#f5f6f8] py-12 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-3 flex items-center gap-2.5">
          {/* Real ShipInsure logo SVG — paths extracted from shipinsure.io, fill changed to brand purple */}
          <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" viewBox="0.031 0.751 174 36" height="30" width="145" aria-label="ShipInsure">
            <g>
              <path fill="#6366f1" d="M60.778 13.546c-.506-.565-1.185-1.02-2.029-1.37-.847-.35-1.81-.523-2.892-.523-1.587 0-2.75.293-3.474.884-.729.591-1.09 1.39-1.09 2.402 0 .53.097.967.292 1.306.196.338.495.636.901.884.407.249.925.463 1.561.648a30.41 30.41 0 0 0 2.244.545c.963.2 1.83.422 2.6.674.77.249 1.423.561 1.967.934.541.372.955.824 1.243 1.355.288.53.43 1.193.43 1.99 0 .799-.162 1.518-.484 2.116a4.253 4.253 0 0 1-1.346 1.495c-.575.399-1.261.692-2.055.884a11.11 11.11 0 0 1-2.612.286c-2.792 0-5.2-.854-7.23-2.563l.887-1.42a6.98 6.98 0 0 0 1.154.946c.449.297.947.56 1.496.783a9.393 9.393 0 0 0 1.764.523c.625.124 1.285.188 1.979.188 1.438 0 2.558-.252 3.36-.76.8-.505 1.203-1.273 1.203-2.304 0-.55-.115-1.009-.34-1.381-.23-.373-.572-.697-1.029-.972-.456-.274-1.024-.511-1.698-.707-.675-.2-1.462-.4-2.36-.599a27.393 27.393 0 0 1-2.484-.673c-.71-.234-1.312-.524-1.803-.87a3.429 3.429 0 0 1-1.104-1.257c-.246-.49-.368-1.092-.368-1.803 0-.813.157-1.54.468-2.18.314-.64.755-1.17 1.33-1.591a6.422 6.422 0 0 1 2.029-.972c.779-.226 1.641-.335 2.589-.335 1.2 0 2.27.177 3.21.535.94.357 1.787.858 2.55 1.505l-.863 1.393.004.004Z"/>
              <path fill="#6366f1" d="M76.402 27.91h-1.726v-7.246c0-1.476-.257-2.582-.775-3.313-.517-.73-1.273-1.095-2.27-1.095-.49 0-.978.094-1.457.286a5.441 5.441 0 0 0-2.462 1.954 4.898 4.898 0 0 0-.698 1.468v7.942h-1.726V9.736h1.726v8.142a5.926 5.926 0 0 1 2.182-2.315 5.709 5.709 0 0 1 3.018-.846c.76 0 1.404.135 1.929.41.525.275.955.655 1.292 1.144.338.49.583 1.08.737 1.77.153.688.23 1.448.23 2.276v7.592Z"/>
              <path fill="#6366f1" d="M80.08 12.225V9.737h1.725v2.488H80.08Zm0 15.684V14.94h1.725v12.97H80.08Z"/>
              <path fill="#6366f1" d="M92.356 28.158c-1.116 0-2.102-.279-2.953-.836a6.698 6.698 0 0 1-2.067-2.104v7.991H85.61V14.94h1.545v2.514a6.372 6.372 0 0 1 2.106-1.98 5.487 5.487 0 0 1 2.815-.76c.913 0 1.749.188 2.512.56a6.44 6.44 0 0 1 1.979 1.495c.556.621.993 1.34 1.307 2.153a6.9 6.9 0 0 1 .468 2.514 7.8 7.8 0 0 1-.43 2.59 6.574 6.574 0 0 1-1.23 2.142 5.917 5.917 0 0 1-1.903 1.456c-.736.358-1.541.535-2.423.535Zm-.483-1.494c.709 0 1.357-.151 1.94-.448a4.795 4.795 0 0 0 1.496-1.182c.414-.49.732-1.047.95-1.668.22-.62.33-1.264.33-1.93 0-.697-.126-1.36-.379-1.992a5.5 5.5 0 0 0-1.04-1.667 4.923 4.923 0 0 0-1.56-1.145 4.504 4.504 0 0 0-1.94-.421 4.06 4.06 0 0 0-1.381.26 5.682 5.682 0 0 0-1.346.696c-.415.29-.771.632-1.067 1.02-.295.391-.479.802-.544 1.23V23.4c.203.463.46.896.775 1.295a5.36 5.36 0 0 0 1.066 1.031c.398.29.824.52 1.28.685.457.166.929.249 1.42.249v.004Z"/>
              <path fill="#6366f1" d="M101.234 27.91V10.234h3.501V27.91h-3.501Z"/>
              <path fill="#6366f1" d="M120.509 27.91h-3.398v-7.318c0-1.046-.188-1.81-.56-2.288-.372-.48-.886-.723-1.546-.723a2.97 2.97 0 0 0-1.039.2c-.356.131-.69.32-1.001.56a4.706 4.706 0 0 0-.851.858 3.3 3.3 0 0 0-.556 1.096v7.618h-3.398V14.867h3.068v2.417c.491-.828 1.2-1.476 2.132-1.943.928-.463 1.979-.696 3.145-.696.828 0 1.503.15 2.029.448a3.24 3.24 0 0 1 1.215 1.17c.288.482.487 1.028.595 1.645.111.614.165 1.239.165 1.867v8.142-.008Z"/>
              <path fill="#6366f1" d="M128.501 28.158a10.41 10.41 0 0 1-3.271-.523c-1.066-.35-1.979-.847-2.738-1.495l1.269-2.092c.813.564 1.603.993 2.37 1.283.771.29 1.534.437 2.297.437.675 0 1.208-.124 1.599-.373.388-.248.583-.606.583-1.069 0-.463-.23-.805-.686-1.02-.456-.214-1.2-.463-2.232-.745a28.987 28.987 0 0 1-2.205-.674c-.61-.215-1.101-.46-1.473-.734-.372-.275-.644-.587-.813-.945-.169-.357-.253-.783-.253-1.283 0-.663.13-1.261.395-1.792.261-.53.629-.982 1.104-1.355a5.157 5.157 0 0 1 1.661-.858 6.85 6.85 0 0 1 2.067-.297c.997 0 1.933.143 2.804.421.87.282 1.668.738 2.396 1.37l-1.369 2.018c-.675-.497-1.33-.862-1.967-1.096a5.447 5.447 0 0 0-1.891-.35c-.575 0-1.058.117-1.446.35-.387.234-.582.606-.582 1.122 0 .233.046.422.138.572.092.15.241.282.444.4.204.116.468.229.798.334.33.11.74.222 1.231.335.913.234 1.695.463 2.347.697.652.233 1.185.496 1.599.797.415.298.718.644.913 1.032.196.391.292.858.292 1.408 0 1.28-.484 2.284-1.446 3.026-.963.738-2.274 1.106-3.931 1.106l-.004-.007Z"/>
              <path fill="#6366f1" d="M140.14 28.158c-1.369 0-2.408-.433-3.117-1.295-.71-.862-1.067-2.142-1.067-3.836v-8.164h3.398v7.442c0 2.01.737 3.01 2.205 3.01.66 0 1.297-.195 1.914-.582.617-.392 1.12-.983 1.511-1.78v-8.09h3.398v9.21c0 .35.065.6.192.746.126.15.333.233.621.248v2.839a6.809 6.809 0 0 1-.851.124 9.907 9.907 0 0 1-.622.026c-.609 0-1.104-.135-1.484-.41a1.605 1.605 0 0 1-.671-1.133l-.077-1.047a5.626 5.626 0 0 1-2.282 2.018c-.931.448-1.952.674-3.068.674Z"/>
              <path fill="#6366f1" d="M159.672 17.75c-1.031.015-1.952.211-2.765.584-.813.372-1.396.933-1.749 1.679v7.893h-3.397V14.86h3.117v2.789c.238-.448.514-.85.836-1.209a6.532 6.532 0 0 1 1.04-.933c.372-.263.748-.47 1.127-.61a3.21 3.21 0 0 1 1.105-.21h.418c.092 0 .18.007.264.026v3.037h.004Z"/>
              <path fill="#6366f1" d="M167.078 28.158c-1.066 0-2.029-.177-2.892-.535a6.618 6.618 0 0 1-2.205-1.457 6.438 6.438 0 0 1-1.408-2.141 6.77 6.77 0 0 1-.494-2.563c0-.896.161-1.807.483-2.628a6.38 6.38 0 0 1 1.396-2.164 6.706 6.706 0 0 1 2.22-1.48c.871-.364 1.849-.549 2.93-.549 1.082 0 2.052.184 2.904.55a6.7 6.7 0 0 1 2.182 1.468 6.233 6.233 0 0 1 1.369 2.141 6.99 6.99 0 0 1 .468 2.541c0 .215-.004.422-.012.621-.008.2-.031.365-.065.497H163.68c.05.516.176.971.38 1.37.203.399.464.738.786 1.02a3.49 3.49 0 0 0 1.089.648c.406.15.828.225 1.269.225.675 0 1.316-.162 1.914-.485.598-.324 1.009-.75 1.231-1.284l2.918.798c-.49.998-1.273 1.814-2.347 2.45-1.073.64-2.354.96-3.842.96v-.003Zm3.447-7.867c-.084-.979-.452-1.762-1.104-2.353-.652-.587-1.442-.884-2.37-.884a3.44 3.44 0 0 0-1.281.237 3.312 3.312 0 0 0-1.051.659 3.462 3.462 0 0 0-.748 1.02c-.195.399-.306.84-.341 1.32h6.899-.004Z"/>
              <path fill="#6366f1" d="M33.012 8.171 17.061.83a.852.852 0 0 0-.716 0L.518 8.114a.832.832 0 0 0-.487.756V28.9c0 .162.094.308.243.377l16.071 7.395a.852.852 0 0 0 .716 0l16.07-7.395a.416.416 0 0 0 .244-.378V17.11l4.304-1.981a.413.413 0 0 0 .164-.62L33.61 8.662a1.532 1.532 0 0 0-.597-.49ZM17.061 1.925 30.172 7.96a.415.415 0 0 1 0 .755L17.061 14.75a.852.852 0 0 1-.716 0L3.235 8.715a.415.415 0 0 1 0-.755l13.11-6.035a.852.852 0 0 1 .716 0Zm6.784 23.626a.832.832 0 0 0-.488.755v6.371l-4.862 2.238a.422.422 0 0 1-.601-.378V17.654l3.368 4.65a.426.426 0 0 0 .522.135l10.399-4.785V28.35a.417.417 0 0 1-.244.378l-3.82 1.759v-6.249a.422.422 0 0 0-.601-.378"/>
            </g>
          </svg>
          <span className="text-gray-300">·</span>
          <span className="text-xs text-gray-400 font-medium">Billing explained</span>
        </div>
        <h1 className="text-3xl font-black text-gray-900 leading-tight mb-1">
          Understanding why we need your billing info
        </h1>
        <p className="text-gray-500 text-sm mb-2">
          ShipInsure is <span className="font-semibold text-gray-700">100% free for merchants.</span> Here's exactly how the money flows — and why billing info is required.
        </p>
        <p className="text-gray-400 text-xs mb-8">Click any step to see the details.</p>

        {/* Flow steps */}
        <div className="flex flex-col md:flex-row items-stretch gap-2 mb-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col md:flex-row items-center gap-2 flex-1 min-w-0">
              <button
                onClick={() => setActive(active === step.id ? null : step.id)}
                className={`
                  group relative w-full text-left rounded-2xl border-2 transition-all duration-200 cursor-pointer overflow-hidden
                  ${active === step.id
                    ? "shadow-lg scale-[1.02]"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                  }
                `}
                style={active === step.id ? { borderColor: step.accentColor, backgroundColor: step.lightBg } : {}}
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${step.color}`} />
                <div className="p-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mb-3"
                    style={{ backgroundColor: step.accentColor }}
                  >
                    {step.id}
                  </div>
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <div className="text-sm font-semibold text-gray-900 leading-snug mb-2">{step.title}</div>
                  <div
                    className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${step.accentColor}20`, color: step.accentColor }}
                  >
                    $ {step.subtitle}
                  </div>
                </div>
                {active === step.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: step.accentColor }} />
                )}
              </button>

              {index < steps.length - 1 && (
                <div className="shrink-0 text-gray-300">
                  <svg className="w-5 h-5 hidden md:block" fill="none" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className="w-5 h-5 block md:hidden" fill="none" viewBox="0 0 24 24">
                    <path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Detail panel */}
        {activeStep ? (
          <div
            className="rounded-2xl border-2 bg-white p-6 shadow-sm"
            style={{ borderColor: `${activeStep.accentColor}40` }}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: activeStep.lightBg }}
                  >
                    {activeStep.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: activeStep.accentColor }}>
                      Step {activeStep.id}
                    </div>
                    <h2 className="text-lg font-black text-gray-900">{activeStep.detail.headline}</h2>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">{activeStep.detail.description}</p>

                <ul className="space-y-2">
                  {activeStep.detail.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span
                        className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                        style={{ backgroundColor: activeStep.accentColor }}
                      >
                        ✓
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:w-72 flex items-start justify-center lg:justify-end">
                <DetailVisual visual={activeStep.detail.visual} />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-10 text-gray-400 text-sm border-2 border-dashed border-gray-200 rounded-2xl">
            ↑ Select a step above to see how it works
          </div>
        )}

        {/* Footer note */}
        <div className="mt-6 rounded-xl bg-indigo-50 border border-indigo-100 px-5 py-3 text-sm text-indigo-700">
          <span className="font-bold">Remember:</span> ShipInsure is free for merchants. Billing info is only needed so ShipInsure can invoice you for premiums and credit back both your reimbursements and your revenue share in one weekly settlement — a single net number.
        </div>
      </div>
    </div>
  );
}
