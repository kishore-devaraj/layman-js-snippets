/**
 * This file explains the basics of the event loop architecture in nodejs (V8 engine)
 * The Event Loop architecture has four main things,
 * 1. Call Stack
 * 2. Node API
 * 3. Callback Queue
 * 4. Event Loop
 */

 /** 
  * Let take the following example to see how all the components are 
  * working together
  */

  console.log(`Starting the app`)

  setTimeout(() => {
    console.log(`First Timeout`)
  }, 2000)

  setTimeout(() => {
    console.log(`Second Timeout`)
  })

  console.log(`Stopping the app`)

  /**
   * Lets checkout what happens in this code, one by one
   * 1. First the when we run this program, the main is called so it's added to the top of the stack.
   * 2. Then the console.log statement is added and executed and then removed.
   * 3. setTimeout is node api, so we will add it to the top of the stack and then event listener 
   *    is added in the Node API and it's removed from the stack. 
   *    It will wait around 2 seconds, before executing the callstack
   * 4. Again one more setTimeout is there, the same process will allow, but this time
   *    the timeinterval is around 0 seconds, so the callback is called after 0 seconds
   * 5. Once the callback is called for the second setTimeout, it will be added to the callback Queue
   * 6. The Queue will start to execute the callback only when there is no element in the stack
   *    (Here we still have our main function in the stack, that means the program is not terminated yet)
   * 7. The last console.log from the program is added in the stack and got executed and removed from the stack
   * 8. Now the stack is empty, so the queue will process the callback one by one
   * 9. The first setTimeout is executed after 2 seconds, and callback is added the callback Queue
   * 10. Since we have no elements in the stack, the callback is added to the stack and executed.
   */

   /** 
    * Important Note:
    * 1. Whenever we call the function we add it to the stack
    * 2. Whenever we return from that function we remove it from the stack.
    * 3. When we there is function expression, it will add it to the stack, but
    *    the actual execution of the function code happens only when the variable is called
    */

    