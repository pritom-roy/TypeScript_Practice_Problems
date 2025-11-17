keyof এর ব্যবহার:

যেকোন object এর key গুলকে union টাইপ হিসেবে ব্যবহার করতে হলে keyof ব্যবহার করতে হয় । 

উদাহরণ - 
type User = {
  name: string;
  age: number;
  address: string;
};

type UserKey = keyof User; // "name" | "age" | "address"


---


any, unknown , never এর বাবহার:

any : যদি আমরা জানি নাহ কোন ধরনের টাইপ এখানে দরকার হবে অথবা যদি টাইপ কোন প্রভাব না ফেলে তাহলে আমরা any টাইপ হিসাবে ব্যবহার করতে পারি । এক কথায় টাইপ চেক করাই বন্ধ করে দেয়। 

উদাহরণ - 
function greeting(element: any): void {
    console.log('hello')
}

unknown : any  এর মত যে কোন টাইপ রাখা যায় কিন্তু ব্যবহার করার আগে টাইপ চেক করে নিতে হয়। type-safe version of any

উদাহরণ -
value : unknown = "hello";

if(value === 'string') console.log('hello');

never : never এমন একটি type যা কখনো কোনো value return করে না। এটি সাধারণত error throw করার ক্ষেত্রে ব্যবহৃত হয়।

উদাহরণ -

const throwError = (msg: string): never => {
    throw new Error(msg);
};

throwError('This is an error')


---


Union and Intersection typer এর ব্যবহার:

Union (|) : Union type এর মাধ্যমে একটি variable একাধিক type এর মধ্যে যেকোনো একটি হতে পারে।

উদাহরণ -

function greeting(element : string | number) : string{
    return console.log(`hello ${element}`);
}
এই ফাংশন এ string অথবা number ব্যবহার করা যাবে ।

Intersection (&) : Intersection type একাধিক type কে একসাথে combine করে। 

উদাহরণ -

type User = {
  name: string;
  age: number;
};

type role = {
  position : string;
};

type UserWithRole = User & role;


