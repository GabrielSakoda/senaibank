import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movimento from "../../components/Movimento";
import Escolhas from "../../components/Escolhas";
const lista = [
  {
    id: 1,
    label: "Pegorari",
    value: "1.200,00",
    date: "03/04/2024",
    type: 1,
  },
  {
    id: 2,
    label: "Mensalidade SESI",
    value: "400,00",
    date: "05/04/2024",
    type: 1,
  },
  {
    id: 3,
    label: "Salario SENAI",
    value: "7.000,00",
    date: "15/04/2024",
    type: 2,
  },
  {
    id: 4,
    label: "Escolha Filha",
    value: "700,00",
    date: "15/04/2024",
    type: 1,
  },
  {
    id: 5,
    label: "Clientes PIX",
    value: "1.000,00",
    date: "15/04/2024",
    type: 2,
  },
  {
    id: 6,
    label: "Mãe",
    value: "1.000,00",
    date: "15/04/2024",
    type: 2,
  },
  {
    id: 7,
    label: "Pai",
    value: "1.000,00",
    date: "15/04/2024",
    type: 2,
  },
  {
    id: 8,
    label: "Venda Notebook",
    value: "1.000,00",
    date: "15/04/2024",
    type: 1,
  },
  {
    id: 9,
    label: "Campestre",
    value: "170,00",
    date: "15/04/2024",
    type: 2,
  },
  {
    id: 10,
    label: "Energia",
    value: "270,00",
    date: "15/04/2024",
    type: 1,
  },
]
    export default function Home() {
        return (
            <View style="styles.container">
                <Header name="Gabriel Sakoda"/>
                <Balance saldo="10.000,00" gastos="-9.000,00"/>
                <Escolhas/>
                <Text style={styles.title}>Últimas movimentações</Text>
                <FlatList style={styles.list} data={lista} 
                keyExtractor={ (item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={ ({item}) => <Movimento data={item}/>}
                />
            </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fafafa',
        },
        title:{
            fontSize:18,
            fontWeight: 'bold',
            marginLeft: 14,
            marginRight: 14,
            marginTop: 14,
        },
        list:{
            marginStart: 14,
            marginEnd: 14,
        }
    });
