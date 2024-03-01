import advice from "../Interfaces/interface";
const getData = async () => {
    const promise = await fetch('https://api.adviceslip.com/advice');
    const data: advice = await promise.json();
    return data;
}

export default getData;

