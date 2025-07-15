import { useCallback, useMemo, useState } from 'react';

export type UseMultiStepProps<T extends readonly string[]> = {
  currentStep: T[number];
  navigateNextStep: () => void;
  navigatePrevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  stepProgress: number;
};

export const useMultiStep = <T extends readonly string[]>(steps: T): UseMultiStepProps<T> => {
  const [currentStep, setCurrentStep] = useState(steps[0]);

  const navigateNextStep = useCallback(() => {
    if (currentStep === steps[steps.length - 1]) return;

    setCurrentStep((val) => {
      const currentStepIndex = steps.indexOf(val);
      return steps[currentStepIndex + 1];
    });
  }, [currentStep]);

  const navigatePrevStep = useCallback(() => {
    if (currentStep === steps[0]) return;

    setCurrentStep((val) => {
      const currentStepIndex = steps.indexOf(val);
      return steps[currentStepIndex - 1];
    });
  }, [currentStep]);

  const isFirstStep = useMemo(() => currentStep === steps[0], [currentStep]);
  const isLastStep = useMemo(() => currentStep === steps[steps.length - 1], [currentStep]);

  const stepProgress = useMemo(() => steps.indexOf(currentStep) / steps.length, [currentStep]);

  return {
    currentStep: currentStep as T[number],
    navigateNextStep,
    navigatePrevStep,
    isFirstStep,
    isLastStep,
    stepProgress,
  };
};
