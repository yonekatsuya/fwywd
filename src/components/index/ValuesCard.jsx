import Image from 'next/image';

export default function ValuesCard(props) {
  if (props.border_flg == true) {
    let style = { borderRight: '1px solid #6bc2c3' };
  } else {
    let style = {};
  }

  return (
    <div className='w-1/3 h-full'>
      <div style={props.style}>
        <div className='inline-block'>
          <Image
            src={props.src}
            width={160}
            height={160}
            objectFit='contain'
            alt='価値観を表す画像'
          />
        </div>
        <div>
          <span className='inline-block mt-3 font-bold'>{props.title}</span>
        </div>
        <div className='inline-block mt-3 w-10/12 h-40 text-left break-words'>{props.content}</div>
      </div>
    </div>
  );
}
