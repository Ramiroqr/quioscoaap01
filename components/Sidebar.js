import Image from 'next/image';

const Sidebar = () => {
  return (
    <div>
        <Image 
            width={150}
            height={100}
            src="/assets/img/logo.svg"
            alt='imagen logo'
        />
    </div>
  )
  }

export default Sidebar;