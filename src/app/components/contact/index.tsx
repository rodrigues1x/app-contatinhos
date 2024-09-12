import { Text, TouchableOpacity } from "react-native"
import { styles } from './styles'
import { Avatar } from '../avatar'

export function Contact(){
    return <TouchableOpacity style={styles.container}
    >
        <Avatar name="Pedroso" image={require("@/assets/avatar.png")}/>
        <Text style={styles.name}>Pedroso</Text>
    </TouchableOpacity>
    
}