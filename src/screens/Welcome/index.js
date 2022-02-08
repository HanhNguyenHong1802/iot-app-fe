import { StatusBar } from "expo-status-bar"
import React from "react"
import { Animated, Dimensions, Image, StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { styles } from "../../../globalStyles"
import { bgs, DATA } from "./components/welcomeData"
const { width, height } = Dimensions.get('screen')
const Indicator = ({ scrollX }) => {

    return <View style={{ position: 'absolute', bottom: 10, flexDirection: 'row' }}>
        {DATA.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
            const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.8, 1.4, 0.8],
                extrapolate: 'clamp'
            })
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.6, 0.9, 0.6],
                extrapolate: 'clamp'
            })
            return (
                <Animated.View
                    key={`indicator-${i}`}
                    style={{
                        opacity,
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: '#fff',
                        margin: 10,
                        transform: [{
                            scale
                        }]
                    }}
                />
            )
        })}
    </View>
}

const Backdrop = ({ scrollX }) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, i) => i * width),
        outputRange: bgs.map((bg) => bg)
    })
    return (
        <Animated.View
            style={[StyleSheet.absoluteFillObject,
            {
                backgroundColor,
            }]}
        />
    )
}

const Square = ({ scrollX }) => {
    const YOLO = Animated.modulo
        (Animated.divide(
            Animated.modulo(scrollX, width),
            new Animated.Value(width)
        ), 1)

    const rotate = YOLO.interpolate({
        inputRange: [0, .5, 1],
        outputRange: ['35deg', '0deg', '35deg']
    })
    const translateX = YOLO.interpolate({
        inputRange: [0, .5, 1],
        outputRange: [0, -height, 0]
    })
    return <Animated.View
        style={{
            width: height,
            height: height,
            backgroundColor: '#fff',
            borderRadius: 86,
            position: 'absolute',
            transform: [{
                rotate
            },
            {
                translateX
            }
            ],
            top: -height * 0.65,
            left: -height * 0.3
        }}
    />
}
const Welcome = ({navigation}) => {
    const scrollX = React.useRef(new Animated.Value(0)).current
    return (
        // <View style={styles.container}>
        //     <Text style={styles.header}>Your home.<Text style={styles.textBlue}> Smarter.</Text></Text>
        //     <Image source={welcomeImg} style={{ width: 305, height: 300 }}/>


        //     <Text style={styles.mt50}>Hi guys! Welcome to our app!</Text>
        //     <Button color="red" style={styles.mt50}>Get started</Button>
        // </View>

        <View style={styles.container}>
            <StatusBar hidden />
            <Backdrop scrollX={scrollX} />
            <Square scrollX={scrollX} />
            <Animated.FlatList
                contentContainerStyle={{ paddingBottom: 100 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={DATA}
                scrollEventThrottle={32}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                keyExtractor={item => item.key}
                pagingEnabled
                renderItem={({ item }) => {
                    return (
                        <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{
                                flex: .7,
                                justifyContent: 'center'
                            }}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        width: width / 2,
                                        height: width / 2,
                                        resizeMode: 'contain'
                                    }} />
                            </View>
                            <View style={{ flex: .3 }}>
                                <Text style={{
                                    color: '#fff',
                                    fontWeight: '800',
                                    fontSize: 28,
                                    marginBottom: 10,
                                    color: 'white',
                                    paddingLeft: 10,
                                    paddingRight: 10
                                }}>
                                    {item.title}
                                </Text>
                                <Text style={{ fontWeight: '300', paddingLeft: 10, paddingRight: 10 }}>
                                    {item.description}
                                </Text>
                            </View>
                            <Button style={{backgroundColor:'rgba(255,255,255,.5)', bottom:50}} onPress={()=>navigation.navigate('Login')}>
                            <Text style={{color:'black', fontWeight:'bold'}}>Get started!</Text>
                            </Button>
                            <Indicator scrollX={scrollX} />
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Welcome