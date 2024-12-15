export default function withAuth(Component) {
    return function AuthenticatedComponent(props) {
        function isAuthenticated(){
          //returns true or false based on some auth logic
          return true;
        }
  
      if (isAuthenticated()) {
          return <Component {...props}></Component>
        } else {
          return <div> Please login to access the application </div>;
        }
    };
  }