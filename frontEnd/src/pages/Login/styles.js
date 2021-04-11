import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    fundo: {
        flex: 1
    },

    imgfundo: {
        flex: 1,
        resizeMode: "cover"
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    txtlogin: {
        color: '#FFFFFF',
        textShadowColor: 'black', 
        textShadowOffset: { width: -2, height: 1 },
        textShadowRadius: 1,
        fontWeight: 'bold',
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F57C00',
        
    },

    txtcadastrar: {
        color: '#4CAF50',
        fontWeight: 'bold',
        fontSize: 15
    },

    touchs: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        marginRight: '40%'
    },

    touche: {
        marginLeft: 15
    },

    containerinputs: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        alignItems: 'center',
        width: '80%'
    },

    inputs: {
        marginTop: 25,
        flexDirection: "row",
        alignItems: 'center'
        
    },

    ipts: {
        fontSize: 15,
        width: '70%',
        borderBottomWidth: 1,
        borderBottomColor: '#757575',
        padding: 1,
        marginLeft: 10,
    },

    containeresqueceu: {
        marginVertical: 10,
        marginLeft: '45%'
    },

    txtesqueceu: {
        color: '#9E9E9E'
    },

    containerbotão: {
        width: 180,
        height: 35,
        overflow: 'hidden',
        borderRadius: 15,
        marginBottom: 30,
        elevation: 5,
        shadowOpacity: 0.5
    }
})