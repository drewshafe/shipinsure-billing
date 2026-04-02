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
        "Every Monday, ShipInsure sends you an invoice for the total premium amount collected during the previous week. This is how ShipInsure keeps track of the premiums you've earned on their behalf — and why billing information is required.",
      points: [
        "Invoice covers Mon–Sun of the prior week",
        "Line items show each order and premium collected",
        "This is also where reimbursements are credited back (see step 4)",
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
      headline: "Reimbursements are applied to the same weekly invoice",
      description:
        "At the same time ShipInsure invoices you for collected premiums, they also credit you back for any replacement orders or refunds you covered that week. The net amount is what you actually owe — meaning you're never out of pocket for covered claims.",
      points: [
        "Reimbursements appear as a 'Refund/Reship Credit' line on the weekly invoice",
        "Net due = premiums collected – reimbursements for claims",
        "If reimbursements exceed premiums in a given week, ShipInsure pays you the difference",
      ],
      visual: "settlement",
    },
  },
];

function CheckoutVisual() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm w-full max-w-xs">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Order Summary</div>
      {[
        { label: "Ceramic Planter × 1", val: "$48.00" },
        { label: "Shipping", val: "$7.99" },
      ].map((r) => (
        <div key={r.label} className="flex justify-between text-sm text-gray-700 py-1.5 border-b border-gray-100">
          <span>{r.label}</span>
          <span>{r.val}</span>
        </div>
      ))}
      <div className="flex justify-between text-sm py-1.5 border-b border-gray-100">
        <span className="flex items-center gap-1.5 text-indigo-600 font-medium">
          <span>🛡️</span> ShipInsure coverage
        </span>
        <span className="text-indigo-600 font-semibold">$0.98</span>
      </div>
      <div className="flex justify-between text-sm font-bold text-gray-900 pt-2 pb-3">
        <span>Total</span>
        <span>$56.97</span>
      </div>
      <div className="rounded-lg bg-indigo-50 border border-indigo-100 px-3 py-2 text-xs text-indigo-700">
        <span className="font-semibold">$0.98 premium</span> goes to you, the merchant — not to ShipInsure.
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
        <div className="mt-3 space-y-1">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Total Due</span><span className="font-semibold text-gray-800">$493.62</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Amount Paid</span><span>$0.00</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-gray-900 pt-1 border-t border-gray-200 mt-1">
            <span>Amount Remaining</span><span className="text-violet-600">$493.62</span>
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
      <div className="flex justify-between items-center py-2 border-b border-gray-100">
        <div>
          <div className="text-sm text-green-600 font-medium">Refund/Reship Credit</div>
          <div className="text-xs text-gray-400">applied to this invoice</div>
        </div>
        <div className="text-sm font-bold text-green-600">−$69.54</div>
      </div>
      <div className="flex justify-between items-center pt-2.5 pb-1">
        <div>
          <div className="text-sm font-bold text-gray-900">Net amount due</div>
          <div className="text-xs text-gray-400">you owe this, not the full premiums</div>
        </div>
        <div className="text-xl font-black text-gray-900">$493.62</div>
      </div>
      <div className="mt-3 rounded-lg bg-green-50 border border-green-100 px-3 py-2 text-xs text-green-700">
        <span className="font-semibold">You're never out of pocket.</span> Claims are credited before you pay.
      </div>
    </div>
  );
}

function DetailVisual({ visual }: { visual: string }) {
  if (visual === "checkout") return <CheckoutVisual />;
  if (visual === "invoice") return <InvoiceVisual />;
  if (visual === "claims") return <ClaimsVisual />;
  if (visual === "settlement") return <SettlementVisual />;
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
          {/* ShipInsure logo SVG */}
          <svg width="130" height="28" viewBox="0 0 130 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Box icon */}
            <g>
              {/* Box body */}
              <path d="M4 10L14 6L24 10V22L14 26L4 22V10Z" stroke="#6366f1" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
              {/* Box top flap left */}
              <path d="M4 10L9 7.5L14 10" stroke="#6366f1" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
              {/* Box top flap right */}
              <path d="M14 10L19 7.5L24 10" stroke="#6366f1" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
              {/* Center spine */}
              <line x1="14" y1="10" x2="14" y2="26" stroke="#6366f1" strokeWidth="1.5"/>
              {/* M / handle shape inside */}
              <path d="M9 15L11 13L14 16L17 13L19 15" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
            </g>
            {/* "Ship" text */}
            <text x="30" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="400" fill="#6366f1" letterSpacing="-0.3">Ship</text>
            {/* "Insure" text bold */}
            <text x="58" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="700" fill="#6366f1" letterSpacing="-0.3">Insure</text>
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
          <span className="font-bold">Remember:</span> ShipInsure is free for merchants. Billing info is only needed so ShipInsure can invoice you for net premiums and credit back your reimbursements in one weekly settlement.
        </div>
      </div>
    </div>
  );
}
