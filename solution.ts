function formatValue(element: number | string | boolean): number | string | boolean {
    if (typeof (element) === 'string') {
        return element.toUpperCase();
    }
    else if (typeof (element) === 'number') {
        return element * 10;
    }
    else if (typeof (element) === 'boolean') {
        return !element;
    }
    else return 0;
};

function getLength(element: string | object): number {
    if (typeof (element) === 'string') {
        return element.length;
    }
    else if (Array.isArray(element)) {
        return element.length;
    }
    else return 0;
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

interface elementType {
    title: string;
    rating: number;
}

function filterByRating(elements: elementType[]): elementType[] {
    return elements.filter(i => i.rating >= 4)
}

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive === true);
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
function printBookDetails(element: Book): void {
    console.log(`Title: ${element.title}, Author: ${element.author}, Published: ${element.publishedYear}, Available: ${element.isAvailable ? 'Yes' : 'No'}`);
}


function getUniqueValues<T>(arr1: T[], arr2: T[]): T[] {
    const unique: T[] = [];
    function checkRepeat(value: T): boolean {
        for (const i of unique) {
            if (i === value) return true;
        }
        return false;
    }
    for (const item of arr1) {
        if (!checkRepeat(item)) unique[unique.length] = item;

    }
    for (const item of arr2) {
        if (!checkRepeat(item)) unique[unique.length] = item;

    }
    return unique;
}

interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(element: Product[]): number {
    if (element.length === 0) return 0;
    const ans = element.reduce((total, i) => {
        const sum = i.price * i.quantity;
        const discount = (i.discount === undefined) ? 0 : (sum * i.discount) / 100;
        return total + sum - discount;
    }, 0)

    return ans;
}

