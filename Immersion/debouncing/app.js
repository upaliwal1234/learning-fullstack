// without using debouncing

// let inp = document.querySelector('#inp');

// let callApi = (e) => {
//     console.log('calling api on', e.target.value);
// }

// inp.addEventListener('input', callApi);


//using Debouncing ---------


let inp = document.querySelector('#inp');

let callApi = (e) => {
    console.log('calling api on', e.target.value);
}

// debounce => fn, wait => it should always return a function
let debounce = (fn, wait) => {
    let timerId = null;
    return (e) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(e);
        }, wait);
    }
}

let debouncedValue = debounce(callApi, 2000);

inp.addEventListener('input', debouncedValue);

