import React, {JSXElementConstructor, ReactElement} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import AppBackground from '../../../ui-kit/src/components/RootView/AppBackground';
import useContoller from './controller';
import SearchBar from '../../../ui-kit/src/components/SearchBarComponent';
import ItemCourseList from '../../components/ItemCourseList';
import NoDataComponent from '../../../ui-kit/src/components/NoDataComponent';
import {dimensions, Separator} from '../../../ui-kit';
import {CourseType} from '../../types/CourseType';

const HomeScreen: React.FC = () => {
  const {
    rightIconList,
    isLoading,
    searchPropertyText,
    onSearchChangeText,
    filterListOfProperties,
    onSearchClearText,
    navigateToCourseDetail,
  } = useContoller();
  function renderItem(
    info: ListRenderItemInfo<CourseType>,
  ): ReactElement<any, string | JSXElementConstructor<CourseType>> | null {
    const {item, index} = info;

    return (
      <ItemCourseList
        item={item}
        onFavouritePressed={() => {}}
        onItemPress={() => {
          navigateToCourseDetail(item);
        }}
      />
    );
  }

  const renderListEmptyComponent = () => {
    return <NoDataComponent />;
  };
  return (
    <AppBackground
      title={'Home'}
      showLoader={isLoading}
      showRightIcon={true}
      rightIconList={rightIconList}>
      <View style={{flex: 1, marginHorizontal: dimensions.margin.medium}}>
        <SearchBar
          containerStyle={{marginVertical: dimensions.margin.medium}}
          placeHolder="Search Teacher"
          showClearButton={!!searchPropertyText}
          onChangeText={onSearchChangeText}
          onClearText={onSearchClearText}
          value={searchPropertyText}
        />

        <FlatList
          style={{paddingHorizontal: dimensions.padding.smallest}}
          data={filterListOfProperties}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ItemSeparatorComponent={() => (
            <Separator showTransparent={true} showVertical={true} />
          )}
          keyExtractor={item => item.courseId}
          ListEmptyComponent={renderListEmptyComponent}
        />
      </View>
    </AppBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
