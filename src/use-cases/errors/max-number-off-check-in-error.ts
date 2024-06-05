export class MaxNumberCheckInsError extends Error {
  constructor() {
    super('Max number check ins reached.')
  }
}