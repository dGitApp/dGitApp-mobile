import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },

    image: {
        backgroundColor: 'gray',
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 10,
    },

    badgeContainer: {
        backgroundColor: '#3872E9',
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        position: 'absolute',
        left: 45,
        top: 10,
    },

    badgeText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 12,
    },

    rightContainer: {
        justifyContent: 'center',
        flex: 1,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    text: {
        color: 'grey',
    },

    name: {
        fontWeight: 'bold',
        fontSize: 18,
        flex: 1,
        marginBottom: 3,
    },
    time: {
    },
    status: {
        fontSize: 12,
        flex: 1,
        marginBottom: 3,
    }
});

export default styles;