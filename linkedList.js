
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
        

       if (this.tail === null) {
            return;
       }
       return this.tail.value;
    }

    //at(index) should return the value of the node at the given index.
    // If there’s no node at the given index, it should return undefined.

    at(index) {
        if (this.head === null || index < 0) {
            return;
        }

        let i = 0;

        let current = this.head;

        while (i <= index && current != null) {
            if (i === index) {
                return current.value;
            }

            current = current.nextNode;
            i++;

            
        }

    }

    //pop() should remove the head node from the list and return its value.
    // If it’s used on an empty list, it should just return undefined.

    pop() {
        if (this.head === null) {
            return;
        }

        let temp = this.head;
        if (temp.nextNode === null) {
            this.head = null;
            this.tail = null;
            return temp.value;

        }else {
            this.head = temp.nextNode;
            return temp.value;
        }
    }

   // contains(value) returns true if the passed in value is in the list and otherwise returns false.

   contains(value) {

    if (this.head === null) {
        return false;
    }

    let current = this.head;

    while (current !== null) {
        if (current.value === value) {
            return true;
        }
        current = current.nextNode;
    }
    return false;

   }

   //findIndex(value) returns the index of the node containing the given value.
   // If the value can’t be found in the list, it should return -1. 
   // If more than one node has a value matching the given value,
   // it should return the index of the first node with the matching value.

   findIndex(value) {
    if (this.head === null) {
        return -1;
    }

    let i = 0;

    let current = this.head;

    while(current !== null) {

        if(value === current.value) {
            return i;
        }
        current = current.nextNode;
        i++;
    }
    return -1;

   }

   //toString() represents your LinkedList objects as strings, so you can print them out and preview them in the console.
   // If the list is empty, it should return an empty string.
   // The format should be: ( value ) -> ( value ) -> ( value ) -> null.

   toString() {
    if (this.head === null) {
        return "";
    }

    let result = "";
    let current = this.head;
    while(current !== null) {

        result += `( ${current.value} )`;

        if (current.nextNode) {
            result += " -> ";
        }

        current = current.nextNode;
       
    }
    result += " null";
    return result;
   }

   //insertAt(index, ...values) should insert new nodes with the given values at the given index.

   insertAt(index, ...values) {
    if (this.head === null && index !== 0) {
        throw  new RangeError("Index " + index + "out of bounds for size" + listSize);
    }

    let listSize = this.size();

    if (index < 0 || index > listSize) {
        throw  new RangeError("Index " + index + "out of bounds for size" + listSize);
    }

    const  newValues = [...values];

    //if (current === tail)

    if (index === 0) {
        for (let i = newValues.length - 1; i >= 0; i--) {
            this.prepend(newValues[i]);
        }
        return;
            
    }

    if (index === listSize - 1) {
        values.forEach((value) => {
            this.append(value);
        })
    }

    let current = this.head ;

    let i = 0;

    while(current !== null && i < index - 1) {
        current = current.nextNode;
        i++;
    }

    // 10 -> 20-> 30-> 40
    let nextNode = current.nextNode;
    
    newValues.forEach((value) => {
        const newNode = new Node(value);
        current.nextNode = newNode;
        current = newNode;
       
    })

    current.nextNode = nextNode;
}

//removeAt(index) that removes the node at the given index.
// If the given index is out of bounds
// (below 0 or greater than or equal to the list’s size), throw a RangeError

removeAt(index) {

    const listSize = this.size();
    if (this.head === null && index >= 0) {
        throw new RangeError("cannot remove node of " + index + "on an empty list");
    }

    if (index < 0 || index >= listSize) {
        throw new RangeError("the index " + index + "is out of bounds for" + listSize)
    }



    if (listSize === 1) {
        this.head = null;
        this.tail = null;
        return;
    }

    if (index === 0) {
       this.head = this.head.nextNode;
       if (this.head === null) {
            this.tail = null;
      }
      return;
    }

    let i = 0;

    let current = this.head;

    while (current !== null && i < index - 1) {
        current = current.nextNode;
        i++;
    }



    // 30 -> 40-> 50 -> 60 -> 70 -> null

    current.nextNode = current.nextNode.nextNode;

    if (current.nextNode === null) {
        this.tail = current;
    }




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
newList.append(5);
console.log(newList.getTailValue());
console.log(`index value is ${list.at(0)}`);

console.log(`poped value ${newList.pop()}`);
//console.log(newList.getTailValue());

const anotherList = new LinkedList();
console.log(anotherList.contains(0));

console.log(list.findIndex(30));

console.log(list.toString());
list.removeAt(0);
console.log(list.toString());

