
let ip = null;
let ipLoc = null;


async function fetchLoc(error) {


    const myHeaders = new Headers();
    myHeaders.append("apikey", "a655EUl3uHsXEQNOtKlQBs22tk6Q6dgm");

    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        Vary: "Origin",
        headers: myHeaders
    };
    const request = await fetch("https://api.ipify.org?format=json")
    const jsonResponse = await request.json()
    const responseIp = await jsonResponse.ip
    ip = responseIp;


    await fetch(`https://api.apilayer.com/ip_to_location/${jsonResponse.ip}`, requestOptions)
        .then(response => response.text())

        .then(result => ipLoc = result)

        .catch(error => console.log('error', error));


}
// await fetchLoc();


// export { ip as justip, ipLoc as alllocob }
export { fetchLoc as iii }