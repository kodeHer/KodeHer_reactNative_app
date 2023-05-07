export const COLORS = {
    primary: "rgba(78, 62, 114, 1)",
    secondary: "#4D626C",
    
    glass: {
      backgroundColor: "rgba(78, 62, 114, 0.907)",
      boxShadow: "10px 10px 20px 10px rgba(8, 9, 24, 0.781)",
      backdropFilter: "blur(2px)",
      WebkitBackdropFilter: "blur(4px)",
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.18)",
    },
    white: "#FFF",
    gray: "#74858C",
    black: "radial-gradient(circle, rgba(8,10,13,1) 22%, rgba(81,61,89,1) 53%, rgba(18,21,25,1) 82%)"
  };
  
  export const SIZES = {
    base: 8,
    small: 12,
    font: 14,
    medium: 16,
    large: 18,
    extraLarge: 24,
  };
  
  export const FONTS = {
    bold: "InterBold",
    semiBold: "InterSemiBold",
    medium: "InterMedium",
    regular: "InterRegular",
    light: "InterLight",
  };
  
  export const SHADOWS = {
    light: {
      shadowColor: COLORS.gray,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
  
      elevation: 3,
    },
    medium: {
      shadowColor: COLORS.gray,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
  
      elevation: 7,
    },
    dark: {
      shadowColor: COLORS.black,
      shadowOffset: {
        width: 7,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
  
      elevation: 14,
    },
  };
  