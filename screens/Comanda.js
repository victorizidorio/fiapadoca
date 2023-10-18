import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import Input from "../components/input";

export default function Comanda({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Text>Olá, Atendente</Text>                
            </View>

            <View>
                <Input/>
                <Button onPress={() => navigation.navigate("Produtos")}>Confirmar</Button>
            </View>

            <Text>
                Digite o código da comanda 
                para iniciar uma cobrança
            </Text>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFBFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
})