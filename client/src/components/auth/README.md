-- How Redux Works

1. We commit an action such as register user

2. In the actions file, we created a action type called TEST_DISPATCH

3. We dispatched that to the reducer and along with the payload which is the userData.

4. Inside the reducer, we manipulated the state to include that new user

5. In component we mapped state to props and set auth as a prop.

6. We grabbed the user from the auth prop e.g const { user } = this.props.auth; and we then render it {user ? user.name : null}. Meaning if user true or exist, we output the user.name else null.
