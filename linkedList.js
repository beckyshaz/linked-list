
class Node {
    constructor(value=null) {
        this.value = value;
        this.nextNode = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //append(value) adds a new node containing value to the end of the list.

    append(value) {
        const newNode = new Node(value);

        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.nextNode = newNode;
        this.tail = newNode;
    }

    //prepend(value) adds a new node containing value to the start of the list.
    prepend(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            let temp = this.head;
            this.head = newNode;
            newNode.next = temp;


        }
    }


    //size() returns the total number of nodes in the list.
    size() {

        let count = 0;
        //const list = new LinkedList();
        if (this.head === null && this.tail === null) {
            return 0;
        }else {
            let  temp = this.head;

            while(temp !== null) {
                count += 1;

                temp = temp.nextNode;

            }
            return count;

        }

    }

    //head() should return the value of the first node in the list.
    // If the list is empty, it should return undefined

    getHeadValue() {
        if (this.head === null) {
            return;
        }

        return this.head.value;
    }

    //tail() should return the value of the final node in the list.
    // If the list is empty, it should return undefined
    
    getTailValue() {
        if (this.head === null) {
            return;
        }

        let current = this.head;

        while(current.nextNode !== null) {
            current = current.nextNode;

        }

        return current.value;
    }
}


const list = new LinkedList();
console.log(list);


//const firstNode = new Node(10);

//const secondNode = new Node(30);

list.append(30);
list.append(29);
list.append(40);
list.append(11);
list.append(50);

//list.prepend(50);

console.log(list);

console.log(list.size());

const newList = new LinkedList();
console.log(list.getTailValue());