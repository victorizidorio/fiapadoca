import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../components/button';
import Input from '../components/input';
import { AuthContext } from '../context/AuthContext';
import { useContext, useState } from 'react';

export default function Login({navigation}) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const {login} = useContext(AuthContext)
  
  async function handleLogin(){
    if (await login({email, senha})){
      navigation.navigate("Comanda")
    }
    else{
      setErro("Usuário ou senha inválidos!")
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/home.jpg')} />
      <Text>Sistema</Text>
      <Text style={styles.title}>Padaria</Text>

      <Input placeholder='E-mail' value={email} onChangeText={setEmail}/>
      <Input placeholder='Senha' secureTextEntry value={senha} onChangeText={setSenha}/>

      <Button onPress={handleLogin}>
        Entrar
      </Button>

      <text>{erro}</text>
      
      <TouchableOpacity >
        <Text>criar conta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#121A2C',
    fontSize: 34,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginTop: 16,
  }, 
  button:{
    backgroundColor: '#121A2C',
    color: '#FFBA26',
    paddingVertical: 8,
    paddingHorizontal: 48,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 16
  },
  image: {
    height: 200,
    width: '100%',
    position: 'absolute',
    top: 0,
  }
});
