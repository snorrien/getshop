export class PhoneNumberService {
    readonly _mask: string = '+7 ({1}{2}{3}) {4}{5}{6}-{7}{8}-{9}{10}'; // +7 (___) ___-__-__
    private _digits: number[] = [];
    private readonly _patterns = [
        /\{1\}/, /\{2\}/, /\{3\}/, /\{4\}/, /\{5\}/, /\{6\}/, /\{7\}/, /\{8\}/, /\{9\}/, /\{10\}/
    ]

    public value = '';

    public addDigit(digit: number) {
        if (this._digits.length === 10) {
            return;
        }
        this._digits.push(digit);
        this._updateValue();
    }

    public clean() {
        this._digits = [];
        this._updateValue();
    }

    private _updateValue() {
        let result = this._mask;
        for (let i = 0; i < this._patterns.length; i++) {
            const pattern = this._patterns[i];
            const digit = this._digits[i] ?? '_';
            result = result.replace(pattern, digit.toString());
        }
        this.value = result;
    }
};