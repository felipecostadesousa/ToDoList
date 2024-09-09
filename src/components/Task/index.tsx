import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { styles } from "./styles";

type Props = {
  task: string,
  onRemove: (isTaskDone: boolean) => void,
  onIncrease: () => void,
  onDecrease: () => void,
}

export function Task({task, onRemove, onIncrease, onDecrease}:Props){

  const [isDone, setIsDone] = useState<boolean>(false);

  function handleTaskDone(){
    setIsDone(!isDone);
    if(!isDone){
      onIncrease();
    }
    else{
      onDecrease();
    }
  }

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleTaskDone}>
        {isDone ? 
          <Image source={require("../../assets/buttonSelectionPressed.png")}/> 
        : 
          <Image source={require("../../assets/buttonSelectionNotPressed.png")}/>
        }
      </TouchableOpacity>
      {isDone ?
        <Text style={styles.taskDone}>{task}</Text>  
      :
        <Text style={styles.taskNotDone}>{task}</Text>
      }
      <TouchableOpacity style={styles.button} onPress={() => onRemove(isDone)}>
        <Image source={require("../../assets/buttonRemoveNotPressed.png")}/>
      </TouchableOpacity>
    </View>
  )
}