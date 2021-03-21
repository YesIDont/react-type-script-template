import { createContext } from 'react';
import { makeObservable, observable, action } from 'mobx';

export class GlobalStore {
  defaultContent: { text: string };

  constructor() {
    makeObservable(this, {
      defaultContent: observable,
      getContent: action,
    });

    this.defaultContent = { text: 'Your brand new app!' };
  }

  getContent(): string {
    return this.defaultContent.text;
  }
}

const store = new GlobalStore();

export default createContext(store);
