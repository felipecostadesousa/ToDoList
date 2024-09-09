import { StatusBar } from "react-native";
import { Fragment } from "react";
import { Todo } from "./src/screens/Todo";

export default function App(){
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Todo/>
    </Fragment>
  );
}