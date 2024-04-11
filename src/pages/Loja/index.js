import { View, Text, StyleSheet} from "react-native";
import Header from "../../components/Header";
import Escolhas from "../../components/Escolhas";
export default function Loja(){
    return(
        <View style={styles.container}>
            <Header name="Marcelo Fuentes"/>
            <Escolhas/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center"
    }
})