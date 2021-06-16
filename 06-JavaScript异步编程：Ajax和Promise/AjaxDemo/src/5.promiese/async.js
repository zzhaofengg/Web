async function main() {
    // return new Promise((resove, reject) => {
    //     // resove('OK')
    //     reject('false');
    // });
    // return '123';
    // throw 'failed';
    let p = new Promise((resolve, reject) => {
        resolve('error ERROR Error ErrOr success');
    });
    // console.log(p);
    try {
        let res = await p;
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

// let result = main();
// console.log(result);
main();