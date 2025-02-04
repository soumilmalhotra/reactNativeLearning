import { StyleSheet, Appearance , Platform , SafeAreaView ,ScrollView,FlatList,View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import {MENU_ITEMS } from '@/constants/MenuItems';
import MENU_IMAGES from '@/constants/MenuImages';
import { Image } from "react-native";

export default function MenuScreen(){

    const colorScheme = Appearance.getColorScheme()
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme,colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    const separatorComponent = <View style={styles.seperator} />
    const emptyListData = <Text>NOTHING IS PRESENT IN THE LIST</Text>
    

    return(
        <Container>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor = {(item) => item.id.toString()}
                showsVerticalScrollIndicator = {false}
                contentContainerStyle={styles.contentContainer}
                ListEmptyComponent={emptyListData}
                ItemSeparatorComponent={separatorComponent}
                renderItem = {({ item }) => (
                    <View style={styles.row}>
                            <View style = {styles.menuTextRow}>
                                <Text style={[styles.menuItemText , styles.menuItemTitle ]}>{item.title}</Text>
                                <Text style={styles.menuItemText}>{item.description}</Text>
                            </View>
                                <Image
                                source= {MENU_IMAGES[item.id - 1]}
                                style= {styles.menuImage}
                                />  
                    </View>
                    )}
                />
        </Container>
    )
}

function createStyles(theme, colorScheme){
    return StyleSheet.create({
        contentContainer: {
            paddingTop :10,
            PaddingBottom: 20,
            paddingHorizontal : 12,
            backgroundColor: theme.background,

        },
        seperator: {
            height : 1,
            backgroundColor : colorScheme === 'dark' ? 'papayawhip' : 'black',
            width: '50%',
            maxWidth : 300,
            marginHorizontal : 'auto',
            marginBottom:10,
            marginTop: 8,
        },
        row:{
           flexDirection :'row',
           width: '100%',
           maxWidth: 600,
           height : 100,
           marginBottom : 10,
           borderStyle : 'solid',
           borderColor: colorScheme === 'dark' ? 'papayawhip' : 'black',
           borderWidth:1,
           borderRadius:20,
           overflow:'hidden',
           marginHorizontal : 'auto ',
        },
        menuTextRow:{
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow:1,
            
        },
        menuItemTitle:{
            fontSize : 18,
            textDecorationLine: 'underline',
            color: colorScheme === 'dark' ? 'papayawhip' : 'black',
        },
        menuItemText:{
            fontSize : 12,
            color: colorScheme === 'dark' ? 'papayawhip' : 'black',
        },
        menuImage:{
          width:100,
          height: 100,  
        },
        

    })
}