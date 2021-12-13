
const test1 = () => {
    console.log('A'); // 1

    setTimeout(() => console.log('timer'), 0); // 10

    Promise.resolve()
        .then(() => console.log('B')) // 3
        .then(() => console.log('C')) // 5
        .then(() => console.log('D')); // 7

    setImmediate(() => console.log('immediate')); // 9

    Promise.resolve()
        .then(() => console.log('B2')) // 4
        .then(() => console.log('C2')) // 6
        .then(() => console.log('D2')); // 8

    setTimeout(() => console.log('timer2'), 0); // 10
    console.log('Z'); // 2
}

test1();

/*
// первая итераци лупа
A
Z

// microtask queue at "poll"
B
B2
C
C2
D
D2

// фаза check
immediate

// macrotask queue al "poll"
timer
timer2
 */

/*
 Фазы Event Loop: таймеры --> I/O коллбэки --> idle, prepare (internal) --> poll (тут код программы JS) --> check (тут immediate) --> close callbacks
*/

/*
    Node has three stacks (queues):
        - macro
        - micro
        - stack

    Processes at "poll" stage, gets all "srack" tasks and executes.
    Then "micro" until it is empty (if microtasks add new microtasks executes them too);
    Then "macro".
 */
