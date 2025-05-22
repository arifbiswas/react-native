import { Dimensions, Platform } from "react-native";
export const _HIGHT = Dimensions.get("screen").height;
export const _WIDTH = Dimensions.get("screen").width;
export const _IS_IOS = Platform.OS === "ios";
