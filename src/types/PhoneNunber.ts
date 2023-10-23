export class PhoneNumber {
    readonly _mask: string = '+7 ({1}{2}{3}) {4}{5}{6}-{7}{8}-{9}{10}';
    private readonly _digits: string[] = [];
    private readonly _patterns = [
        /\{1\}/, /\{2\}/, /\{3\}/, /\{4\}/, /\{5\}/, /\{6\}/, /\{7\}/, /\{8\}/, /\{9\}/, /\{10\}/
    ]

    public value = '';

    public addDigit(digit: string) {
        this._digits.push(digit);
        this._updateValue();
    }

    private _updateValue() {
        let result = this._mask;
        for (let i = 0; i < this._patterns.length; i++) {
            const pattern = this._patterns[i];
            const digit = this._digits[i] ?? '_';
            result = result.replace(pattern, digit);
        }
        this.value = result;
    }
};