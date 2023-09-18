export class ManageState {
  private items: string[];
  private key: string;

  constructor(key: string) {
    this.key = key;
    const storageItems = localStorage.getItem(this.key) || '[]';
    this.items = JSON.parse(storageItems);
  }

  setItem(item: string) {
    this.items.push(item);
    this.updateStorageState();
  }

  getItems() {
    return this.items;
  }

  deleteItem(item: string) {
    const found = this.items.find(i => i == item);
    if (!found) {
      throw new Error('Element not found on the records');
    }
    this.items.splice(this.items.indexOf(found), 1);
    this.updateStorageState();
  }

  updateStorageState() {
    localStorage.setItem(this.key, JSON.stringify(this.items));
  }
}
