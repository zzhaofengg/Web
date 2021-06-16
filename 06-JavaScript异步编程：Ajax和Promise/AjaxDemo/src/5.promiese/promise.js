const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise1');
        resolve('promise 1 成功');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise2');
        reject('promise 2失败');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise3');
        resolve('promise 3 成功');
    }, 3000);
});

Promise.race([promise1, promise2, promise3])
    .then((res) => {
        // 第一个完成的任务，如果执行失败，就会走到这里
        // 这里拿到的 res，是第一个成功的 promise 返回的结果，不是数组
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        // 第一个完成的任务，如果执行失败，就会走到这里
        console.log('fail' + err);
    });