import * as React from 'react';
import { Text, View, StyleSheet, Image, Platform, ScrollView } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



const Imagepicker=({response,setResponse}) =>{
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });


    const { open } = state;
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {response?.assets &&
            
                response?.assets.map(({ uri }) => (
                    <View key={uri} style={styles.image}>
                       
                        <Image
                            resizeMode="cover"
                            resizeMethod="scale"
                            style={{ width: 150, height: 100 , borderRadius:8}}
                            source={{ uri: uri }}
                        />
                    </View>
                ))}
             </ScrollView>
            <Provider>
                <Portal>
                    <FAB.Group
                        fabStyle={styles.fab}
                        open={open}
                        icon={open ? 'minus' : 'plus'}
                        actions={[
                            {
                                icon: 'camera', small: false, onPress: () => {
                                    launchCamera({
                                        saveToPhotos: true,
                                        mediaType: 'photo',
                                        includeBase64: false,
                                    }, setResponse)
                                }
                            },
                            {
                                icon: 'image-area',
                                small: false,
                                onPress: () => {
                                    launchImageLibrary({
                                        selectionLimit: 0,
                                        mediaType: 'photo',
                                        includeBase64: false,
                                    }, setResponse)
                                },
                            },
                        ]}
                        onStateChange={onStateChange}
                        onPress={() => {
                            if (open) {
                                // do something if the speed dial is open
                            }
                        }}
                    />
                </Portal>
            </Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#87ceeb',
    },
    image: {
        marginVertical: 24,
        alignItems: 'center',
        margin:5,
    }
})
export default Imagepicker;