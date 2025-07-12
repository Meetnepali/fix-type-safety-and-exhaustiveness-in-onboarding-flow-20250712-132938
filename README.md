# Onboarding Wizard: Type Safety & Exhaustiveness Assessment

## Task Name
Fix Type-Safety and Exhaustiveness in Onboarding Flow

## Problem Statement
The onboarding flow in a React app is broken: users cannot complete signup, and a runtime error ('Cannot read property x of undefined') occurs on the last step. Review reveals:
- TypeScript did not catch a failed type narrowing due to a misconfigured `tsconfig` setting.
- There is a typo in the props interface for a wizard step, causing a required property to be potentially undefined.
- The step/variant switch does not handle all members of the discriminated union.
- `strictNullChecks` is currently OFF in `tsconfig.json`.

**You have 15 minutes** to fix the onboarding flow so onboarding completes successfully, all union members are exhaustively handled, and future missing cases are flagged by the type checker.

## Setup Instructions

1. Ensure you have [Docker](https://www.docker.com/) installed and running.
2. In this directory, run:

    ```sh
    ./run.sh
    ```

3. Open your browser to [http://localhost:3000](http://localhost:3000)

## Expected Outcomes (Once Fixed)
- Users can complete the onboarding process for all steps without errors.
- No runtime errors occur on any onboarding screen.
- All union/step types are exhaustively handled in code.
- Future missing union cases are surfaced at compile time by the type checker.

## How to Verify
- Go through each onboarding step in the app.
- Confirm that you reach the final "All done!" step and see the summary without errors.
- Ensure there are no crashes or TypeScript errors related to missing or undefined properties or unhandled step kinds.
