import {useState} from 'react';
import {CourseType} from '../../types/CourseType';

const useContoller = () => {
  const [isLoading, setIsLoading] = useState(false);

  const course: CourseType = {
    name: 'Course 1',
    courseId: '1',
    userId: '1',
    image:
      'https://loremflickr.com/cache/resized/defaultImage.small_320_240_nofilter.jpg',
    duration: '15 hourse',
    price: '100',
    rating: '3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam urna risus, efficitur quis ante nec, commodo condimentum est. Phasellus dui libero, volutpat et enim ac, semper tristique velit. Mauris in justo rhoncus, malesuada sapien sed, aliquet mauris. Nunc lobortis pellentesque scelerisque. Donec fringilla dui ac ultricies faucibus. Donec tortor urna, efficitur quis nisi vitae, laoreet consectetur dui. Integer sit amet tincidunt massa, id finibus tortor.\nNulla eros magna, fringilla sit amet dui vulputate, rhoncus gravida turpis. Suspendisse mollis leo id faucibus posuere. Aliquam nec mauris felis. Donec mattis, turpis nec aliquet luctus, dolor augue pulvinar ligula, vitae luctus nisl turpis vitae diam. Sed vel tristique metus. Cras laoreet mi lacinia, sagittis nunc vitae, viverra augue. Quisque tortor sapien, cursus vel sodales a, porttitor eu mauris. Duis sed purus vitae tellus volutpat ullamcorper rhoncus non lacus. Sed eu vestibulum neque. Sed ultrices dolor id ante vestibulum, at scelerisque mi dapibus. Sed sagittis massa ut massa consequat dignissim. Sed vestibulum leo elit, at varius lacus posuere a. Vivamus congue egestas aliquam.\nDonec ultricies vitae risus vel maximus. Curabitur arcu tellus, molestie eu arcu a, hendrerit efficitur magna. Ut cursus, massa sed vestibulum venenatis, erat leo fermentum felis, quis pellentesque massa leo eu purus. Etiam bibendum fermentum mi, vitae viverra sem condimentum nec. Aliquam in purus nec est sagittis iaculis. Quisque tempor turpis sit amet turpis mattis fermentum. Pellentesque efficitur mattis augue vitae accumsan. Duis non fermentum ex.',
  };
  return {
    isLoading,
    course,
  };
};

export default useContoller;
