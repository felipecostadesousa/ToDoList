import { View, Image, TextInput, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { Task } from '../../components/Task';

export function Todo() {

  const [createdTasks, setCreatedTasks] = useState<string[]>([]);
  const [doneTasks, setDoneTasks] = useState<number>(0);
  const [taskName, setTaskName] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  function handleTaskAdd(){
    if(createdTasks.includes(taskName)){
      return Alert.alert("Tarefa existente","Já existe essa tarefa na lista.");
    }
    if(taskName.trim().length === 0){
      return Alert.alert("Tarefa vazia", "Não é possível adicionar uma tarefa vazia na lista.")
    }
    setCreatedTasks(prevState => [...prevState, taskName]);
    setTaskName("");
  }

  function handleTaskRemove(task:string, isTaskDone: boolean){
    Alert.alert(
      "Remover", 
      `Remover a tarefa ${task} da lista?`, 
      [
        {
          text: "Sim",
          onPress: () => {
            if(isTaskDone){
              decreaseDoneTasks();
            }
            setCreatedTasks(prevState => prevState.filter(tarefa => tarefa !== task))
          }, 
        },
        {text: "Não", style: "cancel"},
      ]
    );
  }

  function increaseDoneTasks(){
    setDoneTasks(prevState => prevState + 1);
  }

  function decreaseDoneTasks(){
    setDoneTasks(prevState => (prevState > 0 ? prevState - 1 : 0));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../../assets/logo.png")}/>
        </View>
        <View style={styles.form}>
          <TextInput 
            style={[styles.input, isFocused && styles.inputFocused]}
            placeholder="Adicione uma nova tarefa"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholderTextColor="#808080"
            onChangeText={setTaskName}
            value={taskName}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Image source={require("../../assets/plus.png")}/>
          </TouchableOpacity>
        </View>
        <View style={styles.task}>
          <View style={styles.info}>
            <View style={styles.created}>
              <Text style={styles.createdText}>Criadas</Text>
              <View style={styles.counter}>
                <Text style={styles.counterText}>{createdTasks.length}</Text>
              </View>
            </View>
            <View style={styles.done}>
              <Text style={styles.doneText}>Concluídas</Text>
              <View style={styles.counter}>
                <Text style={styles.counterText}>{doneTasks}</Text>
              </View>
            </View>
          </View>
        </View>
        <FlatList
            style={styles.flatList}
            data={createdTasks}
            keyExtractor={(item) => item}
            renderItem={({item}) => (
              <Task 
                key={item} 
                task={item} 
                onIncrease={increaseDoneTasks}
                onDecrease={decreaseDoneTasks}
                onRemove={(isTaskDone) => handleTaskRemove(item, isTaskDone)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.listEmpty}>
                <Image style={styles.listEmptyImage} source={require("../../assets/clipboard.png")}/>
                <Text style={styles.listEmptyFirstText}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.listEmptySecondText}>Crie tarefas e organize seus itens a fazer</Text>
              </View>
            )}
          />
      </View>
    </TouchableWithoutFeedback>
  );
}