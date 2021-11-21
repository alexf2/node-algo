/*
    Объединить N отсортированных по возрастанию смассивов так, чтобы получился массив, упорядоченный по возрастанию.
*/

class ArrayNode {
    constructor(array) {
        this.array = array;
        this.index = 0;
        this.end = !array?.length;
    }

    peek() {
        return this.end ? null : this.array[this.index];
    }

    pop() {
        if (this.end)
            return null;
        this.end = this.index >= this.array.length - 1;
        return this.array[this.index++];
    }

    get finished() {
        return this.end;
    }
}

export const mergeNArrays = (...arr) => {
    if (!arr.length) {
        return [];
    }

    const size = arr.reduce((prev, curr) => prev + (curr?.length || 0), 0);
    const nodes = arr.map(it => new ArrayNode(it));
    const result = new Array(size);
    let k = 0;

    while (true) {
        let pickedNode;
        for (const node of nodes) {
            if (!pickedNode && !node.finished) {
                pickedNode = node;
                continue;
            }
            if (pickedNode && !node.finished && pickedNode.peek() > node.peek())
                pickedNode = node;
        }
        if (!pickedNode)
            break;
        result[k++] = pickedNode.pop();
    }

    return result;
}
