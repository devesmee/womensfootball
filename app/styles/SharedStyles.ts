import { StyleSheet } from "react-native";

export const sharedStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#190D3B',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20
    },
    loadingSpinner: {
        backgroundColor: '#190D3B'
    },
    defaultText: {
        fontSize: 16,
        color: '#FFFFFF'
    },
    titleText: {
        fontSize: 26,
        color: '#FFFFFF'
    },
    flatList: {
        gap: 20
    }
});