import React, { useState } from "react";

export type WelcomeStep = { kind: "welcome"; message: string };
export type UserInfoStep = { kind: "userinfo"; username: string; email: string };
export type SummaryStep = { kind: "summary"; summary: string };
export type StepType = WelcomeStep | UserInfoStep | SummaryStep;

export interface OnboardingWizardProps {
  step: StepType;
  onNext: (data?: any) => void;
  userInfo: { username: string; email: string };
  isLast: boolean;
}

const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ step, onNext, userInfo, isLast }) => {
  // {{BUG: Typo here: 'summray' instead of 'summary' in 'SummaryStep' props usage.}}
  switch (step.kind) {
    case "welcome":
      return (
        <>
          <h2>Welcome</h2>
          <p>{step.message}</p>
          <button onClick={() => onNext()}>Next</button>
        </>
      );
    case "userinfo":
      const [username, setUsername] = useState(step.username);
      const [email, setEmail] = useState(step.email);
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            onNext({ username, email });
          }}
        >
          <div>
            <label>Username: <input value={username} onChange={e => setUsername(e.target.value)} required /></label>
          </div>
          <div>
            <label>Email: <input value={email} onChange={e => setEmail(e.target.value)} required /></label>
          </div>
          <button type="submit">Next</button>
        </form>
      );
    // {{BUG: Missing case for 'summary' step}}
    /* NOTE: Summary step is not handled, resulting in undefined render and runtime error. */
    default:
      // TypeScript does not check exhaustiveness since strictNullChecks is OFF
      return (<div>Unknown step</div>);
  }
};

export default OnboardingWizard;
