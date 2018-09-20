import React from 'react'

class Table extends React.Component {
  render () {
    return (
      <table>
        <tr>
          <Column />
        </tr>
      </table>
    )
  }
}

class React extends React.Component {
  render () {
    <React.Fragment>
       <td>Hello</td>
       <td>World</td>
    </React.Fragment>
  }
}


/**
 * Fragments are used to reduce unwanted container componets <div />
 * Short hand <> is not still supported by many other tools
 * Key fragments are also available
 */