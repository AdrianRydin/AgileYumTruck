
document.addEventListener('DOMContentLoaded', () => {

    function createRandomString(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    
      }
    
      const refrenceNumber = createRandomString(10)    
      let referenceNumberRef = document.getElementById('referenceNumber');
      referenceNumberRef.textContent = "#" + refrenceNumber;



    //   let orders = [
    //     {
    //         Name: "Karlstad",
    //         Price: 59,
    //         quantity: 2,
    //     },
    //     {
    //         Name: "Hej",
    //         Price: 250,
    //         quantity: 20, 
    //     },
    //     {
    //         refrenceNumber: refrenceNumber
    //     }
    //   ]
    
    
      

})









