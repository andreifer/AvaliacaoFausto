import { View } from "react-native-web";
import { Paragraph } from "react-native-paper";
import { styles } from "../config/styles";

export const ConfigScreen = () => {
    return (
        <View style={styles.container}>
            <Paragraph style={styles.paragrafo}>Formulário concluido!</Paragraph>
        </View>
    )
}