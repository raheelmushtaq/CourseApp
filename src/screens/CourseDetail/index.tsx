import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import AppBackground from '../../../ui-kit/src/components/RootView/AppBackground';
import useContoller from './controller';
import {Button, dimensions, Separator} from '../../../ui-kit';
import ImageComponentLoader from '../../components/ImageComponentLoader';
import {styles} from './styles';
import {images} from '../../assets/images';

const CourseDetail: React.FC = () => {
  const {isLoading, course} = useContoller();

  return (
    <AppBackground
      title={'Course Detail'}
      showLoader={isLoading}
      showRightIcon={false}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Pressable>
          <ImageComponentLoader
            containerStyle={styles.itemImage}
            resizeMode={'cover'}
            source={{
              uri: course.image ? course.image : images.noimage,
            }}
          />
          <View style={styles.itemDetailContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.itemDetailTitle, {flex: 1}]}>
                {course.name}
              </Text>
              <Text style={styles.itemDetailDescription}>
                {course.rating}/5
              </Text>
            </View>
            <Separator showVertical showTransparent />
            <Text style={[styles.itemDetailDescription, {fontWeight: 'bold'}]}>
              Duration:
            </Text>

            <Text style={[styles.itemDetailDescription]}>
              {course.duration}
            </Text>
            <Separator showVertical showTransparent />

            <Text style={[styles.itemDetailDescription, {fontWeight: 'bold'}]}>
              Price:
            </Text>
            <Text style={styles.itemDetailDescription}>${course.price}</Text>
            <Separator showVertical showTransparent />
            <Text style={[styles.itemDetailDescription, {fontWeight: 'bold'}]}>
              Desciption
            </Text>
            <Text style={[styles.itemDetailDescription]}>
              {course.description}
            </Text>
          </View>
        </Pressable>
      </ScrollView>
      <Button
        containerStyle={{marginHorizontal: dimensions.margin.medium}}
        title="Register"
        type={'primary'}
        onPress={() => {}}
      />
    </AppBackground>
  );
};

export default CourseDetail;
