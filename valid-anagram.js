export const validAnagram = (s, t) => {
    if (!s || !t || s.length !== t.length)
        return false;
    
    const m = new Map();
    for (const char of s) {
        const count = m.get(char);
        if (count)
            m.set(char, count + 1);
        else
            m.set(char, 1);
    }

    for (const char of t) {
        const count = m.get(char);
        if (count) {
            if (count === 1)
                m.delete(char);
            else
                m.set(char, count - 1);
        } else
            return false;
    }
    
    return true;
}

function test() {
    [
        ['anagram', 'nagaram'],
        ['rat', 'car'],
        
    ].forEach(([s, t], i) => {
        console.log(`${i + 1}:`, validAnagram(s, t));
    });
}

if (process.env.NODE_ENV !== 'test')
    test();
