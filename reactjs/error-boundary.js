import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidCatch(err, info) {
    this.setState({hasError: true})
  }

  render () {
    if(this.state.hasError) {
      return <div> Something went wrong </div>
    }
    return this.props.children
  }
}


<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>


/**
 * Ceveats: 
 * Error boundary won't work for event handlers
 * Error boundary won't work for async code
 * Wont' work for server side rendering
 * If problem with error boundary with itself
 */

 