'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Platform,
} = React;

module.exports=StyleSheet.create({
    container:{
       
        width: '100%', 
        alignSelf: 'center', 
    
    },
    container2:{
        flex: 1,
        backgroundColor: '#555566'
    },
    EditImage:{
        width: "100%",
        height: 200,
        resizeMode: "contain",
    },
    EditText:{
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    EditButton:{
        alignItems: 'center',
        backgroundColor: '#CCFF90',
        paddingTop: 10,
        paddingBottom: 10, 
        margin: 20,
        borderRadius: 5,
    },
    textInput: {
        height: 30,
        borderWidth: 1,
        borderColor: '#cecece',
        marginBottom: 10,
        marginHorizontal: 10
    },
    content: {
        zIndex: 1
    },
    footerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#555566' 
    },
    imageAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5
    },
    listContainer: {
        marginHorizontal: 10
    },
    text: {
        color: '#fff'
    },
    containerCell: {
        marginBottom: 10
    },
    textTitle: {
        fontSize: 13
    },
    textBy: {
        fontSize: 12
    },
    textMenu: {
        fontSize: 20,
        color: '#fff'
    },
});