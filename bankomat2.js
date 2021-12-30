const BANKNOTE_NOMINALS_ORDERED = [5000, 1000, 500, 100, 50];
const UNLIMITED_BANKNOTES = {
  [5000]: -1,
  [1000]: -1,
  [500]: -1,
  [100]: -1,
  [50]: -1,
};

class CashMachine {
    constructor(banknotes) {
        this.moneyStorage = {...banknotes};
    }

    get totalMoneyAmount() {
        return Object.keys(this.moneyStorage).reduce((acc, curr) => acc + curr * this.moneyStorage[curr], 0);
    }

    static makeBlankResult() {
        return BANKNOTE_NOMINALS_ORDERED.reduce((acc, curr) => {
            acc[curr] = 0;
            return acc;
        }, {});
    }

    static isAliquote(amount) {
        return !(amount % CashMachine.getMinBanknote());
    }

    static getMinBanknote() {
        const {length} = BANKNOTE_NOMINALS_ORDERED;
        return BANKNOTE_NOMINALS_ORDERED[length - 1];
    }

    beginTransaction() {
        return  {
            ...this.moneyStorage,

            hasBanknote: function(nominal) {
                return this[nominal] !== 0;
            },
            takeBanknote: function(nominal) {
                if (this[nominal] > 0) {
                    this[nominal]--;
                    return true;
                }
                return false;
            }
        };
    }
    commitTransaction(snapshot) {
        const {hasBanknote, takeBanknote, ...rest} = snapshot;
        this.moneyStorage = {...rest};
    }

    validate(amount) {
        if (isNaN(amount) || typeof amount !== 'number')
            throw new Error('Illegal "amount" type: should be a natural number');

        if (amount < CashMachine.getMinBanknote())
            throw new Error(`The "amount" should be equal or greater to ${CashMachine.getMinBanknote()}`);

        if (!CashMachine.isAliquote(amount))
            throw new Error(`The "amount" should be aliquote to ${CashMachine.getMinBanknote()}`);
    }

    wihdrawMoney(amount) {
        this.validate(amount);
        const result = CashMachine.makeBlankResult();

        const snapshotStorage = this.beginTransaction();
        let acc = 0;
        for (const nominal of BANKNOTE_NOMINALS_ORDERED) {
            while (snapshotStorage.hasBanknote(nominal) && acc + nominal <= amount)
                result[nominal]++, snapshotStorage.takeBanknote(nominal), acc += nominal;
        }

        if (acc !== amount)
            throw new Error(`Can't gather requested summ: ${amount}`);

        this.commitTransaction(snapshotStorage);
        return result;
    }
}


const test1 = () => {
    const cm = new CashMachine({
        [5000]: 2,
        [1000]: 12,
        [500]: 1,
        [100]: 20,
        [50]: 10,
    });

    [550, 650, 3500].forEach(amt => {
        console.log(cm.totalMoneyAmount);
        console.log(cm.wihdrawMoney(amt));
        console.log(cm.totalMoneyAmount);
    });
}

test1();

const test2 = () => {
    const cm = new CashMachine({
        [5000]: 2,
        [1000]: 12,
        [500]: 1,
        [100]: 20,
        [50]: 10,
    });

    [25000].forEach(amt => {
        console.log(cm.totalMoneyAmount);
        console.log(cm.wihdrawMoney(amt));
        console.log(cm.totalMoneyAmount);
    });
}

test2();
