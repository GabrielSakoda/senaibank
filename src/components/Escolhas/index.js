import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import {AntDesign} from '@expo/vector-icons'

export default function Escolhas(){
    return (
    <ScrollView style={StyleSheet.container} horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.botaoescolha}>
            <View style={styles.areabotao}>
                <AntDesign name="addfolder" size={50} color="#000" />
            </View>
                 <Text style={styles.designbotao}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoescolha}>
            <View style={styles.areabotao}>
                <AntDesign name="tagso" size={50} color="#000" />
            </View>
                 <Text style={styles.designbotao}>Gastos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoescolha}>
            <View style={styles.areabotao}>
                <AntDesign name="creditcard" size={50} color="#000" />
            </View>
                 <Text style={styles.designbotao}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoescolha}>
            <View style={styles.areabotao}>
                <AntDesign name="barcode" size={50} color="#000" />
            </View>
                 <Text style={styles.designbotao}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoescolha}>
            <View style={styles.areabotao}>
                <AntDesign name="setting" size={50} color="#000" />
            </View>
                 <Text style={styles.designbotao}>Configuração</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoescolha}>
            <View style={styles.areabotao}>
                <AntDesign name="setting" size={50} color="#000" />
            </View>
                 <Text style={styles.designbotao}>Teste</Text>
        </TouchableOpacity>
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        maxHeight:84,
        marginBottom:14,
        margintop:18,
        paddingEnd:14,
        paddingStart:14,
    },
    botaoescolha:{
        alignItems:'center',
        marginRight:32,
    },
    areabotao:{
        backgroundColor: '#ecf0f1',
        height:60,
        width:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems: 'center',
    },
    designbotao:{
        marginTop:4,
        textAlign:'center',
        fontWeight:'bold',
    },
})