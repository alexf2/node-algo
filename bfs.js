/*
 *  Задано дерево: нужно найти путь в нём от вершины к листу, чтобы сумма весов вершин была равна заданному целевому числу. 
 */

class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }

    get isLeaf() {
        return !this.left && !this.right
    }
}

const addNode = (value, left, right) => {
    const nd = new Node(value, left, right)
    left && (left.parent = nd)
    right && (right.parent = nd)

    return nd
}

const TREE = addNode(5,
    addNode(4, addNode(11, addNode(7), addNode(2))), 
    addNode(8, addNode(13), addNode(4, null, addNode(1))),
)

const backTrack = (leaf) => {
    const values = []
    while (leaf) {
        values.push(leaf.value)
        leaf = leaf.parent
    }

    return values
}

// Поиск в ширину при помощи рекурсии
const bfsFindTargetReq = (startNode, targetValueCalculated) => {
    if (!startNode)
        return

    if (startNode.isLeaf && startNode.value === targetValueCalculated)
        return startNode

    return bfsFindTargetReq(startNode.left, targetValueCalculated - startNode.value) || bfsFindTargetReq(startNode.right, targetValueCalculated - startNode.value)
}

// Поиск в ширину без рекрусии. 
const bfsFindTarget = (startNode, targetValue) => {
    if (!startNode)
        return

    // используем очередь. Для поиска в глубину DFS, используем стек.
    const nodes = [startNode], values = [startNode.value] 
    while (nodes.length) {
        const currentNode = nodes.pop()
        const currentValue = values.pop()

        if (currentNode.isLeaf && currentValue === targetValue)
            return currentNode

        if (currentNode.left)
            nodes.push(currentNode.left), values.push(currentValue + currentNode.left.value)

        if (currentNode.right)
            nodes.push(currentNode.right), values.push(currentValue + currentNode.right.value)
    }
}


[
    18, 17, 26, 22, 27
].forEach((targetVal) => {
    const bt = backTrack(bfsFindTargetReq(TREE, targetVal))
    const bt2 = backTrack(bfsFindTarget(TREE, targetVal))
    console.log(targetVal, ':---', bt, bt2, '=', bt.reduce((prev, curr) => prev + curr, 0))
})
