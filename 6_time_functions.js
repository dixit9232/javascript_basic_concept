// setTimeOut Function
const setTimeOutFunction = () => {
  console.log("Hello world");
};

// Call the function 
const timeOutId =  setTimeout(setTimeOutFunction, 2000);


// setInterVal Function
const setInterValFunction = () => { 
    console.log("Hello world every 1 second");
}

// Call the function
const intervalId = setInterval(setInterValFunction, 1000);

// clearTimeOut function
clearTimeout(timeOutId);

//clear interval function
clearInterval(intervalId);