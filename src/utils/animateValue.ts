type AnimateType = {
  from: number;
  to: number;
  callback: (newValue: number) => void;
  duration?: number;
  onAnimationEnd?: () => void;
};

export function animateValue({
  from,
  to,
  callback,
  duration = 0.2,
  onAnimationEnd,
}: AnimateType): void {
  const isChangeAdditive = from < to;
  let lastUpdateTime = Date.now();
  let valueAcumulator = from;
  const desiredStepPerSecond = isChangeAdditive ? to / duration : from / duration;

  function animationLoop() {
    const currentTime = Date.now();
    const timeDelta = (currentTime - lastUpdateTime) / 1000;
    lastUpdateTime = currentTime;
    const stepValue = desiredStepPerSecond * timeDelta;

    if (isChangeAdditive) {
      valueAcumulator += stepValue;
    } else {
      valueAcumulator -= stepValue;
    }
    const isAnimationComplete = isChangeAdditive ? valueAcumulator >= to : valueAcumulator <= to;
    if (isAnimationComplete) valueAcumulator = to;

    callback(valueAcumulator);

    if (isAnimationComplete) {
      if (onAnimationEnd) onAnimationEnd();

      return;
    }
    requestAnimationFrame(animationLoop);
  }

  animationLoop();
}
