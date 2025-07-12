import React, { useState } from "react";
import OnboardingWizard, { StepType } from "./OnboardingWizard";

const steps: StepType[] = [
  { kind: "welcome", message: "Welcome to onboarding!" },
  { kind: "userinfo", username: "", email: "" },
  { kind: "summary", summary: "All done!" }
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState({ username: "", email: "" });

  const handleNext = (data?: any) => {
    if (steps[currentStep].kind === "userinfo" && data) {
      setUserInfo({ username: data.username, email: data.email });
    }
    setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", border: "1px solid #ddd", padding: 24 }}>
      <OnboardingWizard
        step={steps[currentStep]}
        onNext={handleNext}
        userInfo={userInfo}
        isLast={currentStep === steps.length - 1}
      />
    </div>
  );
}

export default App;
