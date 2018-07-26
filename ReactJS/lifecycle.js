/********
 * Component Lifecyle methods in React 16.3 and 16.4
 * Everything mentioned is in the order of processing
 ********/

/****** Mounting Phase ********/
constructor(){
  // Declare state, pass down the props, bind the methods to the class
}

getDerivedStateFromProps(){
  // New Lifecycle for new props, setState and forceUpdate
}

render(){
  // Actual render method. <Must be included in the class component>
}

componentDidMount(){
  // Executed after Mounting
}





/****** Updating Phase ********/
getDerivedStateFromProps(){
  // New Lifecycle for new props, setState and forceUpdate
}

shouldComponentUpdate(){
  // Use this for performance improvement
}

render(){
  // Actual render method. <Must be included in the class component>
}

getSnapshotBeforeUpdate(){
  // New Lifecyle method. Will get the snapshot before actually committing to the DOM
}

componentDidUpdate(){
  // Called everytime after updating. Process side effects here
}




/****** Unmounting Phase *******/
componentWillUnMount(){
  // Remove event listeners and other things after component has been unmounted
}