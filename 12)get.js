const john = {
    profile: {
        name: { firstName: 'John', lastName: 'Doe' },
        age: 20,
        gender: 'Male',
    },
};

const jane = {
    profile: {
        age: 19,
        gender: 'Female',
    },
};


get(object, path, [defaultValue]);


get(john, 'profile.name.firstName'); // 'John'
get(john, 'profile.gender'); // 'Male'
get(jane, 'profile.name.firstName'); // undefined

// An example where path is provided as an array
get({ a: { b: 2, c: { foo: 2 } } }, ['a', 'c']); // foo: 2,


function get(objectParam, pathParam, defaultValue) {
    const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");
    let index = 0;

    let len = path.length
    let obj = objectParam


    // path.forEach((item)=>{
    //     if(obj != null && index < len){
    //         obj = obj[item]
    //         index++
    //     }
    //  })
    while (obj != null && index < len) {
        obj = obj[String(path[index])];
        index++;
    }

    let value = index && index === len ? obj : undefined
    return value ? value : defaultValue

}