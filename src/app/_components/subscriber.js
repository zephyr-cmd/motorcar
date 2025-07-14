// Subscribe to the newsletter
// Join our newsletter to stay up to date on features and releases.

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Subscriber() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setEmailError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail("");
      setIsLoading(false);
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1000);
  };
  return (
    <div className="border-b border-black/10 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 text-blue-500">
            Subscribe to the newsletter
          </h2>
          <p className="text-lg text-black/70 mb-8 leading-relaxed">
            Join our newsletter to stay up to date on features and releases.
          </p>

          {isSubscribed ? (
            <div className="flex items-center justify-center gap-3 text-green-400 bg-green-400/10 p-4 rounded-2xl max-w-md mx-auto">
              <CheckCircle className="w-5 h-5" />
              <span className="text-base font-medium">
                Successfully subscribed! Thank you for joining us.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    className="h-12 px-5 bg-white/5 border-black/20 rounded-xl focus:border-black/40 text-black placeholder:text-black/50"
                    disabled={isLoading}
                  />
                  {emailError && (
                    <p className="text-red-400 text-sm mt-1 text-left">
                      {emailError}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-12 px-6 bg-black text-white hover:bg-black/80 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      Subscribing...
                    </div>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
