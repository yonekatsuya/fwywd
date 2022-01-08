import { Link as Scroll } from 'react-scroll';

export default function MenuList(props) {
  return (
    <div className='relative w-28 h-full text-lg hover:opacity-75 hover:cursor-pointer'>
      <div className='absolute top-2/4 left-2/4 text-base-green -translate-x-1/2 -translate-y-1/2'>
        <Scroll to={props.id} smooth={true} duration={600}>
          {props.text}
        </Scroll>
      </div>
    </div>
  );
}
