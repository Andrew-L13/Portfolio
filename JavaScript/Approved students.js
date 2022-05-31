const students = [
    {
        name: 'Andrew',
        note: 10,
        class: '1B',
    },
    {
        name: 'Lucas',
        note: 5,
        class: '2A',
    },
    {
        name: 'Gomes',
        note: 10,
        class: '1A',
    }
]

function approvedStudens(arr, media){
    let approved = [];

    for(let i= 0; i< arr.length; i++){

        const {note,name} = arr[i];
        if(note>= media){
            approved.push(arr[i].name);
        }
    }

    return approved; 
}

console.log(approvedStudens(students, 6))