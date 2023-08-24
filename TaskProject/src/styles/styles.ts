import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    one: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    two: {
      fontSize: 26,
      fontWeight: 'bold',
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      shadowOpacity: 0.2,
      shadowOffset: {width: 5, height: 5}
    }, 
    title: {
      fontSize: 32,
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    navigator: {
      position: "absolute",
      bottom: 10,
      left: 5,
      right: 5,
      elevation: 0,
      backgroundColor: '#ffffff',
      borderRadius: 15,
      height: 90,
    },
    shadow: {
      shadowColor: '#7f5DF0',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
})