/*
    There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

    You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
*/
const largestAltitude = function(gain) {
    if (!gain?.length)
        return 0    

    let maxAttitude = 0, currAttitude = 0
    for (const point of gain) {
        currAttitude += point        
        maxAttitude = Math.max(maxAttitude, currAttitude)
    }

    return maxAttitude
};


[
    [-5, 1, 5, 0, -7],
    [-4,-3,-2,-1,4,3,2],
].forEach((item) => console.log(item, largestAltitude(item)))
