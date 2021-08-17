import React, { Component } from "react";

import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Button,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Badge from "components/Badge";
import Separator from "components/Separator";

function Notes({ route }) {
  const userData = route.params.userData;
  const [noteState, setNoteState] = React.useState({ notes: [], note: "" });

  const inputChange = (text) => {
    setNoteState({ ...noteState, note: text });
  };

  const submit = () => {
    setNoteState({
      ...noteState,
      notes: noteState.notes.concat(noteState.note),
    });
  };
  return (



    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1}}
        keyboardVerticalOffset={60}
        behavior="padding"
      >
      <Badge
        userInfo={{
          avatar_url: userData.avatar_url,
          name: userData.name,
          login: userData.login,
        }}
      />



        <ScrollView>
          {noteState.notes.map((item, index) => {
            return (
              <View style={styles.rowContainer} key={index}>
                <Text>{item}</Text>

                <View>
                  <Separator />
                </View>
              </View>
            );
          })}
        </ScrollView>



        <View style={styles.footerContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="New Note"
            onChangeText={(text) => inputChange(text)}
          />
          
          <View style={styles.button}>
            <Button
              style={styles.buttonText}
              title="Submit"
              onPress={() => submit()}
            />
          </View>
        </View>

</KeyboardAvoidingView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  button: {
    height: 60,
    backgroundColor: "#48BBEC",
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: "#111",
    flex: 10,
  },
  rowContainer: {
    padding: 10,
  },
  footerContainer: {
    backgroundColor: "#E3E3E3",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Notes;
