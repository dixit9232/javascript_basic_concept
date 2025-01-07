function greet() {
  setTimeout(() => {
    console.log("Function ONE");
    setTimeout(() => {
      console.log("Function TWO");
      setTimeout(() => {
        console.log("Function THREE");
        setTimeout(() => {
          console.log("Function FOUR");
          setTimeout(() => {
            console.log("Function FIVE");
            setTimeout(() => {
              console.log("Function SIX");
              setTimeout(() => {
                console.log("Function SEVEN");
                setTimeout(() => {
                  console.log("Function EIGHT");
                  setTimeout(() => {
                    console.log("Function NINE");
                    setTimeout(() => {
                      console.log("Function TEN");
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

greet();
