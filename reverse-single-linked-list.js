function createList(...args) {
    const res = []
    let prev, head

    for (const val of args) {
        const item = { value: val }
        if (!head)
            prev = head = item
        else
            prev.next = item, prev = item
    }

    return head
}

function dumpList(lst) {
    let str = ''
    while (lst) {
        if (str)
            str += ', '
        str += lst.value, lst = lst.next
    }

    console.log(str)
}

function reverseList(lst) {
    let prev, curr = lst
    while (curr)
        [curr.next, prev, curr] = [prev, curr, curr.next]

    return prev
}

[
    createList(),
    createList(1),
	createList(1, 2, 3),
    createList(5, 12, -1, 20, 100),
].forEach((lst) => {
	dumpList(lst)  
    lst = reverseList(lst)
    dumpList(lst)
    console.log()
})
