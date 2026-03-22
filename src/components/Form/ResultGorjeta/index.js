import { StyleSheet, Text, View } from "react-native";

export default function ResultGorjeta(props) {
    return (
        <View style={styles.resultContext}>
            <Text style={styles.information}>{props.messageResultGorjeta}</Text>
            <Text style={styles.numberGorjeta}>{props.resultGorjeta}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultContext: {
        flex: 1,
        marginTop: 15,
        paddingTop: 15,
        alignItems: "center",
        width: "100%"
    },
    information: {
        fontSize: 18,
        color: "#e67e22",
        fontWeight: "bold"
    },
    numberGorjeta: {
        fontSize: 48,
        color: "#e67e22",
        fontWeight: "bold"
    }
});