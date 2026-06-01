"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, CreditCard, Landmark, User } from "lucide-react";

export function DonationCard() {
  const [step, setStep] = useState<"initial" | "entity" | "payment" | "amount">("initial");
  const [entityType, setEntityType] = useState<"individual" | "organization" | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "wire" | null>(null);
  const [amount, setAmount] = useState<string>("");

  const handleNext = () => {
    if (step === "initial") setStep("entity");
    else if (step === "entity" && entityType) setStep("payment");
    else if (step === "payment" && paymentMethod) setStep("amount");
  };

  const handleBack = () => {
    if (step === "entity") setStep("initial");
    else if (step === "payment") setStep("entity");
    else if (step === "amount") setStep("payment");
  };

  return (
    <Card className="w-full max-w-md shadow-2xl border-none overflow-hidden bg-white dark:bg-zinc-950">
      {/* Top Image area */}
      <div className="h-48 w-full bg-zinc-200 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <p className="text-white text-sm font-medium tracking-wide uppercase">Support our cause</p>
        </div>
      </div>
      
      <CardHeader className="text-center pt-8">
        <CardTitle className="text-3xl font-bold tracking-tight text-primary">
          {step === "initial" && "How would you"}
          {step === "entity" && "Select Entity"}
          {step === "payment" && "Payment Method"}
          {step === "amount" && "Enter Amount"}
        </CardTitle>
        <CardDescription className="text-lg">
          {step === "initial" && "Sponsor a lady in tech"}
          {step === "entity" && "Are you donating as an individual or an organization?"}
          {step === "payment" && "How would you like to make your donation?"}
          {step === "amount" && "Every contribution makes a difference."}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-6">
        {step === "initial" && (
          <div className="space-y-4">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg text-sm text-zinc-600 dark:text-zinc-400">
              Did you know that by donating $20 (~₦30,000), you're helping one woman take a step closer to owning a laptop?
            </div>
            <Button onClick={handleNext} className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90">
              I'll donate now
            </Button>
          </div>
        )}

        {step === "entity" && (
          <div className="space-y-4">
            <button
              onClick={() => { setEntityType("individual"); setStep("payment"); }}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                entityType === "individual" ? "border-primary bg-primary/5" : "border-zinc-200 hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <User size={24} />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg">Individual</p>
                  <p className="text-sm text-zinc-500">Donate as a person</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => { setEntityType("organization"); setStep("payment"); }}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                entityType === "organization" ? "border-primary bg-primary/5" : "border-zinc-200 hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <Building2 size={24} />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg">Organization</p>
                  <p className="text-sm text-zinc-500">Donate as a company</p>
                </div>
              </div>
            </button>
          </div>
        )}

        {step === "payment" && (
          <div className="space-y-4">
             <button
              onClick={() => { setPaymentMethod("card"); setStep("amount"); }}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                paymentMethod === "card" ? "border-primary bg-primary/5" : "border-zinc-200 hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <CreditCard size={24} />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg">Debit / Credit Card</p>
                  <p className="text-sm text-zinc-500">Instant payment</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => { setPaymentMethod("wire"); setStep("amount"); }}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                paymentMethod === "wire" ? "border-primary bg-primary/5" : "border-zinc-200 hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <Landmark size={24} />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg">Wire Transfer</p>
                  <p className="text-sm text-zinc-500">Direct bank transfer</p>
                </div>
              </div>
            </button>
          </div>
        )}

        {step === "amount" && (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Donation Amount (USD)</label>
              <Input 
                type="number" 
                placeholder="20.00" 
                className="text-2xl py-6"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <Button className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90">
              Proceed to Donate
            </Button>
          </div>
        )}
      </CardContent>
      
      {step !== "initial" && (
        <CardFooter className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <Button variant="ghost" onClick={handleBack} className="w-full text-zinc-500">
            Back
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
