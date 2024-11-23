import React from 'react';
import {Text, View} from 'react-native';
import ImageComponentLoader from '../ImageComponentLoader';
import {images} from '../../assets/images';
import {CourseType} from '../../types/CourseType';
import styles from './styles';
import TouchableComponent from '../../../ui-kit/src/components/Touchable';

type ItemCourseListProps = {
  item: CourseType;
  onItemPress: () => void;
  onFavouritePressed: () => void;
};
const ItemCourseList = ({
  item,
  onItemPress,
  onFavouritePressed,
}: ItemCourseListProps) => {
  return (
    <TouchableComponent
      onPress={onItemPress}
      containerStyle={styles.itemContainer}>
      <ImageComponentLoader
        containerStyle={styles.itemImage}
        source={{
          uri: item.image ? item.image : images.noimage,
        }}
      />
      <View style={styles.itemOverlay} />
      <View style={styles.itemDetailContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.itemDetailTitle, {flex: 1}]}>{item.name}</Text>
          <Text style={styles.itemDetailDescription}>{item.rating}/5</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.itemDetailDescription, {flex: 1}]}>
            Duration: {item.duration}
          </Text>
          <Text style={styles.itemDetailDescription}>Price: ${item.price}</Text>
        </View>
      </View>
    </TouchableComponent>
  );
};

export default React.memo(ItemCourseList);
