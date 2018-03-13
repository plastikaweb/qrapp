export class ScanData {
  info: string;
  type: string;
  constructor(text: string) {
    this.type = 'Undefined';
    this.info = text;
    if (text.startsWith('http')) {
      this.type = 'http';
    }
  }
}
