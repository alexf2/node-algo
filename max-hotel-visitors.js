/*
    Даны даты заезда и отъезда каждого гостя.
    Для каждого гостя дата заезда строго раньше даты отъезда (то есть каждый гость останавливается хотя бы на одну ночь).
    В пределах одного дня считается, что сначала старые гости выезжают, а затем въезжают новые.
    Найти максимальное число постояльцев, которые одновременно проживали в гостинице (считаем, что измерение количества постояльцев происходит в конце дня).

    sample = [ (1, 2), (1, 3), (2, 4), (2, 3), ]
 */
export const maxHotelVisitors = arr => {
    if (!arr || !Array.isArray(arr) || !arr.length)
        return 0;

    const arrivingByDay = new Map(), leavingByDay = new Map();
    for (const item of arr) {
        const [arriveDay, leaveDay] = item;

        arrivingByDay.set(arriveDay, (arrivingByDay.get(arriveDay) || 0) + 1);
        leavingByDay.set(leaveDay, (leavingByDay.get(leaveDay) || 0) + 1);
    }

    const allDays = new Set([...arrivingByDay.keys(), ...leavingByDay.keys()]);
    const orderedDays = Array.from(allDays.values()).sort();
    let currentVisitors = 0, max = 0;
    for (const day of orderedDays) {
        currentVisitors -= leavingByDay.get(day) || 0;
        currentVisitors += arrivingByDay.get(day) || 0;

        max = Math.max(max, currentVisitors);
    }

    return max;
}

function test() {
    [
        undefined,
        [],
        [[1, 5], [2, 3], [3, 5]],
        [[1, 5], [2, 5], [3, 5], [4, 5], [5, 7]],
        [[1, 2], [1, 3], [2, 4], [2, 3]],
        [[1, 2], [3, 4]],
        [[1, 2], [3, 4], [2, 5], [4, 6]],
        [[1, 2], [3, 4], [2, 5], [4, 6], [5, 6], [4, 6], [4, 5]],
    ].forEach((arr, i) => {
        console.log(`${i + 1}:`, arr, ' --> ', maxHotelVisitors(arr));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
