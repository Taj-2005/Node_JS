const API = "https://school-of-ai-backend.vercel.app/";
const controller1 = new AbortController();
const signal1 = controller1.signal;

const controller2 = new AbortController();
const signal2 = controller2.signal;

async function fetchData() {
    try{
        const response = await fetch(API, { signal1, signal2 });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data)
    }catch(error){
        console.log("Error fetching data:", error);
    }
}

setTimeout(() => {
    controller1.abort();
    console.log("Request aborted due to timeout at 6 secs");
},6000);

setTimeout(() => {
    controller2.abort();
    console.log("Request aborted due to timeout at 4 secs");
}, 4000)

fetchData()