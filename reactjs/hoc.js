import React from 'react'

const withStorage = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isLocalStorage: false
      }
      this.isLocalStorageExist = this.isLocalStorageExist.bind(this)
    }

    componentDidMount() {
      this.isLocalStorageExist()
    }

    isLocalStorageExist() {
      let testValue = 'test'
      try {
        localStorage.setItem(testValue, testValue)
        localStorage.removeItem(testValue)
        this.setState({ isLocalStorage: true })
      } catch (e) {
        this.setState({ isLocalStorage: false })
      }
    }


    get(key) {
      return localStorage.getItem(key)
    }

    save(key, value) {
      localStorage.setItem(key, value)
    }

    render() {
      return (
        <WrappedComponent
          get={this.get}
          save={this.save}
        />
      )
    }
  }
}

class UserComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
    this.setName = this.setName.bind(this)
  }

  componentDidMount() {
    if (this.props.get('name')) {
      this.setState({ name })
    }
  }
  setName() {
    this.props.save('name', 'Kishore')
    this.setState({ name: 'Kishore' })
  }

  
  render() {
    if (!this.state.user) {
      this.setName()
      return <div>Loading ...</div>
    }
    return (
      <div>
        <span>this.state.user</span>
      </div>
    )
  }
}

// User Component that has access to internal stor
const UserComponentWithStorage = withStorage(UserComponent)
