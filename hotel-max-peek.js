/*
Даны даты заезда и отъезда каждого гостя. Для каждого гостя дата заезда строго раньше даты отъезда (то есть каждый гость останавливается хотя бы на одну ночь). В пределах одного дня считается, что сначала старые гости выезжают, а затем въезжают новые. Найти максимальное число постояльцев, которые одновременно проживали в гостинице (считаем, что измерение количества постояльцев происходит в конце дня).

	sample = [ (1, 2), (1, 3), (2, 4), (2, 3), ]
*/


function calcMaxDays(visitorsData) {	
    if (!visitorsData || visitorsData.length < 1)
        return 0

    const mapIn = new Map(), mapOut = new Map()
    for (const v of visitorsData) {
            mapIn.set(v[0], (mapIn.get(v[0]) || 0) + 1)
            mapOut.set(v[1], (mapOut.get(v[1]) || 0) + 1)
    }      
    
    let result = 0, current = 0
    for (const day of new Set([...mapIn.keys(), ...mapOut.keys()])) {
            current += (mapIn.get(day) || 0) - (mapOut.get(day) || 0)
            result = Math.max(result, current)
    }
        
    return result
}

[
	 [[1, 2], [1, 3], [2, 4], [2, 3]]
].forEach((item) => console.log(calcMaxDays(item)))
