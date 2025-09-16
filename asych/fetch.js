const myHeaders = new Headers();
myHeaders.append("access_key", "b4cf58735baebc157e7d24a2b8bd3cc1");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

try {
    const result = await fetch("https://api.exchangeratesapi.io/v1/latest?access_key=b4cf58735baebc157e7d24a2b8bd3cc1&format=1", requestOptions);
    const resultObj = await result.json();
    console.log(JSON.stringify(resultObj, null, 2));
} catch (err) {
    console.error("could not fetch curreny data");
    throw err;
}