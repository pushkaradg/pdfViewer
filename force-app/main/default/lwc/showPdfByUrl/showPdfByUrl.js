import { LightningElement, api } from 'lwc';

export default class ShowPdfByUrl extends LightningElement {
    @api url;
    @api heightInRem;

    get pdfHeight() {
        return `height: ${this.heightInRem}rem`;
    }
}
