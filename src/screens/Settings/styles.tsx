import {StyleSheet} from 'react-native';
import {colors, dimensions, typography} from '../../../ui-kit';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.padding.medium,
    flex: 1,
  },
  itemImage: {
    height: 200,
  },
  itemDetailContainer: {
    width: '100%',
    paddingHorizontal: dimensions.padding.medium,
    paddingVertical: dimensions.padding.small,
  },
  itemDetailTitle: {
    fontSize: typography.fontSizes.lg,
    fontWeight: 'bold',
    color: colors.black,
  },
  itemDetailDescription: {
    fontSize: typography.fontSizes.sm,
    color: colors.black,
  },
  itemOverlay: {
    backgroundColor: colors.blackOverlay4,
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: dimensions.border.medium,
  },
});
