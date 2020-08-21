const DURATIONS = {
  SLOW: 'slow',
  NORMAL: 'normal',
  FAST: 'fast',
};

const transition: Transition = (properties, duration, timingFunction) => ({ theme }) => {
  const tokens = {
    [DURATIONS.SLOW]: theme.jajiga.durationSlow,
    [DURATIONS.NORMAL]: theme.jajiga.durationNormal,
    [DURATIONS.FAST]: theme.jajiga.durationFast,
  };
  return `
    ${properties.map(property => `${property} ${tokens[duration]} ${timingFunction}`).join(',')};
  `;
};

export default transition;
