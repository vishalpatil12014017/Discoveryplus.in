import axios from 'axios';

const Mockdata = axios.create({
    baseURL: "https://discoveryplusserver.onrender.com"
});

const fetchDataWithTimeout = (promise, timeout) => {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timed out")), timeout)
        )
    ]);
};

// Use named exports
export { Mockdata as Dbdata, fetchDataWithTimeout };