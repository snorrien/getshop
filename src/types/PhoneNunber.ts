export class PhoneNumber {
    readonly _mask: string = '+7 ({1}{2}{3}) {4}{5}{6}-{7}{8}-{9}{10}'; // +7 (___) ___-__-__
    private readonly _digits: number[] = [];
    private readonly _patterns = [
        /\{1\}/, /\{2\}/, /\{3\}/, /\{4\}/, /\{5\}/, /\{6\}/, /\{7\}/, /\{8\}/, /\{9\}/, /\{10\}/
    ]

    public value = '';

    private digitMap = new Map<number, number>([
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7],
        [4, 9],
        [5, 10],
        [6, 11],
        [7, 13],
        [8, 14],
        [9, 16],
        [10, 17],
    ]);

    public addDigit(digit: number) : number {
        this._digits.push(digit);
        this._updateValue();
        
        return this.digitMap.get(this._digits.length) ?? 0;
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