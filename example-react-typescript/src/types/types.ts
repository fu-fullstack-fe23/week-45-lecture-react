export interface TodoType {
    completed : boolean,
    id: number,
    todo: string,
    userId: number
}

export interface TodosResponseType {
    limit: number,
    skip : number,
    todos : TodoType[],
    total :number
}

// interface User {
//       email : string,
//       password : string,
//       phoneNmbr : number
//     }
    
//     interface Teacher extends User {
//       classes : string[]
//     }
    
//     interface Student extends User {
//       courses : string[]
//     }
    
//     const Jesper : Teacher = {
//       email : "hejsan123",
//       password : 'jesperärbäst123',
//       phoneNmbr : 1234,
//       classes : [ 'Fe23', 'Fe24'],
//     }