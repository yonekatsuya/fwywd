export default function SkillsProgress(props) {
  return (
    <>
      <div className='text-text-green'>{props.skill}</div>
      <div className='flex relative pt-1'>
        <div className='inline-block w-full'>
          <div className='flex overflow-hidden mb-4 h-4 text-xs bg-thin-green rounded'>
            <div
              style={{ width: props.status }}
              className='flex flex-col justify-center text-center text-white whitespace-nowrap bg-dark-green shadow-none'
            ></div>
          </div>
        </div>
        <div className='flex justify-center items-center ml-4 h-4 text-lg text-text-green'>
          {props.status}
        </div>
      </div>
    </>
  );
}
