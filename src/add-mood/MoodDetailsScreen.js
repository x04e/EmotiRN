import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View, TextInput} from 'react-native';
import Button from './Button';

export default function MoodDetailsScreen({route}) {
    const selectedEmotions = route.params;

    return (
        <ScrollView style={styles.container}>
            {/* <View style={styles.box}>
                {selectedEmotions.length > 0 &&
                    <Text style={styles.textInputLabel}>Selected emotions</Text>
                }
                <View style={styles.emotionPillsContainer}>
                    {selectedEmotions.map((emotion) => {
                        return (
                            <SelectorButton
                                key={emotion.name}
                                name={emotion.name}
                                selectedColor={emotion.group.color}
                                selected={true}
                            />
                        );
                    })}
                </View>
            </View> */}
            <View style={styles.box}>
                <Text style={styles.textInputLabel}>
                    Describe what you're feeling
                </Text>
                <TextInput multiline={true} style={styles.textInputBox} />
            </View>
            <View style={styles.box}>
                <Text style={styles.textInputLabel}>
                    What caused you to feel this way?
                </Text>
                <TextInput multiline={true} style={styles.textInputBox} />
            </View>
            <View style={styles.box}>
                <Text style={styles.textInputLabel}>
                    Do you feel the urge to do, or avoid doing, something
                    because of these feelings?
                </Text>
                <TextInput style={styles.textInputBox} />
            </View>

            <Button style={styles.button} title="Submit" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F5F1'
    },
    emotionPillsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        paddingHorizontal: 20
    },
    textInputLabel: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: '#383636',
        paddingTop: 20,
        paddingBottom: 10
    },
    textInputBox: {
        fontFamily: 'Nunito-Regular',
        color: '#383636',
        height: 130,
        fontSize: 18,
        paddingStart: 8,
        paddingEnd: 5,
        textAlignVertical: 'top',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E6DBDB',
        backgroundColor: 'white'
    },
    button: {
        marginTop: 20
    }
});