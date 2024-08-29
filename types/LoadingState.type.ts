export const LoadingStates = Object.freeze({
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
})

export type TLoadingState = typeof LoadingStates[keyof typeof LoadingStates]