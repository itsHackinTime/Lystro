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
      marginHorizontal: 0,
      borderRadius: 10,
      shadowOpacity: 0.2,
      shadowOffset: {width: 5, height: 5},
      minWidth: '90%',
      maxWidth: '90%'
      
    }, 
    title: {
      fontSize: 32,
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight !== undefined ? StatusBar.currentHeight : 0,
    },
    navigator: {
      position: "absolute",
      bottom: 30,
      left: 5,
      right: 5,
      elevation: 0,
      backgroundColor: '#ffffff',
      borderRadius: 15,
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 0, // this is for iphone 13 and 14
      
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
    shadowAdd: {
      shadowColor: '#7f5DF0',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.35,
      shadowRadius: 3,
      elevation: 5,
      borderColor: '#a1d6ff'
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
    stepList: {
      padding: 5,
      marginVertical: 4,
      marginHorizontal: 4,
      borderRadius: 8,
      shadowOpacity: 0.2,
      shadowOffset: {width: 5, height: 5}
    }
})