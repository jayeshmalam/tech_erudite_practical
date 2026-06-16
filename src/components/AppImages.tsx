// import React, {useState} from 'react';
// import {
//   Image,
//   ImageStyle,
//   StyleProp,
//   View,
// } from 'react-native';

// import Placeholder from '@assets/icons/image-placeholder.svg';

// import { getImageUrl } from '@hooks/getImage';

// type AppImageProps = {
//   imageName?: string | null;
//   size?: number;
//   style?: StyleProp<ImageStyle>;
// };

// const AppImage = ({
//   imageName,
//   size = 120,
//   style,
// }: AppImageProps) => {
//   const [hasError, setHasError] =
//     useState(false);

//   const imageUrl = getImageUrl(imageName);

//   const showPlaceholder =
//     !imageUrl || hasError;

//   return (
//     <View
//       style={{
//         width: size,
//         height: size,
//         borderRadius: size / 2,
//         overflow: 'hidden',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderWidth: 1,
//         borderColor: '#898787',
//       }}>
//       {showPlaceholder ? (
//         <Placeholder
//           width={"70%"}
//           height={"70%"}
//         />
//       ) : (
//         <Image
//           source={{uri: imageUrl}}
//           style={[
//             {
//               width: '70%',
//               height: '70%',
//             },
//             style,
//           ]}
//           onError={() => setHasError(true)}
//         />
//       )}
//     </View>
//   );
// };

// export default AppImage;

import { getImageUrl } from '@hooks/getImage';
import React, {useState} from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import Placeholder from '@assets/icons/image-placeholder.svg';

type Props = {
  imageName?: string | null;
  size?: number;
  style?: StyleProp<ImageStyle>;
  placeholder?: React.ReactNode;
};

const AppImage = ({
  imageName,
  size = 120,
  style,
  placeholder,
}: Props) => {
  const [hasError, setHasError] = useState(false);

  const imageUrl = getImageUrl(imageName);

  if (!imageUrl || hasError) {
    return (
      <View
        style={{
          width: size,
          height: size,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5F5F5',
        }}>
        {placeholder || (
          <Placeholder
            width={size * 0.5}
            height={size * 0.5}
          />
        )}
      </View>
    );
  }

  return (
    <Image
      source={{uri: imageUrl}}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
      resizeMode="cover"
      onError={() => setHasError(true)}
    />
  );
};
export default AppImage;