import { StyleSheet } from "react-native";

export const sharedStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#190D3B',
    },
    container: {
      flex: 1,
      backgroundColor: '#190D3B',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20
    },
    loadingSpinner: {
        backgroundColor: '#FFFFFF'
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
        gap: 20,
    }
});