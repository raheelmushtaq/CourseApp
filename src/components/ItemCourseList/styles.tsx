import {StyleSheet} from 'react-native';
import {colors, dimensions, typography} from '../../../ui-kit';

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: 200,
    flexDirection: 'column',
    borderRadius: dimensions.border.medium,
  },
  itemCardContainer: {
    paddingHorizontal: 0,
    paddingTop: 0,
    borderRadius: dimensions.border.large,
  },
  itemCardChildrenContainer: {
    padding: 0,
    paddingTop: 0,
    borderRadius: dimensions.border.large,
  },
  itemImage: {
    borderRadius: dimensions.border.medium,
    flex: 1,
  },
  itemDetailContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingHorizontal: dimensions.padding.medium,
    paddingVertical: dimensions.padding.small,
  },
  itemDetailTitle: {
    fontSize: typography.fontSizes.lg,
    fontWeight: 'bold',
    color: colors.white,
  },
  itemDetailDescription: {
    fontSize: typography.fontSizes.md,
    color: colors.white,
  },
  itemOverlay: {
    backgroundColor: colors.blackOverlay4,
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: dimensions.border.medium,
  },
});

export default styles;
