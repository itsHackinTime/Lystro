import { StyleSheet, StatusBar, Dimensions } from "react-native";

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

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
    input: {
      backgroundColor: '#ffffff',
      height: 50,
      width: '90%',
      borderWidth: 1,
      padding: 10,
      borderRadius: 8,
      marginVertical: 10
    },
    addContainer: {
      marginTop: 10,
      alignItems: 'center',
    },
    5: {
      backgroundColor: '#ffb3ba'
    },
    4: {
      backgroundColor: '#ffdfba'
    },
    3: {
      backgroundColor: '#ffffba'
    },
    2: {
      backgroundColor: '#baffc9'
    },
    1: {
      backgroundColor: '#bae1ff'
    },
    0: {
      backgroundColor: '#ffffff'
    },
    selectedItem: {
      borderRadius: 8,
      borderWidth: 1,
    }, 
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      minWidth: '90%',
      maxWidth: '90%',
      maxHeight: 40,
      marginHorizontal: 10
    },
})