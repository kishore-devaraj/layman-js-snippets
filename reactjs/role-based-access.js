/**
 * Making a Component private to one set of users and making it
 * invisible from the other set of people.
 * 
 * Here we used one wrapper component which render the component on the basis 
 * of satisfied condition. This is code is pseudo/example type, not intended for 
 * developing and production use.
 */


const RoleBasedComponent = ({role, supportedRoles, children}) => {
  return (
    <div>{supportedRoles.indexOf(role) > -1 ? children : '' }</div>  
  )
}

const App = () => {
  return (
    <div>
      <ChildOne />
      <RoleBasedComponent role={"admin"} supportedRoles={["admin","supportRole","user"]}>
        <ChildTwo />
      </RoleBasedComponent>
      <ChildThird />
    </div>
  )
}