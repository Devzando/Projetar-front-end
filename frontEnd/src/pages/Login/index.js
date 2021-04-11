import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, ImageBackground, Button, } from 'react-native';

import styles from './styles';


export default function Login() {
    return (
        <View style={styles.fundo}>
            <ImageBackground source={require('../../assets/fundo.png')} style={styles.imgfundo}>
                <KeyboardAvoidingView style={styles.container}>
                
                    <View style={styles.logo}>
                        <Image />
                    </View>

                    <View style={styles.touchs}>

                        <View style={styles.touche}>
                            <Text style={styles.txtlogin}>Login</Text>
                        </View>

                        <TouchableOpacity style={styles.touche}>
                            <Text style={styles.txtcadastrar}>Cadastrar-se</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.containerinputs}>
                        <View style={styles.inputs}>
                            <Feather name="user" size={30} color="#757575" />
                            <TextInput style={styles.ipts} placeholder="Usuário" autoCorrect={false} onChangeText={() => {}} />
                        </View>

                        <View style={styles.inputs}>
                            <Feather name="lock" size={30} color="#757575" />
                            <TextInput style={styles.ipts} placeholder="Senha" autoCorrect={false} onChangeText={() => {}} />                        
                        </View>

                        <View style={styles.containeresqueceu}>
                            <TouchableOpacity>
                                <Text style={styles.txtesqueceu}>Esqueceu a senha?</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerbotão}>
                            <Button title="Entrar" style={styles.botão} color = '#F57C00' />
                        </View>
                    </View>

                    <View>
                        <Image />
                    </View>

                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
}
