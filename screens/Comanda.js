import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import Input from "../components/input";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Comanda({navigation}){
    const {username} = useContext(AuthContext)

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/home.jpg')} />
            <View>
                <Text>Olá,{username}</Text>                
 
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
    image: {
        height: 200,
        width: '100%',
        position: 'absolute',
        top: 0,
      }
})