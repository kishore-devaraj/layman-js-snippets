/**
 * Context is primarily used when some data needs to be accessible by many components at 
 * different nesting levels. Apply it sparingly because it makes component reuse more difficult.
 * If you only want to avoid passing some props through many levels, 
 * component composition is often a simpler solution than context.
 */

import React from 'react'

const ThemeContext = React.createContext('light')

class App extends React.Component {
  render () {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

class Toolbar extends React.Component {
  render () {
    return (
      <ThemedButton />
    )
  }
}

class ThemedButton extends React.Component {
  render () {
    return (
      <ThemeContext.Consumer>
        {theme => <Button theme={theme} props={...props} />}
      </ThemeContext.Consumer>
    )
  }
}