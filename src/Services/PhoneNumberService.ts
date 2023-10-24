export class PhoneNumberService {
    readonly _mask: string = '+7 ({1}{2}{3}) {4}{5}{6}-{7}{8}-{9}{10}'; // +7 (___) ___-__-__
    private _digits: number[] = [];
    private readonly _patterns = [
        /\{1\}/, /\{2\}/, /\{3\}/, /\{4\}/, /\{5\}/, /\{6\}/, /\{7\}/, /\{8\}/, /\{9\}/, /\{10\}/
    ]

    public get value(): string | undefined {
        if (this._digits.length === 0) {
            return;
        }

        let result = this._mask;
        for (let i = 0; i < this._patterns.length; i++) {
            const pattern = this._patterns[i];
            const digit = this._digits[i] ?? '_';
            result = result.replace(pattern, digit.toString());
        }
        return result;
    }

    public get isValid(): boolean {
        return this._digits.length === 10;
    }

    public removeLastDigit() {
        if (this._digits.length !== 0) {
            this._digits = this._digits.slice(0, this._digits.length - 1);
        }
    }

    public addDigit(digit: number) {
        if (this._digits.length !== 10) {
            this._digits.push(digit);
        }
    }

    public clean() {
        this._digits = [];
    }
};