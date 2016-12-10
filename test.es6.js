var p = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Hello, World !') ;
    }, 3000) ;
    setTimeout(() => {
        reject(new Error('Fuuuu')) ; // or throw
    }, 5000) ;
})
.then(
  (result) => {
      console.info(result) ;
  },
  (error) => {
      console.error(error) ;
  }
)
.catch((error) => {
    console.error('@-' + error) ;
}) ;
