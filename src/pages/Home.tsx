import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, FlatList } from 'react-native';
import { Button } from '../components/Button';
import { ObjectCard } from '../components/ObjectCard';

interface ObjectData{
    id: string;
    name: string;
    op?: string;
}

export function Home(){
    const [newObject, setNewObject] = useState('');
    const [myObjects, setMyObjects] = useState<ObjectData[]>([]);
    const [greeting, setGreeting] = useState('');

    function handleAddNewObject(){
        const data = {
            id: String(new Date().getTime()),
            name: newObject
        }

        setMyObjects(oldState => [... oldState, data]);
    }

    function handleRemoveObject(id: string){
        setMyObjects(oldState => oldState.filter(
            object => object.id !== id
        ));
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if(currentHour < 12){
            setGreeting('Bom dia! Faça bom proveito do sistema.');
        }
        else if(currentHour >= 12 && currentHour < 18){
            setGreeting('Boa tarde! Faça bom proveito do sistema.');
        }else{
            setGreeting('Boa noite! Faça bom proveito do sistema.');
        }
    }, [])

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Seja bem-Vindo, caro cliente!</Text>

        <Text style={styles.greetings}>
           {greeting}
        </Text>

        <TextInput
         style={styles.input}
         placeholder="Novo Item"
         placeholderTextColor="#999"
         onChangeText={setNewObject}
        />

        <Button
         title="Adicionar à lista"
         onPress={handleAddNewObject}
         >
        </Button>

        <Text style={[ styles.title, { marginVertical: 25 }]}>
            Minha Lista
        </Text>

        <FlatList
            data={myObjects}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <ObjectCard 
                object={item.name}
                onPress={() => handleRemoveObject(item.id)}
                >
                </ObjectCard>
            )}>
        </FlatList>

      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS == 'ios' ? 15 : 12,
        marginTop: 30,
        borderRadius: 7,
    },
    greetings: {
        color: '#fff',
    }
});