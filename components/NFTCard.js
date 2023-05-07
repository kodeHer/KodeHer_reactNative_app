import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "rgba(255, 245, 245, 0.65)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.938,
        shadowRadius: 30,
        shadowColor: '#080918',
        borderRadius: 20,
        borderWidth: 3,
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.18)",
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        overflow: "hidden",
        elevation: 5, // for Android only
        
      }}
    >
      <View
        style={{
          width: "100%",
          height: 350,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
            borderBottomLeftRadius: SIZES.font,
            borderBottomRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
