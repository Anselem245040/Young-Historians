"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Building2, CreditCard, Landmark, User, ArrowRight } from "lucide-react";

export function DonationModal({ triggerText = "Donate Now" }: { triggerText?: string }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"initial" | "entity" | "payment" | "amount">("initial");
  const [entityType, setEntityType] = useState<"individual" | "organization" | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "wire" | null>(null);
  const [amount, setAmount] = useState<string>("");

  // Reset state when modal opens/closes
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setTimeout(() => {
        setStep("initial");
        setEntityType(null);
        setPaymentMethod(null);
        setAmount("");
      }, 300);
    }
  };

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
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger 
        render={
          <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
            {triggerText} <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        } 
      />
      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-white dark:bg-zinc-950 border-none shadow-2xl">
        {/* Top Image area */}
        <div className="h-32 w-full bg-brand-navy relative">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-brand-navy/60 flex items-end p-6">
            <p className="text-brand-gold text-sm font-medium tracking-wide uppercase">Support our cause</p>
          </div>
        </div>

        <div className="px-6 pt-6 text-center">
          <DialogHeader className="text-center sm:text-center">
            <DialogTitle className="text-2xl font-bold tracking-tight text-primary">
              {step === "initial" && "How would you"}
              {step === "entity" && "Select Entity"}
              {step === "payment" && "Payment Method"}
              {step === "amount" && "Enter Amount"}
            </DialogTitle>
            <DialogDescription className="text-base mx-auto">
              {step === "initial" && "Sponsor a young historian"}
              {step === "entity" && "Are you donating as an individual or an organization?"}
              {step === "payment" && "How would you like to make your donation?"}
              {step === "amount" && "Every contribution makes a difference."}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 pb-6 pt-4">
          {step === "initial" && (
            <div className="space-y-4">
              <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800">
                With a donation of about ₦5,000 to ₦50,000, you can help a student take a real step in their academic journey.
              </div>
              <Button onClick={handleNext} className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90">
                Proceed
              </Button>
            </div>
          )}

          {step === "entity" && (
            <div className="space-y-4">
              <button
                onClick={() => { setEntityType("individual"); setStep("payment"); }}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  entityType === "individual" 
                    ? "border-primary dark:border-brand-gold bg-primary/5 dark:bg-brand-gold/5" 
                    : "border-zinc-200 dark:border-zinc-800 hover:border-primary/50 dark:hover:border-brand-gold/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 dark:bg-brand-gold/10 rounded-full text-primary dark:text-brand-gold">
                    <User size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-lg text-zinc-900 dark:text-white">Individual</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Donate as a person</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setEntityType("organization"); setStep("payment"); }}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  entityType === "organization" 
                    ? "border-primary dark:border-brand-gold bg-primary/5 dark:bg-brand-gold/5" 
                    : "border-zinc-200 dark:border-zinc-800 hover:border-primary/50 dark:hover:border-brand-gold/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 dark:bg-brand-gold/10 rounded-full text-primary dark:text-brand-gold">
                    <Building2 size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-lg text-zinc-900 dark:text-white">Organization</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Donate as a company</p>
                  </div>
                </div>
              </button>
            </div>
          )}

          {step === "payment" && (
            <div className="space-y-4">
              <button
                onClick={() => { setPaymentMethod("card"); setStep("amount"); }}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  paymentMethod === "card" 
                    ? "border-primary dark:border-brand-gold bg-primary/5 dark:bg-brand-gold/5" 
                    : "border-zinc-200 dark:border-zinc-800 hover:border-primary/50 dark:hover:border-brand-gold/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 dark:bg-brand-gold/10 rounded-full text-primary dark:text-brand-gold">
                    <CreditCard size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-lg text-zinc-900 dark:text-white">Debit / Credit Card</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Instant payment</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setPaymentMethod("wire"); setStep("amount"); }}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  paymentMethod === "wire" 
                    ? "border-primary dark:border-brand-gold bg-primary/5 dark:bg-brand-gold/5" 
                    : "border-zinc-200 dark:border-zinc-800 hover:border-primary/50 dark:hover:border-brand-gold/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 dark:bg-brand-gold/10 rounded-full text-primary dark:text-brand-gold">
                    <Landmark size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-lg text-zinc-900 dark:text-white">Wire Transfer</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Direct bank transfer</p>
                  </div>
                </div>
              </button>
            </div>
          )}

          {step === "amount" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Donation Amount (NGN)</label>
                <Input
                  type="number"
                  placeholder="10000"
                  className="text-2xl py-6"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <Button className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90">
                Complete Donation
              </Button>
            </div>
          )}
        </div>

        {step !== "initial" && (
          <div className="px-6 pb-4 pt-2 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
            <Button variant="ghost" onClick={handleBack} className="w-full text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-800">
              Back
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
