import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%", borderRadius: "20px" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, 
      backgroundColor: "rgba(255, 245, 245, 0.65)",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.938,
      shadowRadius: 30,
      shadowColor: '#080918',
      borderRadius: 20,
      borderWidth: 3,
      borderBottomWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.18)",
      overflow: "hidden",
      elevation: 5, // for Android only
    
    }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font, 
              backgroundColor: "rgba(78, 62, 114, 0.407)",
              shadowColor: '#080918',
              shadowOpacity: 0.29,
              shadowRadius: 1,
              borderRadius: 20,
              borderWidth: 3,
              borderBottomWidth: 1,
              borderColor: "rgba(0, 0, 250,0.0)",
              marginBottom: SIZES.extraLarge,
              marginTop: SIZES.extraLarge,
              // margin: SIZES.base,
              elevation: 10
            
            }}>
            
              <DetailsDesc data={data} />
            </View>
            <View style={{ padding: SIZES.font}}>
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontWeight: "bold",
                    color: COLORS.black,
                  }}
                >
                  Standing Bids
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
