import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { LoggedIn } from "./components/state/Loggedin";
import { Oscar } from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
// import { User } from "./components/state/User";
// import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Counter } from "./class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restrictions/RestrictionNumber";
import { Toast } from "./components/templateLiterals/Toast";
import { CustomButton } from "./components/html/Button";

function App() {
  const fullName = {
    first: "Ahmed",
    last: "Ail",
  };
  return (
    <div className="App">
      {/* <Greet name="mohamed" messageCount={3} />
      <Person name={fullName} />
      <PersonList
        names={[
          { first: "mohamed", last: "ali" },
          { first: "mohamed", last: "ali" },
        ]}
      /> */}
      {/* <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to mohamed ali</Heading>
      </Oscar> */}
      {/* <Button
        handleClick={(event, id) => console.log("button clicked", event, id)}
      />
      <Input value="hello" handleChange={(event) => console.log(event )} /> */}

      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn /> */}
      {/* <User /> */}
      {/* <Counter /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <Counter message="the count is" /> */}
      {/* <Private isLoggedIn={false} component={Profile} /> */}
      {/* <List
        items={[1, "palastine", "Egypt"]}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[
          { first: "mohamed", last: "ali" },
          { first: "ahmed", last: "ali" },
          { first: "mariem", last: "ali" },
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* this makes non sence, so we should add some restrictions */}
      {/* <RandomNumber value={10} isPositive isNegative isZero/> */}

      {/* <RandomNumber value={10} isPositive /> */}

      {/* <Toast position="center" /> */}

      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        click here
      </CustomButton>
    </div>
  );
}

export default App;
