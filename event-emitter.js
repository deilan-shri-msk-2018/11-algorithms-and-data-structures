class EventEmitter {
  constructor() {
    this._handlersMap = {};
  }

  // O(1)
  on(event, handler) {
    if (!this._handlersMap[event]) {
      this._handlersMap[event] = [];
    }
    this._handlersMap[event].push(handler);
  }

  // O(N)
  off(event, handler) {
    if (this._handlersMap[event]) {
      this._handlersMap[event] = this._handlersMap[event]
        .filter(item => item !== handler);
    }
  }

  // O(N)
  emit(event, ...args) {
    if (this._handlersMap[event]) {
      this._handlersMap[event].forEach(handler => handler(...args))
    }
  }
}
