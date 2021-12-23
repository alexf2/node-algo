// 1. Реализовать функцию getMoney для банкомата, выдающего купюры.
// На вход - сумма, на выходе объект с количеством купюр по каждому номиналу. 
// При этом банкомат должен выдать минимальное количество банкнот.
// Доступные номиналы: 50, 100, 500, 1000, 5000 р

// Пример: getMoney(6200) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}

// 2. На вход добавляется объект с текущим количеством купюр в банкомате

// Пример: getMoney(6200, {5000:0, 1000:7, 100:5}) // return {5000: 0, 1000: 6, 100: 2}


const BANKNOTES = [
    {val: 5000, amt: -1},
    {val: 1000, amt: -1},
    {val: 500, amt: -1},
    {val: 100, amt: -1},
    {val: 50, amt: -1},
  ];

const ZERO_PATTERN = BANKNOTES.reduce((acc, curr) => {
    acc[curr.val] = 0;
    return acc;
}, {});


const getCashSumm = cash => Object.keys(cash).reduce((acc, curr) => acc + curr * cash[curr], 0);

const limits2Banknotes = lim => {
    const result = [];
    Object.keys(lim).forEach(k => {
        result.push({val: parseInt(k), amt: lim[k]});
    });
    return result.sort((v1, v2) => v2.val - v1.val);
}

const getCash = (amount, banknotes) => { 
    let rest = amount, activeItem = 0, {length: len} = banknotes;
    const result = {};

    while (rest > 0) {
        while(activeItem < len && rest < banknotes[activeItem].val)
            ++activeItem;
        
        if (activeItem >= len)
            throw new Error("Can't hand the money over 1");
  
        const {val, amt} = banknotes[activeItem];
        let mult;
        for (mult = 1; rest > mult * val; ++mult);
  
        if (rest < mult * val)
            --mult;

        if (amt !== -1 && mult > amt) {
            if (activeItem < len - 1) {
                activeItem++;
                if (amt === 0)
                    continue;
                mult = amt; // банкнот меньше, чем нужно: берём всё доступное количество банкнот и увеличиваем счётчик типа банкноты
            }
            else
                throw new Error("There is a luck of banknotes");
        }

        if (mult <= 0)
            throw new Error("Can't hand the money over 2");

        rest -= mult * val;
        result[val] = mult;
    }
  
    return result;
};

function getMoney(amount, limits) {
    const banknotes = limits ? limits2Banknotes(limits) : BANKNOTES;    

    if (typeof amount !== 'number' || isNaN(amount) || amount < 0)
        throw new Error('Bad amount value');
    
    const outCash = getCash(amount, banknotes);
    console.log(getCashSumm(outCash));

    return {...ZERO_PATTERN, ...outCash};
}
  
  console.log(getMoney(39500, {
      [5000]: 5,
      [1000]: 50,
      [500]: 0,
      [100]: 20,
      [50]: 10,
  }));
