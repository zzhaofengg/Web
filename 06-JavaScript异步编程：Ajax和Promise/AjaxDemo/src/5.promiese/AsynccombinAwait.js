
async function main() {
    try {
        let data1 = await mineReadFile('./staticPromise.html');
        let data2 = await mineReadFile('./index.html');
        let data3 = await mineReadFile('./promiseChain.html');
        console.log(data1 + data2 + data3);

    } catch (e) {
        console.log(e.code);
    }

}

main();
