import {StyleSheet, Dimensions} from "react-native";
import {theme} from './constants';
//const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        //backgroundColor: '#2c2c2e',
        //backgroundColor: '#19191a',
        //backgroundColor: '#030303',
        backgroundColor: theme.colors.black
    },
    mainApp: {
        marginTop:theme.sizes.base * 2,
    },
    //light blue #D7DEDC
    //dynato blue #19647E
    //light green #28AFB0
    //dust storm #DDCECD
    //https://coolors.co/15191c-1c1c1e-19647e-28afb0-ddcecd
    //tea rose #F4CBC6
    text: {
        color: '#fff',
    },
    marginHeader: {
        marginTop: theme.sizes.base * 2,
    },
   /* header: {
        height: theme.sizes.base * 4,
        width: width - theme.sizes.base * 2,
    },*/
    orButton: {
        color: '#fff',
        textAlign:'center',
        marginVertical: 10
    },
    textInput: {
        color: '#fff',
        width: '50%',
        margin: 10,
        paddingVertical: 15,
        fontSize: 16,
        borderColor: '#DDCECD',
        borderBottomWidth: 1,
        textAlign: 'left',
    },
    tabBarStyling: {
        backgroundColor: '#1c1c1e',
    },
    tabBarIcons: {
        color: '#ccc',
        fontSize: 16,
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 3,
        width: '50%'
    },
    facebookButton: {
        height: theme.sizes.base * 3,
        justifyContent: 'center',
    },
    postPhoto: {
        width: 250,
        height: 250,
    },
    login: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.colors.black
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent,
    },
    avatar: {
        position: 'absolute',
        top: theme.sizes.base,
        left: theme.sizes.base,
        width: theme.sizes.base * 2,
        height: theme.sizes.base * 2,
        borderRadius: theme.sizes.radius,
    },
    shadow: {
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
});
