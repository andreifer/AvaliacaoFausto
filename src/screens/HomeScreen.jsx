import { View } from "react-native-web";
import { Button, Paragraph, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";

export function HomeScreen({ navigation }) {
  const [nome, setNome] = useState();
  const [Telefone, setTelefone] = useState();
  const [Email, setEmail] = useState();

  return (
    <View style={styles.container}>
      <Paragraph style={styles.paragrafo}>Formulário</Paragraph>
      <Text>Olá {nome}</Text>
      <TextInput label="Nome" value={nome} onChangeText={setNome} />
      <Text>Telefone</Text>
      <TextInput
        label="Telefone"
        value={Telefone}
        onChangeText={setTelefone}
        keyboardType="numeric"
      />
      <Text>Email</Text>
      <TextInput
        label="E-mail"
        value={Email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button
        style={styles.botao}
        title="Concluir"
        onPress={() => navigation.navigate("Concluir")}>Concluir</Button>
    </View>
  );
}
