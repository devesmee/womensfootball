import { StyleSheet } from "react-native";

export const sharedStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#2E1B58',
    },
    container: {
      backgroundColor: '#2E1B58',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loadingSpinner: {
        backgroundColor: '#73EDD8'
    },
    defaultText: {
        fontSize: 16,
        color: '#FFFFFF'
    },
    titleText: {
        fontSize: 26,
        color: '#FFFFFF'
    }
});