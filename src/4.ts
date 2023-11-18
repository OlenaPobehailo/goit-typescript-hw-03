class Key {
    private signature: number

    constructor() {
        this.signature = Math.random()
    }

    getSignature(): number {
        return this.signature
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = []

    constructor(key: Key) {
        this.key = key;
    }

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
            console.log('The door is open. Welcome home!');
            this.door = false;
        } else {
            console.log('The door is closed');
        }
    }

    abstract openDoor(key: Key): void
}

class MyHouse extends House {

    openDoor(myKey: Key): void {
        if (myKey.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('True key')
        } else {
            console.log('Wrong key')

        }
    }
}


// Сценарій з правильним ключем
console.log('Case with the correct key: ')

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

// Сценарій з неправильним ключем
console.log('Case with the wrong key: ')

const wrongKey = new Key();
const stranger = new Person(wrongKey);

house.openDoor(stranger.getKey());

house.comeIn(stranger);


export { };