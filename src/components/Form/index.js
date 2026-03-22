import { useState } from "react";
import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import ResultGorjeta from "./ResultGorjeta";
import styles from "./style";

export default function Form(){

    const[valorConta, setValorConta] = useState(null);
    const[porcentagem, setPorcentagem] = useState(null);
    const[gorjeta, setGorjeta] = useState(null);

    const[textButton, setTextButton] = useState("Calcular Gorjeta");
    const[messageGorjeta, setMessageGorjeta] = useState("Preencha o valor e a %");

    function calcularGorjeta(){
        let valorC = valorConta.replace(",", ".");
        let porc = porcentagem.replace(",", ".");
        
        let calculo = (parseFloat(valorC) * parseFloat(porc)) / 100;
        return setGorjeta(calculo.toFixed(2));
    }

    function validar(){
        Keyboard.dismiss(); 
        if(valorConta != null && porcentagem != null){
            calcularGorjeta();
            setValorConta(null);
            setPorcentagem(null);
            setMessageGorjeta("Valor da gorjeta (R$):");
            setTextButton("Calcular Novamente");
        } else {
            setGorjeta(null);
            setTextButton("Calcular Gorjeta");
            setMessageGorjeta("Digite o valor da conta e a porcentagem");
        }
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Valor da Conta (R$)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 150.00"
                    keyboardType="numeric"
                    onChangeText={setValorConta}
                    value={valorConta}
                />

                <Text style={styles.formLabel}>Gorjeta (%)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 10"
                    keyboardType="numeric"
                    onChangeText={setPorcentagem}
                    value={porcentagem}
                />

                <TouchableOpacity style={styles.button} onPress={()=>{validar()}}>
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultGorjeta messageResultGorjeta={messageGorjeta} resultGorjeta={gorjeta}/>
        </View>
    );
}